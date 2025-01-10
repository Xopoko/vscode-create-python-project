import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    const createProjectCommand = vscode.commands.registerCommand('extension.createPythonProject', async () => {
        try {
            const projectName = await vscode.window.showInputBox({
                prompt: 'Enter a name for your Python project',
                placeHolder: 'my_python_project'
            });
            if (!projectName) {
                vscode.window.showErrorMessage('Project name is required.');
                return;
            }

            const folderUris = await vscode.window.showOpenDialog({
                canSelectFiles: false,
                canSelectFolders: true,
                canSelectMany: false,
                openLabel: 'Select folder for your project'
            });
            if (!folderUris || folderUris.length === 0) {
                vscode.window.showErrorMessage('No folder selected.');
                return;
            }

            const selectedFolderUri = folderUris[0];
            const projectFolderPath = selectedFolderUri.fsPath;
            const fullProjectPath = path.join(projectFolderPath, projectName);

            if (!fs.existsSync(fullProjectPath)) {
                fs.mkdirSync(fullProjectPath, { recursive: true });
            } else {
                vscode.window.showWarningMessage('Project folder already exists, using existing directory.');
            }

            vscode.window.showInformationMessage('Creating virtual environment (.venv)...');
            await createVirtualEnv(fullProjectPath);

            const requirementsPath = path.join(fullProjectPath, 'requirements.txt');
            fs.writeFileSync(requirementsPath, '# List your project dependencies here\n', { encoding: 'utf8' });

            const srcPath = path.join(fullProjectPath, 'src');
            if (!fs.existsSync(srcPath)) {
                fs.mkdirSync(srcPath, { recursive: true });
            }

            const mainPyPath = path.join(srcPath, 'main.py');
            fs.writeFileSync(
                mainPyPath,
                'print("Hello, World!")',
                { encoding: 'utf8' }
            );

            const readmePath = path.join(fullProjectPath, 'README.md');
            fs.writeFileSync(
                readmePath,
                `# ${projectName}\n\nProject with .venv, requirements.txt, and src/main.py.\n`,
                { encoding: 'utf8' }
            );

            await vscode.commands.executeCommand(
                'vscode.openFolder',
                vscode.Uri.file(fullProjectPath),
                false
            );

            vscode.window.showInformationMessage(`Python project "${projectName}" created at: ${fullProjectPath}`);
        } catch (error) {
            vscode.window.showErrorMessage(`Error creating Python project: ${error}`);
        }
    });

    context.subscriptions.push(createProjectCommand);
}

export function deactivate() {}

function createVirtualEnv(folderPath: string): Promise<void> {
    return runCommand(`${getPythonCommand()} -m venv .venv`, folderPath);
}

function runCommand(command: string, cwd: string): Promise<void> {
    return new Promise((resolve, reject) => {
        exec(command, { cwd }, (error, stdout, stderr) => {
            if (error) {
                reject(error.message);
                return;
            }
            resolve();
        });
    });
}

function getPythonCommand(): string {
    return process.platform === 'win32' ? 'python' : 'python3';
}

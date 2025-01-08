# Create Python Project

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/Horoko.create-python-project.svg?label=VS%20Marketplace&logo=visual-studio-code)]([https://marketplace.visualstudio.com/items?itemName=Horoko.create-python-project](https://marketplace.visualstudio.com/items?itemName=Horoko.create-python-project))
[![GitHub issues](https://img.shields.io/github/issues-raw/Xopoko/vscode-create-python-project.svg)](https://github.com/Xopoko/vscode-create-python-project/issues)
[![Sponsor](https://img.shields.io/badge/Support-Buy%20Me%20A%20Coffee-orange)](https://buymeacoffee.com/horoko)

Quickly create a new Python project (with a `.venv`, `requirements.txt`, `src/main.py`, and `README.md`) directly from an empty Explorer in VSCode. This extension helps you scaffold a basic Python project in seconds.

## Features

- **One-click project creation**: Click the “Create Python Project” button in the Explorer when no folder is open.
- **Guided setup**: Prompt for project name and folder location.
- **Virtual environment**: Automatically creates a `.venv` using `python -m venv`.
- **Initial files**: Generates `requirements.txt`, `README.md`, and a `src/main.py` as a starting point.
- **Seamless integration**: Automatically opens the new project folder in the current VSCode window.

## Installation

1. **Via Visual Studio Marketplace**  
   - Open Visual Studio Code
   - Go to the Extensions tab (Ctrl+Shift+X or Cmd+Shift+X on macOS)
   - Search for `Create Python Project` by **Horoko(Maksim Kudriavtsev)**
   - Click **Install**

2. **From `.vsix` file**  
   - Download the latest `.vsix` from [Releases](https://github.com/Xopoko/vscode-create-python-project/releases)
   - In VSCode, open the Extensions tab, click the three dots (`...`), then “Install from VSIX...”

## Usage

1. **Open a new instance of VSCode** with no folder open.  
2. **Look at the Explorer** (File Explorer side panel).  
3. You will see a text prompt:  
4. **Click on “Create Python Project”**.  
5. **Provide a project name** in the input box.  
6. **Select a directory** via the system dialog where you want the project to be created.  
7. **Wait for the process** to finish.  
8. Once done, the extension will open the newly created project folder in your current VSCode window.

You will now have a folder containing:
- `.venv` (virtual environment)
- `requirements.txt`
- `src/main.py`
- `README.md`

## Requirements

- **Python** must be installed and accessible via `python` in your system PATH.
- **VSCode** version `1.80.0` or higher (as specified in `engines.vscode`).

## Extension Settings

No specific settings are exposed. If desired, you may adjust the Python path or other details in your user/workspace settings.

## Known Issues

- Some systems may require `python3` or a custom Python path.  
- If `.venv` creation fails, verify that Python is correctly installed or try using a different terminal shell.

## Contributing

1. Fork this repository.  
2. Create a feature branch (`git checkout -b feature/new-feature`).  
3. Commit your changes (`git commit -m 'Add some feature'`).  
4. Push to the branch (`git push origin feature/new-feature`).  
5. Create a pull request.  

We welcome bug reports, feature requests, and pull requests!

## Sponsor

If you find this extension helpful, please consider supporting me:  
[Buy Me a Coffee](https://buymeacoffee.com/horoko)

## License

[MIT](LICENSE)

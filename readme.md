# ReactLearning GitHub Pages Setup

This guide explains how to set up GitHub Pages for the `ReactLearning` repository, specifically to serve content from the `birthday` folder (now renamed to `docs`).

## Steps to Set Up GitHub Pages with the `docs` Folder

### 1. Rename the `birthday` Folder to `docs` Locally

- Open your local clone of the repository on your computer.
- Rename the `birthday` folder to `docs`:
  - Using the command line:

    ```bash
    mv birthday docs
    ```

  - Or, if using a file explorer, manually rename the folder to `docs`.

### 2. Commit and Push the Changes

- Open your terminal, and make sure you’re in the repository directory.
- Run the following commands to commit and push the changes to GitHub:

  ```bash
  git add docs
  git rm -r birthday
  git commit -m "Rename birthday folder to docs for GitHub Pages"
  git push origin main

# Chai-Aur-React
# LearningReact
# LearningReact

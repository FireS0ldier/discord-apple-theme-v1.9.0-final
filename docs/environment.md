# Environment Variables & Secrets

For CI workflows, set the following secrets in your GitHub repository settings (Settings → Secrets):

- `GITHUB_TOKEN`: Automatically provided by GitHub for release creation and workflow authorization.
- `PERCY_TOKEN`: Required for the visual regression workflow using Percy.

# Node.js CI/CD with GitOps 
## Overview
This repo contains the source code for a Node.js application, including automated CI workflows.

CI Features

- Unit testing and code coverage.

- Build and push Docker images to Docker Hub.

- Automated updates to the Kubernetes manifest repo with new image tags.

## Architecture

![CICD diagram](https://github.com/user-attachments/assets/62dbf3e2-cfe6-45d2-b6ca-427da6dcdbb8)

Uses GitHub Actions for testing, building, and pushing images.

Updates the manifests repo to trigger deployments through Argo CD.

## Project Structure


```
.github/workflows/
  build-deploy.yml
app.js
Dockerfile
package.json

 ```
### How it works
Push to feature branch → triggers CI → builds image.

Merges to main → updates manifest repo → Argo CD syncs deployment.

### Links
https://github.com/tobi-willy/CICD-manifests

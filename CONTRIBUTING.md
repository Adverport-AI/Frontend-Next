# Contributing Workflow

This repository uses a GitHub-first deployment flow.

## Branching

1. Keep `main` as the stable production branch.
2. Create feature branches from `main`:
   - `feat/<short-name>`
   - `fix/<short-name>`
   - `chore/<short-name>`
3. Do not commit directly to `main` unless it is an emergency hotfix.

## Pull Requests

1. Push your branch to GitHub.
2. Open a PR into `main`.
3. Wait for Vercel Preview deployment and checks to pass.
4. Merge only after review and green preview.

## Deploy Policy

1. Production deploys should come from merges to `main`.
2. Avoid manual `vercel deploy` for normal work.
3. Manual deploy is allowed only for urgent hotfixes.
4. If a manual hotfix is deployed, backport it to GitHub immediately via PR.

## Quick Checklist

- [ ] Branch created from latest `main`
- [ ] Changes committed with clear message
- [ ] PR opened and preview verified
- [ ] Merged to `main`
- [ ] Production deployment confirmed

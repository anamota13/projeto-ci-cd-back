# Projeto CI/CD - Front-end (FATEC Franca)

## Objetivo
Demonstrar a Integração Contínua e Entrega Contínua (CI/CD) de um front-end estático (HTML/CSS/JS) consumindo uma API em Node.js. O deploy é automatizado pela Vercel, disparado via GitHub Actions e Tags Semânticas.

## Fluxo de Deploy
1.  **Desenvolvimento:** Commits em branches de feature.
2.  **Release:** Criação de uma nova tag SemVer (`git tag vX.Y.Z`) e `git push --tags`.
3.  **CI/CD:** GitHub Actions detecta a tag e utiliza as Vercel Secrets para disparar o deploy de Produção.
4.  **Entrega:** O Front-end é atualizado na Vercel e passa a consumir o Back-end mais recente (Render).

## URLs Essenciais
- Front-end (Vercel): `https://projeto-ci-cd-front-ten.vercel.app/`
- Back-end (Render API): `https://projeto-ci-cd-back-qd12.onrender.com` 

## Tecnologias
- Front-end: HTML, CSS, JavaScript Puro
- Deploy: Vercel
- CI/CD: GitHub Actions
- Versionamento: Semantic Versioning (SemVer)

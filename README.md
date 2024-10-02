<h1> 
	Front-end - Sistema de Gerenciamento Laboratorial
</h1>

![licensa](https://img.shields.io/badge/license-MIT-green)
![versão npm](https://img.shields.io/badge/npm-v10.2.4-blue)
![versão next](https://img.shields.io/badge/next-v14.2.7-blue)
![versão nextauth](https://img.shields.io/badge/nextauth-v5.0.0beta-blue)
![versão tailwind](https://img.shields.io/badge/tailwindcss-v^3.4.10-blue)
![versão eslint](https://img.shields.io/badge/eslints-v^8-blue)
![types](https://img.shields.io/badge/types-TypeScript-blue)



<h1> 
	Navegação
</h1>

<!--ts-->
   * [Instalação](#instalacao)
   * [Configuração do NextAuth](#nextauth)
<!--te-->

<h1 id='instalacao'>
    Instalação
</h1>

<p>
    Após a execução do git clone, você irá instalar as dependências do projeto, para isso basta aplicar o seguinte comando no terminal:
</p>

```bash
npm install
```

<p>
    Com as dependências instaladas e sua máquina já configurada com os requisitos mínimo de funcionamento do projeto, o próximo comando a ser executado será:
</p>

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

<h1 id='nextauth'>
    Configuração do NextAuth
</h1>
<p>
    A integração do NextAuth é essencial para este projeto, pois ele permite a implementação de ferramentas de login rápido oferecidas pelo Google e GitHub via API.
</p>
<p>
    Para iniciarmos, primeiramente criaremos um arquivo na raíz do projeto titulando de .env, nele vamos adicionar duas variáveis importante para o projeto, são elas NEXTAUTH_SECRET e NEXTAUTH_URL.
</p>
<p>
    O NEXTAUTH_SECRET é uma chave secreta usada para assinar e criptografar tokens e cookies gerados pelo NextAuth. Ela garante a integridade e segurança dos dados de autenticação. Quando definida em produção é fundamental utilizar essa variável para proteger a sessão do usuário.
</p>

```bash

NEXTAUTH_SECRET=[ADICIONE_A_CHEVE_SECRET_AQUI]

```

<p>
    O NEXTAUTH_URL especifica a URL base do seu site, que o NextAuth usa para redirecionamentos e callbacks de autenticação. Deve ser configurada para apontar para o domínio onde o site está rodando.
</p>

```bash

NEXTAUTH_URL=[URL_DO_SEU_SITE]

```
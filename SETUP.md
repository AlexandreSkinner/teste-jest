# 01 - Criar a pasta do Projeto.

  ~/projeto
  » mkdir licitacao

# 02 - Inicializar o Controle de Versão
  Inicializa o controle de versão na pasta do Projeto

  ~/projeto/licitacao
  » git init

# 03 - Inicializar o Projeto.
  Este comando cria um arquivo do projeto denominado package.json que
  controla as dependências das bibliotecas utilizadas no projeto

  ~/projeto/licitacao
  » npm init -y

# 04 - Criar arquivo .gitignore
  Objetivo é informar as pastas que não serão monitoradas pelo controle de versão
  » node_modulo
  » dist

# 05 - Instalar Conventional Commit
  Biblioteca para garante que os commits respeitarão a regra do Conventional Commit

  ~/projeto/licitacao
  » npm i -D git-commit-msg-linter

# 06 - Instalar o typescript
  Além de instalar o typescript instala as tipagens para o node, ajudando ao IntelliSense

  ~/projeto/licitacao
  » npm i -D typescript @types/node

  Caso queira atualizar o typescript para a ultima versão
  » npm update -D typescript@latest

# 07 - Inicializando projeto Typescript
  Cria arquivo de configuração do compilador typescript (tsconfig.json)

  ~/projeto/licitacao
  » npx tsc --init

# 98 - Instalando o Prisma
  Instala o ORM Prisma junto com a CLI

  ~/projeto/licitacao
  » npm install prisma @prisma/client --save-dev

# 99 - Inicializando o Prisma
  Cria uma pasta denominada Prisma e outra pasta .env

  ~/projeto/licitacao
  » npx prisma init

# 100 - Instalando o Jest
  Instala o Jest, a biblioteca de tipos para o typescript. Instala também
  o ts-jest porque o jest com typescript necessita trabalhar em conjunto com o ts-node

  ~/projeto/licitacao
  » npm i jest -D
  » npm i @types/jest -D
  » npm i ts-jest -D

  # Inicializando o jest
  A inicialização do Jest cria um arquivo de configuração

    ~/projeto/licitacao
    » npm jest --init

# ==> Arquivo de configuração (jest.config.js)
module.exports = {
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
};

-----------------------------------------------------------------------------
--- linter
-----------------------------------------------------------------------------
# 110 - Instalando o eslint
  ~/projeto/licitacao
  » npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-plugin-node

  # Inicializando o eslint
  ~/projeto/licitacao
  » npm init @eslint/config

  # Inicializando o Husky
    Permite utilizarmos os husk do git para garantir que não iremos commitar código fora das
    diretrizes parametrizadas do lint

    ~/projeto/licitacao
    » npm install husky -D
    » npm install -D lint-staged

    Cria arquivo de pre-commit com o comando que está entre aspas

    ~/projeto/licitacao
    » npx husky install
    » npx husky add .husky/pre-commit "npx lint-staged"

# ==> Arquivo de configuração (.eslintrc.json)
{
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"]
    },
    "rules": {
        "@typescript-eslint/semi": "off",
        "semi": [2, "always"],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/comma-spacing": "off",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/ban-types": "off",
        "prefer-const": "off",
        //"@typescript-eslint/prefer-as-const": "error",
        //"@typescript-eslint/prefer-as-const": "off",
        // "@typescript-eslint/prefer-as-const": "warn",
        "import/export": "off"
    }
}

-----------------------------------------------------------------------------
---  Arquivo de configuração do typescript - tsconfig.json
-----------------------------------------------------------------------------
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    "incremental": true,                      /* Enable incremental compilation */
    "target": "es2021",                       /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "allowJs": true,                          /* Allow javascript files to be compiled. */
    "sourceMap": true,                        /* Generates corresponding '.map' file. */
    "outDir": "./dist",                       /* Redirect output structure to the directory. */
    "rootDirs": ["src", "tests"],
    "baseUrl": "src",
    "removeComments": true,                   /* Do not emit comments to output. */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    "strictPropertyInitialization": false,    /* Enable strict checking of property initialization in classes. */

    /* Module Resolution Options */
    "moduleResolution": "node",               /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */

    /* Experimental Options */
    "experimentalDecorators": true,           /* Enables experimental support for ES7 decorators. */
    "emitDecoratorMetadata": true,            /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  },
  "include": [
    "src",
    "tests"
  ],                                          /* Informa ao compilador tsc para compilar todos os arquivos da pasta */
  "exclude": [
    "dist/**/*"
  ]
}


https://www.youtube.com/watch?v=RO3l_xy7GeM

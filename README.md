# example_ddd_ts
Projeto de exemplo de aplicação de DDD com TypeScript


### Instalações
npm i typescript --save-dev
npm i tslint --save-dev

### Criar o projeto
npx tsc --init
npx tslint --init

Ajustar no arquivo tsconfig.json as propriedades
    "incremental": true,                              
    "outDir": "./dist",
    "strictNullChecks": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    Adicionar o seguinte bloco no final da estrutura do compiler options
        "include": [
            "src/**/*.ts"
        ]

### Para compilar
npx tsc        

### Adicionando testes
npm i -D jest @types/jest ts-node --save-dev
npm i -D @swc/jest @swc/cli @swc/core

npx jest --init

Adicionar o seguinte bloco no arquivo jest.config.ts, logo abaixo a inicialização do objeto
transform: {
    "^.+\.(t|j)sx?$": ["@swc/jest"],
    
  },

Para rodar os testes
npm test  

### Instalação do UUID
npm i uuid @types/uuid

### instalação do sequelize e banco de dados
npm install sequelize reflect-metadata sequelize-typescript
npm install sqlite3

### Adicionar o arquivo
.swcrc

no projeto
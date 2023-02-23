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
    Adicionar o seguinte bloco no final da estrutura do compiler options
        "include": [
            "src/**/*.ts"
        ]

### Para compilar
npx tsc        
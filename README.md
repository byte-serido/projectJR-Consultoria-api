# Web Site da Project JR Consultoria 

Repositorio do projeto da Project Jr Consultoria, pra a ciração da api.

## Documento de Visão

[Link para o documento](https://docs.google.com/document/d/1HFmkjF7eXTCoi8Nf4JFBU03e0gwsGxIX/edit?usp=sharing&ouid=102170442802419683777&rtpof=true&sd=true)

## Executando o projeto

### Passo 1:
  > Ao clonar o projeto execute **npm i** no terminal para baixar as dependências.
  
### Passo 2:
  > Crie o arquivo **.env** na raiz do projeto para fazer a conexão com o banco de dados.
  
### Passo 3:
  > Para conectar com o banco de dados escreva isto no arquivo **.env**: *DATABASE_URL="postgresql://postgres:p4ssw0rd1234@localhost:5432/mydb?schema=public"*
  
### Passo 4:
  > Ative seu docker desktop na sua maquina e depois execute este comando no terminal: **npm run docker**. Isto fara o docker criar o banco de dados postgresql.
  
### Passo 5:
  > Deixe o terminal do docker rodando e crie um novo e ative o servidor node com: **npm run dev**. Isto fara sua aplicação ativar e começar a receber requisições.
  
### Passo 6:
  > Pode acontecer do Prisma da erro, para resolver é só executar no terminal o comando: **npx prisma migrate reset**. Isto resetara os dados no banco de dados para não ter inconsistencias.
  
### Passo 7: 
  > Depois execute o comando: **npm run migrate**. Criando assim uma nova migração ou só verificando se estar tudo certo.
 
### Passo 8:
  > Depois rode no terminal o comando:**npm run studio**. Isto mostrará seu banco de dados com um layout do prisma, se não aparecer erro, estar tudo funcionando.

## (Extra) Design das Telas:
  > [Link do Figma para o Sistym map](https://www.figma.com/file/Bbdp9RVm98Iw7n5I3C2BVR/Sitemap?node-id=1%3A72&t=2YFGz694oPTMDUxf-0)
  
  > [Link do Figma para o Design](https://www.figma.com/file/LHRxkPUfmwKktFqpvKDcsu/Design%2FWireframes?node-id=1%3A2&t=HyuPFTLGeLQCo3qd-0)

## Documentação

| Nome        | Link                                         |
|-------------|----------------------------------------------|
|Documentação | [Clique aqui ➡️](docs/docuementoDeVisao.md) |
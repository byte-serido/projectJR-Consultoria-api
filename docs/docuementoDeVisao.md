# Documento de Visão

### Equipe e definição de Papéis:

| Membro | Papel | Email |
|--------|-------|-------|  
| Project Jr | Cliente | |
|Vinicius Maia | Desenvolvedor Back-end |viniciusmaiamarinho1@gmail.co|
|Erick Bezerra |Desenvolvedor Front-end | erickbrtrindade@gmail.com |
|Gabriel Lima |Desenvolvedor Front-end | gabriel.lima2307@uol.com.br
|Flavio Roberto |Desenvolvedor Back-end | flavio@byteserido.com
|Gabriel Azevedo|Desenvolvedor Front-end |gabrielazevedo492@gmail.com
|Tallys Aureliano | Desenvolvedor Back-end | tallysdev@gmail.com

<br>

### Matriz de Competências
|Membro |Competências|
|-------|------------|
José Flávio| Analista, javascript, dart, python, flutter,vue, django |
|Flavio Roberto |Desenvolvedor, javascript, next|
|Gabriel Azevedo |Desenvolvedor, Javascript, React, Next, Vue
Tallys Aureliano | Desenvolvedor, Typescript, Node, Python, Flutter, Java, Php|  
|Vinicius | Desenvolvedor, Javascript, Node, React, Python, Kotlin|

<br>

### Perfis dos Usuáriosb

O sistema poderá ser utilizado por diversos usuários. Temos os seguintes perfis/atores:

|Perfil |Descrição
|-------|---------|
Administrador |Este usuário realiza os cadastros base e pode realizar qualquer função.|
| Usuário Cliente | Este usuário terá acesso a landing page da empresa e blog, para visualizar e entrar em contato, além de comentar nos posts.
|Usuário Membro | Este usuário terá acesso ao dashboard para adicionar post no blog.

<br>

### Lista de Requisitos Funcionais:

|Requisito | Descrição |Ator|
|----------|----------|-----|
RF001 - Manter um cadastro de Membros. | Um membro representa uma unidade na empresa. Um membro tem nome, cargo, data_init, data_up, descrição e imagem. | Administrador
|RF002 - Manter um cadastro de Post. |Um Post tem id, título, descrição, data_cadastro, data_up, imgUrl, autor, e comentarios[{}]. |Administrador/Membro
|RF003 - Manter o cadastro de Comentário. |Um comentário tem um autorNome, texto, id data_init, data_up. | Administrador/Usuário/Membro|
|RF004 - Manter cadastro de soluções. |Uma solução tem : nome ,descrição, imgUrl. | Administrador|
|RF005 - Manter cadastro de usuário. |Atributos: id, nome, matrícula, senha,email, numero, mod, data_init, data_up. |Administrador|
|RF005 - Manter cadastro de contato. |Atributos: email, nome, empresa, numero, data_init, data_up, proposta. |Usuário|

<br>

### Modelo Conceitual

![bd](https://user-images.githubusercontent.com/91434644/217126675-a7614c91-d6e7-4006-afb1-caa42d0aec3e.jpeg)

<br>

### Descrição das Entidades
#### Lista de Requisitos Não-Funcionais
|Requisito |Descrição |
|----------|-----------|
|RNF001 - Deve ser acessível via navegador.| Deve abrir perfeitamente no Firefox e no Chrome.
|RNF002 - Consultas deve ser eficiente. | O sistema deve executar as consultas em milissegundos
|RNF003 - Log e histórico de acesso e funções. |Deve manter um log de todos os acessos e das funções executadas pelo usuário

<br>

### Riscos
#### Tabela com o mapeamento dos riscos do projeto, as possíveis soluções e os responsáveis.
|Data |Risco |Prioridade | Responsável |Status | Providência/Solução|
|-----|------|-----------|-------------|-------|--------------------| 
30/12/2022 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo. |Alta |Todos |Vigente | Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta.|
|30/12/2022| Ausência por qualquer motivo do cliente |Média |Gerente |Vigente |Planejar o cronograma tendo em base a agenda do cliente|
|30/12/2022 |Divisão de tarefas mal sucedida | Baixa |Gerente | Vigente |Acompanhar de perto o desenvolvimento de cada membro da equipe|
|30/12/2022 |Ausência por qualquer motivo do desenvolvedores |Alto |Todos |Resolvido |Encontrar tutorial com a maioria da tecnologia e implementar um caso base do sistema









MANIPULANDO ARQUIVOS NO nodeJS


Cria, sobrescreve um arquivo.

const fs = require('fs');

fs.writeFile('teste.txt', 'Olá NodeJs', err => {
    console.log(err)
});



Adiciona conteúdo a um arquivo.

const fs = require('fs');

fs.appendFile('teste.txt', 'Olá NodeJs', err => {
    console.log(err)
});



Renomeia um arquivo.

const fs = require('fs');

fs.rename('teste.txt', 'teste2.txt', err => console.log(err));



Remove um arquivo.

const fs = require('fs');

fs.unlink('teste2.txt', err => console.log(err));



Caminho p/ diretório atual.

const fs = require('fs');

console.log(__dirname);


Documentação:

- https://nodejs.org/api/fs.html?_gl=1*ehi7or*_ga*MTkzOTUyNDU4MS4xNjkzODU3MTA2*_ga_37GXT4VGQK*MTY5Mzg1OTYwNy4yLjEuMTY5Mzg2Mjk2OS4wLjAuMA..



Arquitetura MVC (Model-View-Controller)

- padrão de arquitetura;
- organizar o código, separar resposabilidades;
- Model: camada de manipulação dos dados;
- View: camada de interação do usuário;
- Controller: camada de controle;


Leitura:

- https://tableless.com.br/mvc-afinal-e-o-que/?_gl=1*1mdfhmx*_ga*MTkzOTUyNDU4MS4xNjkzODU3MTA2*_ga_37GXT4VGQK*MTY5NDQ2Mzg3Mi4zLjEuMTY5NDQ2NTM1NC4wLjAuMA..


Express

- Framework minimalista;
- Não se preocupa em definir padrões de desenvolvimento;
- Opera através de middlewares;
- Segue o padrão Chain of Responsibility;
- Entrega apenas a requisição e a resposta, deixando o fluxo de dados a escolha do dev;


Leitura:

- https://expressjs.com/en/starter/hello-world.html?_gl=1*gbamyw*_ga*MTkzOTUyNDU4MS4xNjkzODU3MTA2*_ga_37GXT4VGQK*MTY5NDQ2Mzg3Mi4zLjEuMTY5NDQ2NjE5NS4wLjAuMA..

- https://github.com/escola-de-javascript/to-do-list-express?_gl=1*1g01hz8*_ga*MTkzOTUyNDU4MS4xNjkzODU3MTA2*_ga_37GXT4VGQK*MTY5NDQ2ODY2NC40LjEuMTY5NDQ2ODY2NC4wLjAuMA..


Chain of Responsibility

- Cadeia de Responsabilidade
- Padrão que o Express se baseou
- Permite a busca por uma resposta para uma determinada requisição
- Permite que os objetos sejam encadeados, assim, cada objeto verifica se pode enviar uma resposta, caso não possa, passa para o próximo da cadeia

Concentrando rotas...

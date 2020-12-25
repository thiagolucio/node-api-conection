# Rest API Usando NodeJS, express, MYSQL etc. 

## NodeJS EC2 - API:

- [URL Servidor EC2](http://18.230.192.96:3333/)
- IP Servidor EC2:  http://18.230.192.96
- Porta Externa: 3333

## Banco de dados MySQL:
- Hospedado no Site da Charcode com MySQL
- Server Host: charcode.com.br
- Porta: 3306
- Nome do Banco: charco43_amgpt
- Usuário do Banco: charco43_user
- Senha do Banco: tchan@21

## Estrutura JSON de conexão:
` {
  "mysqlOptions": {
    "authProtocol": "default"
  },
  "previewLimit": 50,
  "server": "charcode.com.br",
  "port": 3306,
  "driver": "MySQL",
  "name": "Charcode BD Testes",
  "group": "Charcode BDS",
  "database": "charco43_amgpt",
  "username": "charco43_user",
  "password": "tchan@21"
} `




Modelo de Dados:
1) Users: (id_user, username, email, password, id_type(FK))
2) Type: (id_type, type(client, provider, professional))
3) client: (id_type, id_user, cep, photos(?), phone)
4) provider: (id_type, id_provider, providername, address, description, phone, photos(?))
5) professional: (id_type, id_professional, professionalname, cep, description, phone, photos(?))


### Informações de execucao EC2:
- O projeto está na pasta "node-api-conection"
- Fazer git pull no repositório do projeto.
- Executar o PM2 para rodar os projetos.

##### Comandos PM2:
- pm2 -v : para verificar versão do pm2
- pm2 list: para listar todos os aplicativos que estão rodando
- killall node: Para matar os processos node que estiverem rodando:

###### Para rodar o projeto:
- pm2 start server.js --name=amigopet : Para rodar o aplicativo NodeJS

###### Para reiniciar o projeto:
- pm2 restart amigopet





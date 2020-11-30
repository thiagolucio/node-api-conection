# Rest API Usando NodeJS, express, MYSQL etc. 

## NodeJS EC2 - API:

- [URL Servidor EC2](http://18.230.192.96:3333/)
- IP Servidor EC2:  http://18.230.192.96
- Porta Externa: 3333

## Banco de dados MySQL:
- Hospedado no Site da Charcode com MySQL
- Server Host: charcode.com.br
- Porta: 3306
- Database: charco43_amgpt
- Usuário do Banco: charco43_user
- Senha do Banco: tchan@21


Modelo de Dados:
1) Users: (id_user, username, email, password, id_type(FK))
2) Type: (id_type, type(client, provider, professional))
3) client: (id_type, id_user, cep, photos(?), phone)
4) provider: (id_type, id_provider, providername, address, description, phone, photos(?))
5) professional: (id_type, id_professional, professionalname, cep, description, phone, photos(?))
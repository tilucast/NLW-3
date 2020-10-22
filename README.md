<img src="images/web7.png" align="center"></img>

<h1 align="center">Next Level Week #3</h1>
<p align="center">Projeto <strong>Happy</strong> da <strong>Rocketseat</strong></p>


# Sobre o projeto

Projeto desenvolvido tendo em mente o dia das crianças, visando facilitar o acesso de pessoas à orfanatos.

O instrutor do projeto, como sempre, é o <a href="https://github.com/diego3g">Diego</a>.

Nesse projeto usamos o ORM <a href="https://typeorm.io/#/">TypeORM</a> , e o <a href="https://www.npmjs.com/package/sqlite3">SQLite3</a> como banco de dados.

<a href="https://insomnia.rest/">Insomnia</a> foi usado para testar as rotas do backend.
Exportei as configurações usadas no projeto. Sinta-se livre para testa-las.

React e React Native são os frameworks do front-end. Typescript está sendo usado juntamente para garantir um código mais legível e escalável.

<a href="https://expo.io/">Expo</a> foi usado para a criação da parte mobile, por motivos práticos.


# Instalação

Baixe os arquivos do projeto, e dentro de cada pasta principal (**backend, web, mobile**), digite :

```
npm install / yarn install
```

Esse comando irá instalar as dependências de cada projeto.


# API Rest

```` npm run dev / yarn dev ```` para iniciar o servidor. Servidor rodando na porta **3333**

Como não estou enviando o arquivo do banco de dados, você terá que gerá-lo em sua própria máquina:

Digite em sua cmd ```` npm run typeorm migration:run ```` para gerar o arquivo do banco de dados.

-----------------


# Mobile

Na pasta mobile, em **src/services/api.ts** existe essa configuração: 

```` 
const api = axios.create({
    baseURL: 'http://192.168.2.15:3333'
})

````
Após rodar o comando para iniciar o expo ```` npm run start / yarn start ```` , a interface irá abrir, 
e lá vocẽ terá acesso à porta do seu dispositivo móvel. Troque **192.168.2.15** por seu próprio endereço.


# Web

Para rodar o React : ```` npm run start / yarn start ````.

--------------------------------------------------------------


# Design do projeto

**Web**

<img src="images/web1.jpg"></img>
<img src="images/web2.jpg" ></img>
<img src="images/web3.jpg"></img>
<img src="images/web4.jpg" ></img>
<img src="images/web5.jpg"></img>
<img src="images/web6.jpg" ></img>


**Mobile**

<img src="images/mobile1.png"></img>
<img src="images/mobile2.png" ></img>
<img src="images/mobile3.png"></img>
<img src="images/mobile4.png" ></img>
<img src="images/mobile5.png"></img>
<img src="images/mobile6.png" ></img>
<img src="images/mobile7.png"></img>
<img src="images/mobile8.png" ></img>


# Desafios

Nenhum feito ainda.
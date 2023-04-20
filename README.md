# :house:ImoFind
## :man_office_worker: Descrição do Projeto

O **ImoFind** foi desenvolvido com o intuito de facilitar a busca por um imóvel para locação. O usuário pode buscar por hotel, casa, apartamento, flats ou até hostels.

O usuário poderá indicar a localidade em que deseja realizar a busca, ou visualizar as opções próximas.

Este projeto foi desenvolvido como pré-requisito para obtenção de nota de prova para a disciplina de Programação Mobile Code, do curso de Ciência da Computação, sob a tutoria do prof.  Augusto Cesar F. de M. Oliveira, da Universidade Maurício de Nassau.

O designer foi projetado pelo design [Rendy Vickriansyah](https://www.instagram.com/designbyrendy/) e pode ser encontrado no [Figma](https://www.figma.com/file/dGGJmHRDCrsyIuFRQQKaEJ/%5BFreebie%5D-Home-Rent-App-UI-Design-(Community)?node-id=63-124&t=IMu4SIdgJjsdPqXO-0)

![image](https://user-images.githubusercontent.com/122948103/230751639-326403e4-0015-4682-a07d-7c3bee7fa6c9.png)



## Estrutura do sistema

```
📦ImoFind
 ┣ 📂assets                                            # Assets
 ┃ ┣ 📂icons
 ┃ ┃ ┣ 📜IC_Back.png
 ┃ ┃ ┣ 📜IC_Bathtub.png
 ┃ ┃ ┣ 📜IC_Bedroom.png
 ┃ ┃ ┣ 📜IC_Bookmark.png
 ┃ ┃ ┣ 📜IC_Bookmark.svg
 ┃ ┃ ┣ 📜IC_Message.png
 ┃ ┃ ┣ 📜IC_Phone.png
 ┃ ┃ ┗ 📜Image.png
 ┃ ┣ 📂img
 ┃ ┃ ┣ 📂DreamsVilleHouse
 ┃ ┃ ┃ ┣ 📜Dreamsville1.png
 ┃ ┃ ┃ ┣ 📜Dreamsville2.png
 ┃ ┃ ┃ ┣ 📜Dreamsville3.png
 ┃ ┃ ┃ ┗ 📜Dreamsville4.png
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┣ 📜House.png
 ┃ ┃ ┃ ┣ 📜Mansao.jpg
 ┃ ┃ ┃ ┣ 📜OrchardHouse.png
 ┃ ┃ ┃ ┗ 📜TheHollies.png
 ┃ ┃ ┗ 📜perfil.png
 ┃ ┣ 📂readme
 ┃ ┃ ┣ 📜appExemple.png
 ┃ ┃ ┗ 📜qrcodeExemple.png
 ┃ ┣ 📜adaptive-icon.png
 ┃ ┣ 📜favicon.png
 ┃ ┣ 📜icon.png
 ┃ ┗ 📜splash.png
 ┣ 📂src                                           # Diretório com as views
 ┃ ┗ 📂screens
 ┃ ┃ ┣ 📂DreamsVilleHouse
 ┃ ┃ ┃ ┣ 📜dreamsVilleHouse.js
 ┃ ┃ ┃ ┗ 📜dreamsVilleHouseSTYLE.js
 ┃ ┃ ┗ 📂Home
 ┃ ┃ ┃ ┣ 📜Home.js
 ┃ ┃ ┃ ┗ 📜homeSTYLE.js
 ┣ 📜.gitignore
 ┣ 📜.yarnrc.yml
 ┣ 📜App.js
 ┣ 📜app.json
 ┣ 📜babel.config.js
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜yarn.lock
```



## :woman_office_worker: Config e comandos

​	Para rodar o projeto você precisará baixar o aplicativo mobile da Expo, que pode ser encontrado na  [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).

* Clone o repositório do GitHub

  ```bash
  git clone https://github.com/eupedrorodrigues/ImoFind.git
  cd imoFind
  ```

* Instale as dependência do projeto

  ```bash
  yarn install
  ```

* Para rodar o projeto, digite no termina

  ```bash
  yarn start
  ```

* Em seu dispositivo móvel, execute o Expo e escanei o código de barras que surgiu em seu terminal.

![QRCode exemple](C:\Users\forgi\progr\Mobile_coding\1GQ\ImoFind\assets\readme\qrcodeExemple.png)

* Na raiz do projeto, abra o arquivo App.js e alterne entre as duas páginas disponíveis. Tome cuidado para sempre deixar uma das páginas marcada como comentário. 

![appExemple](C:\Users\forgi\progr\Mobile_coding\1GQ\ImoFind\assets\readme\appExemple.png)

## Tecnologias 

Para o desenvolvimento do projeto foram usadas as ferramentas abaixo:

* [React Native](https://reactnative.dev)
* [Expo framework](https://docs.expo.dev)

## Contribuidores

* Pedro Rodrigues - [Linkedin](https://www.linkedin.com/in/pedro-rodrigues-50986a262/) | [GitHub](https://github.com/eupedrorodrigues)

* Júlio César Amorim - [Linkedin](https://www.linkedin.com/in/juliocoi/) | [Github](https://github.com/Juliocoi)

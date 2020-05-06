<h1 aling="center" >
  <img src="https://miro.medium.com/max/2052/1*QT7NIsR-X8_SKdtI7BTghw.png"/>
</h1>

### 🎞Demo

![desafio mobile](https://user-images.githubusercontent.com/52186505/81199000-81944400-8f98-11ea-998f-608c010adf4c.gif)


### Indice
  - [Sobre](#-Desafio-conceito-React-Native)
  - [Como baixar](#-Como-baixar-o-projeto)
  - [Tecnologias](#-Tecnologias-utilizadas)
  - [Contato](#-Contato)

<h1 aling="center"> Desafio conceito React Native </h1>

Neste desafio foi proposto colocar todo seu conhecimento adquirido no módulo de ***Mobile com React Native***, colocando em pratica:
- [x] Criação do projeto em react native
- [x] Diferença de sintaxe entre ReactJs e RN
- [x] Conexão com API utilizando **[axios](https://github.com/axios/axios)**

Foi possível também testa o código, para ver se estava no padrão da rocketSeat para validação do desafio utilizando o (***Jest***).

## 📥 Como baixar o projeto

1º - Para executar o programa clone na sua máquina 
```bash
  #clone repositório
  $ git clone https://github.com/italoSouzaTI/Desafio-mobile.git
  #Entrando no diretório
  $ cd Desafio-mobile
```

2º - Depois, abra ele em seu editor, é no terminal do seu editor ou no cmd dentro da pasta do arquivo, digite:
```bash
  #yarn irá instalar todas as dependências necessarias para execução do projeto.
  $ yarn
  # ** OBS: antes de execultar o arquivo no emulador, de uma olhada nas especificações de conexão:
    # IOS com Emulador: localhost
    # IOS como físico: IP da máquina
    # Android com Emulador: localhost
    # No terminal coloque -> adb reverse tcp:port do server tcp:port server
    # Android com Emulador: 10.0.2.2 (Andorid Studio)
    # Android com Emulador: 10.0.3.2 (Genymotion)
    # Android como físico: IP máquina

    #Para que a conexão seja, bem-sucedida a visualizão do likes no #dispostivo e preciso que o back-end esteja ligado e com dados setado #nele.

  #Executara o projeto no dispositivo mobile ou emulador.
  $ npx react-native run-android
```
Utilizamos o Insomnia para testar as rotas do projeto.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Conceitos%20de%20nodeJs&uri=https%3A%2F%2Fraw.githubusercontent.com%2FitaloSouzaTI%2FConceito-de-nodeJs%2Fmaster%2FDesafio_conceito_NodeJs_2020-05-06.json)

Execultando teste do código:
```bash
  # utilizando o Jest
  $ yarn test
```

## 💻 Tecnologias utilizadas 

|Tecnologias | Versão |
|------------|--------|
|axios        |**^0.19.2** |
|react     |**16.11.0** |
|react-native |**0.62.1** |

**Desenvolvido [RocketSeat](https://github.com/Rocketseat/bootcamp-gostack-desafios)**

#### Contato

📫 **italoasouzat.i@gmail.com**

By 📱💻❤ **Ítalo Araújo Souza**
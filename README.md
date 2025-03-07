# 🖥️ Projeto React - Formulário com Validação  

Este projeto foi desenvolvido utilizando **React** e tem como objetivo criar um formulário com validação de entrada de dados.  

## 📌 Funcionalidades  
✔️ Validação de campos obrigatórios  
✔️ Estilização com CSS  
✔️ Componentização de elementos  
✔️ Uso do ESLint para padronização do código  
✔️ Componente para transformar texto em maiúsculo e colorido  
✔️ Botão que exibe um alerta com a label ao ser clicado  

## 🚀 Tecnologias utilizadas  
- React.js  
- JavaScript (ES6+)  
- CSS3  
- ESLint  

## 🐂 Estrutura do projeto  
```
📝 quest-react-base  
 ├ 📂 src  
 ┃ ├ 📂 components  
 ┃ ┃ ├ 📂 TextTransformer  
 ┃ ┃ ┃ └ 📄 TextTransformer.jsx  
 ┃ ┃ ├ 📂 CustomButton  
 ┃ ┃ ┃ └ 📄 CustomButton.jsx  
 ┃ ┃ └ 📄 App.jsx  
 ┃ ├ 📄 index.js  
 ┃ └ 📄 styles.css  
 ├ 📄 package.json  
 ├ 📄 .eslintrc.json  
 ├ 📄 .gitignore  
 ├ 📄 README.md  
 └ 📄 public/index.html  
```

## ▶️ Como rodar o projeto  

1. **Clone o repositório:**  
   ```bash
   git clone https://github.com/alanborgesdev/quest-react-base
   ```
2. **Acesse a pasta do projeto:**  
   ```bash
   cd quest-react-base
   ```
3. **Instale as dependências:**  
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**  
   ```bash
   npm dev run
   ```
5. **Abra no navegador:**  
   O projeto estará rodando em: `http://localhost:3000`

## ⚡ Como usar o ESLint  
Para verificar o código com o ESLint, execute:  
```bash
npx eslint src/
```

## 📌 Componentes criados  
### 🔧 TextTransformer 
- Nome do componente: `TextTransformer`
- Props:
  - `text`: Texto a ser transformado para maiúsculo.
  - `color`: Cor do texto (pode ser nome de cor ou hexadecimal).
- Funcionalidade:
  - Transforma o texto recebido via `props` em maiúsculo e aplica a cor desejada.
  - Utiliza `style` inline para a estilização.

### 🔧 CustomButton 
- Nome do componente: `CustomButton`
- Props:
  - `label`: Texto exibido no botão.
- Funcionalidade:
  - Renderiza um botão com a label recebida via `props`.
  - Ao ser clicado, exibe um `alert` com a mensagem: `"A label desse botão é <label>"`.

## 📌 Autor  
Projeto desenvolvido por **Alan Borges** no curso **DevQuest**.  


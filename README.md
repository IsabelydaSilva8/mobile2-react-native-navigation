# React Native - Tipos de Navegação

Aplicativo desenvolvido em **React Native** com **TypeScript** para demonstrar na prática a implementação, integração e alternância entre os três principais padrões de rotas do **React Navigation**: **Stack**, **Drawer** e **Bottom Tab**.

---

## Funcionalidades

- **Tela Principal (Hub):** Ponto de entrada que permite alternar dinamicamente entre os diferentes tipos de menus sem empilhamento de telas na memória.
- **Stack Navigation:** Navegação em pilha entre telas (`Slide01`, `Slide02`, `Slide03`) e acesso cruzado para outros navegadores.
- **Drawer Navigation:** Menu lateral deslizante.
- **Bottom Tab Navigation:** Barra de navegação inferior.
- **Retorno Limpo:** Uso de eventos globais (`DeviceEventEmitter`) para encerrar o navegador ativo e retornar à tela principal sem duplicar componentes.

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev)
- [TypeScript](https://typescriptlang.org)
- [React Navigation](https://reactnavigation.org) (`@react-navigation/stack`, `@react-navigation/drawer`, `@react-navigation/bottom-tabs`)

---


## 🚀 Como executar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd exemplo
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npx expo start
   ```
   *(Ou `npx react-native run-android` / `npx react-native run-ios`, caso não esteja usando Expo).*

---

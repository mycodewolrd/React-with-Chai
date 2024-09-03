# React + Vite

# index.html
The main page is index.html page..... only this page is loaded in server.
that's why it's called Single page application.

In html there is....
      A div created called ===> root  and
      Add script tag to connect main js file 


# main.jsx 
The main entry point of React.

1) Import React and ReactDOM...this two libraries are used to manipulate Web DOM

2) Import functions from React components

3) React impliment it's own DOM to manipulate that div called root, add a mathod createroot and render react components
**createRoot===> lets you create a root to display React components inside a browser DOM node.

# App.jsx
Componets file use to design UI

1) Create a function and return 
2) Export the function [import the file with main react page(main.jsx)]


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from 'react-i18next'; // Importa el proveedor de i18next
import i18next from "i18next";
import globalEs from './public/i18n/es/app.json'


const root = ReactDOM.createRoot(document.getElementById("root"));

i18next.init({
  intepolation:{escapeValue:false},
  lng:"es",
  resources:{
    es:{
      app:globalEs
    }
  }
})

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);


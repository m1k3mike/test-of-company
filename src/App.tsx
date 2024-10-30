import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import CompanyTable from "./components/CompanyTable";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Список компаний</h1>
        <h2 style={{ color: "lightgray", marginBottom: "2rem" }}>
          Тестовое задание
        </h2>
        <CompanyTable />
      </div>
    </Provider>
  );
};

export default App;

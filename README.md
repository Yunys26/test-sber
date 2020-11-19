# __Test-sber__

## *Stack:*

    Front-end:
    * ReactJS
    * Redux / Redux-React / Redux Toolkit
    * Axios
    * Material-Ui

    Back-end:
    * NodeJs
    * Express
    * Cors
___
### *Structure*

```
├── public/                         // Cодержит базовые файлы HTML, JSON. Это корневые ресурсы используемого проекта
├── src/                            // Основная директория проекта
│   ├── store/                          // Директория хранилища 
│   │   ├── sliceStore/                 // Директория предназначенная для слоев хранилища
|   |   |   └── mainSlice.js                // Слой хранилища компонента Main.jsx
|   |   └── store.js                    // Релизация хранилища
│   ├── Main.jsx                        // Основной компонент проекта
|   ├── index.js                        // Главный испольняемый файл
|   └── server.js
├── package-lock.json               // Описывает дерево, обновлений и подгруженных пакетов
├── package.json                    // Хранит список загруженных пакетов с необходимыми версиями (npm)
└── yarn.lock                       // Хранит список загруженных пакетов с необходимыми версиями (yarn)
```

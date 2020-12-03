import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// to avoid  error : regeneratorRuntime from "regenerator-runtime"
// when using async, await 
// import regeneratorRuntime from "regenerator-runtime";

ReactDOM.render(<App />,
    document.getElementById('app')
);

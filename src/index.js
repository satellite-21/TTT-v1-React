//this file will link the HTML file and the react code 
import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'


//this is the initialization process
ReactDOM.render(

    //this takes two parameters , a component to render
    //and the target DOM element

    //the <React.StrictMode> component performs 
    //additional runtime checks and warnings 
    //used as a wrapper around the <App/> component
    <React.StrictMode> 
        <App />
    </React.StrictMode>,

    //the <App/> component refers to custom
    //react component is the root of the applicationn
    //and handles the components and logics 

    document.getElementById('root') 
    //this is the targetDOM element
    //this retrieves the DOM element with 
    //the ID root where the react component
    //will be rendered 
);
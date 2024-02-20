const mongoose = require('mongoose');
const express = require('express');
require("dotenv").config();
const paisRoutes = require('./router/pais');
const { default: App } = require('../router/App');


App.pais("/pais", paisRoutes);
App.pais(express.json());

//conecion con mongo db 
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Conectado a la base de datos');
}).catch((error) => {
    console.log(error);
})

    

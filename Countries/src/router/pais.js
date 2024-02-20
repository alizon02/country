const express = require('express');
const paisSchema = require('../models/pais');

const router = express.Router();

//crear pais
router.post("/paises", (req, res) => {
    const pais = paisSchema(req.body);
    pais
    .save()
    .then(data) = res.jason(data)
    .catch((error) => res.json({message: error}));
        
    
});


module.exports = router;
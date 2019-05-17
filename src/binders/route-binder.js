const express = require('express')
function routeBinder(app){
    app.use('/toggles', require('../routes/toggles'))
    app.use(express.static('public'))
}

module.exports = routeBinder

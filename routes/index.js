const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {

    res.send(req.query);


});

router.post('/login', (req, res) => {

  
    res.json(req.body)

})


router.delete('/login', (req, res) => {

    res.send(req.query);


});

router.put('/login', (req, res) => {

    res.json(req.body)


});

module.exports = router;
const express = require('express')
const router = express.Router();
const auth = require('../middlewares/auth')

router.get('/', auth, (req, res) => {
    console.log(res.locals.auth_data);
    return res.send({message: 'Esta informação é muito importante!'})
});


router.post('/', (req, res) => {
    return res.send({message: 'Tudo certo com o método POST da raiz'})
});

module.exports = router;
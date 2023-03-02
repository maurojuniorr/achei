const  express = require('express');
const authMiddleaware = require('../middleawares/auth');


const router = express.Router();

router.use(authMiddleaware);

router.get('/', (req, res) => {
    res.send({ok:true});
});

module.exports = app => app.use('/projects',router);

const express = require('express')
const router = express.Router()

router.get('/',  ( req, res, next ) => res.sendfile('index.html', { root: './public' }) )

module.exports = router

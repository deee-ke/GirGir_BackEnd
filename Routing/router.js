// router.js
const express = require('express')

const dataController = require('../Controllers/dataController')

const router = new express.Router()

//
router.post('/user/datas',dataController.addData)

router.get('/user/getdata',dataController.getData)

module.exports = router
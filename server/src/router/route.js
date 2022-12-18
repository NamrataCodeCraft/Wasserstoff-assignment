const express = require('express')
const router = express.Router()

const studentController = require('../controllers/studentController')

router.post('/createStudent' ,studentController.createStudent)
router.put('/addTopic/:Id', studentController.addTopic)
router.get('/getStudent/:student', studentController.getStudent)

module.exports = router
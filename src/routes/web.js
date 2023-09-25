const express = require('express')
const multer = require('multer');
const router = express.Router()
const upload = multer();
const {testHomeController,abcRoute,insertUser,listAllUser} = require("../controllers/homeController")

    router.get('/', testHomeController)
  
    router.get('/abc', abcRoute)

    router.post('/insert_user',upload.none(),insertUser)

    router.get('/list_All_User',listAllUser)
  
module.exports = router;
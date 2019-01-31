const express = require('express')
const personController = require('../controllers/personController')
const auth = require('../controllers/auth')

router = express.Router();


router.get('/person', auth, personController.index)
//router.get("/person/new", personController.new)
router.post("/person", personController.create)
router.get("/person/:name", personController.show)
//router.get("/person/:id/edit", personController.edit)
router.put("/person/:id", personController.update)
router.delete('/person',personController.delete)
//router.get("/person/:id/delete", personController.delete)
//router.post("/person/:id/projects", personController.addProject)
//router.delete("/person/:studentId/projects/:id", personController.removeProject)

module.exports = router
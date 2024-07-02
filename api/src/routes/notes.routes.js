const { Router } = require('express')

const NotesController = require('../controllers/notesController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.post('/', notesController.create)
notesRoutes.put('/:id', notesController.update)
notesRoutes.get('/:id', notesController.show)
notesRoutes.get('/', notesController.list)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes
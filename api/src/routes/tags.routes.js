const { Router } = require('express')

const TagsController = require('../controllers/tagsController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get('/', ensureAuthenticated, tagsController.list)

module.exports = tagsRoutes
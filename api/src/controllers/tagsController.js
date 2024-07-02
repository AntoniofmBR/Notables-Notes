const knex = require('../database/knex')

class TagsController {
  async list(req, res) {
    const author_id = req.user.id

    const tags = await knex('tags')
    .where({ author_id })

    return res.json(tags)
  }
}

module.exports = TagsController
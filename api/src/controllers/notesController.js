const knex = require('../database/knex')

class NotesController {
  async create(req, res) {
    const { title, content } = req.body
    const author_id = req.user.id

    const [note_id] = await knex('notes').insert({
      title,
      content,
      author_id,
    })

    return res.json()
  }

  async show(req, res) {
    const { id } = req.params

    const note = await knex('notes').where({ id }).first()

    // const tags = await knex('tags').where({ note_id: id })

    return res.json({
      ...note,
      // tags
    })
  }

  async delete(req, res) {
    const { id } = req.params

    await knex('notes').where({ id }).delete()

    return res.json()

  }

  async list(req, res) {
    const { title } = req.query
    const author_id = req.user.id

    let notes

    notes = await knex('notes')
    .where({  author_id })
    .whereLike('title', `%${title}%`)
    .groupBy('notes.id')
    .orderBy('title')


    // if(tags) {
    //   const filterTags = tags.split(',').map(tag => tag.trim())

    //   notes = await knex('tags')
    //     .select([
    //       'notes.id',
    //       'notes.title',
    //       'notes.author_id',
    //     ])
    //     .where('notes.author_id', author_id)
    //     .whereLike('notes.title', `%${title}%`)
    //     .whereIn('name', filterTags)
    //     .innerJoin('notes', 'notes.id', 'tags.note_id')
    //     .orderBy('notes.title')

    // } else {
    //   notes = await knex('notes')
    //   .where({  author_id })
    //   .whereLike('title', `%${title}%`)
    //   .orderBy('title')

    // }

    // const userTags = await knex('tags').where({ author_id })
    // const notesWithTags = notes.map(note => {
    //   const noteTags = userTags.filter(tag => tag.note_id === note.id)

    //   return {
    //     ...notes,
    //     tags: noteTags
    //   }
    // })

    return res.json(notes)
  }

  async update(req, res) {
    const { id } = req.params

    const newNote = req.body

    await knex('notes').where({ id }).update({
      title: newNote.title,
      content: newNote.content,
    })

    res.status(200).json(newNote)
  }
}

module.exports = NotesController
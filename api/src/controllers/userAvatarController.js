const AppError = require('../utils/appError')
const knex = require('../database/knex')
const DiskStorage = require('../providers/diskStorage')

class UsersAvatarController {
  async update(req, res) {
    const user_id = req.user.id
    const avatarFileName = req.file.filename
    
    const diskStorage = new DiskStorage

    const user = await knex('users')
      .where({ id: user_id }).first()

    if(!user) {
      throw new AppError('Somente usuários cadastrados podem mudar o avatar', 401)
    }

    if(user.avatar) {
      await diskStorage.deleteFile(user.avatar)
    }

    const filename = await diskStorage.saveFile(avatarFileName)
    user.avatar = filename

    await knex('users').update(user).where({ id: user_id })

    return res.json(user)
  }
}

module.exports = UsersAvatarController
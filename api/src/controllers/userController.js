const { hash, compare } = require('bcryptjs')

const AppError = require('../utils/appError')
const sqliteConnection = require('../database/sqlite')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (checkUserExists){
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashPassword = await hash(password, 12)

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashPassword]
    )

    return response.status(201).json()
  }

  async update(req, res) {
    const { name, email, password, oldPassword } = req.body
    const user_id = req.user.id

    const database = await sqliteConnection()
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [user_id])

    if(!user) {
      throw new AppError('Usuário não encontrado')
    }

    const userWithUpdatedEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('Este e-mail já está em uso.')
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if(password && !oldPassword) {
      throw new AppError('Você precisa informar a senha antiga para atualizar senha!')
    }

    if(password && oldPassword){
      const compareHash = await compare(oldPassword, user.password)

      if(!compareHash) {
        throw new AppError('A senha antiga não confere') 
      }

      user.password = await hash(password, 12)
    }

    await database.run(`
     UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`, 
      [user.name, user.email, user.password, user_id]
    )

    return res.status(200).json()
  }
}

module.exports = UsersController
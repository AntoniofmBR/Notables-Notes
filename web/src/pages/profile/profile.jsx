import { LockKey, User, Envelope, ArrowLeft, Camera } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Container, ProfileHeader, ProfileAvatar, ProfileInputs, ProfileItems } from './style'
import { Input } from '../../components/input/input.jsx'
import { Button } from '../../components/button/button.jsx'
import { useAuth } from '../../hooks/auth.jsx'
import avatarImg from '../../assets/avatar.svg'
import { api } from '../../services/api.js'

export default function Profile({icon: Icon = ArrowLeft}) {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarImg

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      oldPassword: passwordOld,
    }

    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <ProfileHeader>
        <Link to='/'>
          {Icon && <Icon size={40} />}
        </Link>
        <h1>Notables Notes</h1>
      </ProfileHeader>
      <ProfileItems>
        <ProfileAvatar>
          <img 
          src={avatar}
          alt="Foto do usuário"
          />

          <label htmlFor='avatar'>
            <Camera />
            <input 
              id='avatar'
              type='file'
              onChange={handleChangeAvatar}
              />
          </label>
        </ProfileAvatar>
        <ProfileInputs>
          <Input 
            placeholder='Nome'
            type='text'
            icon={User}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input 
            placeholder='E-mail'
            type='text'
            icon={Envelope}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
          placeholder='Senha atual'
          type='password'
          icon={LockKey}
            onChange={(e) => setPasswordOld(e.target.value)}

          />
          <Input 
            placeholder='Nova senha'
            type='password'
            icon={LockKey}
            onChange={(e) => setPasswordNew(e.target.value)}

          />
        </ProfileInputs>
        <Button
        title='Salvar alterações'
        onClick={handleUpdate}
        />
      </ProfileItems>
    </Container>
  )
}
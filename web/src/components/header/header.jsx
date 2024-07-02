import { useState } from 'react';
import { Link } from 'react-router-dom'

import { Container, Profile, Menu, ContainerHeader } from './style'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarImg from '../../assets/avatar.svg'

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarImg

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleProfileSettings = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    setIsOpen(false);
    signOut()
  };

  return (
    <Container>
      <ContainerHeader>
        <Profile onClick={toggleDropdown}>
          <img 
          src={avatarUrl}
          alt={user.name}
          />

          <div>
            <span>Bem-vindo</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>
        <h1>Notables Notes</h1>
      </ContainerHeader>
      
      {isOpen && (
        <Menu>
          <li
            onClick={handleProfileSettings}
            className="dropdown-item"
          >
            <Link to='/profile'>
              Configuração de perfil
            </Link>
          </li>
          <li
            onClick={handleLogout}
            className="dropdown-item"
          >
            Sair
          </li>
        </Menu>
      )}
    </Container>
  )
}
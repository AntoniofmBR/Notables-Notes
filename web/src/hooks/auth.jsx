import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [ data, setData ] = useState({})


  async function signIn({ email, password }) {
    try {
      const res = await api.post('/sessions', { email, password })
      const { user, token } = res.data

      localStorage.setItem('@notablesNotes:user', JSON.stringify(user))
      localStorage.setItem('@notablesNotes:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })

    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('❌ Não foi possível efetuar o login')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@notablesNotes:user')
    localStorage.removeItem('@notablesNotes:token')

    alert('Fazendo o logout...')
    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const res = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = res.data.avatar
      }


      await api.put('/users', user)
      const { password, ...userData } = user
      localStorage.setItem('@notablesNotes:user', JSON.stringify(userData))


      setData({ user, token: data.token })
      alert('✔️ Perfil atualizado com sucesso')

    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('❌ Não foi possível efetuar o login')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@notablesNotes:token')
    const user = localStorage.getItem('@notablesNotes:user')

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])


  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      updateProfile,
      user: data.user,
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
import { Envelope, LockKey, User } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Container, Background, Form } from "./style.js"
import { Button } from '../../components/button/button.jsx'
import { Input } from '../../components/input/input.jsx'
import { api } from '../../services/api.js'

export default function Register() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert('📝 Por favor preencha todos os campos')
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert('✔️ Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch(err => {
        if(err.response) {
          alert(err.response.data.message)
        } else {
          alert('❌ Não foi possível cadastrar')
        }
      })

  }

  return (
    <Container>
        <Background />
      <Form>
        <h1>Notables Notes</h1>
        <p>O seu app de notas</p>

        <h2>Faça o seu cadastro:</h2>

        <Input 
          placeholder='Name'
          type='text'
          icon={User}
          onChange={(e) => setName(e.target.value)}
        />

        <Input 
          placeholder='Email'
          type='text'
          icon={Envelope}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input 
          placeholder='Senha'
          type='password'
          icon={LockKey}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
        title='Cadastrar'
        onClick={handleSignUp}
        />

        <h3>Já possui uma conta?</h3>
        <Link to='/'>
          Faça o seu login aqui
        </Link>

      </Form>
    </Container>
  )
}
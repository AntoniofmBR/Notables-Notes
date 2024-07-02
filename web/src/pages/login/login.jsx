import { Envelope, LockKey } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Background, Container, Form } from './style.js'
import { Button } from '../../components/button/button.jsx'
import { Input } from '../../components/input/input.jsx'
import { useAuth } from '../../hooks/auth'

export default function Login() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')


  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>Notables Notes</h1>
        <p>O seu app de notas</p>

        <h2>Faça o seu login:</h2>

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
        title='Login'
        onClick={handleSignIn}
        />

        <h3>Não possui uma conta?</h3>
        <Link to='/register'>
          Cadastre-se aqui
        </Link>
      </Form>

      <Background />
    </Container>
  )
}
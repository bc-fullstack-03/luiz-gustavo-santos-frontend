import { Button, Form, Input } from '@/components'
import { EnvelopeSimple, Lock, User } from '@phosphor-icons/react'

const SignUp = () => {
  return (
    <Form>
      <Input
        label="Seu nome"
        id="name"
        placeholder="Digite seu nome"
        icon={<User weight="thin" size={24} />}
      />
      <Input
        label="Endereço de e-mail"
        placeholder="Digite seu e-mail"
        id="email"
        type="email"
        icon={<EnvelopeSimple weight="thin" size={24} />}
      />
      <Input
        label="Sua senha"
        placeholder="*******"
        type="password"
        id="password"
        icon={<Lock weight="thin" size={24} />}
      />
      <Button>Cadastrar</Button>
    </Form>
  )
}

export default SignUp

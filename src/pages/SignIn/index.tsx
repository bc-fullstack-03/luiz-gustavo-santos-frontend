import { EnvelopeSimple, Lock } from '@phosphor-icons/react'

import { Button, Form, Input } from '@/components'

const SignIn = () => {
  return (
    <Form>
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
      <Button type="submit" style={{ marginTop: '2rem' }}>
        Entrar
      </Button>
    </Form>
  )
}

export default SignIn

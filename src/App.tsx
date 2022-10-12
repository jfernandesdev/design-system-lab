import { Heading } from '../src/components/Heading'
import { Text } from '../src/components/Text'
import { TextInput } from '../src/components/TextInput'
import { Button } from '../src/components/Button'

import { Envelope, Lock } from 'phosphor-react'

import './styles/global.css'

export function App() {
  return (
    <div className="p-4 bg-gray-900 h-[100vh] flex justify-center items-center">
      <div className="text-center w-[400px] flex flex-col gap-4">
        <Heading size="lg">Ignite Lab</Heading>
        <Text size="lg">Faça login e comece a usar</Text>

        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input placeholder="jhondoe@example.com" />
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input placeholder="Type your password" type="password" />
        </TextInput.Root>

        <Button>Entrar na plataforma</Button>

        <footer className="flex flex-col gap-3">
          <Text asChild>
            <u>Esqueceu sua senha?</u>
          </Text>

          <Text asChild>
            <u>Não possui conta? Crie uma agora!</u>
          </Text>
        </footer>
      </div>
    </div>
  )
}

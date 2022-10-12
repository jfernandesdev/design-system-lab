import { Heading } from '../src/components/Heading'
import { Text } from '../src/components/Text'
import { TextInput } from '../src/components/TextInput'
import { Checkbox } from './components/Checkbox'
import { Button } from '../src/components/Button'

import { Envelope, Lock } from 'phosphor-react'

import './styles/global.css'

export function App() {
  return (
    <div className="p-4 bg-gray-900 h-[100vh] flex justify-center items-center">
      <div className="text-center w-[400px] flex flex-col gap-4">
        <Heading size="lg">Ignite Lab</Heading>
        <Text size="lg">Faça login e comece a usar</Text>
        
        <form action="" autoComplete='false' className="flex flex-col gap-3 mt-4">
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

          <div className="flex gap-2 items-center mb-4">
            <Checkbox />
            <Text size="sm">
              Lembrar-me de mim por 30 dias
            </Text>
          </div>

          <Button>Entrar na plataforma</Button>
        </form>
    
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

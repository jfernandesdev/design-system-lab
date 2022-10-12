import { Heading } from '../src/components/Heading'
import { Text } from '../src/components/Text'
import { Button } from '../src/components/Button'
import './styles/global.css'

export function App() {
  return (
    <div className="p-4 bg-gray-900 h-[100vh] flex justify-center items-center">
      <div className="max-with[400px] text-center flex flex-col gap-4">
        <Heading size="lg">Hello World!</Heading>
        <Text>Lorem ipsum</Text>
        <Button>Enviar</Button>
      </div>
    </div>
  )
}

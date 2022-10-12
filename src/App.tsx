import { Text } from '../src/components/Text'
import './styles/global.css'

export function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello World!</h1>
      <Text>Lorem ipsum</Text>
      <button className="px-4 py-2 rounded-md bg-cyan-500 hover:bg-cyan-300">Enviar</button>
    </div>
  )
}

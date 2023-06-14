import { cores } from '../../styles'
import { Texto } from './styles'

export type Props = {
  children: string
  color: 'rosaClaro' | 'rosa'
  fontSize: number
}

const Text = ({ children, color = 'rosa', fontSize = 14 }: Props) => {
  return (
    <Texto color={color} fontSize={fontSize}>
      {children}
    </Texto>
  )
}
export default Text

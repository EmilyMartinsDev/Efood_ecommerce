import { Tag } from '../Card/styles'

type Props = {
  children: React.ReactElement
}

const Info = ({ children }: Props) => {
  return <Tag>{children}</Tag>
}

export default Info

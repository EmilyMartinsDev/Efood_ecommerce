class Restaurante {
  id: number
  name: string
  banner: string
  description: string
  rating: number
  infos: string[]

  constructor(
    id: number,
    name: string,
    banner: string,
    description: string,
    rating: number,
    infos: string[]
  ) {
    this.id = id
    this.name = name
    this.banner = banner
    this.description = description
    this.rating = rating
    this.infos = infos
  }
}
export default Restaurante

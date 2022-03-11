export interface PokeCardProps {
  name: string
  types: string[]
  id: number
  onClick: (name: string) => void
}

export type PlayerColor = 'black' | 'white'
export type OthelloBoardCell = PlayerColor | null
export interface OthelloState {
  board: OthelloBoardCell[][]
  currentPlayer: PlayerColor
  score: {
    black: number
    white: number
  }
  isGameOver: boolean
}

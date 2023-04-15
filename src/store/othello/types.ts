export type PlayerColor = 'black' | 'white'
export type OthelloCell = PlayerColor | 'empty'
export interface OthelloState {
  board: OthelloCell[][]
  currentPlayer: PlayerColor
  score: {
    black: number
    white: number
  }
  isGameOver: boolean
}

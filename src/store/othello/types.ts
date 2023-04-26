export type PlayerColor = 'black' | 'white'
export type OthelloCell = PlayerColor | 'empty'
export type OthelloBoard = OthelloCell[][]
export interface OthelloState {
  board: OthelloBoard
  currentPlayer: PlayerColor
  score: {
    black: number
    white: number
  }
  isGameOver: boolean
}

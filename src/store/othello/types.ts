export type StoneColor = 'black' | 'white'
export interface OthelloState {
  board: (StoneColor | null)[][]
  currentPlayer: StoneColor
  blackScore: number
  whiteScore: number
  isGameOver: boolean
}

import { PlayerColor } from '../othello/types'

export type BattleStatus = 'waiting' | 'playing' | 'finished'
export interface OnlineStateBase {
  battleStatus: BattleStatus
  myColor: PlayerColor
}

export type OnlineState = Partial<OnlineStateBase>

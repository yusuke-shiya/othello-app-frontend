import { createConsumer } from '@rails/actioncable'

// RailsのActionCableエンドポイントを指定
const cableUrl = 'ws://localhost:8000/cable'

// コンシューマーを作成
export const consumer = createConsumer(cableUrl)

'use client'

import { Button } from '@nextui-org/react'
import { getItem } from '@/services/bricklink'
import { getItemRebrickable } from '@/services/rebrickable'
import {
  checkKeyBrickset,
  checkUserHashBrickset,
  getItemBrickset,
  getSetsBrickset,
  loginBrickset,
} from '@/services/brickset'

export default function Admin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Admin</p>

      <Button onClick={getItem}>Get item bricklink</Button>

      <Button onClick={getItemRebrickable}>Get item rebrickable</Button>

      <Button onClick={getItemBrickset}>Get item brickset</Button>

      <Button onClick={getSetsBrickset}>Get sets brickset</Button>

      <Button onClick={checkKeyBrickset}>Check key brickset</Button>

      <Button onClick={checkUserHashBrickset}>Check user hash brickset</Button>
    </main>
  )
}

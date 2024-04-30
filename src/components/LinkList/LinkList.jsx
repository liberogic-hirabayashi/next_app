import React, { useCallback, useState } from 'react'
import Link from 'next/link'

export default function LinkList() {

  return (
  <div>

    <ul className='flex'>
        <li className='mr-4'><Link href='/'>Index</Link></li>
        <li><Link href='/about'>About</Link></li>
    </ul>
    </div>
  )
}

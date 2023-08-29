import { useState } from 'react'
import { Post } from './Post'
import { OkButton } from './OkButton'
import { Header } from '../components/Header'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Post author = "Victor Swoboda" content = "Programador Java e React há dois anos."></Post>
    </div>
  )
}
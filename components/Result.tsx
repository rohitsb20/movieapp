import React from 'react'
import Card from '../components/ui/Card'

export default function Result({result}:{result:any}) {
  return (
    <div>
        <Card result={result}/>
    </div>
  )
}

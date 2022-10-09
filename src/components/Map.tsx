import React from 'react'
import Grid from './Grid'

type Props = unknown

const Map = (props: Props) => {
  return (
    <div className='w-4/5 flex justify-center items-center'>
      <Grid rows={24} cols={24}/>
    </div>
  )
}

export default Map

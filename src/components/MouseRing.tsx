import React, { CSSProperties } from 'react'

type Props = {
  styles: CSSProperties
}

const MouseRing = (props: Props) => {
  return (
    <div className='mouseCircle border border-green-500 rounded-full absolute' style={props.styles}></div>
  )
}

export default MouseRing;
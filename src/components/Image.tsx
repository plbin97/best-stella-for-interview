import React from "react";
type ImageProps = {
  image: any,
  height: number,
  width: number
}

function Image(props: ImageProps) {
  return(
    <img src={props.image} className='zoom' height={props.height} width={props.width} alt=''/>
  )
}
export {Image}

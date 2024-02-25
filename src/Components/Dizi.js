import React from 'react'
import { useParams } from 'react-router-dom'

const Dizi = () => {
    const para = useParams();
    console.log(typeof para.id);
  return (
    <div>
      
    </div>
  )
}

export default Dizi

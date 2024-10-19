import React from 'react'
import Image from 'next/image'
import PictureThumbSole from '@/assets/sole-fingerprint.png'

const Thumbprint = () => {
  return (
    <div>
<Image src={PictureThumbSole} alt="Picture of thumb print next to the bottom of a shoe sole" className='w-full h-auto'/>


    </div>
  )
}

export default Thumbprint
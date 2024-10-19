import Header from '@/assets/STAY CONNECTED.svg'
import InstagramIcon from '@/assets/instagram-icon.svg'
import TwitterIcon from '@/assets/twitter-icon.svg'
import FacebookIcon from '@/assets/facebook-icon.svg'
import YoutubeIcon from '@/assets/youtube-icon.svg'
import Image from 'next/image'
import ShoeBG from '@/assets/CallToActionBG.png'




export const CallToAction = () => {
  return <section className='mt-20 py-20 shadow-[inset_0px_4px_20px_0px_rgba(0,_0,_0,_0.25)]'>

<div className='flex flex-col items-center gap-10 '>

<Header className="w-[425px]"/>

<p className='paragraph-text text-center'>Join the Nike community and keep up with the latest innovations, styles, and stories that are shaping the future of footwear and identity.</p>


<div className='flex gap-3'>
  <FacebookIcon  className/>
  <TwitterIcon/>
  <InstagramIcon/>
  <YoutubeIcon/>


</div>



<p className='paragraph-text text-center -mt-5'>Follow @nike to stay updated</p>




  
</div>
<Image src={ShoeBG} alt='' className='-mt-[200px] w-5/6'/>



  </section>;
};

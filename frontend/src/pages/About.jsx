import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere lectus quis mauris sodales, aliquam maximus ligula condimentum. Integer in facilisis sem, ut vulputate ligula. Morbi id consectetur nisl. Quisque risus nulla, eleifend et nunc vitae, dapibus rhoncus est. Nullam dapibus malesuada scelerisque.</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec a nunc ac nisl efficitur efficitur. Donec eget ligula sed sapien efficitur convallis. In id nunc a enim efficitur commodo. Proin at nisi ac metus efficitur fermentum. Curabitur ut odio sed enim commodo tincidunt.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Cras hendrerit nulla id nibh pellentesque volutpat. Quisque auctor efficitur metus in dapibus. Proin iaculis, lectus nec posuere gravida, est nulla consequat risus, eget pretium magna leo at lacus. Duis finibus vulputate diam nec interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Fusce id leo at tellus convallis blandit. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Fusce id leo at tellus convallis blandit. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Fusce id leo at tellus convallis blandit. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
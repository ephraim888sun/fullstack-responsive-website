import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a
        href='https://www.linkedin.com/in/ephraim-sun/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href='https://github.com/ephraim888sun'
        target='_blank'
        rel='noopener noreferrer'
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href='https://www.instagram.com/ephraim888sun/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <BsInstagram />
      </a>
    </div>
  </div>
)

export default SocialMedia

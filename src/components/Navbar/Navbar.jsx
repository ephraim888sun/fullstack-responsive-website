import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  // Theme for Button, Blue or Red
  const [theme, setTheme] = React.useState('red')

  React.useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  const switchTheme = () => {
    const newTheme = theme === 'red' ? 'blue' : 'red'
    setTheme(newTheme)
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={theme === 'red' ? images.logoRed : images.logoBlue} alt='' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      {/* toggle button*/}

      {/* <div
        className='t'
        style={{
          backgroundColor:
            theme === 'red' ? 'var(--primary-color)' : 'var(--primary-color)',
        }}
      >
        <div
          className='t-button'
          style={{ left: theme === 'red' ? 0 : 25 }}
          onClick={switchTheme}
        ></div>
      </div> */}

      <div className='toggle-button-cover'>
        <div className='button-cover'>
          <div className='button'>
            <input type='checkbox' className='checkbox' />
            <div className='knobs'>
              <span></span>
            </div>
            <div className='layer'></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

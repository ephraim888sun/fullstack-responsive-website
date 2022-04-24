import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

import { images } from '../../constants'
import './Toggle.scss'

const Toggle = () => {
  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' })
  }

  return (
    <div className='t'>
      <img src={images.sun} alt='' className='t-icon' />
      <img src={images.moon} alt='' className='t-icon' />
      <div
        className='t-button'
        onClick={handleClick}
        style={{ left: theme.state.blueMode ? 0 : 25 }}
      ></div>
    </div>
  )
}

export default Toggle

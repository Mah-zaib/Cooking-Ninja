import './ThemeSelector.css'
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/brightness_6_FILL0_wght400_GRAD0_opsz48.svg'

import React from 'react'
const themecolors = ['#58294c','#249c6b','#b70233']
export default function ThemeSelector() {
  const{changecolor,changemode,mode}=useTheme()
 
  
  const togglemode =()=> {
   changemode( mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)

    return (
    <div className='theme-selector'>
        <div className='mode-toggle'>
            <img 
            onClick={togglemode}
            src={modeIcon}
            alt='light/dark toggle icon'
            style={{filter:mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
            />
        </div>
       <div className='theme-buttons'>
          {themecolors.map(color=>(
            <div
            key={color}
            onClick={()=> changecolor(color)}
            style={{background:color}}
            />
          ))}
       </div>
    </div>
  )
}

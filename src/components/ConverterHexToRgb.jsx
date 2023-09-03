import { useState } from 'react'

function ConverterHexToRgb() {
  const [ color, setColor ] = useState('rgb(255,255,255)')

  const handleChange = (value) => {
    if (value.length > 6) {
      if (value.match("^#([A-Fa-f0-9]{6})$")) {
        let hex = value.replace("#", "");
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        setColor('rgb(' + r + ',' + g + ',' + b + ')');
      } else {
        setColor('red');
      }
    }
  }

  return (
    <div className='background-container' style={{background: color}}>
      <label htmlFor='hex2rgb'>
        <input 
          onChange={(e)=> handleChange(e.target.value)}
          defaultValue={'#FFFFFF'}
          type="text" 
          id='hex2rgb' 
          name='hexInput'
          className='color-input'/>
        <p className='color-text'>{ color==='red' ? 'ошибка' : color }</p>
      </label>
    </div>
  )
}

export default ConverterHexToRgb

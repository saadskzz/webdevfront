import { Input } from 'antd';
import './custominp.css'



function CustomInp({placehold, ...rest }) {
  return (
     <div className='custom-inp'>
    <Input size="large" placeholder={placehold} {...rest}  />
  </div>

  )
}

export default CustomInp
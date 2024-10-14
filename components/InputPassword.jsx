import React, {useState} from 'react'
import { Input } from '@nextui-org/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function InputPassword({label, isInvalid}) {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  function hidePasswordHandler(){
    setHiddenPassword((isHidden) => !isHidden);
  }
  return (
    <Input
      type={hiddenPassword ? 'password' : 'text'}
      label={label || 'Password'}
      name={label ? 'confirmPassword' : 'password'}
      labelPlacement='outside'
      placeholder='Password'
      description={isInvalid && <p className='text-red-600'>{label ? 'Passwords Do not match' : 'Password must contain at least 8 characters, consisting of at least one symbol, one character, and one digit'}</p>}
      size='lg'
      className='px-2'
      endContent={
        hiddenPassword ?
        <FaEye onClick={hidePasswordHandler} className='w-6 h-6 cursor-pointer'/> :
        <FaEyeSlash onClick={hidePasswordHandler} className='w-6 h-6 cursor-pointer'/>
      }
    />
  )
}

export default InputPassword
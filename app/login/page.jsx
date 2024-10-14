'use client';
import { Card, CardHeader, CardBody, CardFooter, Link, Input, Button} from '@nextui-org/react';
import SubmitButton from '@/components/SubmitButton';

import React, {useState} from 'react';
import InputPassword from '@/components/InputPassword';

function Login() {
  function submitHandler(event){
    event.preventDefault();
    
  }
  const [errors, setErrors] = useState({});
  return (
    <form onSubmit={submitHandler}>
      <Card className='max-w-screen-sm mx-auto my-10'>
        <CardHeader>
          <p className='mx-auto mt-5 text-3xl'>Login</p>
        </CardHeader>
        <CardBody className='gap-4 max-h-full'>
          <Input
            type="text"
            label="Phone Number / Email"
            name='userId'
            labelPlacement='outside'
            placeholder='Enter phone number or email'
            size='lg'
            className='px-2'
          />
          <InputPassword />
        </CardBody>
        <CardFooter className='flex-col text-center gap-3'>
          <SubmitButton defaultCaption='Login' caption={'Logging in...'} className='mr-2 ml-auto' />
          <p>Forgot Password? <Link className='text-blue-600' href='/forgot-password' underline='hover'>Click Here</Link></p>
          <p >Dont't have an account? <Link className='text-blue-600' href='/signup' underline='hover'>Sign Up</Link></p>
        </CardFooter>
        

      </Card>
    </form>

  )
}

export default Login;
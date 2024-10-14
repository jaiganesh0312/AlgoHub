'use client';
import { Card, CardHeader, CardBody, CardFooter, Link, Input, Button} from '@nextui-org/react';

import SubmitButton from '@/components/SubmitButton';
import React, {useState} from 'react';

function ForgotPassword() {
  function submitHandler(event){
    event.preventDefault();
    
  }
  const [errors, setErrors] = useState({});
  return (
    <form onSubmit={submitHandler}>
      <Card className='max-w-screen-sm mx-auto my-10'>
        <CardHeader>
          <p className='mx-auto mt-5 text-3xl'>Enter Email</p>
        </CardHeader>
        <CardBody className='gap-4 max-h-full'>
          <Input
            type="email"
            label="Email"
            name='email'
            labelPlacement='outside'
            placeholder='Email'
            description='Please Enter the Registered Email Id'
            size='lg'
            className='px-2'
          />
        </CardBody>
        <CardFooter>
          <Button as={Link} href='/login' variant='light' className='ml-auto mr-2 text-blue-600'>
            Back to Login
          </Button>
          <SubmitButton defaultCaption='Send Email' caption={'Sending Email...'} className='mr-2' />
        </CardFooter>
      </Card>
    </form>
  )
}

export default ForgotPassword;
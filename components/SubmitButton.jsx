'use client';
import React from 'react';
import {useFormStatus} from 'react-dom';
import { Button } from '@nextui-org/react';

function SubmitButton({defaultCaption, caption, className}) {
  const { pending, data} = useFormStatus();

  return (
    <Button color='success' radius='sm' type='submit' className={className} disabled={pending}>
      {pending && data ? caption : defaultCaption}
   </Button>
  )
}

export default SubmitButton;
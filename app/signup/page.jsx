'use client';
import { Card, CardHeader, CardBody, CardFooter, Link, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import InputPassword from '@/components/InputPassword';
import { useRouter } from 'next/navigation';
import SubmitButton from '@/components/SubmitButton';
import SnackBar from '@/components/SnackBar';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegex = /^[6789]\d{9}$/;

const validateField = (field, value) => {
  switch (field) {
    case 'email':
      return !emailRegex.test(value);
    case 'password':
      return !passwordRegex.test(value);
    case 'phoneNumber':
      return !phoneRegex.test(value);
    case 'userName':
      return value.trim().length < 4;
    default:
      return false;
  }
};

function Signup() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleOpenChange() {
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2000);
  }

  async function createAccount(fd) {
    const formData = {
      email: fd.get('email'),
      userName: fd.get('userName'),
      password: fd.get('password'),
      confirmPassword: fd.get('confirmPassword'),
      phoneNumber: fd.get('phoneNumber'),
    };

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (field !== 'confirmPassword') {
        newErrors[`invalid${field.charAt(0).toUpperCase() + field.slice(1)}`] = validateField(field, formData[field]);
      }
    });
    newErrors.passwordsDoNotMatch = formData.password !== formData.confirmPassword;

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    handleOpenChange();
    console.log(formData);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/login');
    }, 2000);
  };

  return (
    <form action={createAccount}>
      <SnackBar isOpen={isOpen} message="Account Created Successfully" />
      <Card className="max-w-screen-sm mx-auto my-10">
        <CardHeader>
          <p className="mx-auto mt-5 text-3xl">Create Account</p>
        </CardHeader>
        <CardBody className="gap-4">
          <Input
            type="text"
            label="Username"
            name="userName"
            labelPlacement="outside"
            placeholder="Username"
            description={errors.invalidUserName && <p className="text-red-600">Username should be at least 4 characters long</p>}
            size="lg"
            className="px-2"
          />
          <Input
            type="email"
            label="Email"
            name="email"
            labelPlacement="outside"
            placeholder="Email"
            description={errors.invalidEmail && <p className="text-red-600">Please enter a valid email</p>}
            size="lg"
            className="px-2"
          />
          <Input
            type="text"
            label="Phone Number"
            name="phoneNumber"
            labelPlacement="outside"
            placeholder="Phone Number"
            description={errors.invalidPhoneNumber && <p className="text-red-600">Phone Number should be exactly 10 digits</p>}
            size="lg"
            className="px-2"
          />
          <InputPassword isInvalid={errors.invalidPassword} />
          <InputPassword label="Confirm Password" name="confirmPassword" isInvalid={errors.passwordsDoNotMatch} />
        </CardBody>
        <CardFooter className="flex-col text-center gap-3">
          <SubmitButton defaultCaption='Sign Up' caption={'Creating Account...'} className='mr-2 ml-auto' />
          <p>
            Already have an account? <Link className="text-blue-600" href="/login" underline="hover">Sign In</Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}

export default Signup;

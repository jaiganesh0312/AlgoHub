'use server';
import { redirect } from "next/navigation";
import { validateField } from "./validationLogic";
export async function CreateUser(prevState, fd){
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
    return newErrors;
  }

  console.log(email, userName, password, phoneNumber);
  redirect('/login');
}
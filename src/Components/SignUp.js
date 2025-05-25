import React from 'react'
import { useForm, Controller } from "react-hook-form"
import {useSignupMutation} from '../services/auth/authSlice'
import CustomInp from './CustomInp'
import './signup.css'
function SignUp() {
    const [signup] = useSignupMutation();
    const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
      select: {},
    },
  })
    const onSubmit = async(data) => {
        await signup(data);
        console.log(data)
        
    }

  return (
     <form onSubmit={handleSubmit(onSubmit)}>
           <Controller
        name="email"
        control={control}
        render={({ field }) => <CustomInp placehold={'enter email'} {...field} />}
      />
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <CustomInp placehold={'first name'} {...field} />}
      />
         <Controller
        name="lastName"
        control={control}
        render={({ field }) => <CustomInp placehold={'last name'} {...field} />}
      />
         <Controller
        name="password"
        control={control}
        render={({ field }) => <CustomInp placehold={'enter password'} {...field} />}
      />
         <Controller
        name="passwordConfirm"
        control={control}
        render={({ field }) => <CustomInp placehold={'enter password again'} {...field} />}
      />
      <input type="submit" />
    </form>
    // <div className='signup-form'> <CustomInp placehold={'email'}/>
    //      <CustomInp placehold={'first name'}/>
    //      <CustomInp placehold={'last name'}/>
    //      <CustomInp placehold={'password'}/>
    //      <CustomInp placehold={'password Confirm'}/>
    
    // </div>
  )
}

export default SignUp
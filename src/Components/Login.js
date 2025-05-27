import CustomInp from './CustomInp'
import './loginform.css'
import { useForm, Controller } from "react-hook-form"
import {useLoginMutation} from '../services/auth/authSlice'
import {useDispatch,useSelector} from 'react-redux' 
import { loginSuccess } from '../Slices/authenticatonslice'
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
    const dispatch = useDispatch();
    const [login] = useLoginMutation();
    const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
    const [loginError, setLoginError] = React.useState(null);
    const navigate = useNavigate();

    console.log(isAuthenticated)
       const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
     password: "",
    
    },
  })
  const onSubmit = async({ email, password }) => {
    setLoginError(null);
    try {
      const result = await login({ email, password });
      const { data, error } = result;
      if (error || !data || !data.token) {
        setLoginError('Invalid email or password.');
        return;
      }
      data.token && localStorage.setItem('token', data.token);
      dispatch(loginSuccess({ token: data.token, userData: { email, password } }));
      navigate('/home');
    } catch (err) {
      setLoginError('An unexpected error occurred.');
    }
  }
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
          <Controller
        name="email"
        control={control}
        render={({ field }) => <CustomInp placehold={'enter email'} {...field} />}
      />
          <Controller
        name="password"
        control={control}
        render={({ field }) => <CustomInp placehold={'your password'} {...field} />}
      />
       {loginError && <div style={{ color: 'red', marginBottom: 10 }}>{loginError}</div>}
       <input type="submit" />  
    </form>
        
  )
}

export default Login
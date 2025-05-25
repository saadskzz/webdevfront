
import CustomInp from './CustomInp'
import './loginform.css'
import { useForm, Controller } from "react-hook-form"
function Login() {
       const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
     password: "",
    
    },
  })
  const onSubmit = (data)=>{
console.log(data)
  }
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}className='login-form'>
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
       <input type="submit" />  
    </form>
        
  )
}

export default Login
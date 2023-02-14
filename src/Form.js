import {useForm} from 'react-hook-form';
export const Form = () => {

    const {register,handleSubmit}=useForm();

    const onSubmit=(data)=>{
        console.log(data);
    };

    return (
       <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name..."{...register("fullName")}/>
        <input type="text" placeholder="Email..." {...register("email")}/>
        <input type="number" placeholder="Age..." {...register("age")}/>
        <input type="text" placeholder="Password..." {...register("password")}/>
        <input type="text" placeholder="Confirm Password..." {...register("confirmPassword")}/>
        <input type="submit"/>
       </form>
    );
}
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
export const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'),null]).required()
    });//Our schema/data will look like a object,Shape accepts an object as an argument.

    const {register,handleSubmit}=useForm({
        resolver:yupResolver(schema)
    });

    const onSubmit=(data)=>{
        console.log(data);
    };

    return (
       <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name..."{...register("fullName")}/>
        <input type="text" placeholder="Email..." {...register("email")}/>
        <input type="number" placeholder="Age..." {...register("age")}/>
        <input type="password" placeholder="Password..." {...register("password")}/>
        <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
        <input type="submit"/>
       </form>
    );
}
import { useForm } from 'react-hook-form';

import '../Assets/Styles/Form.css'
function FormComponent() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='register'>
            <form className='col-6' noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3" controlId="formBasicEmail">
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" {...register("email", { required: true ,pattern:/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/})} />
                {errors.email?.type === "required" && "Please enter valid email"}
                {errors.email?.type === "pattern" && "Please enter valid email"}


                </div>

                <div className="mb-3" controlId="formBasicPassword">
                    <label>Password</label>
                    <input type="password" placeholder="Password" {...register("password", { required: true ,minLength:6 })} />
                    {errors.password?.type === "required" && "Please enter strong password"}
                    {errors.password?.type === "minLength" && "Please enter at least 6 chars"}
                </div>

                <button className='btn' type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormComponent;
import { userService, alertService } from '../../services';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import  Link  from 'next/link'
import { useEffect } from 'react';
const { useRouter } = require("next/router");

export default Register;

function Register() {
    const router = useRouter();

    //form validation rules

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });

    const formOptions = { resolver: yupResolver(validationSchema)};

    //get functions to build form wiith useForm() hook

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;

    function onSubmit(user){
        console.log(user);
        /*let myPromise = new Promise(function(myResolve, myReject) {
            let x = 0;
          
          // The producing code (this may take some time)
          
            if (x == 0) {
              myResolve("OK");
            } else {
              myReject("Error");
            }
          });myPromise*/
        
          try {
              var user1 = userService.register(user);
          }
          catch(err)
          {
              console.log(err);
          }
          console.log(user1);
        return user1
        .then(() => {
            alertService.success('Registration', {keepAfterRouteChange: true});
            //redirect to login page
            //router.push('login');
            console.log('success');
        })
        .catch(() =>{
            console.log('failed');
            alertService.error
        });
    }

    /*function onSubmit(user){
        var text = userService.register(user)
        console.log(text);
        console.log('form');
        alertService.success('Registration', {keepAfterRouteChange: true});
        router.push('login');
      
    }*/

    useEffect(() =>{

        console.log('test');

    },[handleSubmit])
        return(
            <div className="card">
                <h4 className="card-header">Register</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button disabled={isSubmitting} className="btn btn-primary">
                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Register
                        </button>
                        <Link href="/account/login" className="btn btn-link">Cancel</Link>
                    </form>
                </div>
            </div>
        
        );
    
}
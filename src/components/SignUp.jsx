import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const SignUp = () => {


    const { createUser } = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { name, lastName, email, password };
        console.log(user);


        createUser(email, password)
            .then(result => {
                console.log('user create at firebase', result.user);

                const createdAt = result?.user?.metadata?.creationTime;

                const newUser = { name, email , createdAt};


                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },

                    body:JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                            console.log('User created in db')
                        }
                    })



            })
            .catch(error => {
                console.log('error', error);
            })




    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col -">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Sign Up or Register now!</h1>
                        <p className="py-4 max-w-9/12 m-auto">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUp}>
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">First Name</label>
                                    <input type="text" name='name' className="input" placeholder="first name" />
                                    <label className="label">Last Name</label>
                                    <input type="text" name='lastName' className="input" placeholder="last name" />
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Sign Up</button>
                                   
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
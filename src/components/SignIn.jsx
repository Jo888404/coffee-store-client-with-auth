import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';

// import { useContext } from 'react';
// import { AuthContext } from '../provider/AuthProvider';

const SignIn = () => {

    const { signInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password };
        console.log(user);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                // update last login time 

                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime }

                fetch(`http://localhost:5000/users/${email}`,{
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(loginInfo)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                })


            })
            .catch(error => {
                console.log('ERROR', error)
            })



    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col -">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-4 max-w-9/12 m-auto">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignIn}>
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                     <p>New to coffee drinker? <Link to="/signup">Sign Up</Link></p>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
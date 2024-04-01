
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.init";
import { GithubAuthProvider } from "firebase/auth";
import { useState } from "react";

const LogIn = () => {

    const auth = getAuth(app)
    
    const provider = new GoogleAuthProvider();
    const GitProvider = new GithubAuthProvider();

    function google(){
        signInWithPopup(auth, provider)
        .then((result)=>{
            const user = result.user;
            console.log(user)
        })
        .catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
        console.log("clicked")
    }


    function github(){
      signInWithPopup(auth, GitProvider)
      .then((result)=>{
        const user = result.user;
        console.log(user)
      })
      .catch((error)=>{
        console.log(error.message)
      })
    }

    function handle(e){
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      if(password.length < 8){
        alert("please give 8 password")
        return
      }
      console.log(e.target.email.value)
      console.log(e.target.password.value)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user,"login")
      })
      .catch((error)=>{
       
      
        const errorMessage = error.message;
        
        console.log(errorMessage)
        


       
      })
    }

    const [eye,setEye] = useState(true)
    


  return (
    <div>
      <div className="hero h-[500px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Log In With</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="space-x-5">
                <button onClick={google} className="btn btn-success">Google</button>
                <button onClick={github} className="btn btn-success">Git Hub</button>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handle} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type={ eye ? 'password' : 'text'}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button onClick={()=> setEye(!eye)} className="btn btn-success mt-3">Show password</button>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

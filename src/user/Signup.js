import React,{ useState, useEffect } from 'react'
import '../styles.css'
import {Redirect} from 'react-router-dom';


const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: ''
    })
    const {name , email} = values;

    const insertGapiScript = () =>{
        const script = document.createElement('script')
        script.src = "https://apis.google.com/js/api.js"
        script.onload = () =>{
            initalizeGoogleSignIn()
        }
        document.body.appendChild(script)
        return <Redirect to="/products" />
    }

    

    const initalizeGoogleSignIn= () => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '320385499802-nfe8i2bdqop000fjomde5tcg8muv3rkv.apps.googleusercontent.com',
            })
            console.log("api inited");
            window.gapi.load('signin2', () => {
                const params = {
                    onsuccess: (googleUser) => {
                        console.log("user signin successful");
                            var profile = googleUser.getBasicProfile();
                            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
                            console.log('Image URL: ' + profile.getImageUrl());
                            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
                            setValues({name: profile.getName(), email: profile.getEmail()})
                           
                    }
                }
                
                window.gapi.signin2.render('loginButton', params)
            })
        })
    }

    useEffect(() => {
        console.log('loading');
        insertGapiScript();
    }, [])

    const logout = () => {
        console.log('in logout');

        let auth2 = window.gapi && window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            setValues({name: undefined, email: undefined})
            console.log('User signed out.');
          });
    }
        
    return (
        <div>
            <h1>Google singin </h1>
            <div id="loginButton">Sign in with Google </div>
            <h3>{name}{email}</h3>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Signup
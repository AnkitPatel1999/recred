import React,{ useState, useEffect } from 'react'
import '../styles.css'
import { Link } from 'react-router-dom';
import Products from '../user/Products'
import LoginwithFB from '../user/LoginwithFB'

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        pic: 'https://www.pexels.com/photo/woman-in-white-dress-shirt-holding-yellow-flowers-7532824/',
    })
    const {name , email, pic} = values;

    const [userValue, setUserValue] = useState(false)

    const [x,setX] = useState();

    const insertGapiScript = () =>{
        const script = document.createElement('script')
        script.src = "https://apis.google.com/js/api.js"
        script.onload = () =>{
            initalizeGoogleSignIn()
        }
        document.body.appendChild(script)
    }

    const initalizeGoogleSignIn = () => {

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

                            setValues({name: profile.getName(), email: profile.getEmail(), pic: profile.getImageUrl()})
                            setUserValue(true)                   
                    }
                }
                
                window.gapi.signin2.render('loginButton', params)
            })
        })
    }



    useEffect(() => {
        if(typeof window !== undefined) {
            if(localStorage.getItem("fblst_1889385564576151")) {
                //setUserValue(true)
            }
            
        }


        console.log('loading',userValue);
        insertGapiScript();
       
    }, [userValue])

    const logout = () => {
        console.log('in logout');

        let auth2 = window.gapi && window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            setValues({name: undefined, email: undefined})
            setUserValue(false)
            console.log('User signed out.');
          });
    }

    const navBar = () => {
        return (
            <div>
                <div className="row">
                    <div className="col-9 bg-dark p-0">
                        <ul className="nav nav-tabs bg-dark">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 p-0">
                        <ul className="nav nav-tabs bg-dark">
                            { userValue && (
                                <img src={ pic }
                                    alt="photo"
                                    style={{maxHeight: "100%", maxWidth: "12%"}}
                                    className="roundeds"
                                />
                            )}
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{ name } |</Link>
                            </li>
                            
                            { userValue && (
                                <li className="nav-item">
                                    <span className="nav-link" onClick={logout}>Logout</span>
                                </li> 
                            )}
                            
                        </ul>
                    </div>
                </div>   
            </div>
        )
    }

    const handleLanguage = (langValue) => {
        setX(langValue);
        setValues({name: langValue.first_name, email: langValue.email, pic: langValue.picture.data.url})
        setUserValue(true)
        
        console.log(langValue.first_name, langValue.email, langValue.picture.data.url);
        console.log("Xxxxxxxxxxxxxxxxxxxx=  ",langValue);
    }

    return (
        <div>
            {navBar()}
            { !userValue && (
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-2">
                        <div id="loginButton"> </div>
                        <LoginwithFB onSelectLanguage={handleLanguage} setUserValue={true}/>
                    </div>
                    <div className="col-5"></div>
                </div>
            )}
            { userValue &&(
                <div>
                    <Products />
                </div>
            )}            
        </div>
    )
}

export default Signup
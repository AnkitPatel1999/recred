import React, { useState, useEffect } from 'react';
import '../styles.css'
import facebook from '../fb.png'  


const LoginwithFB = ({onSelectLanguage}) => {
    

    const [values, setValues] = useState();

    useEffect(() => {
          // Load the required SDK asynchronously for facebook, google and linkedin
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
        window.fbAsyncInit = function() {
            window.FB.init({
              appId      : 1889385564576151,
              cookie     : true,  // enable cookies to allow the server to access the session
              xfbml      : true,  // parse social plugins on this page
              version    : 'v2.8' // use version 2.1
            });
        };
        checkLoginState()
    }, [])
    
    
    const facebookLogin = () => {
      window.FB.login(
          
            function(resp){
                statusChangeCallback(resp)
            }.bind(),{ scope : 'email,public_profile' })
            

    }
    
    const checkLoginState = () => {
        window.FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        }.bind());
    }
    
    const statusChangeCallback = (response) =>  {
        console.log(response);
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            fetchDataFacebook();
        } else {
            console.log('connection failed')
        }
    }
    
    const fetchDataFacebook = () => {
        window.FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'}, function(user) {
            console.log(user);
            console.log(user.first_name);
            handleLangChange(user)
        });
    }

    const handleLangChange = (x) => {
        var lang = x;
        onSelectLanguage(lang);            
    }


        return(
            <div>
                <div className="cardx" onClick={ () => facebookLogin() }>
                    <img src={facebook} title="facebook login" alt="facebook" />
                    <p>login with Facebook</p>
                </div>
            </div>
        )
}

export default LoginwithFB;

import React from "react";

import "../style.css";


const Signup = () => {
   return (
      <>




         <div class="container-form-signup">
            <div class="right_img">
               <img src="image/signup.svg"></img>
            </div>
            <div class="right_form">
               <div class="right_form_head">
                  <h1>Sign up</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <div class="social_form">
                     <a><i class="fab fa-twitter"></i></a>
                     <a><i class="fab fa-facebook-f"></i></a>
                     <a><i class="fab fa-google"></i></a>
                  </div>
                  <p class="sign_p">or use your account</p>
               </div>
               <div class="right_form_text">
                  <form>
                     <div class="right_form_details">
                        <input type="text" placeholder="Enter Name"></input>
                     </div>
                     <div class="right_form_details">
                        <input type="email" placeholder="Enter Email"></input>
                     </div>
                     <div class="right_form_details">
                        <input type="password" placeholder="Enter Password"></input>
                     </div>

                     <div class="right_form_details">
                        <input type="submit" value="SIGN UP"></input>
                     </div>
                  </form>
               </div>
               <h3 class="right_not">Already Created an Account?<a href="/Sign">LOG IN</a></h3>
            </div>


         </div>

      </>
   )
}
export default Signup;
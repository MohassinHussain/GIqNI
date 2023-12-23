const logInSignUp =document.getElementById('logInSignUp')
const signInContainer =document.getElementById('sign-in-container')
const overlayPanel =document.getElementById('overlay-panel')

const createAccount = document.getElementById('create-account')

const signUpForm = document.getElementById('sign-up-form')

const logInButton = document.getElementById('logIn')
const toLoginPage = document.getElementById('toLoginPage')

toLoginPage.addEventListener('click', () =>{
    signInContainer.style.display='flex'    
    signUpForm.style.display='none'
    
})


logInSignUp.addEventListener('click', ()=>{
   signInContainer.style.display = 'flex';
   logInSignUp.style.display = 'none';
   overlayPanel.style.display = 'none';
})

 



createAccount.addEventListener('click', ()=>{
    signUpForm.style.display='flex';
    signInContainer.style.display='none';
   
})

const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const forgotPassEmail = document.getElementById('forgotPassEmail');
const verifyMailBtn = document.getElementById('verifyMailBtn');

const email = document.getElementById('Email');
const password = document.getElementById('Password');
const loginHeading = document.getElementById('loginHeading');




function forgotPassword(){
    forgotPassEmail.style.display='flex'
    verifyMailBtn.style.display='flex'
 /*   email.style.display='none'
    password.style.display='none' */
 
    logIn.style.display='none'
    
    
    
}







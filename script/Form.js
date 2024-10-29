let form=document.forms['contactForm']
let submitBtn=document.querySelector('.submit-btn')

const validateForm=()=>{
let name=form['name'].value
let surname=form['surname'].value
let email=form['email'].value
let phone=form['phone'].value
let message=form['message'].value
if (!name||!surname||!email||!phone|| !message){
    alert('fill in all the field')
    console.log(name,surname,email,phone,message)
    return false
}
if (!validatePhoneNumber()){
    alert('phone number is invalid')
    return false
}
else{
    alert('done')
    
}

return true


}
const clearInput=()=>{
form['name'].value=""
form['surname'].value=""
form['email'].value=""
form['phone'].value=""
form['message'].value=""
}

const validatePhoneNumber=()=>{
    const phone=form['phone'].value
    if(phone.length<10 || isNaN(phone)){
    return false
    }

    return true
}


submitBtn.addEventListener('click',(e)=>{
e.preventDefault();
if (validateForm()){
    clearInput()
}
})



//   SCOLLING BUTTOM

let scroll = document.querySelector('.scroll')

window.onscroll = function(){
  this.scrollY>=400 ? scroll.classList.add('show'):scroll.classList.remove('show')
}

scroll.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})

// FORM VALIDATION
const form= document.getElementById('form')
const name = document.getElementById('name')

email.addEventListener("keydown",(validation()))

function validation(){
  let email = document.getElementById('email').value
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3,4}$/;
    let errorEl = document.getElementById('error')
    if(email.match(pattern)){
      form.classList.add('valid')
      form.classList.remove('invalid')
      errorEl.textContent = "Your Email Address In Valid"
      errorEl.style.color = "#00FF00"
    }else{
      form.classList.remove('valid')
      form.classList.add('invalid')
      errorEl.textContent = "Please Enter Valid Email Address"
      errorEl.style.color = "#FF0000"
    }
}
form.addEventListener('submit',(e)=>{
        e.preventDefault()
})


// update date of footer
let year = document.querySelector('.date')
year.textContent = new Date().getFullYear()
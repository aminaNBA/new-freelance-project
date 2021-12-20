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

email.addEventListener("keydown",()=>{
  let email = document.getElementById('email')
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    let errorEl = document.getElementById('error')
    if(email.value.match(pattern)){
      form.classList.add('valid')
      form.classList.remove('invalid')
      errorEl.textContent = "Your Email Address In Valid"
      errorEl.style.color = "#14b8a6"
    }else{
      form.classList.remove('valid')
      form.classList.add('invalid')
      errorEl.textContent = "Please Enter Valid Email Address"
      errorEl.style.color = "#FF0000"
    }
})


  

form.addEventListener('submit',(e)=>{
        e.preventDefault()
})


// update date of footer
let year = document.querySelector('.date')
year.textContent = new Date().getFullYear()
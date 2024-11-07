let startimg = document.querySelectorAll(".imgs img")
let clickedimg = document.querySelector(".clickedimg")
let imgblack = document.querySelector(".imgblack")
let xbtn = document.querySelector(".x")
let send = document.querySelector(".send")
let errormsg = document.querySelector(".error")
let e2 = document.querySelector(".e2")


let orders = [];

let wichimg = 1;
startimg.forEach(function(img){
    img.addEventListener("click", function(e){
        clickedimg.setAttribute("src",img.getAttribute("src"))
        imgblack.style.display = "block"
        xbtn.style.display = "block"
        clickedimg.style.display = "block"
    })
})
xbtn.onclick = function(){
    imgblack.style.display = "none"
    xbtn.style.display = "none"
    clickedimg.style.display = "none"
}
//going to the next image event
let nextbtn = document.querySelector(".next")
nextbtn.onclick = function(){
    nextbtn.disabled = true
    nextImg(wichimg)
    wichimg++
    if(wichimg === 4){
        wichimg = 0
    }
    setTimeout(() => {
        nextbtn.disabled = false
    },1000);
}
function nextImg(wichimg){
    let images = ["imges for rooms/room1-hd.jpg","imges for rooms/room2-hd.jpg", "imges for rooms/room3-hd.jpg", "imges for rooms/room4-hd.jpg"]
    let img = document.querySelector(".yahya")
    img.style.animation = "none"; 
    img.offsetWidth; 
    setTimeout(() => {
        img.setAttribute("src", images[wichimg]);
    }, 500);
     img.style.setProperty("animation", "moving 0.5s linear 0s 1 forwards, seting 0.5s linear 0.5s 1 forwards")
}
// scroll down to sign up
document.onscroll = function(e){
    if(scrollY > 4856){
        ("thats is")
        document.querySelector(".go").style.display = "none"
    }else{
        document.querySelector(".go").style.display = "block"
    }
}
document.querySelector(".go").onclick = function(){
    window.scrollTo({
        top: 5635,
        behavior: 'smooth'
    });
    let formdiv = document.querySelector(".formDiv")
    formdiv.style.animation = 'none';  
    formdiv.offsetWidth;
    if(scrollY <= 5635){
        formdiv.style.animation = 'size 2s ease 1'
    }
  
}
/*theam changing that i will regrat doing it */
changeTheme()
function changeTheme(){
    let theme = document.querySelector(".theam")
    let divOfIcon = document.querySelector(".icon")
    let icon = document.querySelector(".fa-regular")
    let swapTheme = true;
    theme.onclick = function(){
        if(swapTheme){
            ("swapTheme")
            divOfIcon.style.left = '65%'
             icon.className = 'fa-regular fa-moon'
             icon.style.color = 'black'
             document.querySelector("body").style.backgroundColor = '#040b11'
             document.querySelector("body").style.color = 'white'
             document.querySelector("header").style.backgroundColor = '#10273d'
             document.querySelector(".formDiv").style.backgroundColor = '#10273d'
             document.querySelector("footer").style.backgroundColor = '#10273d'
             document.querySelector(".footerp p,u").style.color = '#ffffff'
             document.querySelector(".p").style.color = '#ffffff'
             document.querySelector("table").style.color = '#ffffff'
             document.querySelector(".go").style.cssText = 'background-color: #10273d; color: white;border:1px solid white';
             document.querySelectorAll("tr").forEach((tr) => {
                tr.style.backgroundColor = '#10273d';
            });
        }else{
            divOfIcon.style.left = '0%'
            icon.className = 'fa-regular fa-sun'
            document.querySelector("body").style.backgroundColor = 'white'
            document.querySelector("body").style.backgroundColor = 'white'
            document.querySelector("body").style.color = 'black'
            document.querySelector("header").style.backgroundColor = '#F5F5DC'
            document.querySelector(".formDiv").style.backgroundColor = '#F5F5DC'
            document.querySelector("footer").style.backgroundColor = '#F5F5DC'
            document.querySelector(".footerp p,u").style.color = 'black'
            document.querySelector(".p").style.color = 'black'
            document.querySelector("table").style.color = 'black'
            document.querySelector(".go").style.cssText = 'background-color: #F5F5DC; color: black;border:1px solid black';
            document.querySelectorAll("tr").forEach((tr) => {
            tr.style.backgroundColor = '#F5F5DC';
        });
        
    }
    swapTheme = !swapTheme
 }
}

// errormsg.style.display = 'none'
send.onclick = function(){
    class resume{
        constructor(name,email,phone,people,message){
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.numOfPeople = people;
            this.message = message;
        }
    }
    let count = 0;
    let signs = document.querySelectorAll(".Sign");
    let people = document.querySelector(".num").value;
    
    errormsg.style.display = 'none';
    signs.forEach(function(e){

        if(e.value === ""){
            errormsg.style.display = 'block'; 
            e.style.border = '2px solid red'
        }else{
            count++;
        }
        if(count === 4){
            e.style.cssText = "border: 1px solid black"
            errormsg.style.display = 'none';
            let order = new resume(signs[0].value, signs[1].value, signs[2].value,people, signs[3].value)
            orders.push(order)
            signs.forEach((sign) =>{sign.value = ""})
        }else{
            ("you have to fill all")
        }
    })
    
   
}

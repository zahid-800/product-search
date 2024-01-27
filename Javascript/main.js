// mobile menu show mobile_show
function showSidebar(){
    const sidebar= document.getElementById('sidebar').style.display='flex'
  }
  // mobile menu hide mobile_show
  function hideSidebar(){
    const sidebar= document.getElementById('sidebar').style.display='none'
  }
  // mobile menu show mobile_show main
function showMain(){
  const mainnav= document.getElementById('mainnav').style.display='flex'
}
// mobile menu hide mobile_show main
function hidemain(){
  const mainnav= document.getElementById('mainnav').style.display='none'
}
  // nav function end
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

// log in form

function logInform(){
  const sidebar= document.getElementById('frmlogin').style.display='flex'
}
function logInformmain(){
  const sidebar= document.getElementById('frmloginmain').style.display='flex'
}
function logInmain(){
  const sidebar= document.getElementById('frmloginmain').style.display='none'
}

// new collection hover btn open

function newbtnOpen(){
  const openAddcart= document.getElementById("addcart").style.display='block'
}
function newbtnOpens(){
  const openAddcart= document.getElementById("addcart1").style.display='block'
}
function newbtnOpenss(){
  const openAddcart= document.getElementById("addcart2").style.display='block'
}
function newbtnOpensss(){
  const openAddcart= document.getElementById("addcart3").style.display='block'
}
// newColectionproductchange
// card 1
function newColectionproductchange(){
  let productChangenew=document.getElementById("productnewchange").src='./img/wnbsub-1.webp'
}
function newColectionproductchanges(){
  let productChangenew=document.getElementById("productnewchange").src='./img/wnbsub-2.webp'
}
function newColectionproductchanget(){
  let productChangenew=document.getElementById("productnewchange").src='./img/wnbsub-3.webp'
}
// card 2
function newColectionproductchangeb(){
  let productChangenew=document.getElementById("productnewchangeb").src='./img/wnbsub-2-1.webp'
}
function newColectionproductchangesbb(){
  let productChangenew=document.getElementById("productnewchangeb").src='./img/wnbsub-2-2.webp'
}
function newColectionproductchangesbbb(){
  let productChangenew=document.getElementById("productnewchangeb").src='./img/wnbsub-2-3.webp'
}
// card 3
function newColectionproductchangethird(){
  let productChangenew=document.getElementById("productnewchangethird").src='./img/wnbsub-3-1.webp'
}
function newColectionproductchangethirdd(){
  let productChangenew=document.getElementById("productnewchangethird").src='./img/wnbsub-3-2.webp'
}
function newColectionproductchangethirddd(){
  let productChangenew=document.getElementById("productnewchangethird").src='./img/wnbsub-3-3.webp'
}
// card 4
function newColectionproductchangefour(){
  let productChangenew=document.getElementById("productnewchangefour").src='./img/wnbsub-4-1.webp'
}
function newColectionproductchangefourr(){
  let productChangenew=document.getElementById("productnewchangefour").src='./img/wnbsub-4-2.webp'
}
function newColectionproductchangefourrr(){
  let productChangenew=document.getElementById("productnewchangefour").src='./img/wnbsub-4-3.webp'
}

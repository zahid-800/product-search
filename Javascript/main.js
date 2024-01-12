function search(){
    let fillter=document.getElementById('find').Value.toUpperCase();
    let item=document.querySelectorAll('.product');
    let I=document.getElementsByTagName('h3');
    

    for(var i =0; i<=i. length; i++){
          let a= item [i].getElementsByTagName('h3') [0];
          let value= a.innerHTML ||  a.innerText  || a.textContent ;

          if(value.toUpperCase().indexOf(fillter) > -1){
            item [i].style.display=" ";
          }
        else{
            item [i].style.display="none";
          }  
    }
}

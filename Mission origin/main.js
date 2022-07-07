function onScroll(){
//document.getElementById('Rscroll').style.backgroundColor = 'var(--primay-color)'
//if(scrollY == 0){
  //document.getElementById('Rscroll').style.backgroundColor = ''
  
  if(scrollY > 0){
    navigation.classList.add('scroll') //Adiciona uma classe
  } else{
    navigation.classList.remove('scroll')
      
  }
} 

function openmenu(){
  document.body.classList.add("menu-expanded")
}
function closemenu(){
  document.body.classList.remove("menu-expanded")
}

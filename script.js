// header slider function
const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');
let n=0;
function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display='none';   
    }
    imgs[n].style.display='block';
}
changeSlide();
prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--;
    } else{
        n=imgs.length-1;
    }
    changeSlide(); 
    changeColor();      
})
next_btn.addEventListener('click', (e)=>{
    if(n<imgs.length-1){
        n++;
    } else{
        n=0;
    }
    changeSlide(); 
    changeColor();   
})
const scrollContainer = document.querySelectorAll('.products');
//==============================
//----- image slider dotted buttons------
const bottom = document.querySelector('.bottom');
const images = document.querySelectorAll('.header-slider ul img');
const length= images.length;


for (let i=0; i<length; i++){
  const div= document.createElement('div');
  div.className= 'button';
  bottom.appendChild(div);
};

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor='orange';

const resetBg = () => {
  buttons.forEach((button) =>{
    button.style.backgroundColor= 'transparent';
  });
};

const changeColor= () => {
  resetBg();
  buttons[n].style.backgroundColor = 'orange';


};

//==============================
//==========auto slider====================
let slideInterval;
 const startSlideShow = () => {
    slideInterval = setInterval(()=>{
      if(n<imgs.length-1){
        n++;
    } else{
        n=0;
    }
    changeSlide(); 
    changeColor();
    }, 2500);
 };
const stopSlideShow = ()=> {
  clearInterval(slideInterval);
};
startSlideShow();

prev_btn.addEventListener('mouseover', stopSlideShow);
prev_btn.addEventListener('mouseout', startSlideShow);
next_btn.addEventListener('mouseover', stopSlideShow);
next_btn.addEventListener('mouseout', startSlideShow);








//---search bar--------============================

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        
      } else {
        a[i].style.display = "none";
      }
    }
  }
//----





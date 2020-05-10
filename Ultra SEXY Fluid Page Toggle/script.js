/* --------------------------------------------------------
.                 STEP 1: Place the SECTIONS.
.          Give Z-Index lowest to the vissible div


STEP 2: Use Clip-Paths and add ACTIVE Classes.
Add its ACTIVE Class to the visible div in the HTML


.     STEP 3: Create a MainOPEN = true variable
.               (1) Change MainOpen
.               (2) Add Useful Class
.               (3) Remove Useless Class
.               (4) Change Z-INDEX
--------------------------------------------------------- */

let btn = document.querySelector('.btn');
let main = document.querySelector('.main');
let nav = document.querySelector('.nav');

let mainOpen = true;

btn.addEventListener('click', ()=>{
     if (mainOpen) {
          mainOpen = false;

          nav.classList.add('nactive');

          //remove useless class
          setTimeout(()=>{
               main.classList.remove('mactive');
          }, 150);

          //zIndex change
          setTimeout(()=>{
               main.style.zIndex = '100';
               nav.style.zIndex = '10';
          }, 1000);

     } else{
          mainOpen = true;
          main.classList.add('mactive');

          //remove useless class
          setTimeout(()=>{
               nav.classList.remove('nactive');
          }, 150);

          //zIndex change
          setTimeout(()=>{
               main.style.zIndex = '10';
               nav.style.zIndex = '100';
          }, 1000);

     }

})

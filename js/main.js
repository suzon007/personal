var navbar, yPos;
function yScroll(){
   navbar = document.getElementById("pageTop");
   menuUrlId = document.getElementById("menuUrlId");

   yPos = window.pageYOffset;
   if(yPos > 100){

     navbar.classList.add('scrollNavbar');
     navbar.classList.remove('mynav');

   } else {
    
     navbar.classList.add('mynav');
     navbar.classList.remove('scrollNavbar');
   }

 }
 window.addEventListener("scroll", yScroll);

//ACTIVATING TAB in CONTACT page
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

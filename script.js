var img = document.querySelector(".glavna-slika")
function resize (){

if (window.screen.width >= 600) {

img.setAttribute("src","images/image-product-desktop.jpg") 
} 
else { 
    img.setAttribute("src","images/image-product-mobile.jpg") 
    }
}
resize ()
addEventListener("resize", resize);

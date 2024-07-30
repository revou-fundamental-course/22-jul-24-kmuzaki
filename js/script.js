var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imglist = document.getElementsByClassName("main-content-banner");
    if (n > imglist.length) slideIndex = 1;
    else if(n < 1) slideIndex = imglist.length;

    for(i = 0; i < imglist.length; i++) {
        imglist[i].style.display = 'none';
    }
    
    imglist[slideIndex -1].style.display = 'block';
}    

setInterval(() => {
    plusDivs(1);
}, 1000);
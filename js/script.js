// Banner autoslide //
showSlide();

function showSlide() {
    let listimg = document.getElementsByClassName('main-content-banner');
    console.log(listimg);

    let index = 0;
    while (index < listimg.length) {
        listimg[index].style.display = 'none';
        index++;
    }

    listimg[0].style.display = 'block';
}
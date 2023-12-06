function closeMenuOnClick() {
    const burgerLinksArr = document.getElementsByClassName('burger-link');
    const checkbox = document.getElementById('is-check');

    for (let i = 0; i <= burgerLinksArr.length - 1; i++) {
        let burgerLink = burgerLinksArr[i];
        console.log(burgerLink);
        burgerLink.addEventListener("click", () => {
            checkbox.checked = false;
        });
    }
}

closeMenuOnClick();



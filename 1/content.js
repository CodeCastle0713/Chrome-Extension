document.addEventListener('keydown', (event) => {
    if (event.altKey && event.key === 'x') {
        var elements = document.getElementsByTagName("p");
        var ahref = document.querySelector("a");
        alert("Link is : " + ahref.href + " and Domain is : ", elements[elements.length-1].textContent);
    }
});
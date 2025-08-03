
const button= document.getElementById('onclick');
button.addEventListener('click' , () => {
    const randomcolor= '#' + Math.floor(Math.random()*16777215 ).toString(16);
    document.body.style.backgroundColor= randomcolor;
});
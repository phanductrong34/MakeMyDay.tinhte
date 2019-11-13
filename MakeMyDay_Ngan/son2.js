//feedback
document.getElementById("feedback").addEventListener('click', () => {          
    document.querySelector('.modal-feedback').style.display = 'flex';
});
document.querySelector('.mf-content .close').addEventListener('click', () => {
    document.querySelector('.modal-feedback').style.display = 'none';
})


//setting

document.getElementById("setting").addEventListener('click', () => {          
    document.querySelector('.modal-setting').style.display = 'flex';
});
document.querySelector('.ms-content .close').addEventListener('click', () => {
    document.querySelector('.modal-setting').style.display = 'none';
})

//about us
document.getElementById("aboutus").addEventListener('click', () => {          
    document.querySelector('.modal-aboutus').style.display = 'flex';
});
document.querySelector('.ma-content .close').addEventListener('click', () => {
    document.querySelector('.modal-aboutus').style.display = 'none';
})
const panels=document.querySelectorAll('.hello')

 panels.forEach((panel) => {
    panel.addEventListener('click',()=>{
        // removeEventListener()
        panel.classList.add('active');
    })
});
// function removeEventListener(){
// removeEventListener((panels)=>{
// panels.removeEventListener('active')
// })
// }
// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }
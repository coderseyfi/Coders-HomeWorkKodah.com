let bar = document.querySelector('.bar')
let listphone = document.querySelector('.for-phone-list')
 
bar.addEventListener('click',()=>{
    listphone.classList.toggle('list-active');
    console.log('text');
})
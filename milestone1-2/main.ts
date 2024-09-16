const tagbutton = document.getElementById('toggle-skills') as HTMLButtonElement
const skilling = document.getElementById('skills') as HTMLElement

tagbutton.addEventListener('click',()=>{
    if(skilling.style.display === 'none'){
        skilling.style.display = 'block'

    }else{
        skilling.style.display = 'none'
    }
});

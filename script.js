'use strict'

let tabs=document.querySelectorAll('.tabs>[type=radio]');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('change',showTab);
    
}
function showTab() {
    let tabNumber=this.id.slice(-1);
    let sections=document.querySelectorAll('.tab-section');
    for (let i = 0; i <sections.length; i++) {
        sections[i].style.display='none';
        
    }
    document.getElementById('sect_'+tabNumber).style.display='block';
}

function progressView(){
    let diagramBox = document.querySelectorAll('.diagram.progress');
    diagramBox.forEach((box) => {
        let deg = (360 * box.dataset.percent / 100) + 180;
        if(box.dataset.percent >= 50){
            box.classList.add('over_50');
        }else{
            box.classList.remove('over_50');
        }
        box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
        box.querySelector('.text b').innerHTML=box.dataset.percent;
    });
}
progressView();

function scale() {
    this.classList.toggle('big');
}

let scales=document.querySelectorAll('.scale');
for (let i = 0; i < scales.length; i++) {
    scales[i].addEventListener('click',scale);
    
}
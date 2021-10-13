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
let onebtn=document.getElementById('one');
let twobtn=document.getElementById('two');
let threebtn=document.getElementById('three');
let closebtn=document.getElementById('close-btn');
let next=document.getElementById('next-btn');
let prev=document.getElementById('prev-btn');
let content=document.getElementById('body-content');
let displayCard=document.getElementById('display-card');
let showbtn=document.getElementById('show-btn');

let step=1;
let messages=['Hi','Hello','Welcome'];

function displayContent()
{
    content.innerText=`Step:${step}=>Message:${messages[step-1]}`;
    
    if(step>=1)onebtn.classList.add('active');
    else onebtn.classList.remove('active');

    if(step>=2)twobtn.classList.add('active');
    else twobtn.classList.remove('active');

    if(step>=3)threebtn.classList.add('active');
    else threebtn.classList.remove('active');
}
displayContent();

next.addEventListener('click',function(){
    if(step<3)
    {
        step++;
        displayContent();
    }
})

prev.addEventListener('click',function(){
    if(step<=3 && step>1)
    {
        step--;
        displayContent();
    }
})

closebtn.addEventListener('click',function(){
    displayCard.classList.add('hidden');
})

showbtn.addEventListener('click',function(){
    displayCard.classList.remove('hidden');
})

document.addEventListener('keyup',function(e){
    if(e.key=='Escape' && !displayCard.classList.contains('hidden'))
    {
        displayCard.classList.add('hidden');
    }
})

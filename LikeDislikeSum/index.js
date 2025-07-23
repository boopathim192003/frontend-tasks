let like=document.getElementById('like-btn');
let dislike=document.getElementById('dislike-btn');
let likeInc=document.getElementById('like-Inc');
let dislikeInc=document.getElementById('Dislike-Inc');
let sumvalue=document.getElementById('sum-value');

let likes=0;
let dislikes=0;
let sum=0;
like.addEventListener('click',function(){
    likes=likes+1;
    sum=sum+1;
    likeInc.innerText=`Like-${likes}`;
    sumvalue.innerText=`Sum of Likes & Dislikes is:${sum}`;
})
dislike.addEventListener('click',function(){
    dislikes=dislikes+1;
    sum=sum+1;
    dislikeInc.innerText=`DisLike-${dislikes}`;
    sumvalue.innerText=`Sum of Likes & Dislikes is:${sum}`;
})
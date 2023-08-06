let gameSeq=[];
let userSeq=[];

let btns=['yellow','red','purple','green']

let started=false;
let level=0;
let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
 if(started==false){
    console.log('game starerd');
    started=true;

    levelUp();
 }

})

function levelUp(){
    userSeq=[];
  level++; 
  h2.innerText= `Level ${level}`;
  
  //random btn choose
  let randomIdx=Math.floor(Math.random()*3);
  let randColor=btns[randomIdx];
  let randbtn=document.querySelector(`.${randColor}`);

gameSeq.push(randColor);
console.log(gameSeq);
  btnFlash(randbtn);
}

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
         btn.classList.remove('flash');
    },250)

}

function checkAns(idx){
    // console.log('current level::',level);
    //let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over Your Last Score Was <b>${level}</b> press any key to Start`;
        document.querySelector('body').style.background='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },250);
        reset();
    }

}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function btnPress(){
   let btn=this;
   btnFlash(btn);

   userColor=btn.getAttribute('id');
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}
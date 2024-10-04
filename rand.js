const students = ['陈安卓1','陈博原2','陈思齐3','戴楚浩4','方奕臻5','黄海俊6','黄一灵7','蒋羽舒8','金奕皓9','林思翰10','林子澄11','马天心12','马筱晓13','朴致贤14','沈昊霖15','谭晗煜16','严子誉17','张洛铭18','张琰晢19','周子航20'];
const morals =['Journey of a thousand miles begins with a single step.','Reading is like making a leap towards a higher level.','Giving up isn\'t difficult, but being determined to win must be cool.','Aim high, head high to reach the top.','Each careful step matters towards the final success.','Be calm and composed to be better.','You don\'t have to be great to start, you have to start to be great.','What works in Hollywood may not work in Bollywood.','Even the smallest nudges to the present can have major impacts in the future.','Life is not always a bed of roses.','Invest in preparedness, not prediction.','Still waters run deep.','If you\'re not willing to do a wholesale, 24/7, 100 percent swap to others, there\'s no point in being jealous.','Our difficulty dealing with probability makes us overly sensitive to inevitable risks.','Calm plants the seed of crazy.','Plan like a pessimist and dream like an optimist.','There\'s no perfect species that adapt to everything at all times.','There\'s a huge advantage to being a little imperfect.','It\'s supposed to be hard.','The world is driven by forces that can\'t be measured.','Knowledge of the things that never change is more useful.','The only thing harder than gaining a competitive advantage is keeping one.','Great things in life gain their value from patience and scarity.']
const stu1 = document.getElementsByClassName('stu1')[0];
const stu2 = document.getElementsByClassName('stu2')[0];
const exchange = document.getElementsByClassName('exchange')[0];
const btn = document.getElementsByClassName('btn')[0];
const working = document.getElementsByClassName('working')[0];
const restart = document.getElementsByClassName('restart')[0];
const history = document.getElementsByClassName('history')[0];
const moral = document.getElementsByClassName('moral')[0];
let randomNumber = 0;
let randomMoral;
let pos1 = undefined;
let pos2 = undefined;
let posX = undefined;
let posY = undefined;
const delay = ms => new Promise(res => setTimeout(res, ms));

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function generating() {
  leftOut(10);rightOut(10);
}

//animations
async function leftOut(distance){
  for ( let i = 0; i<=distance; i+=1/4) {
    pos1 = 30-i;
    stu1.style.left = pos1+'%';
    stu1.style.opacity = 1 - (i / distance);
    await delay(10);
  }
} 

async function rightOut(distance){
  for ( let i = 0; i<=distance; i+=1/4) {
    pos2 = 70+i;
    stu2.style.left = pos2+'%';
    stu2.style.opacity = 1 - (i / distance);
    await delay(10);
  }
} 

async function leftIn(distance){
  for ( let i = 0; i<=distance; i+=1/4) {
    pos1 = 20+i;
    stu1.style.left = pos1+'%';
    stu1.style.opacity = i / distance;
    await delay(10);
  }
} 

async function rightIn(distance){
  for ( let i = 0; i<=distance; i+=1/4) {
    pos2 = 80-i;
    stu2.style.left = pos2+'%';
    stu2.style.opacity = i / distance;
    await delay(10);
  }
} 

async function mov1(distance){
  for(let i=0; i<distance; i+=1/4){
    posX = 50-i;
    exchange.style.top = posX+'%';
    exchange.style.opacity = 1-(i/distance);
    posX = 60-i;
    working.style.top = posX+'%';
    working.style.opacity = (i/distance);
    await delay(15);
  }
}

async function mov2(distance){
  for(let i=0; i<distance; i+=1/4){
    posX = 40+i;
    exchange.style.top = posX+'%';
    exchange.style.opacity = (i/distance);
    posX = 50+i;
    working.style.top = posX+'%';
    working.style.opacity = 1-(i/distance);
    await delay(15);
  }
}

async function fade(){
  for(let i=0.3;i<1;i+=1/100){
    moral.style.opacity = 1-i;
    await delay(7.5);
  }
}

async function appear(){
  for(let i=0;i<0.7;i+=1/100){
    moral.style.opacity = i;
    await delay(10);
  }
}

//main
btn.addEventListener("click", async function(){
    if(students.length !== 0){
    restart.style.opacity = '1';
    history.style.opacity = '1';
    generating();mov1(10);fade();
    await delay(2400);
    exchange.innerHTML =  'will exchange with'
    mov2(10);leftIn(10);rightIn(10);appear();
    randomNumber = students[getRandomNumber(0, students.length-1)];
    randomMoral = morals[getRandomNumber(0,morals.length-1)];
    stu1.innerHTML = randomNumber;
    moral.innerHTML = randomMoral;
    let index = students.indexOf(randomNumber);
    if(index !== -1) {
    students.splice(index,1);
    }
    let index2 = morals.indexOf(randomMoral);
    if(index2 !== -1) {
      morals.splice(index2,1);
    }
    student2();}
    else{
      fade();
      stu1.innerHTML = '';
      stu2.innerHTML = '';
      exchange.innerHTML = "We're all done!"
      exchange.style.fontSize = '80px';
      exchange.style.background = 'linear-gradient(rgb(170,190,230), rgb(180,160,240))';
      exchange.style.backgroundClip = 'text';
    }
}
);

function student2() {
  if(students.length !== 0){
  randomNumber = students[getRandomNumber(0,students.length-1)];
  stu2.innerHTML = randomNumber;
  let index = students.indexOf(randomNumber);
  if(index !== -1) {
    students.splice(index,1);}
  }
}

restart.addEventListener("click",function(){
  document.location.reload();
})

history.addEventListener("click",function(){
  history.go(-1);
})


//above for main page
//below for sign-in page

const signInArea = document.getElementById('container');
const contentArea = document.getElementById('main');
const logNameInput = document.getElementById('logName');
const logPwdInput = document.getElementById('logPwd');
const logBtn = document.querySelector('.logBtn');

signInArea.style.display = 'block';
contentArea.style.display = 'none';

logBtn.addEventListener('click', function(){
  if((logNameInput.value == 'BoyuanChen' && logPwdInput.value == 'boyuan0417') 
      || (logNameInput.value == 'Public' && logPwdInput.value == '142857')){
    signInArea.style.display = 'none';
    contentArea.style.display = 'block';
  }
})

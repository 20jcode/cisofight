//사용자 게임화면 렌더링을 위한 js
//const key = require('keySetting');
//const unit = require('unit');
//폐기됨

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d"); //2d로 가져옴

//유닛 객체에 대한 속성 정의

let life = 10;
let pos_X = 0;
let pos_Y = 0;
let speed = 10;
ctx.fillStyle = "red";
ctx.fillRect(pos_X,pos_Y,50,50); //네모를 채운다. 위치를 지정한다.

//키 입력 상태 정의
let upKey = false;
let downKey = false;
let leftKey = false;
let rightKey = false;
let qKey = false; //해당 키를 눌렸는가에 대해서, 쿨타임이 있으므로 숫자로?
let wKey = false;
let eKey = false;
let rKey = false;

//사용자 키 입력에 따른 socket 통신
//key를 눌렸을 경우 해당 socket이벤트가 발생하도록 된다?
document.addEventListener("keydown", keyDownTest,false);
document.addEventListener("keyup",keyUpTest,false);

function keyDownTest(e){ //키를 눌렸을 경우 움직이도록
    switch (e.key){
        case 'ArrowUp' :
            upKey = true;
            break;

        case 'ArrowDown' :
            downKey = true;
            break;

        case 'ArrowLeft' :
            leftKey = true;
            break;

        case 'ArrowRight' :
            rightKey = true;
            break;

        default :
            break; //다른 키 입력한 경우 처리
            //스킬에 대한 키는 아직 세팅안함

    }
}

function keyUpTest(e){ //키를 때면 멈추도록
    switch (e.key){
        case 'ArrowUp' :
            upKey = false;
            break;

        case 'ArrowDown' :
            downKey = false;
            break;

        case 'ArrowLeft' :
            leftKey = false;
            break;

        case 'ArrowRight' :
            rightKey = false;
            break;

        default :
            break; //다른 키 입력한 경우 처리
            //스킬에 대한 키는 아직 세팅안함

    }
}

function renderMain(){
    if(upKey){ //위로 이동한다
        pos_Y += speed;
        ctx.translate(pos_X,pos_Y);
    }
    if(downKey){
        pos_Y -= speed;
        ctx.translate(pos_X,pos_Y);
    }
    if(leftKey){
        pos_X -= speed;
        ctx.translate(pos_X,pos_Y);
    }
    if(rightKey){
        pos_X += speed;
        ctx.translate(pos_X,pos_Y);
    }
}

setInterval(renderMain,10);

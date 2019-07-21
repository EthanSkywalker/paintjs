const canvas = document.getElementById("jsCanvas"); // canvas 는 html5 엘리먼트
const ctx = canvas.getContext("2d");    // 캔버스안에서 픽셀을 건트롤함.
const color = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = ""
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height= CANVAS_SIZE; //캔버스 크기지정

ctx.strokeStyle = INITIAL_COLOR;        // 내가 그릴 선이 이 색을 가진다.
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;                // 너비가 2.5

let painting = false;
let filling = false;

function stopPainting(event){
    painting = false;
}

function startPainting(){ 
    painting = true;
}

function onMouseMove(evnet){
    const x = evnet.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y) // 내가 움직이는 동안 path 를 만든다 (x, y)
    }else{
        ctx.lineTo(x,y) 
        ctx.stroke()    // 캔버스에 실제로 path 를 그리는 것
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;    // 그릴 색을 선택
    ctx.fillStyle = color;      // 채울 색을 선택
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

 function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick(){                       // 캔버스 채우기
    if(filling){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);   // 마우스가 이동 할 때
    canvas.addEventListener('mousedown', startPainting);   // 마우스를 눌렀을 때
    canvas.addEventListener('mouseup', stopPainting);       // 마우스를 클릭하지 않을때
    canvas.addEventListener('mouseleave', stopPainting); // 마우스가 떠났을 때
    canvas.addEventListener('click', handleCanvasClick);
}

Array.from(color).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

if (range) {
    range.addEventListener("input", handleRangeChange);
}
  
if (mode) {
    mode.addEventListener("click", handleModeClick);
}
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

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
        ctx.moveTo(x,y)
    }
}

function onMouseDown(event){
    painting = true;
}

if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);   // 마우스가 이동 할 때
    canvas.addEventListener('mousedown', startPainting);   // 마우스를 눌렀을 때
    canvas.addEventListener('mouseup', startPainting);       // 마우스를 클릭하지 않을때
    canvas.addEventListener('mouseleave', stopPainting); // 마우스가 떠났을 때
}
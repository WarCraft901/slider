const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

function changeImage(){
    if(idx>img.length - 1) {
        idx=0;
    } else if(idx<0){
        idx = img.length -1;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;

}


rightBtn.addEventListener('click',function change(){

    idx ++;

    changeImage()

});
window.addEventListener('keypress', (e)=>{
    if(e.key=='d'){
    idx ++;
    changeImage();
 }

})

// rightBtn.addEventListener('keydown',(e)=>{
//  if(e.key=='d'){
//     idx ++;
//     changeImage();
//  }
// });

leftBtn.addEventListener('click',function change(){

    idx --;

    changeImage();

});

window.addEventListener('keypress', (e)=>{
    if(e.key=='a'){
    idx --;
    changeImage();
 }

})

// leftBtn.addEventListener('keydown',(e)=>{
//     if(e.key=='a'){
//        idx --;
   
//        changeImage();
//     }
//    });
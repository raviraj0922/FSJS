// const circle = document.getElementById ('circle')
// const body = document.querySelector('body')

// document.addEventListener("click", function(e){
//     createCircle(e.clientX, e.clientY);
// });

// function createCircle(x, y){
//     let circle =document.createElement("circle");
//     circle.style.left = x - 25 + "px";
//     circle.style.top = y - 25 + "px";
//     document.body.appendChild(circle);
// }

    document.addEventListener("DOMContentLoaded", function(){
    document.addEventListener("click", function(e){
        createCircle(e.clientX, e.clientY);
    });
    function createCircle(x, y){
        let circle = document.createElement('div');
        circle.className = 'circle';

        circle.style.left = x - 25 + 'px';
        circle.style.top = y - 25 + 'px';

        document.body.appendChild(circle);
    }
});
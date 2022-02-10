//slide right
document.addEventListener("DOMContentLoaded",function(){
    var slides = document.querySelectorAll('div.slide div');
    auto();
    function auto(){
    setInterval(function(){
        var slide = document.querySelector('div.slide div.out');
        var vitrislide = 0;
        for(var i = 0 ; slide = slide.previousElementSibling ; vitrislide ++){
        }
        for(var i = 0 ; i < slides.length; i++){
            slides[i].classList.remove('out');
        }
        if(vitrislide == slides.length - 1){
            slides[0].classList.add('out');
        }
        else{
        slides[vitrislide].nextElementSibling.classList.add('out');
        console.log(slide);
    }
    },2000)
}  
},false)

//login
function showlogin(){
    var all = document.querySelectorAll('div.test1 div');
    var one = document.querySelector(' div.test div.borderlogin div.move div.delete div.phumo');
    all[1].classList.remove('delete');
    all[1].classList.add('move');
    all[0].classList.add('phumo');
    console.log(one);
}
function closeform(){
    var al = document.querySelectorAll('div.test1 div');
    var on = document.querySelector(' div.test div.borderlogin div.move div.delete div.phumo');
    al[0].classList.remove('phumo');
    al[1].classList.remove('move');
    al[1].classList.add('delete');
    console.log(on);
}

//signup
function signup(){
    var all = document.querySelectorAll('div.test2 div');
    var one = document.querySelector(' div.test div.bordersignup div.movesignup div.deletesignup div.phumo');
    all[1].classList.remove('deletesignup');
    all[1].classList.add('movesignup');
    all[0].classList.add('phumo');
    console.log(one);
}

function closeformsignup(){
    var al = document.querySelectorAll('div.test2 div');
    var on = document.querySelector(' div.test div.bordersignup div.movesignup div.deletesignup div.phumo');
    al[0].classList.remove('phumo');
    al[1].classList.remove('movesignup');
    al[1].classList.add('deletesignup');
    console.log(on);
}


//cach2

// function  showlogin(){  
//     var main = document.getElementById("show");   
//         var borderlogin = document.createElement('div');
//         borderlogin.onclick = function(e){
//             if(e.target.closest('.close'))
//             {
//                 main.removeChild(borderlogin);
//             }
//             else if(e.target.closest('h3'))
//             {
//                 main.removeChild(borderlogin);
//             }
//         }
//         borderlogin.innerHTML = `
//         <div class = "phumo">
//         <div class="borderlogin">
//              <form class="login" action= "index.html" method="POST">
//              <div class="close"></div>
//              <h1>Đăng nhập</h1>
//              <input type="text" name="user" placeholder="Tên đăng nhập">
//              <input type="password" name="matkhau" placeholder="Mật khẩu">
//              <input type="button" name="accept" value="Đăng nhập">
//              </form>
//              <div class="subscribe">
//              <h2>Bạn chưa có tài khoản ?</h2>
//              <h3>Đăng kí ngay</h3>
//             </div>
//         </div>
//         </div>`;
//         main.append(borderlogin);
// }
let prev=0,now=0;
let resizeTimer;
window.onresize = function(){ location.reload(); }
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
var timer;
function load(){//HEADER
  /*setInterval(function() {
  window.location.reload();
  }, 450000);*/
  start_roll();
  setInterval(start_roll,36000);
}
function start_roll(){
  setTimeout(rolling0,0000);
  setTimeout(rolling1,12000);
  setTimeout(rolling2,24000);
}
function rolling0(){
  document.getElementById("roll3").classList.remove("show");
  document.getElementById("roll1").classList.add("show");
  document.getElementById("comm3").classList.remove("show");
  document.getElementById("comm1").classList.add("show");
}
function rolling1(){
  document.getElementById("roll1").classList.remove("show");
  document.getElementById("roll2").classList.add("show");
  document.getElementById("comm1").classList.remove("show");
  document.getElementById("comm2").classList.add("show");
}
function rolling2(){
  document.getElementById("roll2").classList.remove("show");
  document.getElementById("roll3").classList.add("show");
  document.getElementById("comm2").classList.remove("show");
  document.getElementById("comm3").classList.add("show");
}
function scrollSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}
function exp(){
  document.getElementById("header").classList.toggle("expand");
  document.getElementById("locked").classList.toggle("move");
  document.getElementById("expand").classList.toggle("move");
}
let expand__switch=0;
window.addEventListener('orientationchange', function () {
  var originalBodyStyle = getComputedStyle (document.body).getPropertyValue('display');
  document.body.style.display='none';
  setTimeout(function () {
    document.body.style.display = originalBodyStyle;
  }, 10);
  window.location.reload();
});
window.addEventListener('scroll', function(event){
  now=window.pageYOffset;
  //document.getElementById('use').innerText=now.toFixed(1);
  if(now>prev){
    document.getElementById("header").classList.add("mode0");
    if(window.scrollY===0){
      document.getElementById("header").classList.remove("mode2");
      document.getElementById("user-nav").classList.remove("mode1");
      document.getElementById("user-nav__logo").classList.remove("mode1");
      document.getElementById("expand").classList.remove("active");
      document.getElementById("expand1").classList.remove("active");
      document.getElementById("expand2").classList.remove("active");
      document.getElementById("expand3").classList.remove("active");
    }
  }
  else{
      if(window.scrollY===0){
          document.getElementById("header").classList.remove("mode2");
          document.getElementById("user-nav").classList.remove("mode1");
          document.getElementById("user-nav__logo").classList.remove("mode1");
          document.getElementById("expand").classList.remove("active");
      document.getElementById("expand1").classList.remove("active");
      document.getElementById("expand2").classList.remove("active");
      document.getElementById("expand3").classList.remove("active");
      }
      else{
          document.getElementById("header").classList.add("mode2");
          document.getElementById("user-nav").classList.add("mode1");
          document.getElementById("user-nav__logo").classList.add("mode1");
          document.getElementById("expand").classList.add("active");
          document.getElementById("expand1").classList.add("active");
          document.getElementById("expand2").classList.add("active");
          document.getElementById("expand3").classList.add("active");
    }
    document.getElementById("header").classList.remove("mode0");
  }
  prev=now;
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.addEventListener(wheelEvent, preventDefault, wheelOpt);
  window.addEventListener('touchmove', preventDefault, wheelOpt); 
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
var time;
function expand(){
  document.getElementById("nav").classList.remove("show");
  document.getElementById("header").classList.add("mode2");
  document.getElementById("user-nav").classList.toggle("mode1");
  document.getElementById("user-nav__logo").classList.toggle("mode1");
  document.getElementById("expand").classList.toggle("clicked");
  document.getElementById("expand1").classList.toggle("clicked");
  document.getElementById("expand2").classList.toggle("clicked");
  document.getElementById("expand3").classList.toggle("clicked");
  if(expand__switch===0){
    disableScroll();
    exp();
    time=setTimeout(()=>{document.getElementById("nav").classList.add("show")},700);
    expand__switch=1;
    if(window.pageYOffset!==0){
    document.getElementById("user-nav").classList.add("mode1");
    document.getElementById("user-nav__logo").classList.add("mode1");
    }
  }
  else{
    enableScroll();
    setTimeout(()=>{exp()},700);
    clearTimeout(time);
    document.getElementById("nav").classList.remove("show");
    expand__switch=0;
    if(window.pageYOffset===0)
    document.getElementById("header").classList.remove("mode2");
    else{
      document.getElementById("user-nav").classList.add("mode1");
    document.getElementById("user-nav__logo").classList.add("mode1");
    }
  }
}
let pos=0, position=0, count=0;
function Scroll(dir){
        switch(dir){
            case 1:
                if(pos!==-100){
                    pos-=20;
                    document.getElementById("header").classList.add("mode0");
                    document.getElementById("scrollable").style.left=(pos.toString()).concat("%");
                    document.getElementById("scroll__left").classList.remove("deactivate");
                    document.getElementById("scroll__left").classList.add("activate");
                    if(pos===-100)
                    {
                        document.getElementById("scroll__right").classList.remove("activate");
                        document.getElementById("scroll__right").classList.add("deactivate");
                    } 
                }
            break;
            default:
                if(pos!==0){
                    pos+=20;
                    document.getElementById("header").classList.add("mode0");
                    document.getElementById("scrollable").style.left=(pos.toString()).concat("%");
                    document.getElementById("scroll__right").classList.remove("deactivate");
                    document.getElementById("scroll__right").classList.add("activate");
                    if(pos===0){
                        document.getElementById("scroll__left").classList.remove("activate");
                        document.getElementById("scroll__left").classList.add("deactivate");
                    }
                }
            break;
        }
}
let touchstartX = 0, touchendX = 0, touchstartY = 0, touchendY = 0;
function checkDirection() {
    document.getElementById("screen3__panel1").classList.remove("card__active");
    document.getElementById("screen3__panel2").classList.remove("card__active");
    document.getElementById("screen3__panel3").classList.remove("card__active");
    document.getElementById("screen3__panel4").classList.remove("card__active");
    document.getElementById("screen3__panel5").classList.remove("card__active");
    if (touchstartX-touchendX>100) { if(count<6)count++;}
    if (touchstartX-touchendX<-100) { if(count>0)count--;}
     switch(count){
          case 0:position=0;break;
          case 1:position=-62;document.getElementById("screen3__panel1").classList.add("card__active");break;
          case 2:position=-131;document.getElementById("screen3__panel2").classList.add("card__active");break;
          case 3:position=-200;document.getElementById("screen3__panel3").classList.add("card__active");break;
          case 4:position=-269;document.getElementById("screen3__panel4").classList.add("card__active");break;
          case 5:position=-338;document.getElementById("screen3__panel5").classList.add("card__active");break;
          default:position=-400;break;
      }
      document.getElementById("header").classList.add("mode0");
      document.getElementById("scrollable").style.left=(position.toString()).concat("%");
}
document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
});
document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  if(window.innerWidth<541&&window.pageYOffset>1100&&window.pageYOffset<2200&&(Math.abs(touchstartY-touchendY)<200))
    checkDirection();
    else if(window.innerWidth<821&&window.pageYOffset>2300&&window.pageYOffset<3400&&(Math.abs(touchstartY-touchendY)<200))
    checkDirection();
    else if(window.innerWidth<913&&window.pageYOffset>2600&&window.pageYOffset<4000&&(Math.abs(touchstartY-touchendY)<200))
    checkDirection();
});
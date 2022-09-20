/*
DOM
var img1  = document.getElementById("")
var imgs  = document.getElementsByClassName("img-item");//IE8
var h4s  = document.getElementsByTagName("h4");

var h4s  = document.getElementsByName("gender");
var h4s  = document.querySelectorAll(".container h1");//IE8
var h4s  = document.querySelector(".container .item");//IE8

element.style.anyCssProperty
element.style.cssText
element.innerHTML
element.classList

*/




// var imgs = Array.from(document.getElementsByClassName("img-item"));
// var lightboxcontainer = document.getElementById("lightboxcontainer");
// var lightboxitem = document.getElementById("lightboxitem");
// var closeIcon = document.getElementById("close");
// var prevIcon = document.getElementById("prev");
// var nextIcon = document.getElementById("next");
// var currentSlideIndex = 0 ;
// for (var i =0 ;i < imgs.length  ; i++) {

//     imgs[i].addEventListener("click" , openLightBox) 

//     }
// function openLightBox(eventInfo)
// {
//     lightboxcontainer.style.display = "flex";
//     var imgSrc = eventInfo.target.src ;
//     lightboxitem.style.backgroundImage = `url(${imgSrc})`;
//     currentSlideIndex = imgs.indexOf(eventInfo.target);
// }  
// function closeLightBox()
// {
//     lightboxcontainer.style.display = "none";
// }  
// function nextSlide()
// {
//     currentSlideIndex++ ;
//     if (currentSlideIndex == imgs.length) {
//         currentSlideIndex = 0
//     }
//     var imgSrc =imgs[currentSlideIndex].src;
//     lightboxitem.style.backgroundImage=`url(${imgSrc})`;

// }
// nextIcon.addEventListener("click" , nextSlide);
// function prevSlide()
// {
//     currentSlideIndex-- ;
//     if (currentSlideIndex < 0) {
//         currentSlideIndex = imgs.length-1 ;
//     }
//     var imgSrc =imgs[currentSlideIndex].src;
//     lightboxitem.style.backgroundImage=`url(${imgSrc})`;
// }
// prevIcon.addEventListener("click" , prevSlide);
// closeIcon.addEventListener("click" , closeLightBox);


// ---------------------------------------------------------------------------------------


var imgs = Array.from(document.getElementsByClassName("img-item"));
var lightboxcontainer = document.getElementById("lightboxcontainer");
var lightboxitem = document.getElementById("lightboxitem");
var closeBtn = document.getElementById("close");
var prevIcon = document.getElementById("prev");
var nextIcon = document.getElementById("next");
var currentSlideIndex = 0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", openLightBox)

}

function openLightBox(eventInfo) {
    let imgSrc = eventInfo.target.src;
    lightboxcontainer.style.display = "flex";
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
    currentSlideIndex = imgs.indexOf(eventInfo.target)
    console.log(imgSrc);
}

function closeLightBox() {
    lightboxcontainer.style.display = "none";
}
closeBtn.addEventListener("click", closeLightBox);

function next() {
    currentSlideIndex++;
    if (currentSlideIndex == imgs.length) {
        currentSlideIndex = 0;
    }
    let imgSrc = imgs[currentSlideIndex].src;
    // console.log(imgSrc);
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
}
nextIcon.addEventListener("click", next)

function prev() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = imgs.length - 1;
    }
    let imgSrc = imgs[currentSlideIndex].src;
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
}
prevIcon.addEventListener("click", prev);

document.addEventListener("keydown", function(eventInfo) {
    if (eventInfo.keyCode == 39) {
        next();
    } else if (eventInfo.keyCode == 37) {
        prev()
    } else if (eventInfo.keyCode == 27) {
        closeLightBox()
    }
})





// function calc() {
//     let array=[1,2,1,2,3,2,1,3,4,2,1,3,4,2,5,1,2,3,5,4,6,1,4,3,6]
// let newArry=[]
// let obj={}
//     array.forEach(each => {
//         if (!obj[each]) {
//             obj[each]=true
//             console.log(obj);
//             newArry.push(each)
//             console.log(newArry);
//         }
//     });
// }
// calc();
let slider = document.getElementById("slider")
let slide = 0

function prev(){
    if (slide !== 0){
        slide += 100
        console.log(slide);
        slider.style.marginLeft = slide + "%"
    }   
}

function next(){
    if(slide !== -300){
        slide -= 100
        console.log(slide);
        slider.style.marginLeft = slide + "%"
    }
    
}
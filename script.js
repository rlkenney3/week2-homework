document.addEventListener("DOMContentLoaded", function(){  
    var imageArray = [
        "./images/1.jpeg", 
        "./images/2.png", 
        "./images/3.jpeg", 
        "./images/4.jpeg", 
        "./images/5.jpeg", 
        "./images/6.jpeg", 
        "./images/7.jpeg", 
        "./images/8.jpeg", 
        "./images/9.jpeg", 
        "./images/10.jpeg", 
        "./images/11.jpeg", 
        "./images/12.png", 
    ];


    var imageArrayIndex = 0;
    
    var leftButton = document.querySelector("#leftButton");
    var rightButton = document.querySelector("#rightButton");
    var imageHolder = document.getElementById("imageHolder");

    //src = imageArray[0]
    imageHolder.src = imageArray[imageArrayIndex];

    rightButton.addEventListener('click', function(){
        if(imageArrayIndex < imageArray.length - 1){
            imageArrayIndex++; //increment 0 to 1
            imageHolder.src = imageArray[imageArrayIndex]; // src = imageArray[1]
        }
        else{
            console.log("Out of Bounds on right button!")
        }
    })
    
    leftButton.addEventListener('click', function(){
        if(imageArrayIndex > 0){
            imageArrayIndex--; //increment 1 to 0
            imageHolder.src = imageArray[imageArrayIndex]; // src = imageArray[0]
        }
        else{
            console.log("Out of Bounds on left button!")

        }
    })
    
    
    
    
})
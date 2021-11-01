

function burst(burstcolor) {
    if(current == burstcolor && click !=1) {
        count++
        click = 1
        score.innerHTML = count
        audio.play();
    } else if(click != 1 && current != burstcolor) {
        count--
        score.innerHTML = count
    } else {
        
    }
    if(count <= 0) {
        flag = 0
        score.innerHTML = "LOSE"
        audio2.play()
        clearInterval(time)
    }
}

function balloon() {
    if(click != 1) {
        balloonColor.style.color = "black"
        balloonColor.innerHTML = "FAILED"
        score.style.color = "green"
        score.style.fontSize = 60 + "px"
        click = 1
        audio2.play()
        clearInterval(time)
    } else {
        for(let i=0;i<color.length;i++) {
            if(i==0) {
                let rand1 = Math.round(Math.random() * blockh) 
                let rand2 = Math.round(Math.random() * blockw) + Math.round(Math.random() * 200)
                red.style.top = rand1 + "px"
                red.style.left = rand2 + "px"
                red.style.zIndex = 0
            }
            if(i==1) {
                let rand1 = Math.round(Math.random() * blockh)
                let rand2 = Math.round(Math.random() * blockw) + Math.round(Math.random() * 200)
                orange.style.top = rand1 + "px"
                orange.style.left = rand2 + "px"
                red.style.zIndex = 0
            }
            if(i==2) {
                let rand1 = Math.round(Math.random() * blockh) 
                let rand2 = Math.round(Math.random() * blockw) + Math.round(Math.random() * 200)
                green.style.top = rand1 + "px"
                green.style.left = rand2 + "px"
                red.style.zIndex = 0
            }
            if(i==3) {
                let rand1 = Math.round(Math.random() * blockh)
                let rand2 = Math.round(Math.random() * blockw) + Math.round(Math.random() * 200)
                blue.style.top = rand1 + "px"
                blue.style.left = rand2 + "px"
                red.style.zIndex = 0
            }
            if(i==4) {
                let rand1 = Math.round(Math.random() * blockh)
                let rand2 = Math.round(Math.random() * blockw) + Math.round(Math.random() * 200)
                gray.style.top = rand1 + "px"
                gray.style.left = rand2 + "px"
                red.style.zIndex = 0
            }
        }
        let ball = document.getElementById("balloon-color").innerHTML 
        let random = Math.floor(Math.random() * color.length)
        current = color[random]
        balloonColor.style.color = current
        balloonColor.innerHTML = current
        click = 0
    }
}

var audio = new Audio('files/burst.mp3');
var audio2 = new Audio('files/over.mp3')

const color = ["red","green","orange","blue","gray"]
let flag = 1
let score = document.getElementById("score")
let balloonColor = document.getElementById("balloon-color")
let click = 1
let block = document.getElementById("block")
let blockh = Number(block.clientHeight)
let blockw = Number(block.clientWidth)
let red = document.getElementById("red")
let blue = document.getElementById("blue")
let orange = document.getElementById("orange")
let green = document.getElementById("green")
let gray = document.getElementById("gray")
let current
let count = 0 
let time = setInterval(balloon, 1500);
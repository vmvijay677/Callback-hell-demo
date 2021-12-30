let wish = document.createElement('button');
wish.setAttribute('type', 'button');
wish.setAttribute('class', 'btn btn-danger lg');
wish.setAttribute('id', 'wish');
wish.addEventListener('click', output);
wish.innerHTML = "Let's wish !!!";
document.body.append(wish);



function output(){
let para = document.createElement('p');
para.setAttribute('id', 'p1');
document.body.append(para);
let line1 = setTimeout(ten, 1000);
let line2 = setTimeout(nine, 2000);
let line3 = setTimeout(eight, 3000);
let line4 = setTimeout(seven, 4000);
let line5 = setTimeout(six, 5000);
let line6 = setTimeout(five, 6000);
let line7 = setTimeout(four, 7000);
let line8 = setTimeout(three, 8000);
let line9 = setTimeout(two, 9000);
let line10 = setTimeout(one, 10000);
let line11 = setTimeout(zero, 11000);
let line12 = setTimeout(ind, 12000);
let line13 = setTimeout(image, 13000);
function ten(){
    document.getElementById("p1").innerHTML = "10";
}
function nine(){
    document.getElementById("p1").innerHTML = "9";
}
function eight(){
    document.getElementById("p1").innerHTML = "8";
}
function seven(){
    document.getElementById("p1").innerHTML = "7";
}
function six(){
    document.getElementById("p1").innerHTML = "6";
}
function five(){
    document.getElementById("p1").innerHTML = "5";
}
function four(){
    document.getElementById("p1").innerHTML = "4";
}
function three(){
    document.getElementById("p1").innerHTML = "3";
}
function two(){
    document.getElementById("p1").innerHTML = "2";
}
function one(){
    document.getElementById("p1").innerHTML = "1";
}
function zero(){
    document.getElementById("p1").innerHTML = "0";
}
function ind(){
    document.getElementById("p1").innerHTML = "HAPPY INDEPENDENCE DAY";
}
function image(){
    let image = document.createElement('img');
    image.src = 'https://cdn.cdnparenting.com/articles/2021/07/22185929/689699362.jpg';
    document.body.append(image);
}
}

//function --> dahin ashiglah bolomjtoi kodnii tsugluulga
//function define
//argument/parametr --> func-iin avah utga
// function start(name, age){
//     console.log("Game start");
//     console.log("hello " +name);
//     console.log("you are " +age+ " years old")
//     console.log("welcome to the game");
// }
//function display --> neriigBichne()
// start("azura" , 18);

// 2 toonii niilber oldog funkts 
// function start(a,b){
//    console.log(a+b)
// }
// start(25 , 1);
//toonii kvadrat zereg oldog funts bich
// function start(number){
//     console.log(number*number)
// }
//  start(5)
// nas oruulhad nasand hursen eseh bas heden ond tursniig gargaj ireh funts
// function year(on, nas){
//     console.log(on-nas)
// }
// year(2023, 18)



// //backtick
// var a =5
// console.log(`ene bol ${a} too`);
// //DOM /document/ -->html deer baigaa buh code
// console.log(document);
// var h1 = document.getElementsByTagName('h1') [0];
// console.log(h1)
// // variable.style.stylename = "stylevalue";
// h1.style.color = "blue"
// //variable.style.styleName = "text"; --> tag dotorh text-iig uurchlunuh1
// h1.innerText = "test"
// var h2 = document.getElementsByTagName('h2')[0];
// console.log(h2)
// h2.style.color ="red"
// h2.innerText = "hello"
// //define
// var text = document.getElementsByTagName('p')[0];
// var btn = document.getElementsByTagName('button')[0];
// //check --> shalgaj bh yrn dnda
// console.log(text);
// console.log(btn);
// //uildel
// function darah(){
//     text.innerText = "Button daragdlaa";
//     text.style.color = "green"
// }


//define
var inputage = document.getElementsByTagName('input')[0];
var btnage =document.getElementsByTagName('button')[1];
var result = document.getElementsByTagName('span')[0];
//checklj bn
console.log(inputage);
console.log(btnage);
console.log(result);
//action
function findYear(){
    if(inputage.value>17){
        result.innerText = "ta nasand hursen baina" + "ta 10 jiliin daraa iim nastai baina" + (parseInt(inputage.value)+10) + " tanii tursun on" +(2023-parseInt(inputage.value));
        result.innerText = " ta nasand hureegui bn" + " ta 10 jiliin daraa iim nastai baina" +(parseInt(inputage.value)+10) +" tanii tursun on" +(2023-parseInt(inputage.value));
    }if(inputage.value>100){ 
        result.innerText = "hun iim ih naslah bolomjgui";
        result.style.color = "red"
     }else if(inputage.value<0){
        result.innerText = "nasaa zuv oruulna uu???"
        result.style.color = "yellow"
     }else if(inputage.value == ""){
        alert("hooson baij bolohgui")
     } 
}

    

//1. 110 deesh nas oruulval ulaan unguur hun iim naslah bolomjgui
//2. 0-ees baga too oruulbal shar ongoor nasaa zov oruulna uu
//3. hooson yuch bichkugeer darsan uyd alert() garj irne hooson bj bolku gsn
//4. 10 jiliin daraah nasiig gargaj ireh
//5. tursun oniig gargaj ireh


console.log('script start...')
let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 5 > 24) {
    greeting = "<b>Good Evening, User<b>";
}else if (hourNow >= 12) {
    greeting = "<b>Good Afternoon</b>";
}else if (hourNow > 0 > 12) {
    greeting = '<b>Good Morning</b>';
} else { greeting = 'Welcome (calculator error occured)';}

document.getElementById('lblGreetings').innerHTML =
'<b>' + greeting + '</b> and Welcome to Bizzabo';
console.log('greeting User')


$(document).ready(function(){
                                               
    let cl = (value) => console.log(value);
    cl("Jquery Active")
let counter =  0
    let $div = $('<div>')
    $($div).addClass('title')
    $('body').append($div)
    $($div).text("This is the first div title")

$(".generate").click(function btn1(){ //TITLE SCREEN
    // $(".scene").hide()
    // $(".gameOverScene").fadeIn(700).show();
    // $(".gameScene2").hide()
    // $(".phase2").hide()
    // $(".phase5").hide()
    // cl("Title Screen")
    counter=counter+1
    const $div = $('<div>')
    $($div).addClass('.anchor')
    $('.anchor').prependTo('.anchor')
    $($div).text("Links")
       });

const $gameScene1 = document.getElementsByClassName("gameScene1")
const $gameScene2 = document.getElementsByClassName("gameScene2")
const $titleScene = document.getElementsByClassName("titleScene")
const $gameOverScene = document.getElementsByClassName("gameOverScene")
       
$($gameScene1).hide()   //HIDE ENTIRE DIV
$($gameScene2).hide() 
$($gameOverScene).hide()
$($titleScene).show     // SHOW TITLE SCENE FIRST
         
        //event.currentTarget TARGET SPECIFIC ELEMENT!!!
           // $( "p" ).click(function( event ) {
           //   alert( event.currentTarget === this ); // true
           // });
       
       //SCENE CHANGES
       $(".btn1").click(function btn1(){ //TITLE SCREEN
           $(".titleScene").fadeIn(700).show()
           $($gameScene1).hide()
           $($gameScene2).hide()
           $($gameOverScene).hide()
           console.log("btn1")
              });
       $(".btn2").click(function btn2(){ //Game Scene 1
           $(".titleScene").hide()
           $(".gameScene1").fadeIn(700).show()
           $(".gameScene2").hide()
           $(".gameOverScene").hide()
           console.log("btn2")
           });
       $(".btn3").click(function btn3(){ //Game Scene 2
           $(".titleScene").hide()
           $(".gameScene1").hide()
           $(".gameScene2").fadeIn(700).show()
           $(".gameOverScene").hide()
           console.log("btn3")
           });
       $(".btn4").click(function btn4(){ //Game Over Scene
           $(".titleScene").hide()
           $(".gameScene1").hide()
           $(".gameScene2").hide()
           $(".gameOverScene").fadeIn(700).show()
           console.log("btn4")
           });  

       

function getEvents() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.bizzabo.com/api/events",
        "method": "GET",

        "Content-type": "application/x-www-form-urlencoded",
        "headers": {
            "accept": "application/vnd.bizzabo.v2.0+json",
            "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
            "Access-Control-Allow-Origin": "*",
        },
        "data": "{}"
    }
    console.log("AJAX call...")

    $.ajax({
        "url": "https://api.bizzabo.com/api/events",
        "async": true,
        "method": "GET",
        "crossDomain": true,
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Content-type": "application/x-www-form-urlencoded",
        "headers": {
            "accept": "application/vnd.bizzabo.v2.0+json",
            "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
            "Access-Control-Allow-Origin": "*",
            
        }
    }).done(function (data) {
        console.log(data);
        console.log("AJAX pull complete")
    });
  
    console.log("call sent")


}
    
// getEvents()



// let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }


}


getEvents() //TROUBLESHOOT THIS FUNCTION

})
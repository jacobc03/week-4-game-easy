$(document).ready(function(){
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var numTotal=0;

 var reset = function(){
    counter = 0;
    compNum = Math.floor(Math.random() * 102) + 19;
    console.log(compNum)
    $('.compScore').text(compNum);

    var cry1 = Math.floor(Math.random() * 12) + 1;
    console.log(cry1)
    var cry2 = Math.floor(Math.random() * 12) + 1;
    console.log(cry2)
    var cry3 = Math.floor(Math.random() * 12) + 1;
    console.log(cry3)
    var cry4 = Math.floor(Math.random() * 12) + 1;
    console.log(cry4)
  }



  compNum = Math.floor(Math.random() * 102) + 19;
  console.log(compNum)
$('.compScore').text(compNum);


  var cry1 = Math.floor(Math.random() * 12) + 1;
  console.log(cry1)

  var cry2 = Math.floor(Math.random() * 12) + 1;
  console.log(cry2)

  var cry3 = Math.floor(Math.random() * 12) + 1;
  console.log(cry3)

  var cry4 = Math.floor(Math.random() * 12) + 1;
  console.log(cry4)


var imageCrystal = $("<img>");
var imageCrystal2 = $("<img>");
var imageCrystal3 = $("<img>");
var imageCrystal4 = $("<img>");
//Each crystal was given the class ".crystalImage".
imageCrystal.addClass("crystalImage");
imageCrystal2.addClass("crystalImage");
imageCrystal3.addClass("crystalImage");
imageCrystal4.addClass("crystalImage");
// Each imageCrystal was given a src link to the crystal image
imageCrystal.attr("src", "assets/images/cry1.jpeg");
imageCrystal2.attr("src", "assets/images/cry2.jpeg");
imageCrystal3.attr("src", "assets/images/cry3.jpeg");
imageCrystal4.attr("src", "assets/images/cry4.jpeg");
// Each imageCrystal was given a data attribute
imageCrystal.attr("data-crystalvalue", cry1);
imageCrystal2.attr("data-crystalvalue", cry2);
imageCrystal3.attr("data-crystalvalue", cry3);
imageCrystal4.attr("data-crystalvalue", cry4);
//Each crystal image was added to the page.
$("#crystals").append(imageCrystal);
$("#crystals2").append(imageCrystal2);
$("#crystals3").append(imageCrystal3);
$("#crystals4").append(imageCrystal4);



var reset = function(){
    counter = 0;
    compNum = Math.floor(Math.random() * 102) + 19;
    console.log(compNum)
    $('.compScore').text(compNum);
var cry1 = Math.floor(Math.random() * 12) + 1;
  console.log(cry1)

  var cry2 = Math.floor(Math.random() * 12) + 1;
  console.log(cry2)

  var cry3 = Math.floor(Math.random() * 12) + 1;
  console.log(cry3)

  var cry4 = Math.floor(Math.random() * 12) + 1;
  console.log(cry4)
  imageCrystal.attr("data-crystalvalue", cry1);
imageCrystal2.attr("data-crystalvalue", cry2);
imageCrystal3.attr("data-crystalvalue", cry3);
imageCrystal4.attr("data-crystalvalue", cry4);
  }
// This click event applies to all the crystals
$(".crystalImage").on("click", function() {
  var crystalValue =($(this).data("crystalvalue"));
counter += crystalValue;
$('.numTotal').text(counter);
 
 if (counter === compNum) {
      wins++;
      console.log(wins)
      $('#wins').text(wins);
      $('#announce').text("You Win!!");
      reset();
      
    }else if (counter > compNum) {
      losses++;
      console.log(losses)
      $('#losses').text(losses);
      $('#announce').text("You Lost!!");
      reset();
    }

  })
  
})

  
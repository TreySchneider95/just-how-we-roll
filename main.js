/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

let getRandomNumber = function(max) {
    let rand = Math.random();
    let range = rand * max;
    let result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * EVENT LISTENERS *
 *******************/

let oneD6Die = document.querySelector("#d6-roll")
oneD6Die.addEventListener('click', function(){
    let num = getRandomNumber(6)
    sixes.push(num)
    let sum = sixes.reduce((x,y)=>(x + y), 0)
    document.querySelector("#d6-rolls-mean").innerHTML = Math.round((sum/sixes.length) * 100) / 100
    document.querySelector("#d6-rolls-median").innerHTML = median(sixes)
    document.querySelector("#d6-rolls-mode").innerHTML = mode(sixes)
    oneD6Die.src = `images/d6/${num}.png`
})

let twoD6DieOne = document.querySelector("#double-d6-roll-1")
let twoD6DieTwo = document.querySelector("#double-d6-roll-2")
let clickArea = document.querySelector("#double-d6-pics")
clickArea.addEventListener("click", function(){
        let numOne = getRandomNumber(6)
        let numTwo = getRandomNumber(6)
        doubleSixes.push(numOne + numTwo)
        let sum = doubleSixes.reduce((x,y)=>(x + y), 0)
        document.querySelector("#double-d6-rolls-mean").innerHTML = Math.round((sum/doubleSixes.length) * 100) / 100
        document.querySelector("#double-d6-rolls-median").innerHTML = median(doubleSixes)
        document.querySelector("#double-d6-rolls-mode").innerHTML = mode(doubleSixes)
        twoD6DieOne.src = `images/d6/${numOne}.png`
        twoD6DieTwo.src = `images/d6/${numTwo}.png`
})

let d12Die = document.querySelector("#d12-roll")
d12Die.addEventListener('click', function(){
    let num = getRandomNumber(12)
    twelves.push(num)
    let sum = twelves.reduce((x,y)=>(x + y), 0)
    document.querySelector("#d12-rolls-mean").innerHTML = Math.round((sum/twelves.length) * 100) / 100
    document.querySelector("#d12-rolls-median").innerHTML = median(twelves)
    document.querySelector("#d12-rolls-mode").innerHTML = mode(twelves)
    d12Die.src = `images/numbers/${num}.png`
})

let d20Die = document.querySelector("#d20-roll")
d20Die.addEventListener('click', function(){
    let num = getRandomNumber(20)
    twenties.push(num)
    let sum = twenties.reduce((x,y)=>(x + y), 0)
    document.querySelector("#d20-rolls-mean").innerHTML = Math.round((sum/twenties.length) * 100) / 100
    document.querySelector("#d20-rolls-median").innerHTML = median(twenties)
    document.querySelector("#d20-rolls-mode").innerHTML = mode(twenties)
    d20Die.src = `images/numbers/${num}.png`
})

/******************
 * RESET FUNCTION *
 ******************/

let reset = document.querySelector("#reset-button")
reset.addEventListener('click', function(){
    sixes = []
    doubleSixes = []
    twelves = []
    twenties = []
    oneD6Die.src = "images/start/d6.png"
    twoD6DieOne.src = "images/start/d6.png"
    twoD6DieTwo.src = "images/start/d6.png"
    d12Die.src = "images/start/d12.jpeg"
    d20Die.src = "images/start/d20.jpg"
    document.querySelector("#d6-rolls-mean").innerHTML = "N/A"
    document.querySelector("#double-d6-rolls-mean").innerHTML = "N/A"
    document.querySelector("#d12-rolls-mean").innerHTML = "N/A"
    document.querySelector("#d20-rolls-mean").innerHTML = "N/A"
    document.querySelector("#d6-rolls-median").innerHTML = "N/A"
    document.querySelector("#double-d6-rolls-median").innerHTML = "N/A"
    document.querySelector("#d12-rolls-median").innerHTML = "N/A"
    document.querySelector("#d20-rolls-median").innerHTML = "N/A"
    document.querySelector("#d6-rolls-mode").innerHTML = "N/A"
    document.querySelector("#double-d6-rolls-mode").innerHTML = "N/A"
    document.querySelector("#d12-rolls-mode").innerHTML = "N/A"
    document.querySelector("#d20-rolls-mode").innerHTML = "N/A"
})


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/

 function median(values){
    values.sort((a,b)=>(a-b))
    let half = Math.floor(values.length / 2)
    if (values.length % 2)
      return values[half]
    return (values[half - 1] + values[half]) / 2
  }

  function mode(values) {
    var frequency = []
    var maxFreq = 0
    var modes = []
    for (var i in values) {
      frequency[values[i]] = (frequency[values[i]] || 0) + 1
      if (frequency[values[i]] > maxFreq) {
        maxFreq = frequency[values[i]]
      }
    }
    for (var k in frequency) {
      if (frequency[k] == maxFreq) {
        modes.push(k);
      }
    }
    return modes;
  }

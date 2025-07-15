// console.log(document.querySelector(".message").innerHTML)
// console.log(document.querySelector(".message").innerHTML = '🎉 Correct Number')
// console.log(document.querySelector(".container").innerHTML = '🎉 13')
// console.log(document.querySelector(".score").innerHTML = '10')
// console.log(document.querySelector(".highscore").innerHTML = '10')
// console.log(document.querySelector(".guess").value = '10') // new

let correctNum = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0
document.querySelector(".score").innerHTML = score

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value)


    if (!guess) {
        document.querySelector(".message").innerHTML = '😒 Invalid Input'
        score--
        document.querySelector(".score").innerHTML = score
    }
    else if (guess == correctNum) {
        document.querySelector(".message").innerHTML = '🎉 Correct Number'
        document.querySelector(".container").innerHTML = correctNum
        document.querySelector(".container").style.fontSize = "65px"
        document.querySelector(".container").style.width = "15vw"
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').innerHTML = highscore
        }


    }
    else if (guess !== correctNum) {
        if (score > 1) {
            document.querySelector('.message').innerHTML = guess > correctNum ? '📉 Number is lower' : '📈 Number is higher';
            score--;
            document.querySelector(".score").innerHTML = score;
        }
        else {
            document.querySelector(".message").innerHTML = `You Lost The Game 'TRY AGAIN' loser`
            document.querySelector(".score").innerHTML = 0
        }

    }
    document.querySelector('.again').addEventListener('click', function () {
        correctNum = Math.trunc(Math.random() * 20) + 1
        score = 20
        document.querySelector('.score').innerHTML = 20
        document.querySelector(".message").innerHTML = '🤔 Start Guessing...'
        document.querySelector(".container").innerHTML = '?'
        document.querySelector(".guess").value = ''

    })
})




// not a efficient way👇

// else if (guess > correctNum) {
//     score--
//     if (score <= 0) {
//         document.querySelector(".message").innerHTML = `You Lost The Game 'TRY AGAIN' loser`
//         document.querySelector(".score").innerHTML = 0
//     }

//     else {
//         document.querySelector(".message").innerHTML = '📉 Number is lower'
//         document.querySelector(".score").innerHTML = score
//     }


// }
// else if (guess < correctNum) {
//     score--
//     if (score <= 0) {
//         document.querySelector(".message").innerHTML = `You Lost The Game 'TRY AGAIN' loser`
//         document.querySelector(".score").innerHTML = 0
//     }

//     else {
//         document.querySelector(".message").innerHTML = '📈 Number is higher'

//         document.querySelector(".score").innerHTML = score
//     }
// }

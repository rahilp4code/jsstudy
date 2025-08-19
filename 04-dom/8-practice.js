// Q no.1

document.getElementsByTagName("ul")[0].firstElementChild.style.color='red'

// Q no.2

// yes it didnt have tbody tag in the page source even because it was absent in the main code but tbody tag was present in 'inspect' section

// Q no.3

document.getElementsByTagName("tr")[0].firstElementChild.style.color='green'
document.getElementsByTagName("tr")[1].firstElementChild.style.color='green'
document.getElementsByTagName("tr")[3].firstElementChild.style.color='green'


document.getElementsByTagName("tr")[0].lastElementChild.style.color='green'

// Q no.4

document.querySelectorAll(".cyan")[0].style.color='black'
document.querySelectorAll(".cyan")[1].style.color='black'
document.querySelectorAll(".cyan")[2].style.color='black'

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background='cyan'
});

// Q no.5

// Which of the following is used to look for the fartest ancestor that makes a given CSS selector
// a.matches
// b.Closest
// c.Contains
// d.None of these

//ANSWER = D.none of these
/*Fill your code */

function renderall()
{

}


let buttons=document.querySelectorAll("#buttonslist button")
let layers= document.querySelectorAll(".cakelayer")

buttons[0].addEventListener("click",chocolatelayer)
function chocolatelayer()
{
    layers[0].classList.toggle("#lastlayer")

}
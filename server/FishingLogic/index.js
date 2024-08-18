import Fish from "../classes/fish.js"
import getRandomFish from "./Probability.js"

const fish = getRandomFish()
const fish2 = getRandomFish()
const fish3 = getRandomFish()

const fishes_in_the_fishtank = []


const salmon = new Fish(10,5,20)


const fishHealth = document.getElementById("fishHealth")
fishHealth.textContent = salmon.catch()

const fishtank = document.getElementById("fishtank")

const fishButton = document.getElementById("fishButton")
fishButton.addEventListener("click", function(){
	const fish = getRandomFish()
	fishes_in_the_fishtank.push(fish)
	const para = document.createElement("p");
	const node = document.createTextNode(fish);
	para.appendChild(node);
	fishtank.appendChild(para);
})


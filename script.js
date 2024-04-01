function superSecretPasscode(e) {
	if(e.key == passcode.substring(passcodeI, passcodeI + 1)) {
		passcodeI ++;
		if(passcodeI == passcode.length) {
			for(const crabs of document.getElementsByClassName("crabs")) {
				crabs.classList.remove("hidden")
				crabs.classList.add("pointer")
				crabs.addEventListener("click", itsRavingTime)
			}
			document.body.removeEventListener("keydown", superSecretPasscode)
		}
	}
}

function itsRavingTime(e) { // and then they raved all over the place
	window.open("https://www.youtube.com/watch?v=LDU_Txk06tM")
	for(const crabs of document.getElementsByClassName("crabs")) {
		crabs.classList.remove("pointer")
		crabs.removeEventListener("click", itsRavingTime)
	}
}

const wrapper = document.getElementsByClassName("wrapper")[0]
const passcode = "ravetime"
let passcodeI = 0

function init(rootElem) {
	const spoiler = rootElem.getElementsByClassName("spoiler")[0]
	spoiler.addEventListener("click", () => { spoiler.classList.toggle("hidden") })

	for(const recursivelinkwow of rootElem.getElementsByClassName("recursivelinkwow")) {
		recursivelinkwow.addEventListener("click", () => {
			let newWrapper = document.createElement("div")
			newWrapper.classList.add("wrapper")
			newWrapper.innerHTML = wrapper.innerHTML
			init(newWrapper)
			document.body.appendChild(newWrapper)
			newWrapper.scrollIntoView({ behavior: "smooth" })
		})
	}
}

document.body.addEventListener("keydown", superSecretPasscode)
init(wrapper)
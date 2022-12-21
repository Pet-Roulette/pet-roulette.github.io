import './App.css';
import {inputRef} from './App.js'
import locationIcon from './locationIcon.svg';

export default function Roulette() {
    var dogsCheck = document.getElementById("dogsOnly")
    var catsCheck = document.getElementById("catsOnly")
    const zipCode =  inputRef.current.value
    inputRef.current.value = null
    if (zipCode === '') {
        return;
    }
    else if (/^\d{5}$/.test(zipCode) === false) {
        return;
    }
    try {
        // fetches a token within an API response from Petfinder API
        const result = fetch("https://api.petfinder.com/v2/oauth2/token", {
            body: "grant_type=client_credentials&client_id=fb6blwXi7NpHLZZHIZSMycbRHi5K2f66w0Zumbp6TscxaJJaND&client_secret=FHeoL9Z6qxpMsKjnXdHnVuoltV3SmYpBGZ95hzJB",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        })
            .then(res => res.json())
            .then(data => {
                // fetches information from a secondary API response to use pet name and image features
                let secondRequest = "https://api.petfinder.com/v2/animals?location="
                return fetch(secondRequest + zipCode + "&limit=100&sort=distance", {
                    headers: {
                        Authorization: "Bearer " + data.access_token
                    }
                })
                // const result2 = fetch("https://api.petfinder.com/v2/animals?location=" + zipCode + "&limit=100&sort=distance", {
                // 	headers: {
                // 		Authorization: "Bearer " + data.access_token
                // 	}
                // })
                // .then((data) => console.log(data))
                // .then(res => {
                // 	if (res.status === 400) {
                // 		throw new TypeError();
                // 	}
                // 	res.json()
                // })
                // return result2;
            })
            .then(res => res.json())
            // .catch(ex => {
            // 	console.log(ex);
            // });
        // Above code returns a Promise object, which we can extract an array of animals
        const printResult = () => {
            result.then((animalArray) => {
                const nearbyPets = animalArray.animals
                // for loop that iterates up to 9 animals in the user's vicinity
                var counter = 1;
                for (let i = 0; i <= nearbyPets.length; i++) {
                    if (counter > 36) {
                        break;
                    }
                    // error handling for missing photo url from Petfinder API
                    try {
                        // json object for readability
                        var currentPet = {"name": nearbyPets[i].name, "city": nearbyPets[i].contact.address.city, "state": nearbyPets[i].contact.address.state, "type": nearbyPets[i].type}
                        if (dogsCheck.checked && catsCheck.checked && !(currentPet.type === "Dog" || currentPet.type === "Cat")) {continue;}
                        else if (dogsCheck.checked && currentPet.type !== "Dog") {continue;}
                        else if (catsCheck.checked && currentPet.type !== "Cat") {continue;}
                        // append name to grid
                        document.getElementById(String(counter)).className = "gridItem";
                        document.getElementById(String(counter)).innerHTML = currentPet.name;
                        document.getElementById(String(counter)).innerHTML += "<br/>";
                        // create an img element to display location icon
                        const locIconElement = document.createElement('img');
                        locIconElement.className = "locIcon";
                        locIconElement.src = locationIcon;
                        document.getElementById(String(counter)).appendChild(locIconElement);
                        // append city and state
                        const fullLoc = currentPet.city + ", " + currentPet.state;
                        document.getElementById(String(counter)).innerHTML += fullLoc;
                        document.getElementById(String(counter)).innerHTML += "<br/>";
                        // create an img element to display an image of the available pet
                        var img = document.createElement('img');
                        img.src = nearbyPets[i].photos[0].full;
                        document.getElementById(String(counter)).appendChild(img);
                        document.getElementById(String(counter)).addEventListener("click", petURL);
                        function petURL() {
                            alert('"Redirect to adoption site URL?"')
                            window.location.href = nearbyPets[i].url;
                        }
                        counter++;
                    }
                    catch (ex) {
                        console.log(ex)
                    }
                }
            });
        };
        printResult();
        // comment below is a way to clear our page to display information about pets
        document.getElementById("header").innerHTML = "";
    }
    catch (ex) {
        console.log(ex)
    }
}

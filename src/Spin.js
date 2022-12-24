import './App.css';
import {inputRef} from './App.js'
import locationIcon from './location.png';

export var apiError = false;

export default function Spin() {
    apiError = false;
    var dogsCheck = document.getElementById("dogsOnly").checked
    var catsCheck = document.getElementById("catsOnly").checked
    const zipCode =  inputRef.current.value
    inputRef.current.value = null
    if (zipCode === '' || /^\d{5}$/.test(zipCode) === false) {
        return false;
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
            })
            .then(res => res.json())
        // Above code returns a Promise object, which we can extract an array of animals
        const printResult = () => {
            result.then((animalArray) => {
                if (animalArray.status === 400) {
                    apiError = true;
                    console.log("Error: zip code does not exist")
                    return;
                }
                else if (animalArray.animals.length === 0) {
                    apiError = true;
                    console.log("Error: no animals available in the area")
                    return;
                }
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
                        var currentPet = {
                            "name": nearbyPets[i].name, "city": nearbyPets[i].contact.address.city, 
                            "state": nearbyPets[i].contact.address.state, "type": nearbyPets[i].species, 
                            "gender": nearbyPets[i].gender, "unknown": nearbyPets[i].breeds.unknown, 
                            "mixed": nearbyPets[i].breeds.mixed, "primary": nearbyPets[i].breeds.primary, 
                            "secondary": nearbyPets[i].breeds.secondary, "age": nearbyPets[i].age, 
                            "image": nearbyPets[i].photos[0].full
                        }
                        console.log(String(i) + nearbyPets[i].species)
                        if (dogsCheck && catsCheck && (currentPet.type === "Dog" || currentPet.type === "Cat")) {}
                        else if (dogsCheck && catsCheck && !(currentPet.type === "Dog" || currentPet.type === "Cat")) {
                            continue;
                        }
                        else if ((dogsCheck && currentPet.type !== "Dog") || (catsCheck && currentPet.type !== "Cat")) {
                            continue;
                        }
                        // append name to grid
                        var nameDiv = document.createElement("div");
                        nameDiv.className = "nameDiv";
                        const nameNode = document.createTextNode(currentPet.name.trim());
                        nameDiv.appendChild(nameNode);
                        document.getElementById(String(counter)).appendChild(nameDiv);
                        // clarify value of gender if necessary
                        if (currentPet.gender.toLowerCase() === "unknown")
                        {
                            currentPet.gender = "Unknown Gender";
                        }
                        // create location div and append location icon
                        var locDiv = document.createElement("div");
                        locDiv.className = "locDescription";
                        const locIconElement = document.createElement('img');
                        locIconElement.className = "icon";
                        locIconElement.src = locationIcon;
                        locDiv.appendChild(locIconElement);
                        // append city and state to location div
                        const fullLoc = currentPet.city.trim() + ", " + currentPet.state.trim();
                        const fullLocElement = document.createElement("div");
                        const fullLocNode = document.createTextNode(fullLoc);
                        fullLocElement.appendChild(fullLocNode);
                        locDiv.appendChild(fullLocElement);
                        document.getElementById(String(counter)).appendChild(locDiv);
                        // create pet image element and append full size photo
                        var petImg = document.createElement('img');
                        petImg.src = currentPet.image;
                        document.getElementById(String(counter)).appendChild(petImg);
                        // format breed string
                        let breed;
                        if (!currentPet.unknown)
                        {
                            if (currentPet.mixed && currentPet.secondary !== null)
                            {
                                breed = currentPet.primary.trim() + " / " + currentPet.secondary.trim();
                            } else {
                                breed = currentPet.primary.trim();
                            }
                        } else {
                            breed = "Unknown Breed";
                        }
                        // create pet description div and append breed, gender, and age
                        var descriptionDiv = document.createElement("div");
                        descriptionDiv.className = "petDescription";
                        // bga = breed, gender, age
                        const bga = breed + " • " + currentPet.gender.trim() + " • " + currentPet.age.trim();
                        var bgaNode = document.createTextNode(bga);
                        descriptionDiv.appendChild(bgaNode);
                        document.getElementById(String(counter)).appendChild(descriptionDiv);
                        document.getElementById(String(counter)).addEventListener("click", petURL);
                        function petURL() {
                            alert('"Redirect to adoption site URL?"')
                            window.location.href = nearbyPets[i].url;
                        }
                        counter++;
                    }
                    catch (ex) {
                        console.log(ex.name + ": missing photo files");
                    }
                }
            })
        }
        printResult()
        return true;
    }
    catch (ex) {
        console.log(ex.name + ": invalid zip code");
        return false;
    }
}

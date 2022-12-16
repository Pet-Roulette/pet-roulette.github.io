import logo from './logo.png';
import './App.css';
import React, { useRef } from 'react';
import LocationFinder from './LocationFinder';

function App() {
	const postalCodeRef = useRef()
	var textArray = ["", "", ""]
	// handles the code when the user searches a zip code
	function handlePostalCode() {
		const postalCode =  postalCodeRef.current.value
		if (postalCode === '') {
			return;
		}
		postalCodeRef.current.value = null
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
				let secondRequest = "https://api.petfinder.com/v2/animals?location=" + postalCode + "&limit=9";
				return fetch(secondRequest, {
					headers: {
						Authorization: "Bearer " + data.access_token
					}
				})
			})
			.then(res => res.json())
		// Above code returns a Promise object, which we can extract an array of animals
		const printResult = () => {
			result.then((animalArray) => {
				const nearbyPets = animalArray.animals
				var counter = 0;
				for (let i = 0; i < nearbyPets.length; i++) {
					textArray[counter] += nearbyPets[i].name + "<br>";
					if (counter >= 2) {
						counter = 0
					}
					else {
						counter += 1
					}
					// facing issue with extracting the image from nearbyPets
					console.log(nearbyPets[i].photos[0])
                	var img = document.createElement('img');
            		img.src = nearbyPets[i].photos[0] + ".png";
            		document.body.appendChild(img);
				}
				document.getElementById("column1").innerHTML = textArray[0];
				document.getElementById("column2").innerHTML = textArray[1];
				document.getElementById("column3").innerHTML = textArray[2];
				// comment below is a way to clear our page to display information about pets
				// document.getElementById("header").innerHTML = "";
			});
		};
		printResult();
	}
	return (
	<>
		<div className="App">
			<div className="row">
				<p id="column1" className="column"></p>
				<p id="column2" className="column"></p>
				<p id="column3" className="column"></p>
			</div>
			<header id="header" className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<LocationFinder />
				<input ref={postalCodeRef} type="text" />
				<button id="searchButton" onClick={handlePostalCode}>Search</button><br />
				<a className="App-link" href="https://www.petfinder.com" target="_blank" rel="noopener noreferrer">Petfinder</a>
			</header>
		</div>
	</>
	);
}

export default App;

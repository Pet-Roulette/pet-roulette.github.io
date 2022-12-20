import logo from './logo.png';
import './App.css';
import React, { useRef } from 'react';
import LocationFinder from './LocationFinder';

function App() {
	const postalCodeRef = useRef()
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
				let secondRequest = "https://api.petfinder.com/v2/animals?location=" + postalCode + "&limit=100";
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
				console.log(nearbyPets)
				// for loop that iterates up to 9 animals in the user's vicinity
				var counter = 1;
				for (let i = 0; i <= nearbyPets.length; i++) {
					if (counter > 9) {
						break;
					}
					// error handling for missing photo url from Petfinder API
					try {
						document.getElementById(String(counter)).innerHTML = nearbyPets[i].name + "<br>";
						// create an img element to display an image of the available pet
						var img = document.createElement('img');
						img.src = nearbyPets[i].photos[0].full;
						document.getElementById(String(counter)).appendChild(img);
						counter++;
					}
					catch (ex) {
						console.log(ex.name + " occured due to missing photo file.")
					}
				}
			});
		};
		printResult();
		// comment below is a way to clear our page to display information about pets
		document.getElementById("header").innerHTML = "";
	}
	return (
	<>
		<div className="App">
			{/* grid element that holds the name and adjusted image of an available pet */}
			<div className="grid-container">
				<div id="1" className="grid-item"></div>
				<div id="2" className="grid-item"></div>
				<div id="3" className="grid-item"></div>
				<div id="4" className="grid-item"></div>
				<div id="5" className="grid-item"></div>
				<div id="6" className="grid-item"></div>
				<div id="7" className="grid-item"></div>
				<div id="8" className="grid-item"></div>
				<div id="9" className="grid-item"></div>
			</div>
			<header id="header" className="App-header">
				<img src={logo} className="App-logo" alt="logo" /><br/>
				<LocationFinder />
				<input ref={postalCodeRef} type="text" />
				<button id="searchButton" onClick={handlePostalCode}>Search</button><br/>
				<a className="App-link" href="https://www.petfinder.com" target="_blank" rel="noopener noreferrer">Petfinder</a>
			</header>
		</div>
	</>
	);
}

export default App;

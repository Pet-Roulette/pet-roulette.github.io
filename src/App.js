import logo from './petrLogo.png';
import search from './search.png';
import './App.css';
import React, { useRef } from 'react';
import Instructions from './Instructions';

function App() {
	const inputRef = useRef()
	window.onload = function(){
		document.getElementById("textInput").focus();
		var input = document.getElementById("textInput");
		input.addEventListener("keypress", function(event) {
			if (event.key === "Enter") {
				event.preventDefault();
				document.getElementById("searchBtn").click();
			}
		})
	};
	// handles the code when the user searches a zip code
	function handleZip() {
		const zipCode =  inputRef.current.value
		if (zipCode === '') {
			return;
		}
		inputRef.current.value = null
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
				let secondRequest = "https://api.petfinder.com/v2/animals?location=" + zipCode + "&limit=100";
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
					if (counter > 36) {
						break;
					}
					// error handling for missing photo url from Petfinder API
					try {
						document.getElementById(String(counter)).innerHTML = nearbyPets[i].name.slice(0, 21) + "<br/>";
						// create an img element to display an image of the available pet
						var img = document.createElement('img');
						img.src = nearbyPets[i].photos[0].full;
						document.getElementById(String(counter)).appendChild(img);
						document.getElementById(String(counter)).addEventListener("click", petURL);
						function petURL() {
							alert("Redirecting to adoption site URL.")
							window.location.href = nearbyPets[i].url;
						}
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
	};

	return (
	<>
		<div className="app">
			{/* grid element that holds the name and adjusted image of an available pet */}
			<div className="gridContainer">
				<div id="1" className="gridItem"></div>
				<div id="2" className="gridItem"></div>
				<div id="3" className="gridItem"></div>
				<div id="4" className="gridItem"></div>
				<div id="5" className="gridItem"></div>
				<div id="6" className="gridItem"></div>
				<div id="7" className="gridItem"></div>
				<div id="8" className="gridItem"></div>
				<div id="9" className="gridItem"></div>
				<div id="10" className="gridItem"></div>
				<div id="11" className="gridItem"></div>
				<div id="12" className="gridItem"></div>
				<div id="13" className="gridItem"></div>
				<div id="14" className="gridItem"></div>
				<div id="15" className="gridItem"></div>
				<div id="16" className="gridItem"></div>
				<div id="17" className="gridItem"></div>
				<div id="18" className="gridItem"></div>
				<div id="19" className="gridItem"></div>
				<div id="20" className="gridItem"></div>
				<div id="21" className="gridItem"></div>
				<div id="22" className="gridItem"></div>
				<div id="23" className="gridItem"></div>
				<div id="24" className="gridItem"></div>
				<div id="25" className="gridItem"></div>
				<div id="26" className="gridItem"></div>
				<div id="27" className="gridItem"></div>
				<div id="28" className="gridItem"></div>
				<div id="29" className="gridItem"></div>
				<div id="30" className="gridItem"></div>
				<div id="31" className="gridItem"></div>
				<div id="32" className="gridItem"></div>
				<div id="33" className="gridItem"></div>
				<div id="34" className="gridItem"></div>
				<div id="35" className="gridItem"></div>
				<div id="36" className="gridItem"></div>
			</div>
			<header id="header" className="appHeader">
				<img src={logo} className="appLogo" alt="Petr Logo" /><br/>
				<Instructions />
				<div class="inputGroup">
					<input id="textInput" ref={inputRef} type="text" placeholder="Enter zip code"/>
					<input id="searchBtn" type="image" src={search} onClick={handleZip} className="btn" alt="search"/>
				</div>
				<a className="appLink" href="https://www.petfinder.com" target="_blank" rel="noopener noreferrer">Petfinder</a>
			</header>
		</div>
	</>
	);
}

export default App;

import logo from './roulette.png';
import search from './search.png';
import './App.css';
import React, { useRef } from 'react';
import Spin from './Spin';

export var inputRef = "";

function App() {
	inputRef = useRef()
	function searchFocus() {document.getElementById("textInput").focus();}
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

	return (
	<>
		<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
		<div className="app">
			<div className="gridContainer">
				<div id="1"></div>
				<div id="2"></div>
				<div id="3"></div>
				<div id="4"></div>
				<div id="5"></div>
				<div id="6"></div>
				<div id="7"></div>
				<div id="8"></div>
				<div id="9"></div>
				<div id="10"></div>
				<div id="11"></div>
				<div id="12"></div>
				<div id="13"></div>
				<div id="14"></div>
				<div id="15"></div>
				<div id="16"></div>
				<div id="17"></div>
				<div id="18"></div>
				<div id="19"></div>
				<div id="20"></div>
				<div id="21"></div>
				<div id="22"></div>
				<div id="23"></div>
				<div id="24"></div>
				<div id="25"></div>
				<div id="26"></div>
				<div id="27"></div>
				<div id="28"></div>
				<div id="29"></div>
				<div id="30"></div>
				<div id="31"></div>
				<div id="32"></div>
				<div id="33"></div>
				<div id="34"></div>
				<div id="35"></div>
				<div id="36"></div>
			</div>
			<header id="header" className="appHeader">
				<img src={logo} className="appLogo" alt="Spinning Roulette" />
				<div>
					Welcome to Pet Roulette!<br/>
					Adopt among 36 pets in your local area.<br/>
					Good luck hitting the jackpot!
				</div>
				<div className="inputGroup">
					<input id="textInput" ref={inputRef} type="text" placeholder="Enter zip code"/>
					<input id="searchBtn" type="image" src={search} onClick={Spin} className="btn" alt="search"/>
				</div>
				<div className="checkGroup">
					<input id="dogsOnly" type="checkbox" onClick={searchFocus} value="Dogs Only"/>
					<label htmlFor="dogsOnly" className="chk">Dogs Only</label>
					<input id="catsOnly" type="checkbox" onClick={searchFocus} value="Cats Only"/>
					<label htmlFor="catsOnly" className="chk" >Cats Only</label>
				</div>
				<a className="appLink" href="https://www.petfinder.com" target="_blank" rel="noopener noreferrer">Petfinder</a>
			</header>
		</div>
	</>
	);
}

export default App;

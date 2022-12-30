import './App.css';
import roulette from './roulette.png';
import search from './search.png';
import React, { useRef } from 'react';
import Spin, { apiError } from './Spin';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';

export var inputRef = "";

function App() {
	// pet grid item roulette-themed borders
	const redStyle = {
		"borderWidth": "7px",
		"borderStyle": "groove double",
		"borderColor": "#ed1c24"
	};
	const blackStyle = {
		"borderWidth": "5px",
		"borderStyle": "dashed double",
		"borderColor": "#000000"
	};
	const [checkedSlide, setCheckedSlide] = React.useState(true);
	const [checkedZoom, setCheckedZoom] = React.useState(false);
	const handleChangeSlide = () => {
		setCheckedSlide((prev) => !prev);
	};
	const handleChangeZoom = () => {
		setCheckedZoom((prev) => !prev);
  	};
	inputRef = useRef()
	function searchFocus() {
		document.getElementById("textInput").focus();
	}
	window.onload = function(){
		var input = document.getElementById("textInput");
		input.addEventListener("keypress", function(event) {
			if (event.key === "Enter") {
				event.preventDefault();
				document.getElementById("searchBtn").click();
			}
		})
	};
	function updateMessage(message="Invalid zip code", messageColor="#ed1c24", inputColor="#fddcd8") {
		document.getElementById("progressMessage").innerHTML = message;
		document.getElementById("progressMessage").style.color = messageColor;
		document.getElementById("textInput").style.backgroundColor = inputColor;
	}
	function checkError() {
		if (apiError) {
			updateMessage();
		}
		else {
			handleChangeSlide();
			setTimeout(handleChangeZoom, 500);
			updateMessage("", "#3dac55", "#ffffff");
		}
	}
	function callSpin() {
		if (Spin()) {
			updateMessage("Processing...", "#3dac55", "#ffffff");
			setTimeout(checkError, 2500);
		}
		else {
			updateMessage();
			searchFocus();
		}
	}
	function goBack() {
		handleChangeZoom();
		setTimeout(handleChangeSlide, 500);
		for (let i = 1; i <= 36; i++) {
			document.getElementById(String(i)).innerHTML = "";
		}
		setTimeout(searchFocus, 750);
		document.getElementById("dogsOnly").checked = false;
		document.getElementById("catsOnly").checked = false;
	}
	return (
	<>
		<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
		<div className="app">
			<Zoom in={checkedZoom}>
				<div className="gridContainer">
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '2000ms' : '0ms' }}><input type="button" value="Back" onClick={goBack} className="btn"/></Zoom>
					<Zoom in={checkedZoom}><div id="1" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '400ms' : '0ms' }}><div id="2" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '800ms' : '0ms' }}><div id="3" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '1200ms' : '0ms' }}><div id="4" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '1600ms' : '0ms' }}><div id="5" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '2000ms' : '0ms' }}><div id="6" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '2400ms' : '0ms' }}><div id="7" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '2800ms' : '0ms' }}><div id="8" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '3200ms' : '0ms' }}><div id="9" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '3600ms' : '0ms' }}><div id="10" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '4000ms' : '0ms' }}><div id="11" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '4400ms' : '0ms' }}><div id="12" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '4800ms' : '0ms' }}><div id="13" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '5200ms' : '0ms' }}><div id="14" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '5600ms' : '0ms' }}><div id="15" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '6000ms' : '0ms' }}><div id="16" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '6400ms' : '0ms' }}><div id="17" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '6800ms' : '0ms' }}><div id="18" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '7200ms' : '0ms' }}><div id="19" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '7600ms' : '0ms' }}><div id="20" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '8000ms' : '0ms' }}><div id="21" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '8400ms' : '0ms' }}><div id="22" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '8800ms' : '0ms' }}><div id="23" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '9200ms' : '0ms' }}><div id="24" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '9600ms' : '0ms' }}><div id="25" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '10000ms' : '0ms' }}><div id="26" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '10400ms' : '0ms' }}><div id="27" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '10800ms' : '0ms' }}><div id="28" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '11200ms' : '0ms' }}><div id="29" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '11600ms' : '0ms' }}><div id="30" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '12000ms' : '0ms' }}><div id="31" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '12400ms' : '0ms' }}><div id="32" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '12800ms' : '0ms' }}><div id="33" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '13200ms' : '0ms' }}><div id="34" className="gridItem" style={redStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '13600ms' : '0ms' }}><div id="35" className="gridItem" style={blackStyle}></div></Zoom>
					<Zoom in={checkedZoom} style={{ transitionDelay: checkedZoom ? '14000ms' : '0ms' }}><div id="36" className="gridItem" style={redStyle}></div></Zoom>
				</div>
			</Zoom>
			<Slide direction="right" in={checkedSlide} mountOnEnter>
				<header id="header" className="appHeader">
					<img src={roulette} className="appLogo" alt="Spinning Roulette" />
					<div>
						Welcome to Pet Roulette!<br/>
						Adopt among 36 pets in your local area.<br/>
						Good luck hitting the jackpawt!
					</div>
					<div className="inputGroup">
						<input id="textInput" ref={inputRef} type="search" maxLength="5" size="25" placeholder="Enter zip code" autoFocus={true} autoComplete="off"/>
						<input id="searchBtn" type="image" src={search} onClick={callSpin} className="search" alt="search"/>
					</div>
					<label id='progressMessage' className='progressMessage'></label>
					<div className="checkGroup">
						<input id="dogsOnly" type="checkbox" onClick={searchFocus} value="Dogs Only"/>
						<label htmlFor="dogsOnly" className="chk">Dogs Only</label>
						<input id="catsOnly" type="checkbox" onClick={searchFocus} value="Cats Only"/>
						<label htmlFor="catsOnly" className="chk" >Cats Only</label>
					</div>
				</header>
			</Slide>
		</div>
	</>
	);
}

export default App;

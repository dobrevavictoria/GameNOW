
document.addEventListener("DOMContentLoaded", function(event){
	const allContainers = document.getElementsByClassName("category-content");
	//const container = document.getElementById("favourite-games");
	console.log(allContainers);
	
	const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];//, "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg"];
	const names=["Borderlands 2", "Draconball Z", "Zelda", "Ghost Recon", "Sims4"];//, "Tearaway", "Age of Empires II", "The Witcher", "Past Cure", "Red Dead Redemption II", "Call of Duty", "Final Fantasy VII", "Doom", "FarmVille", "Jedi", "Persona5", "Bloodhorne", "Daysgone", "Daysgone II", "NBA2K20", "Killzone", "Mortal Kombat II", "Outer Worlds", "Fallout 4", "Rocket League", "Cyberpunk", "Assassins Creed Odyssey", "FIFA20", "Spider-Man", "Final Fantasy V"];
	
	function makeRows(rows,cols,container){
		container.style.setProperty('--grid-rows', rows);
		container.style.setProperty('--grid-cols', cols);
	
		for(i = 0; i < (rows*cols); i++){
			let gameDiv = document.createElement('div');
			gameDiv.className='game-card';
			let gameImg = document.createElement('img');
			gameImg.src="img/games-logos/" + images[i];
			console.log(gameImg.src);
			gameDiv.appendChild(gameImg);
	
			let gameName = document.createElement('p');
			let text = document.createTextNode(names[i].toUpperCase());
			gameName.appendChild(text);
			gameDiv.appendChild(gameName);
	
			let button = document.createElement('button');
			button.innerHTML="<i class='fas fa-gamepad fa-2x'></i>";
			button.className="btn-play";
			button.title="Invite for game";
			button.onclick = function(){location.href="game-screen.html";};
			gameDiv.appendChild(button);
	
			container.appendChild(gameDiv);
		};
	};
	for(let i=0; i<allContainers.length; i++)
	{makeRows(1,4, allContainers[i]);}
});

function changeContent(element_id){
	let currentElement = document.getElementById(element_id);
	if(currentElement.innerHTML.includes("Add friend"))
	{	currentElement.innerHTML = "<i class='fas fa-minus'></i>Remove friend";}
	else
	{
		currentElement.innerHTML = "<i class='fas fa-plus'></i>Add friend";
	}

}



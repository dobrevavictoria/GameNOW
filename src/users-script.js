var style = document.createElement('style');
style.innerHTML =
	"#users-container a i{"
	+"margin-left: 10px;"
  	+"margin-bottom: 20px;"
	+"float:left;}"
; 

var ref = document.querySelector('script');
document.addEventListener("DOMContentLoaded", function(event){
	const container = document.getElementById("users-container");
	console.log(container);

	const icon_classes= ["far fa-eye", "fas fa-plus", "fas fa-ban","fas fa-exclamation-triangle"];
	const a_text = ["View profile", "Add friend", "Block user", "Report user"];
	function makeRows(rows,cols){
		container.style.setProperty('--grid-rows', rows);
		container.style.setProperty('--grid-cols', cols);
	
		for(i = 0; i < (rows*cols); i++){
			let userDiv = document.createElement('div');
			userDiv.className='user-card';
			let userImg = document.createElement('img');
			userImg.src="img/users/" + (i+1) + ".png";
			console.log(userImg.src);
			userDiv.appendChild(userImg);

			let userName = document.createElement('p');
			let userNameText = "user_" + (i+1); 
			let text = document.createTextNode(userNameText);
			userName.appendChild(text);
			userDiv.appendChild(userName);

			let optionsDiv = document.createElement("div");

			for(let i_options = 0; i_options <4; i_options++)
			{
				let aNode = document.createElement('a');
				if(i_options==0)
				{aNode.href="user-profile.html";}
			else
				{aNode.href="#";}
				aNode.innerHTML = a_text[i_options];
				aNode.innerHTML = "<i class='" + icon_classes[i_options]  + "'></i>";

				aNode.setAttribute("title", a_text[i_options]);
				optionsDiv.appendChild(aNode);
			}
						userDiv.appendChild(optionsDiv);
	
			let button = document.createElement('button');
			button.innerHTML='<i class="fas fa-gamepad fa-2x"></i>';
			button.className="btn-play";
            button.id="btn_"+(i+1);
			button.setAttribute("title", "Invite for game");
            button.onclick = function(){location.href="game-screen.html";};
			userDiv.appendChild(button);
	
			container.appendChild(userDiv);
		};
	};

	makeRows(10,4);
});


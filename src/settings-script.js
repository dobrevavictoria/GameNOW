var showManageProfilesSubsection_cnt_called = 0;
function showSection(screen_id, this_a_id){
	HideSaveConfirmation();
//check if user wants to access the last 2 sections which are only for the main accout

var list_screens = document.querySelectorAll("#main-section-div > section > div");
var list_links = document.querySelectorAll("#left-section li > a");
	for(let i=0;i<list_screens.length; i++){
		list_screens[i].style.display="none";
		list_links[i].classList.remove("activeli");
		list_links[i].classList.add("inactiveli");
	}
	document.getElementById(screen_id).style.display="block";
	document.getElementById(this_a_id).classList.add("activeli");
	document.getElementById("saveBtn").style.visibility = 'visible';

	let contentElement = document.getElementById("content");

	if(screen_id=="forgotten-credentials-section"){
			document.querySelectorAll("#forgotten-credentials-section p").innerHTML = "In case of forgotten credentials, send a verification code to your account email.";
			document.getElementById("saveBtn").value="Send";
			document.getElementById("saveBtn").innerHTML="Send";
			document.getElementById("save-info-message").innerHTML="Verification code send to your account email successfully!";

			if(checkIfMainAccount())
				{
					document.querySelector("#forgotten-credentials-section p:last-child").style.visibility = "visible";
				}
		}
		else{
			document.getElementById("saveBtn").value="Save";
			document.getElementById("saveBtn").innerHTML="Save";
			document.getElementById("save-info-message").innerHTML="Changes saved successfully!";
		}
}

function ShowSaveConfirmation(){
	document.getElementById("save-info-message").style.visibility="visible";
}

function HideSaveConfirmation(){
	document.getElementById("save-info-message").style.visibility="hidden";
}

function getCurrentUser()
{
	return document.querySelector("#profile-bar ul li a:first-child").textContent;
}
function checkIfMainAccount()
{
	let pattern = /Main account */;
	let currentUser = getCurrentUser();
	if(!pattern.test(currentUser)){
		return false;
	}
	return true;
}

function setCurrentUser(user_id){
	let currentUserElement = document.querySelector("#profile-bar ul li a:first-child");
	let oldUser = currentUserElement.textContent; //old user because will be replased with new current user
	let saveBtn = document.getElementById("saveBtn");
	
    let oldUserElement = document.getElementById(user_id);
	let currentUser = oldUserElement.textContent;
	console.log(currentUser);
	console.log(currentUserElement.textContent);
	currentUserElement.innerHTML = currentUser + '<i class="fa fa-angle-down"></i>';
	oldUserElement.innerHTML = oldUser;

	let mainAccountOptions = document.querySelectorAll("#left-section ul li:nth-child(5), #left-section ul li:nth-child(6)");
	let mainAccountSections = document.querySelectorAll("#main-section-div > section > div:nth-child(5), #main-section-div > section > div:nth-child(6)");
	if(!checkIfMainAccount())
		{

			if(mainAccountOptions[0].querySelector("a").classList.contains("activeli") || mainAccountOptions[1].querySelector("a").classList.contains("activeli"))
			{
				saveBtn.style.visibility = 'hidden';
			}
			for(let i=0;i<2;i++)
			{
				console.log(mainAccountOptions[i]);
				mainAccountOptions[i].style.visibility = "hidden";
				mainAccountSections[i].style.visibility = "hidden";
			}
		} else
			{
				for(let i=0;i<2;i++)
					{
						console.log(mainAccountOptions[i]);
						mainAccountOptions[i].style.visibility = "visible";
						mainAccountSections[i].style.visibility = "visible";
					}
			
			}
}
function hideAllSubsections()
{
	let allSubsections = document.querySelectorAll("#manage-profiles-section > div");
	for(let i=0;i<allSubsections.length;i++)
	{
		allSubsections[i].style.display = "none";
	}
}

function showManageProfilesSubsection(subsection_title, section_id)
{
	if(showManageProfilesSubsection_cnt_called == 0)
	{hideAllSubsections();}
	showManageProfilesSubsection_cnt_called +=1;

	let sectionToDisplay = document.getElementById(section_id);
	let subsectionTitleElement = document.getElementById(subsection_title);
		
	if(sectionToDisplay.style.display == "none"){
	hideAllSubsections();
	subsectionTitleElement.style.color="#90caf9";// light blue
	sectionToDisplay.style.display = "block";

	}else{
	subsectionTitleElement.style.color="#0d47a1";// dark blue
	sectionToDisplay.style.display = "none";}
	//let subsection_title = document.getElementById(subsection_title);
}

function startFunc()
{
		document.addEventListener('DOMContentLoaded', (event) => {
	let subsectionList= document.querySelectorAll("#manage-profiles-section > div");
	for(let i=0;i<subsectionList.length;i++)
	{
		subsectionList.style.display="none";
	}});
}

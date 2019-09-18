// a function to make visible or invisible the episodes of each season
// First of all we get the id of the episodes
function show_hide(id){
	// if we have received the id it will go on
	if (document.getElementById){
		// if the episodes' display is none, we will make it block (we will make it visible)
		if (document.getElementById(id).style.display=="none"){
			document.getElementById(id).style.display="block";
		// otherwise, we will make it none (we will make it invisible)
		}else{
			document.getElementById(id).style.display="none";
		}
	}
}
// a function that will be called each time this document is loaded
window.onload = function(){
	for (let i=1;i<=3;i++){
		show_hide("season" + i + "episodes");
	}
}
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
	var scrolled = 0;
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrolled = parseFloat((winScroll / height) * 100).toFixed(2) || 0;
	document.getElementById("progress").innerHTML = scrolled + "%";
	
	
	var link_expertise = document.getElementById("link-expertise");
	var link_experience = document.getElementById("link-experience");
	var link_contact = document.getElementById("link-contact");
	link_expertise.classList.remove("active-link");
	link_experience.classList.remove("active-link");	
	link_contact.classList.remove("active-link");
	
		
	if(scrolled>=0 && scrolled<= 20){
		link_expertise.classList.add("active-link");	
	}

	if(scrolled>=20 && scrolled<= 40){

	}
		
	if(scrolled>=40 && scrolled<= 60){
		link_experience.classList.add("active-link");	
	}

	if(scrolled>=60 && scrolled<= 80){

	}

	if(scrolled>=80 && scrolled<= 100){
		link_contact.classList.add("active-link");
	}
			
}
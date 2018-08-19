

var element_link_ids = [
	"#link-first","#link-second","#link-third","#link-last"
];
var element_content_ids = [
	"#first","#second","#third","#last"
];
var element_contents = [];
var element_contents_height = [];


$(document).ready(initializeScript);

function initializeScript() {
	element_content_ids.forEach( (id)=>{ 
		let elem = $(id);
		element_contents.push( elem );
		element_contents_height.push( elem.scrollTop() );
	} );	// initialize doms	
	window.onscroll = function() {
		autoStyleLinks()
	};
	assignListeners()

	console.log({element_contents_height});
};
	


function autoStyleLinks() {

	resetLinkStyles( element_contents );

	var scrolled = 0;
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var viewHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	
	scrolled = parseFloat((winScroll / viewHeight) * 100).toFixed(2) || 0;
	
	let debug = `
		${scrolled}% scroll\n
		${viewHeight} viewHeight\n
		${winScroll} winScroll
	`;
	$("#progress").text(debug);

	viewHeight
}

function resetLinkStyles(elements) {
	elements.forEach( (elem)=>{ elem.removeClass("active-link") } );					// reset styles
}

function assignListeners(){
	element_link_ids.forEach( (id,idx)=>{
		$(id).on("click", function(){autoScroll(element_contents[idx])});
	});
}

function autoScroll(scrollToElement) {
	let scrollOffset = 25;
	console.log('autoScroll to '+$( scrollToElement ).offset().top);
	$('html, body').stop().animate({
		scrollTop: $( scrollToElement ).offset().top - scrollOffset
	}, 1000);
}





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
	initializeValues();
		// initialize doms	
	window.onscroll = function() {
		autoStyleLinks()
	};
	assignListeners()

	console.log({element_contents, element_contents_height});
};
	


function autoStyleLinks() {

	resetLinkStyles( element_link_ids );

	var scrolled = 0;
  /*var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var viewHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;*/

	let winScroll = $('html, body').scrollTop();
	let viewHeight = $(':root').height();
	
	scrolled = parseFloat((winScroll / viewHeight) * 100).toFixed(2) || 0;
	
	/*let debug = `
		${scrolled}% scroll\n
		${viewHeight} viewHeight\n
		${winScroll} winScroll
	`;
	$("#progress").text(debug);*/

	let offset = -90;
	winScroll -= offset;
	if( winScroll<element_contents_height[1] ){
		$(element_link_ids[0]).addClass("active-link");
	}else if(
		winScroll>=element_contents_height[1] &&
		winScroll<element_contents_height[2]){

		$(element_link_ids[1]).addClass("active-link");
	}else if(
		winScroll>=element_contents_height[2] &&
		winScroll<element_contents_height[3]){

		$(element_link_ids[2]).addClass("active-link");
	}else if(winScroll>=element_contents_height[3]){

		$(element_link_ids[3]).addClass("active-link");
	}

	// reInitialize height values
	initializeValues();
}

function resetLinkStyles(ids) {
	ids.forEach( (id)=>{ $(id).removeClass("active-link") } );					// reset styles
}

function assignListeners(){
	element_link_ids.forEach( (id,idx)=>{
		$(id).on("click", function(){autoScroll(element_contents_height[idx])});
	});
}

function autoScroll(posY) {
	
	console.log('autoScroll to ' + posY );
	$('html, body').animate({
		scrollTop: posY
	}, 500);
}

function initializeValues() {
	let scrollOffset = 25;
	element_contents = [];
	element_contents_height = [];
	element_content_ids.forEach( (id)=>{ 
		let elem = $(id);
		element_contents.push( elem );
		element_contents_height.push( elem.offset().top - scrollOffset );
	});
}


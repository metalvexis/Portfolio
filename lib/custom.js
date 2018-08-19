

var element_link_ids = [
	"#link-first","#link-second","#link-third","#link-last"
];
var element_content_ids = [
	"#first","#second","#third","#last"
];
var element_contents = [];


$(document).ready(initializeScript);

function initializeScript() {
	initializeValues();	
	assignListeners();
};

function assignListeners(){
	element_link_ids.forEach( (id,idx)=>{
		$(id).on("click", function(){
			let copyIdx = idx;
			let scrollOffset = -100;
			autoScroll(element_contents[copyIdx].offset().top + scrollOffset)
		});
	});
}

function autoScroll(posY) {
	
	console.log('autoScroll to ' + posY );
	$('html, body').animate({
		scrollTop: posY
	}, 500);
}

function initializeValues() {
	//let scrollOffset = -25;
	element_contents = [];
	//element_contents_height = [];
	element_content_ids.forEach( (id)=>{
		let elem = $(id);
		element_contents.push( elem );
		//element_contents_height.push( elem.offset().top + scrollOffset );
	});
	//console.log({element_contents, element_contents_height});
}




var element_link_ids = [
	"#link-first","#link-second","#link-third"
];
var element_content_ids = [
	"#first","#second","#third"
];
var element_contents = [];

var element_contents_height = [];


$(document).ready(initializeScript);
$( window ).resize(function(){
	initializeValues();
});

$( window ).scroll(function(){
	
});

function initializeScript() {
	initializeValues();	
	assignListeners();
};

function assignListeners(){
	element_link_ids.forEach( (id,idx)=>{
		$(id).on("click", function(){
			let copyIdx = idx;
			autoScroll(element_contents_height[copyIdx])
		});
	});
}

function autoScroll(posY) {
	//console.log('autoScroll to ' + posY );
	$('html, body').stop().animate({
		scrollTop: posY
	}, 500);
}

function initializeValues() {
	let scrollOffset = 0;
	element_contents = [];
	element_contents_height = [];
	element_content_ids.forEach( (id)=>{
		let elem = $(id);
		element_contents.push( elem );
		element_contents_height.push( elem.offset().top + scrollOffset );
	});
}


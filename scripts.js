$(document).ready(function(){
	console.log('ready');

	//add items to list when text is submitted
	$(document).on('click', '#listbuilder-btn', function () {
		$('#shoppinglist').append('<li>' + $('#listbuilder').val() + '</li>');
		$('#listbuilder').val('');


		console.log('list item added');
		return false;
	});
});

	//listen for clicks on list items
	$(document).on('click', '#shoppinglist li', function () {
		$(this).toggleClass('bought');
		console.log('item clicked');
	});

	//clear 'bought' items when clear list button is clicked
	$('#clear-btn').on('click', function () {
		$('.bought').hide();
		console.log('list cleared');
	});



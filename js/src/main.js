$(function() {

	var form = new ReptileForm('form');

	// Do something when errors are detected.
	form.on('validationError', function(e, err) {
		
	});

	// Do something when the AJAX request has returned in success
	form.on('xhrSuccess', function(e, data) {
		
	});

	// Do something when the AJAX request has returned with an error
	form.on('xhrError', function(e, xhr, settings, thrownError) {
		
	});

});
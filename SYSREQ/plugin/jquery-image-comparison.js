$(function() {

	var $comparisons = $('.comparison');
	$.each($comparisons, function() {

		// Variables
		var $comparison = $(this);
		var $props; // Controls which values to change (height or width)
		var $top = $('li:last-child', $comparison);

		// Set properties
		if($comparison.hasClass('horizontal'))
			$props = ['height', 'Height', 'Y'];
		else if($comparison.hasClass('vertical'))
			$props = ['width', 'Width', 'X'];
		else // No direction, exit and continue with next comparison pair (if any)
			return true;

		// Set top image to half height/width
		$top.css($props[0], '50%');

		// Events
		$comparison.on('mousedown', function(e) {
			if(e.which === 1) {
				$top.css($props[0], (e['offset' + $props[2]] / $comparison[0]['offset' + $props[1]]) * 100 + '%');
				$comparison.on('mousemove', function(e) {
					$top.css($props[0], (e['offset' + $props[2]] / $comparison[0]['offset' + $props[1]]) * 100 + '%');
				});
				e.preventDefault();
			}
		});
		$(window).on('mouseup', function() {
			$comparison.off('mousemove');
		});

	});

});
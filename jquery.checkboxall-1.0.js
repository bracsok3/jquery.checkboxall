/*!
 * jquery.checkboxall - Turn on/off all checkbox in the container. Required jQuery 1.6 or above
 *
 * @version v1.0
 * @homepage http://neeed.us/
 * @demo: http://neeed.us/plugins/jquery.checboxall/
 * @author Norbert Bracsok <norbert@neeed.us>
 * Licensed under the MIT license
 */
(function($) {
	'use strict';
	
	if(typeof jQuery === "undefined") {
		console.log('jquery.checkboxall plugin needs the jquery plugin');
		return false;
	}
	
	$.fn.checkboxall = function(allSelector) {
		
		if (allSelector === undefined) {
			allSelector	=	'all';
		}
		
		var	parent	=	this;
		
		if ($('.' + allSelector, parent).length) {
			var	all				=	$('.' + allSelector, parent),
				checkbox		=	parent.find('input[type="checkbox"]'),
				childCheckbox	=	checkbox.not('.' + allSelector, parent);

			return checkbox
					.unbind('click')
					.click(function(event) {
						event.stopPropagation();
				
						var	th	=	$(this);

						if (th.hasClass(allSelector)) {
							checkbox.prop('checked', th.prop('checked'));
						}
						else {
							if (childCheckbox.length !== childCheckbox.filter(':checked').length) {
								all.prop('checked', false);
							}
							else {
								all.prop('checked', true);
							}
						}
					});
		}
		else {
			console.log('jquery.checkboxall error: main selector is not exists.');
			console.log('Please add \'all\' class to first checkbox or give the first checkbox a class name and enter the checkboxall() functions for the class name!');
			console.log('Example: $(selector).checkboxall(\'your-checkbox-class-name\');');
		}
	};
}(jQuery));
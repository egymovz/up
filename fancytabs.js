jQuery(document).ready(function($) {
	//highlight first link
	$('.link-catch-all[data-counter="1"]').addClass('fancytab_on');
	//hide all tabs
	$('.tabs-catch-all').hide();
	//show first
	$('.tabs-catch-all[data-counter="1"]').show();
	
	//link clicked
	$('.link-catch-all').click (function (event) {
		//reference it
		var this_tab = $(this);
		//reference counter number
		var this_tab_num = $(this_tab).data('counter');
		
		//remove class from all links
		$('.link-catch-all').removeClass('fancytab_on');
		//but re-add it to the clicked one
		this_tab.addClass('fancytab_on');
		
		//hide all tabs
		$('.tabs-catch-all').hide();
		//but show the one that correlates to the click
		$('.tabs-catch-all[data-counter="' + this_tab_num + '"]').show();
	});
});
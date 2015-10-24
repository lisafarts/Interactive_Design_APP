function window_scroll() {
	/*PIN NAVIGATION BAR WHEN SCROLLING PAST IT*/
	var howFar = $(window).scrollTop();

	console.log('howFar');

	if (howFar >= 220)
	{
			$('body').addClass('pinned');
	}
	else
	{
		$('body').removeClass('pinned');
	}

	/*chosen section*/
	var sect2_top = $('#sect2').offset().top - 70;
	var sect3_top = $('#sect3').offset().top - 70;
	var sect4_top = $('#sect4').offset().top - 70;
	var sect5_top = $('#sect5').offset().top - 70;

		/*remove from all - blanket removal*/
		$('nav a').removeClass('chosen');

		/*add it based on how far user has scrolled*/
	if (howFar < sect2_top)
	{
		$('nav a:eq(0)').addClass('chosen');
	}	
	else if (howFar >= sect2_top && howFar < sect3_top)
	{ 
		$('nav a:eq(1)').addClass('chosen');
	}
	else if (howFar >= sect3_top && howFar < sect4_top)
	{ 
		$('nav a:eq(2)').addClass('chosen');
	}
	else if (howFar >= sect4_top && howFar < sect5_top)
	{ 
		$('nav a:eq(3)').addClass('chosen');
	}
	else if (howFar >= sect5_top)
	{ 
		$('nav a:eq(4)').addClass('chosen');
	}

		
} 

/*here ends window_scrolls*/

$(window).scroll(window_scroll);

/*Nav Link Animate Scroll*/

function navLink_click(event) {
	/*kill default behavior - thanks we will take it from here*/
	event.preventDefault();

	/*figure out which section and how far*/
	var whichSect = $(this).attr('href');

	var distance = $(whichSect).offset().top - 70;

	// animate document
	$('html, body').animate({'scrollTop':distance}, 1000);

}

$('nav a').click(navLink_click);
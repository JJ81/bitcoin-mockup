(function ($) {
	var exchangeTabMenuLink = $('.exchange-tab-menu-link');
	var exchangeTabMenu = $('.exchange-tab-menu');
	var exchangeAreaTable = $('.exchange-area-table');
	var exchangeTableHeader = $('.exchange-table-header');
	
	exchangeTabMenu.delegate('li', 'click', function (e) {
		e.preventDefault();
		
		console.log('click');
		console.log( $(this).index() );
		
		
		var selected = $(this).index();
		
		exchangeTabMenuLink.removeClass('exchange-tab-menu-active');
		$(this).find('a').addClass('exchange-tab-menu-active');
		
		exchangeAreaTable.addClass('blind');
		exchangeAreaTable.eq(selected).removeClass('blind');
		
		exchangeTableHeader.addClass('blind');
		if(selected === 4){
			exchangeTableHeader.eq(1).removeClass('blind');
		}else{
			exchangeTableHeader.eq(0).removeClass('blind');
		}
		
		
	});

}(jQuery));

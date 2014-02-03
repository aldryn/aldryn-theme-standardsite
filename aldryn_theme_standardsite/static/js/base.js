/*!
 * @author:	Divio AG
 * @copyright:	http://www.divio.ch
 */

//######################################################################################################################
// #NAMESPACES#
var Cl = window.Cl || {};

//######################################################################################################################
// #BASE#
jQuery(document).ready(function () {

	// set the correct js path
	requirejs.config({ 'baseUrl': Cl.static + 'js/' });

	// load modules using require
	require(['modules/cl.utils'], function() {
		// removes noscript form body and adds print-js
		Cl.Utils.document();
		// handles input placeholder="" attributes
		Cl.Utils.placeholders();
		// handles the viewport scaling for mobile devices
		Cl.Utils.viewport();
		// load default jquery widgets from plugins/jquery.functions.js
		$('.popup').autoPopUp();
		$('.mailcrypte').mailCrypte();
	});

	// load mobilemenu
	require(['plugins/cl.mobilemenu'], function () {
		new Cl.Mobilemenu({
			'bound': 739,
			'offset': {
				'top': -32
			}
		});
	});

});
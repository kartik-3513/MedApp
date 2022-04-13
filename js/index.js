var activeNav = true;
//initialisation of editor window object
$(document).ready(function () {
	$('#hamburger').on('click', toggleActive);
	const code = $('.codemirror-textarea')[0];
	$('#translate-button').on('click', assemble);
});

//toggleActive is used for responsive navbar
function toggleActive() {
	activeNav = !activeNav;
	if (activeNav) {
		$('#nav-ul').removeClass('active');
	} else {
		$('#nav-ul').addClass('active');
	}
}
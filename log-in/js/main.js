(function ($) {
    "use strict";
	$("[data-bg-image]").each(function() {
		var img = $(this).data("bg-image");
		$(this).css({
			backgroundImage: "url(" + img + ")"
		});
    });

    window.onload = addNewClass();

    function addNewClass() {
        $('.fxt-template-animation').imagesLoaded().done(function (instance) {
            $('.fxt-template-animation').addClass('loaded');
        });
    }
    
    $(".toggle-password").on('click', function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

})(jQuery);
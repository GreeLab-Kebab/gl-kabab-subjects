
        $(function() {
            $('#a8c-service-toggle').click(function() {
                var body = $('body'),
                    header = $('#unified-header'),
                    dops = $('#a8c-dops');

                $(this).parent().toggleClass('active');
                body.toggleClass('dropped');
                header.toggleClass('dropped');
                dops.toggleClass('dropped');
            });

            $("#responsive-menu-button").click(function(a) {
                a.preventDefault();
                $(".main-nav").toggleClass("dropped");
            })

        });
    
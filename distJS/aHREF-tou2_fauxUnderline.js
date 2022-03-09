setTimeout(() => {

    var aHREF_tou2 = $("body").contents("*").addBack().find("*").addBack().filter("a[href$='text=DISCLAIMER%20[BINDING]']");

    $(document).ready(function () {
        try {
            $(aHREF_tou2).not("span").addClass("faux-underline");
            $(aHREF_tou2).text(function (i, oldText) {
                return !(oldText === '[§2]') ? (oldText + '†').toString() : oldText;
            });
        } catch (error) {
            void(0);
        } finally {
            $(aHREF_tou2).filter(function () {
                return $(this).text().toLowerCase().includes("†");
            }).html(function (_, html) {
                return html.replace(/(†)/g, '<sup class="no-faux-underline" style="font-variant: all-small-caps;font-size: 90%;top: -0.45em;">$1</sup>')
            });
            $(aHREF_tou2).filter(function () {
                return !($(this).text().toLowerCase().includes("†"))
            }).addClass("no-faux-underline").css("text-decoration", "underline").removeClass("faux-underline");
            try {
                function cssUnmultiply(selector) {
                    $(selector).css("filter", "url(#unmultiplyAlphaInverted");
                }
                if ($(aHREF_tou2).hasClass("faux-underline") == 'true') {
                    cssUnmultiply($(this));
                    if ($(aHREF_tou2).find("sup").hasClass("no-faux-underline") == 'true') {
                        cssUnmultiply($(this));
                    }
                } else if ($("*").hasClass("faux-underline") || $("*").hasClass("no-faux-underline")) {
                    cssUnmultiply($("a.faux-underline"));
                    cssUnmultiply($("sup.no-faux-underline"));
                }
            } catch (error) {
                console.clear();
            } finally {
                setTimeout(() => {
                    var svgFilterRedraw = $(aHREF_tou2).get(0);
                    svgFilterRedraw.style.display = "none", svgFilterRedraw.offsetHeight, svgFilterRedraw.style.display = "";
                }, 999);
            }
        }
    });

}, 999);

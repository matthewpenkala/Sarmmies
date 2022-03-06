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
        }
    });

}, 999);

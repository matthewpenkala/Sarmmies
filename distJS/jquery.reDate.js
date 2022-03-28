$("article[class*='blog']").find("div:contains(20)").filter("div[class*='text']").each(function () {
    var regex = /((?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Sept|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?))/gis;
    try {
        function randomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }
        $(this).html($(this).text().replace(/\b(19|20)\d\d\b/g, new Date().getFullYear()));
        var randomDateSTR = (jQuery.format.date(randomDate(new Date(new Date().getFullYear(), 12, 12), new Date()))).toLocaleString("default", {
            month: "long"
        }).toString();
        $(this).html($(this).text().replace(regex, randomDateSTR))
    } catch (error) {
        javascript: void 0;
    }
    finally {
        if ((jQuery.format.prettyDate($(this).text()).toString().includes("from now")) || ((jQuery.format.toBrowserTimeZone($(this).text())) > (jQuery.format.toBrowserTimeZone(new Date())))) {
            $(this).html($(this).text().replace(regex, new Date().toLocaleString("default", {
                month: "long"
            })));
        }
    }
});
var SCobserver = new MutationObserver(function(mutations) {
    const navBar_WF = $("div[role='banner']").add(".nav-bar").filter(".nav-bar[id^='SRMS_NAV']");
    mutations.forEach(function(mutation) {
        if ($(mutation.target).hasClass("snipcart-sidecart--opened")) {
            if (!$(mutation.target).hasClass("SCnoOverflow")) {
                var svgSC_filterDarkBG = $("filter#SC-filterDarkBG").parent("*").addBack().find("*").addBack().add("filter#SC-filterDarkBG");
                $(mutation.target).addClass("SCnoOverflow");
                $("#snipcart").siblings("*").not("script, style, link").not("#snipcart").not(svgSC_filterDarkBG).not(navBar_WF).wrapAll("<div id='SC-wrapped'/>");
                $("#SC-wrapped").not(svgSC_filterDarkBG).not("#snipcart").not(navBar_WF).css({"filter": "url(#SC-filterDarkBG) blur(6px)", "background": "rgb(255,255,255)", "pointer-events": "none", "user-select": "none", "cursor": "pointer"});
                $(navBar_WF).parent("*").addBack().not("#snipcart").add("div.nav-bar").not("#snipcart").find(".nav-bar[id^='SRMS_NAV']").first().addClass("SC-newAddedClass");
                $("*").not("#snipcart").filter("html:root").not("#SC-wrapped").find("body").not("#snipcart").first().css("background", "rgb(226,223,227)");
            } else {
                return;
            }
        } else if ($(mutation.target).hasClass("SCnoOverflow")) {
            var navRelative = $("body").contents("*").addBack().add("html").find("#SRMS_NAV_RELATIVE").first();
            $(mutation.target).removeClass("SCnoOverflow");
            $("html:root").find("*").addBack().filter("#SC-wrapped").css({"filter": "", "background": "", "pointer-events": "", "user-select": "", "cursor": ""}).not(navBar_WF).children().not("filter#SC-filterDarkBG").not(navBar_WF).unwrap("*");
            $("#snipcart").siblings("*").add(navBar_WF).not("#snipcart").css({"filter": "", "background": "", "pointer-events": "", "user-select": "", "cursor": ""}).add("*").not("#snipcart").find(".nav-bar").first().removeClass("SC-newAddedClass");
            $("*").not(navBar_WF).find(":not(#snipcart):not(#snipcart *)").add("html:root, body").not("#snipcart").find("body").first().css("background", "");
            if ($("#SRMS_NAV_RELATIVE").length) {$("*").find("div.atc-product-page-fxd_btn").first().after(navRelative);}
        }
    });
});

SCobserver.observe(document.querySelector("html"), {attributes: true});

var SCobserver = new MutationObserver(function(mutations) {
    const navBarGlobal_WF = $("div[role='banner']").add(".nav-bar").filter(".nav-bar[id^='SRMS_NAV']");
    const navBarProduct_WF = $("body").contents("*").addBack().add("html").find("#SRMS_NAV_RELATIVE").first();
    mutations.forEach(function(mutation) {
        if ($(mutation.target).hasClass("snipcart-sidecart--opened")) {
            if (!$(mutation.target).hasClass("SCnoOverflow")) {
                var svgSC_filterDarkBG = $("filter#SC-filterDarkBG").parent("*").addBack().find("*").addBack().add("filter#SC-filterDarkBG");
                $(mutation.target).addClass("SCnoOverflow");
                $("#snipcart").siblings("*").not("script, style, link").not("#snipcart").not(svgSC_filterDarkBG).not(navBarGlobal_WF).wrapAll("<div id='SC-wrapped'/>");
                $("#SC-wrapped").not(svgSC_filterDarkBG).not("#snipcart").not(navBarGlobal_WF).css({"filter": "url(#SC-filterDarkBG) blur(6px)", "background": "rgb(255,255,255)", "pointer-events": "none", "user-select": "none", "cursor": "pointer"});
                $(navBarGlobal_WF).parent("*").addBack().not("#snipcart").add("div.nav-bar").not("#snipcart").find(".nav-bar[id^='SRMS_NAV']").first().addClass("SC-newAddedClass");
                $("*").not("#snipcart").filter("html:root").not("#SC-wrapped").find("body").not("#snipcart").first().css("background", "rgb(226,223,227)");
				if ($("#SRMS_NAV_RELATIVE").length) {$("html:root").add("body").not("script").find("body").not("head").first().prepend(navBarProduct_WF);}
				setTimeout(() => {console.clear()}, 999);
            } else {
                return;
            }
        } else if ($(mutation.target).hasClass("SCnoOverflow")) {
            $(mutation.target).removeClass("SCnoOverflow");
            $("html:root").find("*").addBack().filter("#SC-wrapped").css({"filter": "", "background": "", "pointer-events": "", "user-select": "", "cursor": ""}).not(navBarGlobal_WF).children().not("filter#SC-filterDarkBG").not(navBarGlobal_WF).unwrap("*");
            $("#snipcart").siblings("*").add(navBarGlobal_WF).not("#snipcart").css({"filter": "", "background": "", "pointer-events": "", "user-select": "", "cursor": ""}).add("*").not("#snipcart").find(".nav-bar").first().removeClass("SC-newAddedClass");
            $("*").not(navBarGlobal_WF).find(":not(#snipcart):not(#snipcart *)").add("html:root, body").not("#snipcart").find("body").first().css("background", "");
            if ($("#SRMS_NAV_RELATIVE").length) {$("*.atc-product-page-fxd_btn").find("*").addBack().add("body").filter("div.atc-product-page-fxd_btn").first().after(navBarProduct_WF);}
			setTimeout(() => {console.clear()}, 999);
        }
		try{console.clear()}catch(e){}
    });
});

SCobserver.observe(document.querySelector("html"), {attributes: true});

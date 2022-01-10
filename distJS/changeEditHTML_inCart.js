setTimeout(() => {
    $("#snipcart button:not(h1,h2,h3,h4,h5,h6).snipcart-button-link[type~=button]:not(span):contains('Edit')").attr("style", "text-underline-offset: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) + (1.5px / 10))").css({
        "border-bottom": "none",
        "text-decoration": "solid underline 1.5px"
    }).html('<span style=" display: inline-block; font-variant-caps: all-small-caps; font-size: large; text-decoration: none; position: relative; bottom: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) - (1.5px / 10)); right: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) + (1.5px / 10));">✎ </span>Edit');
}, 9999);
$("#snipcart").find("*").addBack().add("a.cart-button[href]").not("head").add(".snipcart-checkout, .w-commerce-commercecartopenlink").not("script, style").add('input[class*="add"][data-node-type*=commerce-add-to-cart-button]').click(function() {
    console.log("🛈 CLICK DETECTED: A wf-commerce element and/or Snipcart descendant has been clicked.");
    if ($("html").hasClass("snipcart-cart--opened")) {
        if ($('#snipcart button:not(h1,h2,h3,h4,h5,h6).snipcart-button-link[type~=button]:not(span):contains("Edit")').length > 0) {
            $("#snipcart button:not(h1,h2,h3,h4,h5,h6).snipcart-button-link[type~=button]:not(span)").attr("style", "text-underline-offset: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) + (1.5px / 10))").css({
                "border-bottom": "none",
                "text-decoration": "solid underline 1.5px"
            }).html('<span style=" display: inline-block; font-variant-caps: all-small-caps; font-size: large; text-decoration: none; position: relative; bottom: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) - (1.5px / 10)); right: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) + (1.5px / 10));">✎ </span>Edit');
        }
    } else if ($("html").hasClass("snipcart-sidecart--opened")) {
        if ($('#snipcart button:not(h1,h2,h3,h4,h5,h6).snipcart-button-link[type~=button]:not(span):contains("Edit")').length > 0) {
            $("#snipcart button:not(h1,h2,h3,h4,h5,h6).snipcart-button-link[type~=button]:not(span)").attr("style", "text-underline-offset: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) + (1.5px / 10))").css({
                "border-bottom": "none",
                "text-decoration": "solid underline 1.5px"
            }).html('<span style=" display: inline-block; font-variant-caps: all-small-caps; font-size: large; text-decoration: none; position: relative; bottom: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) - (1.5px / 10)); right: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) + (1.5px / 10));">✎ </span>Edit');
        }
    }
    setTimeout(() => {
        $("#snipcart button:not(h1,h2,h3,h4,h5,h6).snipcart-button-link[type~=button]:not(span):contains('Edit')").attr("style", "text-underline-offset: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) + (1.5px / 10))").css({
            "border-bottom": "none",
            "text-decoration": "solid underline 1.5px"
        }).html('<span style=" display: inline-block; font-variant-caps: all-small-caps; font-size: large; text-decoration: none; position: relative; bottom: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) - (1.5px / 10)); right: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) + (1.5px / 10));">✎ </span>Edit');
    }, 999);
    setTimeout(() => {
        try {
            console.clear()
        } catch (e) {}
    }, 999);
})
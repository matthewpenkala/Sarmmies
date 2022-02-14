setTimeout(() => {
    $("#snipcart button:not(h1,h2,h3,h4,h5,h6).snipcart-button-link[type~=button]:not(span):contains('Edit')").attr("style", "text-underline-offset: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) + (1.5px / 10))").css({
        "border-bottom": "none",
        "text-decoration": "solid underline 1.5px"
    }).html('<span style=" display: inline-block; font-variant-caps: all-small-caps; font-size: large; text-decoration: none; position: relative; bottom: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) - (1.5px / 10)); right: calc(((1.5px / 2) - 0.5px) + (1.5px / 2) + (1.5px / 10));">✎ </span>Edit');
}, 9999);
$("#snipcart").find("*").addBack().add("a.cart-button[href]").not("head").add(".snipcart-checkout, .w-commerce-commercecartopenlink").not("script, style").add('input[class*="add"][data-node-type*=commerce-add-to-cart-button]').click(function() {
    console.log("🛈 CLICK DETECTED: A wf-commerce element and/or Snipcart descendant has been clicked.");

    var SCshippingRatesListItem_COL = $("*[class*='snipcart'] > li.snipcart-shipping-rates-list-item:not(ul, span)").children("*").addBack().filter("span[class*='snipcart-shipping-rates-list-item']").not("input, label").filter("span[class*='price']");
    var SCshippingRatesListItem_PRICE1 = $(SCshippingRatesListItem_COL).text();
    var SCshippingRatesListItem_PRICE2 = SCshippingRatesListItem_PRICE1.match(/((?:[0-9]{1,3}[\.,]?)*[\.,]?[0-9]+)\b/gm, '')
    jQuery.each(SCshippingRatesListItem_COL, function(index, item) {
        $(this).data("priceVal", SCshippingRatesListItem_PRICE2[index]);
    });
    jQuery.each($("*[class*='snipcart'] > li.snipcart-shipping-rates-list-item:not(ul, span)"), function(index, item) {
        $(this).data("priceVal", SCshippingRatesListItem_PRICE2[index]);
    });
    $("*[class*='snipcart'] > li.snipcart-shipping-rates-list-item:not(ul, span)").parent().children().sort(function(a, b) {
        var firstValue = parseFloat($(a).data("priceVal"));
        var secondValue = parseFloat($(b).data("priceVal"));
        return firstValue > secondValue ? 1 : -1; // smallest value first
    }).appendTo($("*[class*='snipcart'] > li.snipcart-shipping-rates-list-item:not(ul, span)").parent().children().addBack().add("ul").filter("ul.snipcart-shipping-rates-list"));
    var SCshippingRatesListItem_NDAS = $("#snipcart-checkout-step-shipping").find("label[for*='ups-next-day-air-saver']").not("*[for*='early-am']").parent().filter("span").parent().next().filter("span[class*='price']");
    $(SCshippingRatesListItem_COL).filter(function() {
        return parseFloat($(this).data("priceVal")) > "49.01";
    }).not(SCshippingRatesListItem_NDAS).closest("li[class*='list-item']").hide();
    $("button[class*='snipcart']").contents("*").addBack().not("ul, li").click(function(){$.getScript("https://matthewpenkala.github.io/Sarmmies/distJS/reorderShippingRates.js")});

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

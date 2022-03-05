var Webflow = Webflow || [];
Webflow.push(function() {
    jQuery.fn.commonParent = function() {
        var s = this.first().parents();
        return this.slice(1).each(function(t, n) {
            for (; 0 < s.length && !(0 < s.first().has(n).length);) s.splice(0, 1)
        }), this.pushStack(s.first())
    };

    var $detectElem1 = $("*").find("div.snipcart-cart__footer").commonParent();
    var $detectElem2 = $("div#snipcart.snipcart").find("[class*='snipcart-cart']").commonParent();
    let $detectElemAll = $.merge($detectElem1, $detectElem2);

    const preLoader_zIndex_elm = $("body").add("html, head").children("*").addBack().filter("div").add("#SRMS-PRELOADER").not("#PRELOADER").parent("*").find("div").addBack().filter("#SRMS-PRELOADER").css("z-index");
    let spanElement_discountFees = $("span.snipcart-summary-fees__title:contains('Discount')").find("div[class*='tool-tip']").first();
    const preLoader_zIndex_str = (`${preLoader_zIndex_elm - 1}`).toString();

    var checkExist = setInterval(function() {
        if ($($detectElemAll).length) {
            // Perform some logic
            if ($(spanElement_discountFees).css("display") == "none") {
                $(spanElement_discountFees).parent("*").closest("div[class*='summary-fees']:not(.snipcart-summary-fees__discounts-icon)").css("z-index", preLoader_zIndex_str);
                $("span.snipcart-summary-fees__title:contains('Discount')").find("svg.snipcart__icon").first().css("filter", "url(#colorRemap-buttonSC) saturate(0.89) contrast(1.11) brightness(94.5%)");
            } else {
                $("span.snipcart-summary-fees__title:contains('Discount')").find("svg.snipcart__icon").first().css("filter", "url(#colorRemap-buttonSC) saturate(0.89) contrast(1.11) brightness(94.5%)");
                $(spanElement_discountFees).parent("*").closest("div[class*='summary-fees']:not(.snipcart-summary-fees__discounts-icon)").css("z-index", preLoader_zIndex_str - '3').css("z-index", preLoader_zIndex_str + '1');
            }

            clearInterval(checkExist);
        }
    }, 4999);
});
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

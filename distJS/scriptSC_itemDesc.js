"use strict";
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    for (;;) {
        if ($(".snipcart-item-description").length) {
            $(".snipcart-item-description").each(function() {
                var events = $(this).text().replace(/(?<=\]),/gi, "").replace(/\[(\u00a7|§)2\s-\sT\.O\.U\.\]/gi, "").replace(/\s\s+/g, " ").replace(/\s\.{1}/g, ".").replace(/(\s,)/gi, ",");
                if (149 < events.length) {
                    events = (events = events.substring(0, 148).replace(/[,]$/g, "").replace(/(^\s+)|(\s+$)/gi, "") + "...").replace(/,\.{1}/g, ", .").replace(/(\s\.\.\.+?)|(\s*\.{3,4})/g, "...").replace(/(^\s+)|(\s+$)/gi, "");
                }
                $(this).html(events);
                if ($(this).is(':contains("...")')) {
                    $(this).html(function(canCreateDiscussions, i) {
                        return i.replace(/(\.\.\.)/g, '<strong style="display: inline-block; padding-left: 1.11px"><span style="color: grey; font-style: oblique">$1</span></strong>');
                    });
                }
                $(this).css({
                    opacity: "89.1%",
                    "margin-top": "-6px",
                    "padding-bottom": "3px"
                });
            });
            break;
        }
    }
};

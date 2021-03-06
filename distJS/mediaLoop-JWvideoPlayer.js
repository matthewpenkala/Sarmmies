var targetJW_svgPlayBTN = $("*[class|=jw]").not("div.jw-svg-icon-play").filter("*[class*='jw-icon'][role~=button]").add(".jw-icon.jw-icon-display.jw-button-color.jw-reset").filter("div[aria-label]:not(.jw-svg-icon-play)").not("*[aria-label*='Close']").filter("div[aria-label*='Pause'], div[aria-label*='Play'], div[aria-label*='Replay'], div[aria-label*='Stop'], div[aria-label*='Buffer'], div[aria-label*='Loading']");
var nodeJW_divRootPlay = $("*.jwplayer[id$='_div']").first().children("*").addBack().add("div[class*='jw']").children("*").addBack().find("*:has(div)").not("*.jwplayer[id$='_div'], div[class|=jw][id], #botr_xnDg91jI_eclsroAc_div").filter("*[class*='jw']:not(script)").commonParent().add("*.jwplayer[id$='_div'], div[class|=jw][id], #botr_xnDg91jI_eclsroAc_div").filter("*[role=application], div[aria-label*='Video Player']").filter("div.jwplayer").first().get(0);

var observerJW_svgPlayBTN = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if ($(nodeJW_divRootPlay).hasClass("jw-state-playing") !== true) {
            try {
                $("*[class|=jw]").filter("*[class*='backdrop']").css("opacity", "0.01%").hide();
                $(targetJW_svgPlayBTN).css("opacity", "0.01%").filter("*[class*='icon-playback']").first().trigger("click");
                $("*[class|=jw]").filter("*[class*='jw-icon'][role~=button]").add(".jw-icon.jw-icon-display.jw-button-color.jw-reset").add("div.jw-icon-rewind").css("opacity", "0").not(targetJW_svgPlayBTN).css("pointer-events", "none");
            } catch (error) {
                console.log("\nโ๐ช๐๐ฅ๐ก๐๐ก๐: ๐ ๐๐๐ฎ๐๐ถ๐ผ๐ป๐ข๐ฏ๐๐ฒ๐ฟ๐๐ฒ๐ฟ @โ\nโ%o", {
                    nodeJW_divRootPlay: nodeJW_divRootPlay
                }, '\nhas NโฬฒOโฬฒTโฬฒ_โฬฒeโฬฒxโฬฒeโฬฒcโฬฒuโฬฒtโฬฒeโฬฒdโฬฒ .๐๐๐๐๐๐๐("๐๐๐๐๐")ใคforใค๐๐๐ข {โโฆโ} functionโ โ\nโ โ');
            } finally {
                void(0);
            }
        }
    });
});
observerJW_svgPlayBTN.observe(nodeJW_divRootPlay, {
    attributes: true,
    childList: true
});

Defer(function() {
    if ($(targetJW_svgPlayBTN).attr("aria-label") !== 'Pause') {
        $(targetJW_svgPlayBTN).css("opacity", "0.01%").filter("*[class*='icon-playback']").first().trigger("click");
        $("*[class|=jw]").filter("*[class*='backdrop']").css("opacity", "0.01%").hide();
        $("*[class|=jw]").filter("*[class*='jw-icon'][role~=button]").add(".jw-icon.jw-icon-display.jw-button-color.jw-reset").add("div.jw-icon-rewind").css("opacity", "0").not(targetJW_svgPlayBTN).css("pointer-events", "none");
    }
    setTimeout(() => {
        console.log("\n\n%cโใคโโงโโโ ๐ก๐ผ๐ ๐ฎ๐๐๐ฒ๐บ๐ฝ๐๐ถ๐ป๐ด ๐๐ผ ๐ถ๐ป๐ถ๐. & ๐ฒ๐๐ฒ๐ฐ๐๐๐ฒ โMโฬฒuโฬฒtโฬฒaโฬฒtโฬฒiโฬฒoโฬฒnโฬฒOโฬฒbโฬฒsโฬฒeโฬฒrโฬฒvโฬฒeโฬฒrโฬฒโใคโ โ%c \n\nโใโ๐พ๐๐ ๐๐ก๐ช๐ญ ๐๐๐ฉ๐๐๐ฉ๐๐ค๐ฃ ๐ซ๐๐ ๐จ๐ฉ๐ฎ๐ก๐ ๐ฅ๐ง๐ค๐ฅ๐๐ง๐ฉ๐ฎ, ๐ฉ๐ฎ๐ธ๐ต๐ฑ๐ฆ๐พ: '๐ณ๐ด๐ณ๐ช'โโโ'๐ง๐ฑ๐ด๐จ๐ฐ'โใโ per HTML โ๏ผโ๐๐๐โ๏ผโ element, JWโข Video Player @ โแดสแด-แดแดก_แดสแดส-สแดษดโ\n\n", "font-size: 20px;background: #d7002d;font-weight: bold;color:#FFF;padding:4px;border-radius: 6px;line-height: 25px;", "font-size: 15px;background: transparent;font-weight: auto;padding:auto;")
    }, 999);
});

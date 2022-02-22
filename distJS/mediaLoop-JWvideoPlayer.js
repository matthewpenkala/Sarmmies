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
                console.log("\n‎𝗪𝗔𝗥𝗡𝗜𝗡𝗚: 𝗠𝘂𝘁𝗮𝘁𝗶𝗼𝗻𝗢𝗯𝘀𝗲𝗿𝘃𝗲𝗿 @‎\n‎%o", {
                    nodeJW_divRootPlay: nodeJW_divRootPlay
                }, '\nhas N​̲O​̲T​̲_​̲e​̲x​̲e​̲c​̲u​̲t​̲e​̲d​̲ .𝚝𝚛𝚒𝚐𝚐𝚎𝚛("𝚌𝚕𝚒𝚌𝚔")ㅤforㅤ𝚝𝚛𝚢 {‎…‎} function‎ ‎\n‎ ‎');
                void(0);
            } finally {
                $(targetJW_svgPlayBTN).filter("*[class*='icon-playback']").on("click mousedown mouseup click", function() {
                    console.log("⋘ ―ㅤ𝚕𝚘𝚐𝚂𝚝𝚢𝚕𝚎𝙲𝚂𝚂_𝚙𝚕𝚊𝚢𝙹𝚆 is CONFIRMEDㅤ― ⋙");
                }, 999);
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
        console.log("\n\n%c‎ㅤ‎⧔‎―‎ 𝗡𝗼𝘄 𝗮𝘁𝘁𝗲𝗺𝗽𝘁𝗶𝗻𝗴 𝘁𝗼 𝗶𝗻𝗶𝘁. & 𝗲𝘅𝗲𝗰𝘂𝘁𝗲 ‎M​̲u​̲t​̲a​̲t​̲i​̲o​̲n​̲O​̲b​̲s​̲e​̲r​̲v​̲e​̲r​̲‎ㅤ‎ ‎%c \n\n‎〔‎𝘾𝙎𝙎 𝙛𝙡𝙪𝙭 𝙙𝙚𝙩𝙚𝙘𝙩𝙞𝙤𝙣 𝙫𝙞𝙖 𝙨𝙩𝙮𝙡𝙚 𝙥𝙧𝙤𝙥𝙚𝙧𝙩𝙮, 🇩🇮🇸🇵🇱🇦🇾: '🇳🇴🇳🇪' ⇆ '🇧🇱🇴🇨🇰'‎〕‎ per HTML ‎＜‎𝚜𝚟𝚐‎＞‎ element, JW™ Video Player @ ‎ᴇʟᴍ-ᴊᴡ_ᴘʟᴀʏ-ʙᴛɴ‎\n\n", "font-size: 20px;background: #d7002d;font-weight: bold;color:#FFF;padding:4px;border-radius: 6px;line-height: 25px;", "font-size: 15px;background: transparent;font-weight: auto;padding:auto;")
    }, 999);
});

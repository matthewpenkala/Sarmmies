function initSleep(milliseconds){const date=Date.now();let currentDate=null;do{currentDate=Date.now()}while(currentDate-date<milliseconds);}
var Webflow=Webflow||[];Webflow.push(function(){jQuery.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-visible/1.2.0/jquery.visible.min.js")});
initSleep(99);


elmJW_itvlFunc = setInterval(elmJW_ifThenFunc, 999);
initSleep(99);
function elmJW_ifThenFunc() {
	console.log("⋘ ―ㅤSTART OF IF/ELSE FUNCTIONㅤ― ⋙");
    if ($("*[class*='jw']").visible() == 'true') {
		var Webflow = Webflow || [];
		Webflow.push(function() {
			function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
			sleep(999).then(() => {
				console.log("✥ ᴘʀɪɴᴄɪᴘᴀʟ⠀~⠀\[１\] ≤ 𝗲𝗹𝗺𝗝𝗪 𝗶𝘀: v̲i̲s̲i̲b̲l̲e̲!〈𝘐𝘍–1ˢᵗ〉");
				var elmJW_initClassSearch = $("*[class|=jw]:not(video)").filter("div.jw-wrapper");
				$(elmJW_initClassSearch).find("*[class*='jw-title']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide();
				$(elmJW_initClassSearch).find("*[class*='jw-nextup-container']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide();
				$(elmJW_initClassSearch).find("*[class*='jw-controlbar']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide();
				$(elmJW_initClassSearch).find("*[class*='jw-rightclick']").not("script").children("*").not("video").addBack().add("div.jw-rightclick.jw-open").css("opacity", "0.01%").hide();
				$(elmJW_initClassSearch).add("#jw-settings-menu").find("*[class*='jw-settings-menu']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide();
			});
		});
    } else if (document.readyState == 'complete') {
		Defer(function() {
			// alert("⧔╴ r​̲e​̲a​̲d​̲y​̲S​̲t​̲a​̲t​̲e​̲_​̲i​̲s​̲: 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲⠀〈𝘌𝘓𝘚𝘌_𝘐𝘍‐2ⁿᵈ〉");
			var i = $("*[class|=jw]:not(video)").filter("div.jw-wrapper");
			initSleep(99);
			$(i).find("*[class*='jw-title']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide(), $(i).find("*[class*='jw-nextup-container']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide(), $(i).find("*[class*='jw-controlbar']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide(), $(i).find("*[class*='jw-rightclick']").not("script").children("*").not("video").addBack().add("div.jw-rightclick.jw-open").css("opacity", "0.01%").hide(), $(i).add("#jw-settings-menu").find("*[class*='jw-settings-menu']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide();
			setTimeout(() => {clearInterval(elmJW_itvlFunc);}, 999);
		})
		setTimeout(function(){console.clear(),clearInterval(elmJW_itvlFunc)},9999);
    } else if (document.readyState == 'interactive') {
		initSleep(999);
		const stateFUNC_interactReady = setTimeout(function name_interactReady() {
			Defer(function() {
				// alert("⧔╴ r​̲e​̲a​̲d​̲y​̲S​̲t​̲a​̲t​̲e​̲_​̲i​̲s​̲: 𝗜𝗻𝘁𝗲𝗿𝗮𝗰𝘁𝗶𝘃𝗲⠀〈𝘌𝘓𝘚𝘌_𝘐𝘍‐3ʳᵈ〉");
				var i = $("*[class|=jw]:not(video)").filter("div.jw-wrapper");
				$(i).find("*[class*='jw-title']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide(), $(i).find("*[class*='jw-nextup-container']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide(), $(i).find("*[class*='jw-controlbar']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide(), $(i).find("*[class*='jw-rightclick']").not("script").children("*").not("video").addBack().add("div.jw-rightclick.jw-open").css("opacity", "0.01%").hide(), $(i).add("#jw-settings-menu").find("*[class*='jw-settings-menu']").not("script").children("*").not("video").addBack().css("opacity", "0.01%").hide();
				setTimeout(() => {clearInterval(elmJW_itvlFunc);}, 999);
			})
			setTimeout(function(){console.clear(),clearInterval(elmJW_itvlFunc)},9999);
		}, 999);
		initSleep(9);
		(function(){stateFUNC_interactReady()});
    } else if (document.readyState == 'loading') {
		// alert("⧔╴ r​̲e​̲a​̲d​̲y​̲S​̲t​̲a​̲t​̲e​̲_​̲i​̲s​̲: 𝗟𝗼𝗮𝗱𝗶𝗻𝗴⠀〈𝘌𝘓𝘚𝘌_𝘐𝘍‐4ᵗʰ〉");
		function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
		initSleep(9);
		sleep(999).then(() => { setTimeout(function(){console.clear(),(function(){stateFUNC_interactReady()}),console.clear()},999); });
		initSleep(9);
		try{console.clear()}catch(c){void(0);}
    } else {
		// alert("∟ ⃰ ᴜɴᴋɴᴏᴡɴ:  ⛶  l​̲a​̲s​̲t​̲,  (𝗡𝗢 if/else match) 〈𝘌𝘓𝘚𝘌–5ᵗʰ〉");
		(function(){try{elmJW_ifThenFunc()}catch(error){return!1}});
		initSleep(99);
		(function(){try{return false}catch(error){console.clear()}});
		setTimeout(()=>{try{elmJW_itvlFunc()}catch(error){void(0)}finally{console.clear()}},999);
	}
	console.log("⋘ ―ㅤEND OF IF/ELSE FUNCTIONㅤ― ⋙");
};


function sleepTermin(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
sleepTermin(9999).then(() => {clearInterval(elmJW_itvlFunc);});
initSleep(9);
let elmJW_stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(elmJW_stateCheck);
    (function(){
		// alert("✥ 𝗘𝗱𝗴𝗲-𝗖𝗮𝘀𝗲 [🇺🇲🇧🇷🇪🇱🇱🇦] · (𝘤𝘢𝘵𝘤𝘩𝘍𝘶𝘯𝘤: 𝗶𝗳/𝗲𝗹𝘀𝗲)⠀〈ᴛᴇʀᴍɪɴᴀʟ–6ᵗʰ〉");
		try {
			sleepTermin(4999).then(() => {elmJW_ifThenFunc()});
		} catch(error) {
			elmJW_itvlFunc();
			initSleep(99);
			void(0);
		} finally {
			$("body").contents("*").addBack().not("html, head").filter("body, *[class^='jw']").add("*[class|=jw]:not(video)").not("script, style").add("video[class|=jw]").filter("div").not("svg, video").add("body:not(html, head)").not("[class*='icon']").not("[class*='button']").not("[class*='text']").add("body:not(script, style)").not("[class*='rail'], [class*='knob']").add(".jwplayer[id$='_div']").on("load", elmJW_ifThenFunc());
			$("*.jwplayer[id$='_div']").first().children("*").addBack().find("*:not(svg)").not("svg, style, video, script").filter("*[class|=jw]").add("*.jwplayer[id$='_div']").parent("*[class|=jw]").addBack().not("svg, video").find("div[class*='wrapper']").on("load", elmJW_ifThenFunc());
			$("body:not(html, head)").children("*").addBack().not("script, style").find("*[class*='jw']:not(span)").not("div[class*='submenu']").filter("div[class^='jw']").not("span").add(".jw-wrapper").filter("*.jwplayer[id$='_div'], div[class|=jw][id], #botr_xnDg91jI_eclsroAc_div").not("[class*='settings']").on("load", elmJW_ifThenFunc());
			initSleep(4999);
			console.clear();
		}
		initSleep(9);
		setTimeout(() => { try {console.clear()} catch (e) {void(0);} }, 9999);
	});
  }
}, 99);
initSleep(999);
sleepTermin(99999).then(() => {setTimeout(function(){clearInterval(elmJW_itvlFunc),console.clear(),clearInterval(elmJW_itvlFunc),console.clear,clearInterval(elmJW_itvlFunc)();},999);});
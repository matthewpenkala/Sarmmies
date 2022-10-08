// Automatic Link Previews via Screenshot API
const card = document.getElementsByClassName("card dynamic")[0];
const CARD_VERTICAL_OFFSET = 16;
// vertical space between card and link
let pageHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
);
// recalculate page height on resize
window.addEventListener("resize", function () {
    pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
});

function getCardPosition(link) {
    let cardWidth = parseInt(
        window.getComputedStyle(card).getPropertyValue("width").slice(0, -2)
    );
    // get computed width because card stays hidden
    let transformX = link.offsetLeft - cardWidth / 2 + link.offsetWidth / 2;
    let transformY = pageHeight - link.offsetTop + CARD_VERTICAL_OFFSET;
    return {
        x: transformX,
        y: transformY,
    };
}
// replace below with your screenshot API
function buildScreenshotURL(url) {
    return `https://image.thum.io/get/allowJPG/${url}`;
}
// preload and cache preview thumbnail to browser
function preloadPreview(url) {
    return $("<img />").attr("src", url);
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
    };
}

function buildPreview(link) {
    let previewURL = buildScreenshotURL(link.href);
    preloadPreview(previewURL);
    link.addEventListener("mouseover", showCard);
    
    function showCard() {
        card.getElementsByTagName("img")[0].src = previewURL;
        // replace image source with link preview
        setCardPosition(link);
    }
}

function setCardPosition(link) {
    let position = getCardPosition(link);
    card.style.transform = `translate(${position.x}px, -${position.y}px)`;
    // recalculate position on page resize
    window.addEventListener("resize", function () {
        let position = getCardPosition(link);
        card.style.transform = `translate(${position.x}px, -${position.y}px)`;
    });
}
// build preview on page load
[...document.getElementsByClassName("dynamic-link-preview")].forEach(
    buildPreview
);
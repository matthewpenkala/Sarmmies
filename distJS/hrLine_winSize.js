function winSize() {
    var iW_winSize = window.innerWidth
    var oW_winSize = window.outerWidth
    return parseInt(oW_winSize - iW_winSize);
}
var hrLine_winSize
var calculated_winSize
$(window).resize(function () {
    calculated_winSize = winSize();
    var message = ("―").toString(),
        newMessage = '';

    var fontCalc_winSize = parseInt(calculated_winSize / 17);

    for (var i = 0; i < ((parseFloat(fontCalc_winSize * 1.5) - 1) - (10 / 1.5) + 5); i++) {
        newMessage += message;
    }

    hrLine_winSize = newMessage.toString();
});

window.dispatchEvent(new Event('resize'));


console.log(`%c ${hrLine_winSize}`, 'font-size: 17px; color: grey;');
console.log(' \n', "\u{1D5E6}\u{1D5D4}\u{1D5E5}\u{1D5E0}\u{1D5E0}\u{1D5DC}\u{1D5D8}\u{1D5E6}\u{2122} \u{1D5E6}\u{1D5D8}\u{1D5D6}\u{1D5E8}\u{1D5E5}\u{1D5DC}\u{1D5E7}\u{1D5EC} \u{1D5E3}\u{1D5E2}\u{1D5DF}\u{1D5DC}\u{1D5D6}\u{1D5EC}: A\u{200B}\u{332}t\u{200B}\u{332}t\u{200B}\u{332}e\u{200B}\u{332}n\u{200B}\u{332}d\u{200B}\u{332}a\u{200B}\u{332}n\u{200B}\u{332}t\u{200B}\u{332}_\u{200B}\u{332}c\u{200B}\u{332}o\u{200B}\u{332}n\u{200B}\u{332}s\u{200B}\u{332}o\u{200B}\u{332}l\u{200B}\u{332}e\u{200B}\u{332}_\u{200B}\u{332}r\u{200B}\u{332}e\u{200B}\u{332}q\u{200B}\u{332}u\u{200B}\u{332}e\u{200B}\u{332}s\u{200B}\u{332}t\u{200B}\u{332}(\u{200B}\u{332}s\u{200B}\u{332}) & a\u{200B}\u{332}t\u{200B}\u{332}t\u{200B}\u{332}e\u{200B}\u{332}m\u{200B}\u{332}p\u{200B}\u{332}t\u{200B}\u{332}(\u{200B}\u{332}s\u{200B}\u{332})\u{200B}\u{332}_\u{200B}\u{332}@\u{200B}\u{332}_\u{200B}\u{332}e\u{200B}\u{332}x\u{200B}\u{332}e\u{200B}\u{332}c\u{200B}\u{332}u\u{200B}\u{332}t\u{200B}\u{332}i\u{200B}\u{332}o\u{200B}\u{332}n\u{200B}\u{332}", '\n', {
    "[ \u{192}": "\u{1D675}\u{1D69E}\u{1D697}\u{1D68C}\u{1D69D}\u{1D692}\u{1D698}\u{1D697}() { \u{2026} } \u{00A0} \u{1D608}\u{1D615}\u{1D60B}/\u{1D616}\u{1D619} \u{00A0} \u{1D68C}\u{1D698}\u{1D696}\u{1D696}\u{1D68A}\u{1D697}\u{1D68D} / \u{1D695}\u{1D698}\u{1D690} / \u{1D68D}\u{1D68E}\u{1D68B}\u{1D69E}\u{1D690} / \u{1D68E}\u{1D69D}\u{1D68C}\u{1D68E}\u{1D69D}\u{1D68E}\u{1D69B}\u{1D68A} ]"
}, '\n', " h\u{200B}\u{332}a\u{200B}\u{332}v\u{200B}\u{332}e\u{200B}\u{332}_\u{200B}\u{332}b\u{200B}\u{332}e\u{200B}\u{332}e\u{200B}\u{332}n\u{200B}\u{332}_\u{200B}\u{332}B\u{200B}\u{332}L\u{200B}\u{332}O\u{200B}\u{332}C\u{200B}\u{332}K\u{200B}\u{332}E\u{200B}\u{332}D\u{200B}\u{332}, coevally (\u{1D637}\u{1D62A}\u{1D622} \u{1D634}\u{1D626}\u{1D633}\u{1D62A}\u{1D622}\u{1D62D} \u{1D631}\u{1D622}\u{1D633}\u{1D622}\u{1D62E}\u{1D626}\u{1D635}\u{1D626}\u{1D633} \u{1D633}\u{1D626}\u{1D62B}\u{1D626}\u{1D624}\u{1D635}\u{1D62A}\u{1D630}\u{1D62F}).", ' \n ');
console.log(`%c ${hrLine_winSize}`, 'font-size: 17px; color: grey;');

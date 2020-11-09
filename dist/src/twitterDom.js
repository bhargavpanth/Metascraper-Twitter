"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterDOM = void 0;
const twitterDomParser_1 = require("./twitterDomParser");
/**
 * @params stringified html document
 * **/
class TwitterDOM extends twitterDomParser_1.TwitterDOMParser {
    constructor(html) {
        super(html);
    }
    /* Author name */
    get author() {
        return super.DOM.window.document.querySelector('span').getElementsByClassName('css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0').textContent;
    }
    /* Twitter handle */
    get handle() {
        return super.DOM.window.document.querySelector('span').getElementsByClassName('css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0').textContent;
    }
    get timeAndDate() {
        return;
    }
    profilePicture() {
        return;
    }
}
exports.TwitterDOM = TwitterDOM;

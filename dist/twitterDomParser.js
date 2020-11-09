"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterDOMParser = void 0;
const jsdom_1 = require("jsdom");
class TwitterDOMParser {
    constructor(html) {
        this.html = html;
        this.dom = new jsdom_1.JSDOM(this.html, {
            includeNodeLocations: true
        });
    }
    get DOM() {
        return this.dom;
    }
}
exports.TwitterDOMParser = TwitterDOMParser;

/* https://developer.mozilla.org/en-US/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document */
import { JSDOM } from 'jsdom'

export class DOMParser {
    private html: string
    public dom: JSDOM
    constructor(html: string) {
        this.html = html
        this.dom = new JSDOM(this.html) 
    }
}

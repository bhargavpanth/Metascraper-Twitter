import { JSDOM } from 'jsdom'

export class DOMParser {
    private html: string
    public dom: JSDOM
    constructor(html: string) {
        this.html = html
        this.dom = new JSDOM(this.html) 
    }
}

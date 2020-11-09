import { JSDOM } from 'jsdom'

export class DOMParser {
    private html: string
    private dom: JSDOM
    constructor(html: string) {
        this.html = html
        this.dom = new JSDOM(
            this.html, {
                includeNodeLocations: true
            }
        ) 
    }

    get DOM() {
        return this.dom
    }
}

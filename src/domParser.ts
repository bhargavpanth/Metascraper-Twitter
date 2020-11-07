import { JSDOM } from 'jsdom'

export class DOMParser {
    private html: string
    public dom: JSDOM
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

    get author() {
        return this.dom.window.document.getElementsByClassName('css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0')
    }
}

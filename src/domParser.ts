/* https://developer.mozilla.org/en-US/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document */

class DOMParser {
    private html: string
    private mimeType: string = 'text/html'
    constructor(html: string) {
        this.html = html
    }
}

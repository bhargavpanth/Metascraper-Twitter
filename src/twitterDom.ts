/* Make Twitter DOM elements for all the previewable content */
import { DOMParser } from './domParser'

export class TwitterDOM extends DOMParser {
    constructor(html: string) {
        super(html)
    }

    get author() {
        return super.DOM.window.document.getElementsByClassName(
            'css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0'
        )
    }
}
import { TwitterDOMParser } from './twitterDomParser'

/**
 * @params stringified html document
 * **/
export class TwitterDOM extends TwitterDOMParser {
    constructor(html: string) {
        super(html)
    }

    /* Author name */
    get author() {
        return super.DOM.window.document.getElementsByClassName(
            'css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0'
        ).textContent
    }

    /* Twitter handle */
    get handle() {
        return super.DOM.window.document.getElementsByClassName(
            'css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0'
        ).textContent
    }
}

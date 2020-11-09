import { DOMParser } from './domParser'

/**
 * @params stringified html document
 * **/
export class TwitterDOM extends DOMParser {
    constructor(html: string) {
        super(html)
    }

    /* Author name */
    get author() {
        return super.DOM.window.document.querySelector('span').getElementsByClassName(
            'css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0'
        ).textContent
    }

    /* Twitter handle */
    get handle() {
        return super.DOM.window.document.querySelector('span').getElementsByClassName(
            'css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0'
        ).textContent
    }

    get timeAndDate() {
        return
    }

    profilePicture() {
        return
    }
}

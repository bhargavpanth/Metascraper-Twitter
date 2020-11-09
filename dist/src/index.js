"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssr = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
// parse HTML content for the required
// * JSON-LD fields
// * meta-links
async function ssr(url) {
    const browser = await puppeteer_1.default.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    const html = await page.content(); // serialized HTML of page DOM.
    await browser.close();
    return html;
}
exports.ssr = ssr;

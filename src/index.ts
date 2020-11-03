import puppeteer from 'puppeteer'

// parse HTML content for the required
// * JSON-LD fields
// * meta-links
export async function ssr(url) {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage()
  await page.goto(url, {waitUntil: 'networkidle0'})
  const html = await page.content() // serialized HTML of page DOM.
  await browser.close()
  return html
}


// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';

const url = 'https://creedessential.com';
const article_url =
  'https://creedessential.com/article/philosophy/the-core-of-your-being/key=0.54115596217496891642794336529';

const snap = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 800,
    height: 1800,
    deviceScaleFactor: 1,
  });
  //   await page.goto(article_url);
  await page.goto(url);
  await page.screenshot({ path: 'home.png' });

  await browser.close();
};

const ssr = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.content(); // serialized HTML of page DOM.
  await browser.close();
  return html;
};

console.log(ssr());

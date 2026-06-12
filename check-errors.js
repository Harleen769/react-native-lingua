const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => {
      console.log('PAGE ERROR MESSAGE:', error.message);
      console.log('PAGE ERROR STACK:', error.stack);
      console.log('PAGE ERROR KEYS:', Object.keys(error));
      if (error.filename) console.log('PAGE ERROR FILENAME:', error.filename);
      if (error.lineno) console.log('PAGE ERROR LINE:', error.lineno);
    });
    page.on('request', request => {
      const url = request.url();
      if (url.includes('.js') || url.includes('bundle') || url.includes('hot')) {
        console.log('REQUESTED URL:', url);
      }
    });
    page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

    await page.goto('http://localhost:8081', { waitUntil: 'networkidle0' });
    
    await browser.close();
  } catch (error) {
    console.error('SCRIPT ERROR:', error);
  }
})();

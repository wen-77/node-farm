const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./module/replaceTemplate');

//// Sever
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
// console.log(slugs);

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        const cardsHtml = dataObj.map(cardEl => replaceTemplate(tempCard, cardEl)).join('');
        const overviewHtml = tempOverview.replace(/{%card%}/g, cardsHtml);
        res.end(overviewHtml);

    } else if (pathname === '/product') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        const product = dataObj[query.id];
        const productHtml = replaceTemplate(tempProduct, product);
        res.end(productHtml);

    } else if (pathname === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-header': 'test'
        })
        res.end('<h1>This is ERROR page!</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Port is opening!')
})
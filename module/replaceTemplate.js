module.exports = (temp, data) => {
    let html = temp.replace(/{%productName%}/g, data.productName);
    html = html.replace(/{%image%}/g, data.image);
    html = html.replace(/{%from%}/g, data.from);
    html = html.replace(/{%nutrients%}/g, data.nutrients);
    html = html.replace(/{%quantity%}/g, data.quantity);
    html = html.replace(/{%price%}/g, data.price);
    if (!data.organic) html = html.replace(/{%organic%}/g, 'not-organic');
    html = html.replace(/{%description%}/g, data.description);
    html = html.replace(/{%id%}/g, data.id);
    return html;
}
// This is a string of JSON
const data = `{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}`
const parsedData = JSON.parse(data);
// parsedData.ticker
// {base: 'BTC', target: 'USD', price: '443.7807865468', volume: '31720.1493969300', change: '0.3766203596'}
// base: "BTC"
// change: "0.3766203596"
// price: "443.7807865468"
// target: "USD"
// volume: "31720.1493969300"
// [[Prototype]]: Object
// parsedData.ticker.price
// '443.7807865468'
const meow = {name: 'Limcee', breed: 'maine coon', color: 'golden', owner: 'DJ Marsh'}
// JSON.stringify(meow)
// '{"name":"Limcee","breed":"maine coon","color":"golden","owner":"DJ Marsh"}'

// ************************* XMLHttp Requests *****************************
/**
 * Original way of sending requests via JS
 * Does not support promises so lots of callbacks
 */
// Example 1
const myReq = new XMLHttpRequest();
myReq.onload = function(){
    const data = JSON.parse(this.responseText);
    console.log(data);
};
myReq.onerror = function(err){
    console.log('ERROR!',err);
};
myReq.open('GET', 'https://icanhazdadjoke.com/', true);
myReq.setRequestHeader('Accept', 'application/json');
myReq.send();

// Example 2
const req = new XMLHttpRequest();
req.onload = function(){
    console.log("ALL DONE WITH REQUEST!!!");
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}
req.onerror = function(){
    console.log("ERROR!!!");
}
req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd', true);
req.send();

// ******************************** The Fetch API *************************************
/**
 * The newer way of making requests via JS
 * Supports Promises
 */

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log("RESPONSE WAITING TO BE PARSED...", res);
    return res.json();
}).then(data => {
    console.log("DATA PARSED:", data);
})
.catch(err => {
    console.log("ERROR:", err);
})

const fetchBitcoinPrice = async() => {
    try{
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    const data = await res.json();
    console.log(data.ticker.price);
    }catch(e){
        console.log("SOMETHING WENT WRONG!!!", e);
    }
}
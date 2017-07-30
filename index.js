var Twit = require('twit');
var request = require ('request');
const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=123456&format=text&lang=en'
var T = new Twit({
    consumer_key: 'pEtZ9rTO1Op2pUO245p1zVDVK',
    consumer_secret: '4Hi6qENNjsxbDlwj6fqx4647BC1EUZMxAU86dIbeuR3Up0OGqk',
    access_token: '121962486-Eidzqe31DgZnXbcsFn4MEFYFpvKfLcGLNcyJSpRs',
    access_token_secret:'BYN49Yab9j7ZC53XfUnamd0u83HSP1A0gimLOqv51nqOO',
})

function getQuote(callback){
    request(url, function(error, response, body){
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        callback(body);
    });
}
function postTweet(tweet){
    console.log(tweet);
    T.post('statuses/update', {status: tweet}, function(err, data, response){
        console.log(data);
    })
}
getQuote(postTweet)
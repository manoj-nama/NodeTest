var http = require('http'),
    url = require('url'),
    router = require('./router'),
    asset = require('./static');

exports.new = function(c){
    var config = c || {};
    http.createServer(function (req, res) {
        var path = url.parse(req.url).pathname;
        var p2 = path.substr(1);
        // ignoring favicon request

        if(path !== 'favicon.ico'){
            console.log('-- ' + p2);
            if(asset.resx[p2]){
                router.asset(path, asset.resx[p2], req, res);
            } else if( config[p2] ){
                router[config[p2]](req, res);
            } else {
               router.error(req, res);
            }
        }
    }).listen(8888);

    console.log("Server running at port 8888");
};

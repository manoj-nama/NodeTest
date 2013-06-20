var fs = require('fs');

function readFile(name, callback) {
    var p = __dirname + '/public/' + name;
    var data = "";
    fs.exists(p, function () {
        fs.readFile(p, function (err, data) {
            if (err) console.log(err);
            callback(data);
        });
    });
    return data;
}

exports.index = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    readFile('index.html', function (data) {
        res.end(data);
    });
};

exports.contact = function( req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    readFile('contact.html', function (data) {
        res.end(data);
    });
};

exports.about = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    readFile('about.html', function (data) {
        res.end(data);
    });
};

exports.error = function(req, res){
    res.writeHead(404, {'Content-Type': 'text/html'});
    readFile('404.html', function (data) {
        res.end(data);
    });
};

exports.asset = function(name, type, req, res){
    if(type === 'css'){
        res.writeHead(200, {'Content-Type': 'text/css'});
        readFile(name, function( data ){
            res.end(data);
        });
    } else if(type === 'img'){
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        readFile(name, function( data ){
            res.end(data);
        });
    }
};
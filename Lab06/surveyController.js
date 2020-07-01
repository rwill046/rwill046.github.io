//Controller
var bodyParser = require('body-parser'); //handle POST requests
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');

// read from the data file
function readData(fileName){
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// write to the data file
function writeData(info, fileName){
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

//Count Entries
function combineCounts(name, value){
    // console.log(value);
    info = readData(name);
     // will be useful for text entry, since the item typed in might not be in the list
    var found = 0;
    for (var i=0; i<info.length; i++){
        if (info[i][name] === value){
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }
    if (found === 0){
        info.push({[name] : value, count: 1});
    }
    writeData(info, name);
}
module.exports = function(app){

    app.get('/', function(req, res){ //request address at localhost:3000/ (.get is a request handler)
        res.sendFile(__dirname + "/views/index.html"); //respond to request, display html
    });
    
    app.get('/results', function(req, res){ //request address at localhost:3000/results (.get is a request handler)
        var firstname = readData("firstname");
        var lastname = readData("lastname");
        var email = readData("email");
        var exp = readData("exp");
        var plat = readData("plat");
        var col = readData("col");
        var gen = readData("gen");
        res.render('results', {results: [firstname, lastname, email, exp, plat, col, gen]});
        console.log([firstname, lastname, email, exp, plat, col, gen]);
    });
    
    app.post('/', urlencodedParser, function(req, res){
        console.log(req.body);
        var json = req.body;
        for (var key in json){
            console.log(key + ": " + json[key]);
            // in the case of checkboxes, the user might check more than one
            if ((key === "userGames") && (json[key].length === 2)){
                for (var item in json[key]){
                    combineCounts(key, json[key][item]);
                }
            }
            else {
                combineCounts(key, json[key]);
            }
        }
        res.sendFile(__dirname + "/views/index.html");
    });
}
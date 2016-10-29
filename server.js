var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
    title:"House of Cats | Pragya",
    heading:"Cat Parade",
    date:"October 29th, 2016.",
    content: 
    `<p>The cat parade starts at 5 am tomorrow. People of all nationalities are invited. All cat owners are encouraged to bring their cat along with them. The purpose of this parade is to find the healthiest, prettiest and smartest cat through interesting social experiments while giving the cats and their owners a great time. Food and shelter will be provided to upto 1000 kitty cats. Donations for future events of this sort are encouraged. This web page is dedicated to future discussions on this topic amongst all the participating cat-lovers. Have a good day!
    </p>`
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=
    `<html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width-device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body bgcolor="#E6E6FA">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr>
            <div class="container">
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req, res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

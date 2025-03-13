const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

// Middleware: logRequest
function logRequest(req, res, next) {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
}
app.use(logRequest); 

// Middleware: CheckCustomHeader
const CheckCustomHeader = (req, res, next) => {
  if (req.get('X-Custom-Header')) {
    next();
  } else {
    res.status(403).send('Access denied: Missing X-Custom-Header');
  }
};

// Routes
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.get('/services', (req, res) => {  
    res.sendFile(__dirname + "/public/services.html");
});

app.post('/submit', CheckCustomHeader, (req, res) => {
    console.log(req.body); 
    res.send('Custom header present. Data received:\n' + JSON.stringify(req.body));
});

app.get("/list", (req, res) => {
    const filePath = path.join(__dirname,"public", "list.txt");
    console.log("Tiedoston polku:", filePath); //Tämä oli vaan debuggausta varten
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return res.status(500).send("Error reading file");
      }
      res.send(data);
    });
  });

app.get('/json', (req, res) => {
    const filePath = path.join(__dirname, "public", "data.json");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }

        const jsonData = JSON.parse(data);

        let table = "<table border='1'><thead><tr>";

        const headers = Object.keys(jsonData[0]);
        headers.forEach(header => {
            table += `<th>${header}</th>`;
        });
        table += "</tr></thead><tbody>";

        jsonData.forEach(item => {
            table += '<tr>';
            headers.forEach(header => {
                table += `<td>${item[header]}</td>`;
            });
            table += '</tr>';
        });

        table += '</tbody></table>';

        res.send(table);
    });
});

app.post('/add', (req, res) => {
 const filePath = path.join(__dirname, "public", "data.json");
    const newUser = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }

        const jsonData = JSON.parse(data);

        jsonData.push(newUser);

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Error writing to file");
            }

            res.send('New user added successfully');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port: ${PORT}`);
});

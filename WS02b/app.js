// Exercise:1
const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(API_URL)
    .then(response => {
        console.log("Data:", response.data);
    })
    .catch(error => {
        console.error(error);
    }
    )


// Exercise:4
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Tiedoston sisältö:", data);
});

// Exercise:5
fs.writeFile('output.txt', 'Tämä luotiin tehtävä 5:ssä', (err) => {
    if (err) {
        console.error(err);
        return;
        }
    });

fs.appendFile('output.txt', ' ja tämä lisättiin appendillä', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Teksti lisätty tiedostoon!');
});

// Exercise:6
fs.unlink('temp.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Tiedosto poistettu!');
});

// Exercise:7
fs.rmdir('testDir', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Kansio luotu!');
});

// Exercise:8
fs.watch('watch.txt', (eventType, filename) => {
    console.log('Tiedostossa tapahtui muutos:', eventType);
}); 
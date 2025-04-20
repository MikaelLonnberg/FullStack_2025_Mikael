# Tässä on WS05, jossa treenattiin REST-APIa (Node.js + Express + MongoDB).

 CRUD-tyyppinen REST API, joka tallentaa ja hakee tietoja MongoDB:stä Mongoose-kirjaston avulla.

## Teknologiat

- Node.js + Express
- MongoDB Atlas + Mongoose
- Postman testaukseen

### Reitit ja esimerkkipyynnöt

| Method | URL                | Kuvaus                     |
|--------|--------------------|----------------------------|
| GET    | /api/getall        | Hakee kaikki dokumentit    |
| GET    | /api/get/:id       | Hakee yhden dokumentin ID:llä |
| POST   | /api/add           | Lisää uuden dokumentin     |
| PUT    | /api/update/:id    | Päivittää dokumentin ID:llä |
| DELETE | /api/delete/:id    | Poistaa dokumentin ID:llä  |

### Luo uusi dokumentti /api/add (POST)

Body:
{
  "name": "Testi Testinen",
  "email": "testi@example.com",
  "age": 25
}

Vastaus:
{
  "_id": "661cb63ef447947bfb350cb4",
  "name": "Testi Testinen",
  "email": "testi@example.com",
  "age": 25
}

### Hae kaikki dokumentit /api/getall GET

Vastaus:
[
  {
    "_id": "661cb63ef447947bfb350cb4",
    "name": "Aino Esimerkki",
    "email": "aino@example.com",
    "age": 32
  },
  ...
]

### Hae yksi dokumentti ID:llä /api/get/:id

Url:
/api/get/661cb63ef447947bfb350cb4

Vastaus:
{
  "_id": "6804b52670f07d06db8e9ea3",
  "name": "Monni Monninen",
  "email": "monni@example.com",
  "age": 32
}

### Päivitä olemassa oleva dokumentti /api/update/:id PUT

Url:
/api/update/6804b52670f07d06db8e9ea3

Body:
{
  "name": "Muokattu Nimi",
  "email": "muokattu@example.com",
  "age": 35
}

Vastaus:
{
  "_id": "661cb63ef447947bfb350cb4",
  "name": "Muokattu Nimi",
  "email": "muokattu@example.com",
  "age": 35
}

### Poista dokumentti ID:llä /api/delete/:id DELETE

Url:
/api/delete/6804b52670f07d06db8e9ea3

Vastaus:
{
  "message": "Item deleted successfully"
}

## Virheenkäsittely

- 404: Item not found

- 500: Server error

- Vastaukset JSON-muodossa, esim: { "message": "Item not found" }





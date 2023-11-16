const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const request = require('request')

const PORT = process.env.PORT || 3500;

app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

data = [
    {
      "name": "Franchetto Emiliani",
      "lat": 55.9714744,
      "long": -3.168654885
    },
    {
      "name": "Marcella De Lollo",
      "lat": 42.65907315,
      "long": 13.70312193
    },
    {
      "name": "John Johnny",
      "lat": 42.34972481,
      "long": -71.05750264
    },
    {
      "name": "Jane Auderbin",
      "lat": 37.34911731,
      "long": -121.8866793
    },
    {
      "name": "Erminio Ferroni",
      "lat": 37.79266092,
      "long": 12.45735469
    },
    {
      "name": "Ornella Bertrame",
      "lat": 37.76031445,
      "long": 12.49480773
    },
    {
      "name": "Frank Cicio",
      "lat": 35.39797433,
      "long": 8.120192415
    }
  ]
  function getRequest(url) {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(body);
        } else {
          reject(error || body);
        }
      });
    });
  }

  app.get('^/$|/index(.html)?', async (req, res) => {
    try {
      for (const user of data) {
        const lat = user["lat"];
        const long = user["long"];
        const url = `https://geocode.maps.co/reverse?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(long)}`;
        const url_wather = `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(lat)}&longitude=${encodeURIComponent(long)}&current_weather=true`;

        const body = await getRequest(url);
        const dataJSON = JSON.parse(body);
        
        const body_weather = await getRequest(url_wather);
        const dataJSON_weather = JSON.parse(body_weather);
        user["current_weather"] = dataJSON_weather.current_weather
        user["address"] = dataJSON.display_name

      }
      console.log(data)
      res.render('index', {data})
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})
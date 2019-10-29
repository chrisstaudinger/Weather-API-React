const express = require('express')
const app = express()
const cors = require('cors');
const axios = require('axios')

const morgan = require('morgan')
app.use(morgan('dev'));

const dotenv = require('dotenv')
dotenv.config()

app.use(express.json());
app.use(cors());


app.get('/', async (req, res, next) => {
  try {

    const apiKey = process.env.DARKSKYKEY
    const { latitude, longitude } = req.headers

    // console.log(req.headers)
    // console.log(latitude, longitude)
    // console.log(apiKey)

    const DarkSkyEndpoint =`https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}` 

    const fetchData = async (endpoint) => {
      try {
        const response = await axios.get(endpoint)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
      
    }

    fetchData(DarkSkyEndpoint)
    res.send("Express App Working ✅")
  } catch (error) {
    res.status(500).send(error)
  }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening to PORT: ${PORT} 🙂`));
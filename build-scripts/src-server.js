import express from 'express'
import path  from 'path'
import open  from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'
import bodyParser from 'body-parser'
import ProfessionHandler from '../server/profession';
import NavHandler from '../server/nav';


const port = 3000
const app = express()
const compiler = webpack(config)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.route('/api/profession')
  .get(ProfessionHandler.getAll)
  .post(ProfessionHandler.post)
app.get('/api/profession/:name', ProfessionHandler.get)
app.put('/api/profession/:name', ProfessionHandler.put)

app.route('/api/nav').get(NavHandler.getAll)

app.listen(port, function(err) {
  if(err) {
    console.log(err) //eslint-disable-line no-console
  } else {
    open('http://localhost:3000')
  }
})

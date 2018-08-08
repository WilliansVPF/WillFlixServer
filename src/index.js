import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import * as config from './config'
import controllers from './controllers'

const port = process.env.PORT || 3000

const app = express()
    
app.use(bodyParser.json())
app.use(cors())
 
controllers.register(app)

config.openConnection()

app.listen(port, () => {
    console.log(`example server running on port ${port}`)        
})

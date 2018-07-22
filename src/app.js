import express from "express"  

export default function() {

    const app = express()

    app.get('/customer', (req, res) => {
        res.send('Hello World')
    })

    app.listen(3000, () => {
        console.log("example server running on port 3000")        
    })

}
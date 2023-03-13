const express = require ('express')
const app = express()
const port = process.env.PORT || 10000;

app.get('/', (req,res) =>{
    res.send("Express Server running successfully")
})

app.listen(port, () =>{
    console.log(`Express server running on port ${port}`)
})
const express = require('express')
const app =express()
const port = 4000
app.get('/', (req,res) => {
    res.json({msg:"Hello World"})
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
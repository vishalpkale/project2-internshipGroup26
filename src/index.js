const bodyParser = require('body-parser')
const route= require("./route/route")
const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


mongoose.connect("mongodb+srv://vishalkale:vishalpkale@cluster0.ofyxk.mongodb.net/group26Database?retryWrites=true&w=majority", {useNewUrlParser: true})

.then( () => console.log("MongoDb is connected,This is project made by Group 26"))
.catch ( err => console.log(err) )


app.use('/',route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
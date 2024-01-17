const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
app.listen(process.env.PORT || PORT, () => {
    console.log(`The Server is running on ${PORT}! You better go catch it!`)
})



const rappers = {
    '21 savage': {
        'age': 29,
        'birthname': 'Sheyaa Bin Abraham- Joseph', 
        'birthLocation': 'London, England'
    }, 
    'chance the rapper': {
        'age': 29,
        'birthname': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    }, 
    'unknown': {
        'age': 0,
        'birthname': 'unknown',
        'unknown': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// technically same thing as a click event. more like a 'network' event
app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    console.log(rapperName)
    if (rappers[rapperName]) {
        res.json(rappers[rapperName])
    }
    else {
        res.json(rappers['unknown'])
    }

})

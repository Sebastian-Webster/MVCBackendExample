const express = require('express')
const ports = [80, 8080, 3000, 4000];

const UserRoute = require('./routes/User')

const servers = ports.map(port => {
    return express();
})

servers.forEach((server, index) => {
    const port = ports[index]
    server.use(express.json())
    

    server.use('/users', UserRoute)
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})
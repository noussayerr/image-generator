const imagecontrollers = require("../controllers/generating")

module.exports = app=>{
    app.post("/api/generateimage",imagecontrollers.generatingimage)
    app.post('/api/createpost',imagecontrollers.create)
    app.get('/api/allposts',imagecontrollers.allposts)
}
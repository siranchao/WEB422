const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));



//JWT and auth strategy
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const jwt_obj = {
    secretOrKey: "myprivatekey112233",
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderWithScheme('jwt')
}

const StrategyJWT = passportJWT.Strategy
const strategy = new StrategyJWT(jwt_obj, (jwt_payload, next) => {
    console.log("Payload", jwt_payload);
    if (jwt_payload) {
        next(null, { userName: jwt_payload.userName, fullName: jwt_payload.fullName, role: jwt_payload.role })
    }
    else {
        next(null, false)
    }
})

passport.use(strategy)
app.use(passport.initialize())





const dataService = require("./data-service.js");
const userService = require("./user-service.js");


const HTTP_PORT = process.env.PORT || 8080;

// http://localhost:8080/api/vehicles
app.get("/api/vehicles", passport.authenticate('jwt', { session: false }), (req, res) => {
    dataService.getAllVehicles().then((data) => {
        res.json(data);
    }).catch(() => {
        res.status(500).end();
    });
});

// JAVASCRIPT 
// {fname:"Haytham"}
// JSON
// {"fname":"Haytham"}

// http://localhost:8080/api/register
app.post("/api/register", function (req, res) {
    userService.registerUser(req.body).then((msg) => {
        res.json({ "msg": msg });
    }).catch((msg) => {
        res.json({ "msg": msg });
    });
});


app.post("/api/login", function (req, res) {
    userService.checkUser(req.body).then((userData) => {
        const payload = {
            userName: userData.userName,
            fullName: userData.fullName,
            role: userData.role
        }

        const token = jwt.sign(payload, jwt_obj.secretOrKey)

        res.json({ "data": userData, "msg": "login successful", "token": token })
    }).catch((msg) => {
        res.json({ "msg": userData })
    });
})

app.use((req, res) => {
    res.status(404).end();
});





userService.connect().then(() => {
    app.listen(HTTP_PORT, () => {
        console.log("App listening on: " + HTTP_PORT);
    });

}).catch((e) => {
    console.log(e);
});


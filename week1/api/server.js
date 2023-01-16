const exp = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const cors = require("cors")
const app = exp();
const port = process.env.PORT || 8080;

app.use(bodyparser.json());
app.use(cors());

var users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }];

// localhost:8080
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// localhost:8080/api/users/
app.get("/api/users", function (req, res) {
    res.json({ message: "Fetch all users", users: users });
});

// localhost:8080/api/users/2
app.get("/api/users/:id", function (req, res) {
    var id = req.params.id;

    res.json({ message: "Fetch user", users: users[id - 1] });
});


app.post("/api/users", function (req, res) {
    var new_user = {
        id: req.body.id,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email
    }

    users.push(new_user);
    res.json({ message: "New user has been added", users: users });
});


app.use(function (req, res) {
    res.status(404).send("Resource not found");
})

// localhost:8080/api/users/?id=2
app.listen(port);

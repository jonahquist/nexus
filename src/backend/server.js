'use strict';

const express = require('express');
const app = express();
const multer = require('multer');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());

const people = [['adam', [0], ['a', 'b', 'c']], ['brian', [1, 3], ['d', 'e', 'f']],  ['daniel', [0], ['a', 'b', 'c']]];

function findEvent() {
    let events = new Map();

    for (let i of people) {
        for (let j of i[1]) {
            if (!events.has(j)) {
                events.set(j, new Map());
            }
            for (let k of i[2]) {
                if (events.get(j).has(k)) {
                    events.get(j).set(k, events.get(j).get(k) + 1);
                } else {
                    events.get(j).set(k, 1);
                }
            }
        }
    }

    let highKey = [];
    let highValue = 0;

    for (let [key, value] of events) {
        for (let [key2, value2] of value) {
            if (value2 > highValue) {
                highValue = value2;
                highKey = [[key, key2]]
            } else if (value2 == highValue) {
                highKey.push([key, key2]);
            }
        }
    }

    highKey.forEach(i => {
        console.log(i);
    });

    return events;
}

app.get('/find', (req, res) => {
    res.type('text');
    res.send(findEvent());
});

app.post('/update', (req, res) => {
    let update = [req.body.name, req.body.interests, req.body.schedule];
    for (let i = 0; i < people.length; i++) {
        if (people[i][0] == req.body.name) {
            people.splice(i, 1);
            people.push(update);
            break;
        }
    }
});

app.post('/new', (req, res) => {
    let update = [req.body.name, req.body.interests, req.body.schedule];
    people.push(update);
});

app.use(express.static('public'));
const PORT = process.env.PORT || 5000;
app.listen(PORT);
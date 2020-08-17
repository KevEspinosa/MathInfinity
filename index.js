const express = require('express')
let bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const {mongoUrl} = require('./connect');

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('connect db')
})
mongoose.connection.on('error', (error) => {
    console.log('error', error)
})

const scoreLegendSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false,
        require: true
    },
    score: {
        type: Number,
        unique: false,
        require: true
    }
})

const scoreFasterSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false,
        require: true
    },
    score: {
        type: Number,
        unique: false,
        require: true
    }
})

const ScoreLegendModel = mongoose.model('ScoreLegend', scoreLegendSchema);
const ScoreFasterModel = mongoose.model('ScoreFaster', scoreFasterSchema);

const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json());

app.get('/questions', (req, res) => {
    const questions = [];
    let maxRan = 0;
    let minRan = 0;
    let operations = [];
    switch (req.query.phase) {
        case '0': {
            maxRan = 10;
            minRan = 0;
            operations = ['+', '-']
            break;
        }
        case '1': {
            maxRan = 20;
            minRan = 0;
            operations = ['+', '-', '*']
            break;
        }
        case '2': {
            maxRan = 50;
            minRan = 10;
            operations = ['+', '-', '*', '/']
            break;
        }
        case '3': {
            maxRan = 100;
            minRan = 50;
            operations = ['+', '-', '*', '/']
            break;
        }
        case '4': {
            maxRan = 500;
            minRan = 100;
            operations = ['+', '-', '*', '/']
            break;
        }
        case '5': {
            maxRan = 1000;
            minRan = 100;
            operations = ['+', '-', '*', '/']
            break;
        }
        default: {
            maxRan = 2000;
            minRan = 500;
            operations = ['+', '-', '*', '/']
            break;
        }
    }
    function shuffle(arra1) {
        let ctr = arra1.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }

    for (let i = 0; i <= 10; i++) {
        const element1 = Math.floor(Math.random() * maxRan - minRan) - minRan;
        const element2 = Math.floor(Math.random() * maxRan - minRan) - minRan;
        const operationCurrent = operations[Math.floor(Math.random() * operations.length)]
        const questionCurrent = `(${element1}) ${operationCurrent} (${element2})`
        const result = parseFloat(Number.parseFloat(eval(questionCurrent)).toFixed(2));
        const answers = [result]
        while (answers.length <= 3) {
            let otherAnswerRandom = 0
            let fixedAnswer = 0
            otherAnswerRandom = Math.floor(Math.random() * (result + 10 - (result - 10))) + (result - 10);
            fixedAnswer = Number.isInteger(result) ? otherAnswerRandom : parseFloat(otherAnswerRandom.toString()).toFixed(2);
            if (!answers.includes(otherAnswerRandom)) {
                answers.push(fixedAnswer)
            }
        }
        const shuffleAnswers = shuffle(answers);
        const question = {
            question: questionCurrent,
            result: result,
            answers: shuffleAnswers
        }
        questions.push(question);
    }
    res.send(questions)
})

app.post('/scoreLegend', (req, res) => {
    const newScore = new ScoreLegendModel({
        name: req.query.name,
        score: req.query.score
    });
    newScore.save((err, doc) => {
        if (err) return console.error(err);
        console.log("Document inserted successfully!");
    });
})

app.get('/scoreLegend', (req, res) => {
    const scoreMap = [];
    ScoreLegendModel.find({}, (err, scores) => {
        scores.forEach((item) => {
            scoreMap.push(item);
        })
        res.send(scoreMap);
    })
})

app.post('/scoreFaster', (req, res) => {
    const newScore = new ScoreFasterModel({
        name: req.query.name,
        score: req.query.score
    });
    newScore.save((err, doc) => {
        if (err) return console.error(err);
        console.log("Document inserted successfully!");
    });
})

app.get('/scoreFaster', (req, res) => {
    const scoreMap = [];
    ScoreFasterModel.find({}, (err, scores) => {
        scores.forEach((item) => {
            scoreMap.push(item);
        })
        res.send(scoreMap);
    })
})

app.listen(port, () => {
    console.log(`Api listening`)
})
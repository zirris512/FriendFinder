const friendData = require('../data/friends');

const friendMatch = (friend, user) => {
    let scoreDifference = [];
    let index = 0;

    friend.forEach(element => {
        let sum = 0;
        for(let i = 0; i < element.scores.length; i++) {
            sum += Math.abs(element.scores[i] - parseInt(user[i]));
        }
        scoreDifference.push(sum);
    });
    
    let value = scoreDifference[0];
    for(let i = 1; i < scoreDifference.length; i++) {
        if (scoreDifference[i] < value) {
            value = scoreDifference[i];
            index = i;
        }
    }
    return index;
}

module.exports = app => {
    
    app.get('/api/friends', (_req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {
        const match = friendData[friendMatch(friendData, req.body.scores)];
        res.json(match);
    });
};
var scores = [];
var names = [];
var friend1 = [];
// var alert
var minny
var match = []
var product = []
var friends = [
    {
        "name": "Will",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            4,
            4,
            5,
            1,
            2,
            1,
            2,
            5,
            4,
            1
        ]
    },

    {
        "name": "Amber",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }, {
        "name": "Tilly",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            2,
            3,
            1,
            2,
            1,
            5,
            1,
            3,
            3,
            1
        ]
    },
    {
        "name": "Milton",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            2,
            1,
            2,
            4,
            5,
            3,
            2,
            5,
            4,
            1
        ]
    }
]
function friendly() {
    var sum1 = 0
    for (var j = 0; j < friends.length; j++) {
        names.push(friends[j].name)
        for (var i = 0; i < friend1[0].scores.length; i++) {
            sum1 += Math.abs(parseInt(friend1[0].scores[i]) - friends[j].scores[i]);
        } scores.push(sum1);
        // console.log(sum1);
        sum1 = 0;
    }
    minny = (Math.min(...scores));
    matcher();
}
// friendly();

function matcher() {
    console.log("running matcher" + scores)
    for (var i = 0; i < scores.length; i++) {
        if (minny == scores[i]) {
            match.push(names[i])
        }
        console.log(match)

    } finsher();
}
function finsher() {
    for (var j = 0; j < friends.length; j++) {
        if (friends[j].name == match[0]) {
            return product.push(friends[j]);
        }
        else {
            console.log(minny)
            console.log("jacked")
        }

    }
}
// matcher();


function clear1(){
    friend1 = [];
    names = [];
    scores = [];
    product = [];
    match = [];
    console.log("cleared")
    }

module.exports = {
    scores: scores,
    names: names,
    friend1: friend1,
    friends: friends,
    friendly: friendly,
    product: product,
    matcher: matcher,
    match: match,
    clear1: clear1
}

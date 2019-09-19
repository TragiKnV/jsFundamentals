/*
    -objects store inumerable properties in the key/value pair format.
    - denoted by {}
*/

// let testObj = {
//     key: 'value',
//     key2: 'value',
//     key3: 'value',
// }

let netflix = {
    id: '1',
    name: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo:[{
                episode: 1,
                episodeName: 'Pilot'
            },
            {
                episode: 2,
                episodeName: 'Diversity Day'
            },
            {
                episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The Alliance'
            },
            {
                episode: 5,
                episodeName: 'Basketball'
            },
            {
                episode: 6,
                episodeName: 'Hot Girl'
            }
        ]
        }
    },
    season2: {},
    season3: {},
}

/*
    - Where arrays use bracket notations [], objects wuse what is called dot notation. (  .  )
*/
// console.log("All Data", netflix);
// console.log(netflix.season1.seasonInfo.episodeInfo[2].episodeName)

console.log(`episode number: ${netflix.season1.seasonInfo.episodeInfo[1].episode}` + ` episode name: ${netflix.season1.seasonInfo.episodeInfo[1].episodeName}`);

/*
    JSON Objects
        -JSON stands for JavaScript Object Notation
        -The JSON syntax is derived from JavaScript Object Notation syntax, but the JSON format is text only
        -JSON exist as a string - useful when we want to fetch data from a server.It needs to be converted to a native JavaScript Object if you want to access the data.
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs',
        rabbit2: 'Lola',
        duck: 'Daffy',
        tDevil: 'Taz',
        bird: 'tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blank'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkely',
        newJerseyNets: 'Shawn Bradley',
        newYorkKnicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Mugsy Bogues'
    } 
}

// Object.keys & Object.values

 console.log(Object.keys(spaceJam.toonSquad));
 console.log(Object.keys(spaceJam.toonSquad.duck)); // gives the indexes of the string.
 console.log(Object.keys(spaceJam.toonSquad).toString())
 console.log(Object.values(spaceJam.toonSquad));

 /*
    -Object bracket notation
        - object bracket notation also allows us to parse through an object and pull out specific information
        - using object bracket notation can be useful if we want to store a key from an object in a variable
        - all keys in an object are strings even though they aren't wrapped in quotes - which is why this will work
 */

 let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
 }
// keys in an object are strings -- shown below
// let test = Object.keys(garden);
// console.log(test);

// console.log(typeof test[0]);

// console.log(garden.vegetable);


// object bracket notation
let zucchini = garden['vegetable']; // we can access keys in an object by specifying the name of the object followed by the key we want to grab in brackets. The key name that we pass into our object needs to be a string (wrapped in quotes) because all keys in an object are strings.
console.log(zucchini);

let baking = {};
baking['zucchini'] = 'Better make some bread'; // setting a key/value papir using object bracket notation
console.log(baking);

console.log(baking[garden['vegetable']]);

//using object bracket notation is a good idea when you may not be able to use dot notation to dig into an object.

let testObj = {
    "Spaces Here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"]);
// Our use case for object bracket notation is if a key in our object has spaces in it.
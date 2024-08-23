import { system, world } from '@minecraft/server';
import { HttpRequest, HttpHeader, http, HttpRequestMethod } from '@minecraft/server-net';

/**
 * Method to use for retrieving player stats.
 * Options:
 * - 'scoreboard': Uses scoreboard objectives to get player scores.
 * - 'custom': Requires editing the `getStats` function to handle custom stats.
 */
const method = 'scoreboard';

// List of scoreboard objectives to retrieve
const methodsNames = [
    'money',
    'blocks',
    'time'
];

async function setScore(name, stats) {
    const uri = 'http://localhost:3000/api/setscore';
    const key = 'your_key_here';

    const request = new HttpRequest(uri);
    request.setMethod(HttpRequestMethod.Post)
        .setHeaders([
            new HttpHeader('Authorization', key),
            new HttpHeader('Content-Type', 'application/json')
        ])
        .setBody(JSON.stringify({ name, stats }, null, 4));
    
    try {
        const response = await http.request(request);
        if (response.status === 200) {
            console.log('Score set successfully:', response.body);
        } else {
            console.log('Failed to set score. Status:', response.status, 'Body:', response.body);
        }
    } catch (error) {
        console.error('Error sending request:', error);
    }
}

function getStats(player) {
    let stats = {};
    methodsNames.forEach((m) => {
        if (method === 'scoreboard') {
            const obj = world.scoreboard.getObjective(m);
            if (!obj) {
                console.error(`No scoreboard objective with the name ${m} exists.`);
                stats[m] = 0; // Default value if objective does not exist
                return;
            }
            const score = obj.getScore(player);
            stats[m] = score !== null ? score : 0; // Default to 0 if score is null
        }
    });
    return stats;
}

system.runInterval(() => {
    world.getAllPlayers().forEach((p) => {
        const stats = getStats(p);
        setScore(p.name, stats);
    });
}, 20);
// We do not recommend changing this, as it can cause a lot of network usage

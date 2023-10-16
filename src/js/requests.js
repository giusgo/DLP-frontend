/*
    *
    *   Module in charge to do requests to the backend
    *
    * */

// Just for testing rn, this may have to change to bundle with backend
const host = '20.115.66.20';
const port = '3000';

const baseUrl = `http://${host}:${port}/api`;

const queryTypes = {
    "1": "scatterDanceabilityLoudness",
    "2": "albumTypeDistribution",
    "3": "artistByTrackNumber",
    "4": "tracksThroughTime",
    "5": "scatterInstrumentalnessEnergy",
    "artists": "artists"
}

export function Request(position, top = '', date = '', artist = '') {
    return new Promise((resolve, reject) => {
        var url = `${baseUrl}/${queryTypes[position]}?top=${top}&date=1999-${date}&artist=${artist}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the response as JSON
            })
            .then(data => {
                resolve(data); // Resolve the promise with the data
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error);
            });
    });
}


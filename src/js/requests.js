/*
    *
    *   Module in charge to do requests to the backend
    *
    * */

export function InitialSetupRequest () {
    fetch('http://20.115.66.20:3000/api/scatterDanceabilityLoudness?date=&top=10&artist=Avicii')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            // Process the data
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

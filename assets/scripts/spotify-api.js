const clientId = 'b0e2f55db3f94303981c4586dd522478'
const clientEncoded = 'YjBlMmY1NWRiM2Y5NDMwMzk4MWM0NTg2ZGQ1MjI0NzgyMjA2ZTA0NjFkMTU0ODI1OGZiM2UxZjNiYzc4ZjUyZQ=='

const api_token = "BQCv5wuReirRk23p4FE1xi5WT7kZXHpueRxQh8FGhzMg8mU1MHc381YjQ59ifmlLzv6YN7o5glYJqJUD0N4"
    
const spotifyAPI = {
    browseNewReleases: async () => {
    //    fetch(url, config) 

    const config = {
        method: "GET",
        headers: {
           Authorization: `Bearer ${api_token}`,     
        },
    };
    const response = await fetch('https://api.spotify.com/v1/browse/new-releases', config);


    console.log("response", response)
    return response.json();
    },
    
    search: async (query) => {
        const config = {
            method: "GET",
            headers: {
               Authorization: `Bearer ${api_token}`,     
            },
        };
        const query = "jazz"
        const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album,track,artist`, config);

        return response.json();

    },
    
};
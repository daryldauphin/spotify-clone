
    
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
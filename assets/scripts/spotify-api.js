const clientId = 'b0e2f55db3f94303981c4586dd522478'
const clientSecret = '2206e0461d1548258fb3e1f3bc78f52e'
const clientEncoded = 'YjBlMmY1NWRiM2Y5NDMwMzk4MWM0NTg2ZGQ1MjI0NzgyMjA2ZTA0NjFkMTU0ODI1OGZiM2UxZjNiYzc4ZjUyZQ=='

const api_token = "BQCs0HByUDs1g_V3vFTSZDo3y4nyaI9F3WoQPtD1sBSKQZFBGoWOXKwGr7zlS06cJUaAA3uGZIk_c5ios6w"
    
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
    
}
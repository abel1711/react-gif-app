export const getGifs = async (categorias) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(
        categorias
    )}&api_key=rAvBedJqMGAR7ZKPGtmjW4oNd8xWzuD5`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            titulo: img.title,
            url: img.images?.downsized_medium.url,
        };
    });
    return gifs;
};

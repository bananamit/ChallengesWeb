// Challenge 4 
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=yPp1wIiLlYc61t3lwrG0qc6NGXCYGzQN&q=${category}&limit=10&offset=0&rating=g&lang=en`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((elemento) => {
    return {
      id: elemento.id,
      title: elemento.title,
      url: elemento.images.downsized_medium.url,
    };
  });
  return gifs;
};
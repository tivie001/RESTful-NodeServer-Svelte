import IMDBapi from "./services/loadIMDBdata";

export const getMovieList = async () => {
    try {
        const response = await IMDBapi.get();
        return response.results;
    } catch (error) {
        console.error(error);
    }
}
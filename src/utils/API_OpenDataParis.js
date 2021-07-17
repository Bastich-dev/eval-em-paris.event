const urlApi = "https://opendata.paris.fr/api/v2/";

const headers = new Headers();
// myHeaders.append("Content-Type", "application/json");

export default {
    getEventFromId: async ({ id }) => {
        const path = `${urlApi}`;
        await fetch(path, { method: "GET", headers });
        return response;
    },

    getListEventsFromSearch: async ({ search }) => {
        const path = `${urlApi}`;
        await fetch(path, { method: "GET", headers });
        return response;
    },
};

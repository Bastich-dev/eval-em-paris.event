const urlApi = "https://opendata.paris.fr/api/v2/";

const headers = new Headers();
// headers.append("Content-Type", "application/json");
// headers.append("Content-Type", "text/plain");

export default {
    getEventFromId: async ({ id }) => {
        const target = `catalog/datasets/que-faire-a-paris-/records/${id}`;
        const response = await fetch(urlApi + target, {
            method: "GET",
            headers,
        }).then((res) => res.json());
        return response.record;
    },

    getListLastEvents: async () => {
        const target = `catalog/datasets/que-faire-a-paris-/records/?rows=3&sort=date_start`;
        const response = await fetch(urlApi + target, {
            method: "GET",
            headers,
        }).then((res) => res.json());
        return response.records;
    },

    getListEventsFromSearch: async ({ search, date, city }) => {
        const target = `catalog/datasets/que-faire-a-paris-/records/?rows=15&sort=date_start${
            search && `&search=${search}`
        }`;
        const response = await fetch(urlApi + target, {
            method: "GET",
            headers,
        }).then((res) => res.json());
        return response.records;
    },
};

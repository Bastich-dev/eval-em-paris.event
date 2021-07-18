export default function getFilteredDates({ date_description, occurrences }) {
    let listDates = date_description
        .split("<br />")
        .join(" ")
        .split("Le")
        .join("###Le")
        .split("###");
    listDates.shift();

    const keysToDelete = occurrences
        .split(";")
        .map((el, key) => {
            if (new Date(el.split("_")[0]).getTime() < new Date().getTime())
                return key;
            else return null;
        })
        .filter((e) => e !== null);

    listDates = listDates.filter(
        (el, key) => keysToDelete.findIndex((e) => e === key) === -1
    );

    console.log(listDates);

    return listDates;
}

export const loadData = async (url) => {
    return fetch(url)
        .then((response) => {
            return response.json();
        });
}

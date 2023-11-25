export async function useFetch(method, url, options) {
    let fetchData
    await fetch(url, { method: method, ...options })
        .then((response) => response.json())
        .then(data => {
            fetchData =  data
        })
        .catch(error => {
            console.error(error)
        })
    return fetchData
}

fetch('pets1.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        localStorage.setItem('data', JSON.stringify(data));
    })
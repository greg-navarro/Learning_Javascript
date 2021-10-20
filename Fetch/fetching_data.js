// basic call to fetch some data and print the result
console.log(fetch("https://api.randomuser.me/?net=US&results=1"));

// add a callback function with the .then function (promises)
fetch("https://api.randomuser.me/?net=US&results=1").then(res => 
    console.log(res.json)
    );

// the .then function can be chained together, with the return value of one being passed as the input into the next one
fetch("https://api.randomuser.me/?net=US&results=1")
    .then(res => res.json())
    .then(json => json.results)
    .catch(console.error);


// ASYNC & AWAIT
// accomplish the same thing as the above, without the .then() bullshit

const getFakePerson = async () => {
    try {
        let res = await fetch("https://api.randomuser.me/?nat=US&results=1")
        let {results} = res.json()
        console.log(results)
    } catch (error) {
        console.error(error)
    }
}


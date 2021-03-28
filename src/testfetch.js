const Fetch = require('node-fetch');


let url = "https://jsonplaceholder.typicode.com/posts";
let settings = { method: "Get" };

let data = Fetch(url, settings)
    .then(res => res.json())
    .then((json) => {


        return json;
    })

.catch(error => { console.log("server is down") });

const response = () => {
    data.then((a) => {
        data = a;
        for (var i in data) {

            console.log(i)
            console.log("------");
            console.log(data[i].userId);
            console.log("------");
            console.log(data[i].title);
            console.log("------");
            console.log(data[i].body);
            console.log("_______________________");

        }
        return data;
    });

}
response();


// should be now able to log the data here 
//this doesn't get the values of the api1 and api2 data as it's outside of the
//promise and only displays the object structure



// async function response() {

//     let res = await Fetch(url, settings);
//     let data = await res.json();
//     console.log(data);


//     for (var i in data) {
//         const entry = JSON.stringify(i);
//         console.log("------");
//         console.log(data[i].id);
//         console.log("------");
//         console.log(data[i].title);
//         console.log("------");
//         console.log(data[i].body);
//         console.log("_______________________");

//     }
//     return data;
// }
// let data2 = response();



// let response = Fetch(url, settings)
//     .then(res => res.json())
//     .then((json) => {
//         var post_data = json; //console.log(JSON.stringify(data));
//         console.log("_-----------------------_");
//         //alert(post_data)
//         return JSON.stringify(json);
//         // do something with JSON
//     })
//     .catch(error => { alert("server is down") });

// for (var i in response) {
//     const entry = JSON.stringify(i);
//     // console.log("------");
//     // console.log(post_data[i].id);
//     // ids.push(post_data[i].id);
//     // console.log("------");
//     // console.log(post_data[i].title);
//     // titles.push(post_data[i].title);
//     // console.log("------");
//     // console.log(post_data[i].body);
//     // bodys.push(post_data[i].body);

//     console.log("_______________________");
// }
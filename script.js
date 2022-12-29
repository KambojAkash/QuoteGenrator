// Quotes = [
//         "Learn from the mistakes of others. You can't live long enough to make them all yourself",
//         "The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become",
//         "Once you choose hope, anything’s possible"
//     ]
// console.log(Quotes[1])
let quote = document.getElementById("quote");
let qouteGenBtn = document.getElementById("btn");
let i = 0;
let len;
// console.log(len);
let q;

async function getQuotes() {
    let data = await fetch("https://type.fit/api/quotes");
    return data;

}
let a = getQuotes();

a.then((data) => {
    var res = data.json();
    return res;
}).then((res) => {
    // console.log(res);
    qouteGenBtn.addEventListener("click", () => {
        len = res.length;
        if (i == len) {
            i = 0;
        }
        // console.log("index", i);
        q = res[i]['text'];


        quote.innerText = q;

        i = i + 1;

    })
}).catch(err => console.log(err))
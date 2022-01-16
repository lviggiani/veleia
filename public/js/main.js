import * as Queries from './queries.js';

async function main(){
    const response = await fetch("/api/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: Queries.OBLIGATIONES_ALL })
    });

    console.log(await response.json());
}

window.addEventListener("load", main);
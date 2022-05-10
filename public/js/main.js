async function main(){
    /*const response = await fetch("/api/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: Queries.OBLIGATIONES_ALL })
    });*/

    const response = await fetch("/api/obligationes", { 
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log(await response.json());
}

window.addEventListener("load", main);
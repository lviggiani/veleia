import { Widgets } from "/vee/index.js";

async function main(){
    const response = await fetch("/api/obligationes", { 
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log(await response.json());

    console.log(Widgets);
}

window.addEventListener("load", main);
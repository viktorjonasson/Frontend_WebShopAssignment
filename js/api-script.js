

document.addEventListener("DOMContentLoaded", e => {
    fetch('https://fakestoreapi.com/products')
    .then( e => e.json()) 
    .then(visaProdukter);
});


function visaProdukter(produkter) {

    let indexDiven = document.getElementById("listaProdukterna");

    for (let i = 0; i < produkter.length; i++) {
        
        let produkten = produkter[i]; 

        // En produkt div
        let enskildProdukt = document.createElement("div");
        enskildProdukt.className = "mb-4 p-3 border shadow-lg";

        // flyttade ner den till "layout-delen" - Andy
        // // Div pris och Kanpp och bild
        // let pris_Kanpp_Bild = document.createElement("div");
        // pris_Kanpp_Bild.className = "d-flex align-items-center justify-content-between";

        // div till bild
        let bildDiv = document.createElement("div");
        bildDiv.className = "d-flex "; 


        // flyttade ner den till "layout-delen" - Andy
        // //  Div till Pris o Knapp
        // let pris_Knapp = document.createElement("div");
        // pris_Knapp.className = "d-flex flex-column mx-3";


        // Namnet
        let titel = document.createElement("h3");
        titel.textContent = produkten.title; 
        titel.classList.add("text-center", "mb-5", "px-2");

        // Beskrivning
        let beskrivning = document.createElement("p");
        beskrivning.textContent = produkten.description;
        beskrivning.classList.add("text-muted", "small", "px-2");

        beskrivning.style.maxWidth = "800"
        beskrivning.style.wordBreak = "break-word";
        beskrivning.style.marginLeft = "25px";


        //kategori
        let kategori = document.createElement("p");
        kategori.textContent = produkten.category; 
        kategori.classList.add("text-decoration-underline", "px-2", "text-start");


        // Hämta och skapa bilden från "fakestoreapi"
        let bild = document.createElement("img");
        bild.src = produkten.image;
        bild.width = 100;
        bild.classList.add("img-fluid");


        // Priset
        let pris = document.createElement("p");
        pris.textContent = produkten.price + "$";
        pris.classList.add("fw-bold", "mb-3"); 

        // Beställ btn
        let beställKnapp = document.createElement("button");
        beställKnapp.textContent = "Beställ";
        beställKnapp.className = "btn btn-primary"; 

        beställKnapp.addEventListener("click", e => {
            location.href = "bestallning.html";
            sessionStorage.setItem('chosenProduct', JSON.stringify(produkten));
        });


        //Lägg till (gör om lite av placeringen, sparat förra dock) - Andy

        //Vänstersida
        let vänsterDiv = document.createElement("div");
        vänsterDiv.className = "d-flex align-items-start";
        vänsterDiv.appendChild(bild);
        vänsterDiv.appendChild(beskrivning);
        vänsterDiv.style.flex = "1";

        //Högersida
        let pris_Knapp = document.createElement("div");
        pris_Knapp.className = "d-flex flex-column mx-3"
        pris_Knapp.appendChild(pris);
        pris_Knapp.appendChild(beställKnapp);
        pris_Knapp.style.flex = "0 0 150px"

        //Raden vänster + höger
        let pris_Kanpp_Bild = document.createElement("div");
        pris_Kanpp_Bild.className = "d-flex flex-wrap align-items-center justify-content-between";
        pris_Kanpp_Bild.appendChild(vänsterDiv)
        pris_Kanpp_Bild.appendChild(pris_Knapp)

        //Hela diven
        enskildProdukt.appendChild(kategori);
        enskildProdukt.appendChild(titel);
        enskildProdukt.appendChild(pris_Kanpp_Bild);

        indexDiven.appendChild(enskildProdukt);




        //Lägg till
        // bildDiv.appendChild(bild);
        //
        // pris_Knapp.appendChild(pris);
        // pris_Knapp.appendChild(beställKnapp);
        //
        // pris_Kanpp_Bild.appendChild(bildDiv);
        // pris_Kanpp_Bild.appendChild(pris_Knapp);
        //
        // enskildProdukt.appendChild(kategori)
        // enskildProdukt.appendChild(titel);
        // enskildProdukt.appendChild(beskrivning)
        // enskildProdukt.appendChild(pris_Kanpp_Bild);
        //
        // indexDiven.appendChild(enskildProdukt);
    }
}



// Kreirati promenljivu koja cuva podatak o studentu

var student;

// Kreirati promenljivu i u nju smestiti u formi stringa JSON koji cuva podatak o jednom studentu: ime, prezime, brojIndeksa, godinaIndeksa. 
// Ispisati vrednost i tip promenljive.

var studentString = `{
    "ime": "Tamara",
    "prezime": "Brkić",
    "brojIndeksa": "121/11",
    "godinaIndeksa": 2011
}`;

console.log(studentString, typeof studentString);

// Kreirani string konvertovati u JSON, tj. JavaScript objekat. Smestiti u promenljivu i ispisati vrednost, kao i tip promenljive.

var studentJSON = JSON.parse(studentString);

console.log(studentJSON, typeof studentJSON);

// Ispisati nazive i vrednosti svih svojstava dobijenog objekta.

for (x in studentJSON) {
    console.log(`Naziv svojstva: ${x}, vrednost svojstva: ${studentJSON[x]}`);
}

// Ispisati vrednost za svojstva: ime i prezime.

console.log(`Vrednost svojstva ime: ${studentJSON["ime"]}`);

console.log(`Vrednost svojstva prezime: ${studentJSON["prezime"]}`);

// Kreirati JavaScript objekat koji cuva podatak o jednom studentu: ime, prezime, brojIndeksa, godinaIndeksa. Ispisati vrednost i tip promenljive.

var studentJS = {
    ime: "Anđela",
    prezime: "Brkić",
    brojIndeksa: "125/14",
    godinaIndeksa: 2014
};

console.log(studentJS, typeof studentJS);

// Kreirani objekat konvertovati u string.

var studentDvaString = JSON.stringify(studentJS);

// Ispisati sva svojstva i njihove vrednosti kreiranog objekta.

for (x in studentJS) {
    console.log(`Naziv svojstva: ${x}, vrednost svojstva: ${studentJS[x]}`);
}

// Ispisati vrednost svojstva: ime i broj indeksa.

console.log(`Vrednost svojstva ime: ${studentJS["ime"]}`);

console.log(`Vrednost svojstva prezime: ${studentJS["brojIndeksa"]}`);

// Promeniti vrednost svojstva ime i ispisati vrednost.

studentJS["ime"] = "Anđi";

console.log(`Vrednost svojstva ime: ${studentJS["ime"]}`);

// Izbrisati svojstvo ime iz objekta i ispisati.

delete studentJS.ime;

console.log(studentJS);

// Kreirati u formi stringa JSON koji čuva podatke o više studenata sa podacima o svakom: ime, prezime, brojIndeksa, godinaIndeksa.

var studentiString = `[{
    "ime": "Tamara",
    "prezime": "Brkić",
    "brojIndeksa": "121/11",
    "godinaIndeksa": 2011
},{
    "ime": "Anđela",
    "prezime": "Brkić",
    "brojIndeksa": "125/14",
    "godinaIndeksa": 2014
}]`;

// String konvertovati u JSON. Ispravnost JSON-a proveriti na: <a href="https://jsonlint.com/" target="_blank"> https://jsonlint.com/</a>

var studentiJSON = JSON.parse(studentiString);

console.log(studentiJSON);

// Kreirati promenljivu i u njoj sacuvati podatke o studentima u vidu niza JavaScript objekata.

var studentiJS = [{
    ime: "Tamara",
    prezime: "Brkić",
    brojIndeksa: "121/11",
    godinaIndeksa: 2011
}, {
    ime: "Anđela",
    prezime: "Brkić",
    brojIndeksa: "125/14",
    godinaIndeksa: 2014
}];

// Istampati u formi liste sve studente u bloku sa id="studenti".

function istampajListuStudenata() {
    var ispis = "<ul>";

    studentiJS.forEach(student => {
        ispis += `<li>${student["ime"]} ${student["prezime"]}</li>`
    });

    ispis += "</ul>";

    document.getElementById("studenti").innerHTML = ispis;
}

istampajListuStudenata();

// Pretraziti kreirani niz studenata po godiniIndeksa.

document.getElementById("btnPretrazi").addEventListener("click", pretraziPoGodiniIndeksa);

function pretraziPoGodiniIndeksa() {
    var godinaIndeksa = document.getElementById("pretraga").value;

    if (godinaIndeksa === "") {
        istampajListuStudenata();
    } else if (!isNaN(godinaIndeksa)) {
        godinaIndeksa = document.getElementById("pretraga").value;

        var ispis = "<ul>";
        studentiJS.forEach(student => {
            if (student["godinaIndeksa"] == godinaIndeksa) {
                ispis += `<li>${student["ime"]} ${student["prezime"]}</li>`
            }
        });
        ispis += "</ul>";

        document.getElementById("studenti").innerHTML = ispis;
    } else {
        document.getElementById("studenti").innerHTML = "Unesite godinu u ispravnom formatu (yyyy)";
    }
}

// Kreirati JSON sa podacima o knjigama: naziv, godina izdanja, izdavac i ime i prezime autora.

var knjigeString = `[{
    "naziv": "Web dizajn",
    "godinaIzdanja": 2021,
    "izdavac": "Code",
    "autori":  [{
        "ime": "Milos",
        "prezime": "Mikic"
    },{
        "ime": "Pera",
        "prezime": "Peric"
    }]
},{
    "naziv": "Front end developer 2021",
    "godinaIzdanja": 2021,
    "izdavac": "Code Comtrade",
    "autori":  [{
        "ime": "Mika",
        "prezime": "Mikic"
    }]
}]`;

var knjigeJSON = JSON.parse(knjigeString);

// Prikazati podatke o knjigama u formi tabele u okviru bloka sa id="knjige". Autore prikazati u jednoj koloni razdvojene zarezom.

var ispis = '<table><tr><th>Naziv</th><th>Godina izdanja</th><th>Izdavac</th><th>Autori</th></tr>';

var i = 0;

knjigeJSON.forEach(knjiga => {
    ispis += `<tr><td>${knjiga["naziv"]}</td><td>${knjiga["godinaIzdanja"]}</td><td>${knjiga["izdavac"]}</td><td>`;
    var ispisAutora = "";
    var j = 0;
    knjigeJSON[i]["autori"].forEach(autor => {
        ispisAutora += `${knjigeJSON[i]["autori"][j]["ime"]} ${knjigeJSON[i]["autori"][j]["prezime"]}, `;
        j++;
    })
    ispis += ispisAutora.substring(0, ispisAutora.length - 2);
    ispis += `</td></tr>`
    i++;
});

ispis += "</table>";

document.getElementById("knjige").innerHTML = ispis;

// Slike programa predmeta prikazati dinamicki iz JavaScript-a.

var predmeti = [{
    img: "ajax.png"
}, {
    img: "jquery.png"
}, {
    img: "js.png"
}, {
    img: "json.png"
}]

function render(predmeti) {
    var predmetiDiv = document.createElement("div");
    predmetiDiv.setAttribute("id", "slicice");
    document.querySelector(".region").insertBefore(predmetiDiv, document.querySelector(".region h2").nextSibling);
    predmeti.forEach(predmet => {
        var slicica = document.createElement("img");
        slicica.setAttribute("src", `images/${predmet.img}`);
        console.log(document.getElementById("slicice"));
        document.getElementById("slicice").appendChild(slicica);
    }
    )
}

render(predmeti);
var CurrentEpisode = document.getElementById("Ep").value;
console.log(CurrentEpisode)

function getSelectValue() { // actualise
    CurrentEpisode = document.getElementById("Ep").value;
};

function Next() {
    if (CurrentEpisode >= 1 & CurrentEpisode <=11) {
        CurrentEpisode++;
    }
}
function Prev() {
    if (CurrentEpisode > 1 & CurrentEpisode <13) {
        CurrentEpisode = CurrentEpisode-1;
    }
}

var idE = {
    "Name": "Owari No Seraph",
    "Episodes": [
        "https://dv46.sibnet.ru/32/97/27/3297271.mp4?st=0UxKwfkA2JV0LCiK9keeEg&e=1649596000&stor=46&noip=1",
        "https://dv56.sibnet.ru/27/34/99/2734991.mp4?st=ZyTo5-S5eFLPa7V9vP7HRw&e=1649596000&stor=56&noip=1",
        "https://dv56.sibnet.ru/27/34/99/2734992.mp4?st=A67JHQJ1pg9NKAscuDR2tA&e=1649596000&stor=56&noip=1",
        "https://dv56.sibnet.ru/27/34/99/2734995.mp4?st=QKQ-lW6as-KOt6poXNO3fg&e=1649597000&stor=56&noip=1",
        "https://dv46.sibnet.ru/32/97/27/3297272.mp4?st=W49o6fMYF8dpTeirfPGdkQ&e=1649597000&stor=46&noip=1",
        "https://dv46.sibnet.ru/27/34/99/2734999.mp4?st=VMaKPDl9Af3HUhAv3Ekuag&e=1649597000&stor=46&noip=1",
        "https://dv58.sibnet.ru/27/35/00/2735002.mp4?st=OB_12XzfGbxCt3VTBGDkRg&e=1649597000&stor=58&noip=1",
        "https://dv53.sibnet.ru/27/35/00/2735003.mp4?st=fC78HoF02c54LjJFJR0rhg&e=1649597000&stor=53&noip=1",
        "https://dv57.sibnet.ru/27/35/75/2735750.mp4?st=JCzHvp7Wfqlyjl1pqhvSCg&e=1649597000&stor=57&noip=1",
        "https://dv46.sibnet.ru/27/35/75/2735755.mp4?st=4jFT0Y-nglIVgov-o5LTzw&e=1649598000&stor=46&noip=1",
        "https://dv56.sibnet.ru/27/35/75/2735756.mp4?st=nMrMSCJcGuXVcrzyAm-dVA&e=1649598000&stor=56&noip=1",
        "https://dv53.sibnet.ru/27/35/76/2735760.mp4?st=-83fmP_zNEcbgpNImqUP4g&e=1649599000&stor=53&noip=1"
    ]
}
var toJSON = JSON.stringify(idE);
localStorage.setItem("idJSON", toJSON);
var fromJSON = localStorage.getItem("idJSON");
var episod = JSON.parse(fromJSON);

const display = {
    elementShown: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },

    title: function() {
        this.elementShown("title", `<h1>Owari No Seraph - Ep${CurrentEpisode}</h1>`)
    },

    episodes: function() {
        this.elementShown("video", `<video src="${episod.Episodes[CurrentEpisode-1]}" controls="true"></video>`)
    },

}

changed = () => {
    display.title();
    display.episodes();
}




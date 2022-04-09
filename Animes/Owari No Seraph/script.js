function getSelectValue() {
    var selectedValue = document.getElementById("Ep").value;
    console.log(selectedValue)
};

var idA = {
    "Name": "Owari No Seraph",
    "Episodes": [
        "https://fs126.myvi.ru:8090/vv164/104/73/2189385.mp4?sig=1b83f717c37313795bc5dd0a401551c2&d=1280&t=1649512725",
        "https://fs126.myvi.ru:8090/vv163/104/72/2189384.mp4?sig=985b216677435578e6705c26552dc12a&d=1278&t=1649518330",
    ]
}
var toJSON = JSON.stringify(idA);
localStorage.setItem("idJSON", toJSON);

var fromJSON = localStorage.getItem("idJSON");
var episod = JSON.parse(fromJSON);

const display = {
    elementShown: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },

    title: function() {
        this.elementShown("title", `<h1>Owari No Seraph - Ep${document.getElementById("Ep").value}</h1>`)
    },

    episodes: function() {
        this.elementShown("video", `<video src="${episod.Episodes[document.getElementById("Ep").value-1]}" controls="true"></video>`)
    },

}

changed = () => {
    display.title();
    display.episodes();
}


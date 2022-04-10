var CurrentEpisode = document.getElementById("Ep").value;
console.log(CurrentEpisode)

function getSelectValue() { // actualise
    CurrentEpisode = document.getElementById("Ep").value;
};

function Next() {
    if (CurrentEpisode >= 1 & CurrentEpisode <=13) {
        CurrentEpisode++;
    }
}
function Prev() {
    if (CurrentEpisode > 1 & CurrentEpisode <15) {
        CurrentEpisode = CurrentEpisode-1;
    }
}

var idE = {
    "Name": "Charlotte",
    "Episodes": [
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1279/charlotte-episode-1" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1295/charlotte-episode-2" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1303/charlotte-episode-3" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1309/charlotte-episode-04" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1317/charlotte-episode-05" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1323/charlotte-episode-06" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1331/charlotte-episode-07" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1370/charlotte-episode-08" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1380/charlotte-episode-09" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1390/charlotte-episode-10" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1399/charlotte-episode-11" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1416/charlotte-episode-12" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/1424/charlotte-episode-13" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        "<iframe src='https://my.mail.ru/video/embed/8085077150748642590' width='626' height='367' frameborder='0' scrolling='no' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
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
        this.elementShown("title", `<h1>Charlotte - Ep${CurrentEpisode}</h1>`)
    },

    episodes: function() {
        this.elementShown("video", episod.Episodes[CurrentEpisode-1])
    },
    
}

changed = () => {
    display.title();
    display.episodes();
}




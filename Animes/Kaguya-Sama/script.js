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
    "Name": "Kaguya-sama : Love is War",
    "Episodes": [
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8133/kaguya-sama-love-is-war-episode-1" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8134/kaguya-sama-love-is-war-episode-2" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8135/kaguya-sama-love-is-war-episode-3" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8136/kaguya-sama-love-is-war-episode-4" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8137/kaguya-sama-love-is-war-episode-5" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8138/kaguya-sama-love-is-war-episode-6" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8139/kaguya-sama-love-is-war-episode-7" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8140/kaguya-sama-love-is-war-episode-8" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8141/kaguya-sama-love-is-war-episode-9" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8142/kaguya-sama-love-is-war-episode-10" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8143/kaguya-sama-love-is-war-episode-11" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>',
        '<iframe src="https://www.wakanim.tv/fr/v2/catalogue/embeddedplayer/8144/kaguya-sama-love-is-war-episode-12" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" allowScriptAccess="always" mozallowfullscreen="true"  allow="encrypted-media"></iframe>'
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
        this.elementShown("title", `<h1>Kaguya-sama : Love is War - Ep${CurrentEpisode}</h1>`)
    },

    episodes: function() {
        this.elementShown("video", episod.Episodes[CurrentEpisode-1])
    },

}

changed = () => {
    display.title();
    display.episodes();
}




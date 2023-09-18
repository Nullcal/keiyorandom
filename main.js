// parts paths
const parts = [
    ["二俣", "八丁", "千葉", "南", "市川", "幕張", "新", "検見川", "海浜", "稲毛", "舞", "葛西臨海", "越中"],
    ["みなと", "公園", "堀", "塩浜", "島", "幕張", "新町", "木場", "浜", "浜2", "浦安", "海岸", "習志野", "船橋", "豊砂"]
]
const paths = [
    "src/parts/firsthalf/",
    "src/parts/secondhalf/"
]

// generate random pair of parts
function getRandomPair(partslist) {
    const pair = partslist.map(e => e[Math.floor(Math.random()*(e.length-1))]);
    return pair;
}

// get audio duration
function getDuration(src, cb) {
    var audio = new Audio();
    $(audio).on("loadedmetadata", function(){
        cb(audio.duration);
    });
    audio.src = src;
}

// play specified sound file continuously
function playSound(pair) {
    const aulist = pair.map((e, i) => new Audio(paths[i]+e+".mp3"))
    aulist[0].play();
    getDuration(aulist[0].src, function(duration) {
        console.log(duration);
        setTimeout(() => {
            aulist[1].play();
        }, duration*1000-50);
    })
}



$(function() {

    $("#play_sound").on("click", function() {
        playSound(getRandomPair(parts));
    });

})
var API_KEY = "caacc4e2ae7dd704f1d30a464c001fd4";
var shared_secret = "5599912915319c85b2d32a1196dbc178";
var user = "srhmsd";
var period = ["overall", "7day", "1month", "3month", "6month", "12month"];
var limit = "3"; //the default is 50

//taken from W3schools.com
var xmlhttp = new XMLHttpRequest();
var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user="+user+"&api_key="+API_KEY+"&limit="+limit+"&period="+period[1]+"&format=json";

xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        getFirstTrack(myArr);
    }
};

function getFirstTrack(arr) {
    //1 
    var name = arr["toptracks"]["track"][0]["name"];
    var artist = arr["toptracks"]["track"][0]["artist"]["name"];
    console.log(artist +" - "+name);
    document.getElementById("track").innerHTML = artist +" - "+name;
    var img = arr["toptracks"]["track"][0]["image"][2]["#text"];
    var x = document.createElement("IMG");
    x.setAttribute("src", img);
    document.getElementById("img_id").appendChild(x);
        //2
    name = arr["toptracks"]["track"][1]["name"];
    artist = arr["toptracks"]["track"][1]["artist"]["name"];
    console.log(artist +" - "+name);
    document.getElementById("track1").innerHTML = artist +" - "+name;
    img = arr["toptracks"]["track"][1]["image"][2]["#text"];
    x = document.createElement("IMG");
    x.setAttribute("src", img);
    document.getElementById("img_id1").appendChild(x);
    //3
    name = arr["toptracks"]["track"][2]["name"];
    artist = arr["toptracks"]["track"][2]["artist"]["name"];
    console.log(artist +" - "+name);
    document.getElementById("track2").innerHTML = artist +" - "+name;
    img = arr["toptracks"]["track"][2]["image"][2]["#text"];
    x = document.createElement("IMG");
    x.setAttribute("src", img);
    document.getElementById("img_id2").appendChild(x);
}

(function(){
    let nation = window.location.href.split("=")[1];
    var borders = [];
    axios.get("https://restcountries.eu/rest/v2/name/" + nation)
        .then(function(res){
            let currentNation = res.data[0];
            document.getElementsByTagName('img')[0].src = currentNation.flag;
            document.getElementsByClassName('name')[0].textContent = currentNation.name;
            document.getElementsByTagName('span')[0].textContent = currentNation.nativeName;
            document.getElementsByTagName('span')[1].textContent = currentNation.population;
            document.getElementsByTagName('span')[2].textContent = currentNation.region;
            document.getElementsByTagName('span')[3].textContent = currentNation.subregion;
            document.getElementsByTagName('span')[4].textContent = currentNation.capital;
            document.getElementsByTagName('span')[5].textContent = currentNation.topLevelDomain;
            document.getElementsByTagName('span')[6].textContent = currentNation.currencies[0].name.split(" ")[0];
            let langs = "";
            for(let lang of currentNation.languages){
                langs += lang.name +", ";
            }
            document.getElementsByTagName('span')[7].textContent = langs.slice(0, langs.length - 2);     
            borders = currentNation.borders;
            borders = borders.map(function(border) { 
                return axios.get("https://restcountries.eu/rest/v2/alpha/" + border.toLowerCase() )
            });
            Promise.all(borders)
                .then(function(data){
                    for(let bor of data){
                        document.getElementsByClassName('list-bors')[0].innerHTML += `<div class="country">${bor.data.name.split(" ")[0]}</div>`
                    }
                })
        })
        .catch(function(err){
            console.log(err);
        });
})()
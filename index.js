let sites = JSON.parse(localStorage.getItem('sites')) || [];

document.getElementById("button").addEventListener("click", addSite);

function addSite() {
    let site = document.getElementById('inputfield').value;

    sites.push(site);

    localStorage.setItem('sites', JSON.stringify(sites));


    let list = document.getElementById('sites');
    let addsite = document.createElement('li');
    addsite.innerHTML = "<a href='" + site + "'>" + site + "</a>";
    list.appendChild(addsite);

    document.getElementById('inputfield').value = "";
}


function show() {
    let list = document.getElementById('sites');
    
    sites.forEach(site => {
        let addsite = document.createElement('li');
        addsite.innerHTML = "<a href='" + site + "'>"  + site + "</a>";
        list.appendChild(addsite);
        
    });
}

show();

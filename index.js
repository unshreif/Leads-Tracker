let sites = JSON.parse(localStorage.getItem('sites')) || [];

document.getElementById("button").addEventListener("click", addSite);

function addSite() {
    let site = document.getElementById('inputfield').value;

    // Push the new site to the sites array
    sites.push(site);

    localStorage.setItem('sites', JSON.stringify(sites));


    let list = document.getElementById('sites');
    let addsite = document.createElement('li');
    addsite.innerHTML = "<a href='" + site + "'>" + site + "</a>";
    list.appendChild(addsite);

    // Clear the input field
    document.getElementById('inputfield').value = "";
}


function show() {
    let list = document.getElementById('sites');
    
    sites.forEach(site => {
        let addsite = document.createElement('li');
        addsite.innerHTML = "<a href='" + site + "'>" + site + "</a>";
        list.appendChild(addsite);
    });
}

show();

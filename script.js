document.getElementById('generate').addEventListener('click', getFact);

// function getFact(e) {
//     e.preventDefault();
    
//     let url = "https://cors-anywhere.herokuapp.com";
//     url += "/dog-api.kinduff.com/api/facts";
//     console.log(url);
//     fetch(url, {mode: 'cors'})
//         .then(function(response) {
//             return response.json();
//         }).then(function(json) {
//           console.log(json);
           
//           let question = "<div>Did you know?</div>";
//           let questionElement = document.getElementById("question");
//           questionElement.innerHTML = question;
//           questionElement.classList.add("question");
           
//           let results = "<ul>";
//           for (let i = 0; i < json.facts.length; i++) {
//               results += "<li>" + json.facts[i] + "</li>"
//           }
//           results += "</ul>";
//           let factElement = document.getElementById("fact");
//           factElement.innerHTML = results;
//           factElement.classList.add("fact");
//         });
// }

function getFact(e) {
    e.preventDefault();
    
    let question = "<div>Did you know?</div>";
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = question;
    questionElement.classList.add("question");
    
    let results = "<ul><li>";
    results += "Thirty percent of all Dalmatians are deaf in one or both ears. Because bulldogs have extremely short muzzles, many spend their lives fighting suffocation. Because Chihuahuas have such small skulls, the flow of spinal fluid can be restricted, causing hydrocephalus, a swelling of the brain.";
    results += "</ul></li>";
    let factElement = document.getElementById("fact");
    factElement.innerHTML = results;
    factElement.classList.add("fact");
}
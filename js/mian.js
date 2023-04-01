const names = ["warda","Benjamin","Caroline","David","Emily","Freya","George","Hannah","Isabella","James","Katherine","Liam","Mia","Nathan","Olivia","Peter","Quinn","Rachel","Sophie","Thomas","Ursula","Victoria","William","Xander","Yara","Zachary","Alice","Barbara","Christopher","Diana","Edward","Fiona","Grace","Henry","Isaac","Jasmine","Kevin","Lucy","Margaret","Natalie","Oscar","Penelope","Quentin","Rebecca","Samuel","Tiffany","Uma","Vivian","Wyatt","Xavier","Yvonne","Zoe","Abigail","Brendan","Catherine","Daniel","Elizabeth","Faith","Gabriel","Heather","Isabelle","Jacob","Kaitlyn","Landon","Madison","Nora","Oliver","Paige","Quincy","Riley","Samantha","Tyler","Unity","Violet","Wesley","Xena","Yolanda","Zander","Avery","Brooke","Connor","Danielle","Ethan","Felicity","Gavin","Hayley","Isadora","Jordan","Kelsey","Leah","Maggie","Nathanial","Olaf","Phoebe","Quinlan","Ryan","Savannah","Taylor","Ursula","Vanessa","Wendy","Ximena","Yvette","Zelda"];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const result = document.querySelector('.result');
let uls = document.querySelectorAll('.result li ul');
let searchInput = document.querySelector('.search');
searchInput.addEventListener('input', (e) => {
    let filteredNames = names.filter((m) => {
        return m.toLowerCase().includes(e.target.value.toLowerCase());
    })
    showNames(filteredNames)
})
function showNames(theNames) {
    let theCalc=''
    for (let letter of letters) {
        theCalc += `
        <li>
            <span class="letter">${letter.toUpperCase()}</span>
            <ul>
            <li>${theNames.filter((m) => m.toLowerCase().startsWith(letter)).join(`</li><li>`)}</li>
            </ul>
        </li>
    `;
    }
    result.innerHTML = theCalc;
}
showNames(names)

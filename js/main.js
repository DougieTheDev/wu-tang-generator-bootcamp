
const setOne = ['Sun', 'Destroying', 'Iron', 'Mystic', 'Ghetto', 'Lyrical', 'Rising', 'Golden', 'Fury', 'Slick', 'Revenge', 'Murderous', 'Dark', 'Ruthless', 'Savage', 'Chasing'];
const setTwo = ['Dragon', 'Killer', 'Warrior', 'Shogun', 'Phantom', 'Knight', 'Master', 'Beast', 'Viper', 'Brooklyn', 'Harlem', 'Bronx', 'Queens', 'Shaolin', 'Empire', 'Jungle'];

function stringToName(str) {
    let name = 0;
    for (let i = 0; i < str.length; i++) {
        name = name + str.charCodeAt(i);
    }
    return name;
}
function randomName(name) {
    const randomNombre = Math.sin(name) * 100;
    return randomNombre - Math.floor(randomNombre);
}

document.getElementById('wuTangForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const currentCity = document.getElementById('currentCity').value.trim();
    const birthCity = document.getElementById('birthCity').value.trim();
    const birthMonth = document.getElementById('birthMonth').value.trim();

    if (!firstName || !lastName || !currentCity || !birthCity || !birthMonth) {
        alert('Please fill all fields in!');
        return;
    }
    const answers = [firstName, lastName, currentCity, birthCity, birthMonth].join(' ').toLowerCase();
    const name = stringToName(answers);
    const setOneRandom = setOne[Math.floor(randomName(name) * setOne.length)];
    const setTwoRandom = setTwo[Math.floor(randomName(name) * setTwo.length)];
    const nameGenerated = `${setOneRandom} ${setTwoRandom}`;

    document.getElementById('result').textContent = `Your Wu-Tang-like Name is: ${nameGenerated}`;
});


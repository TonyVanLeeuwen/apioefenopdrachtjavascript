console.log(axios);

async function displayCharacterNames() {
    console.log("hallo functie");
    const response = await axios.get("https://anapioficeandfire.com/api/characters");

    // console.log(response)
    // console.log(response.data)
    const characterNameList = document.getElementById("characterNameList");
    // console.log(characterNameList)

    for (const character of response.data) {
        console.log(character);

        const listItem = document.createElement("li");

        const nameitem = () => {
            if (character.name === "") {
                return character.aliases;
            } else {
                return character.name;
            }
        };

        listItem.textContent = nameitem() + " : " + character.gender + " aka: " + character.aliases;

        console.log(listItem);

        characterNameList.appendChild(listItem);
    }

}


displayCharacterNames();
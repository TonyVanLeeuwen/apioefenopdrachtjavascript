console.log(axios);

async function displayCharacterNames() {
    console.log("hallo functie");
    const response = await axios.get("https://anapioficeandfire.com/api");

    console.log("Res:" + response.data.characters)
}

displayCharacterNames();
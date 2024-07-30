
const getWarriors = async (warrior) => {
    const url = `https://dragonball-api.com/api/characters?name=${ warrior }&limit=5`;
    const warriors = await fetch(url);
    const data = await warriors.json();
    return data;
}

export default getWarriors

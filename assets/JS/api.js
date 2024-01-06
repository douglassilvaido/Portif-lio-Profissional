
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/douglassilvaido/Portif-lio-Profissional/main/Data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}
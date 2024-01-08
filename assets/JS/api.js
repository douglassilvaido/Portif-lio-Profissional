
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/douglassilvaido/Portif-lio-Profissional/main/Data/profile.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
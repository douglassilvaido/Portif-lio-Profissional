
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/projeto-base/data/profile.json'
    url.src = "/Criando uma Página de portifólio Profissional/Data/profile.json"
    const fetching = await fetch(url)
    return await fetching.json()
}
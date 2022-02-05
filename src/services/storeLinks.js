//buscar links salvos
export async function getLinksSaved(key){
    const myLinks = await localStorage.getItem(key)
    let linksSaved = JSON.parse(myLinks) || []
    return linksSaved
}

//salvar novo link
export async function saveLink(key, newLink){
    let linksStored = await getLinksSaved(key)
    const hasLinks = linksStored.some(link => link.id === newLink.id)
    
    if(hasLinks){
        return
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
}

//deletar link
export async function deleteLink(links, id){
    let myLinksToNotDelete = links.filter(item =>{
        return item.id !== id
    })
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinksToNotDelete))
    return myLinksToNotDelete
}


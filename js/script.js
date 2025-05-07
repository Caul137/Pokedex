///------- GLOBAL SCOPE ----------///
const flechaD = document.getElementById("flechaDireita")
const flechaE = document.getElementById("flechaEsquerda")

let numeroSpanPokedex = document.getElementById("NumeroSpanPokedex")
let pokemonNomeSpan = document.getElementById("PokemonNomeSpan")
let pesquisarPokemon = document.getElementById("pesquisarPokemon")
let botaoPesquisar = document.getElementById("botaoPesquisar")
let formularioParaPesquisarPokemon = document.getElementById("formularioPokemon")


let gifDoPokemon = document.getElementById("PokeGif").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"


let SoundPrevNext = new Audio("../sounds/SoundPrevNext.mp3")


let numeroPokedex = 1

let apiPoke = `https://pokeapi.co/api/v2/pokemon/${numeroPokedex}`
//+======================================///

//---- SEARCH BAR -----///
formularioParaPesquisarPokemon.addEventListener("submit", (e) => {
    e.preventDefault()
    let valorDaPesquisa = pesquisarPokemon.value.toLowerCase()

    async function pesquisarAssincrona() {
        try{
        let apiSearch = `https://pokeapi.co/api/v2/pokemon/${valorDaPesquisa}`
        let apiSearchFetch = await fetch(apiSearch)
        let apiSearchFetchJson = await apiSearchFetch.json()
        pokemonNomeSpan.innerText = apiSearchFetchJson.name
        numeroSpanPokedex.innerText = "#" + apiSearchFetchJson.id
        gifDoPokemon =  document.getElementById("PokeGif").style.display = "block"
        gifDoPokemon = document.getElementById("PokeGif").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${apiSearchFetchJson.id}.png`
        numeroPokedex = apiSearchFetchJson.id   
        pesquisarPokemon.value = ""
        return apiSearchFetchJson

        }catch{
            pesquisarPokemon.value = ""
             pokemonNomeSpan.innerText = "Not Found:C"
             numeroSpanPokedex.innerText = "#?"
             gifDoPokemon = document.getElementById("PokeGif").style.display = "none"
             
        }
    }

   pesquisarAssincrona()
})

botaoPesquisar.addEventListener("click", () => {
    let valorPesquiaParaOBotao = pesquisarPokemon.value.toLowerCase()
    async function botaoPesquisarClick() {
        try{
            if(valorPesquiaParaOBotao != "") {
                let apiSearch = `https://pokeapi.co/api/v2/pokemon/${valorPesquiaParaOBotao}`
                let apiSearchFetch = await fetch(apiSearch)
                let apiSearchFetchJson = await apiSearchFetch.json()
                pesquisarPokemon.value = ""
                pokemonNomeSpan.innerText = apiSearchFetchJson.name
                numeroSpanPokedex.innerText = "#" + apiSearchFetchJson.id
                 gifDoPokemon =  document.getElementById("PokeGif").style.display = "block"
                 gifDoPokemon = document.getElementById("PokeGif").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${apiSearchFetchJson.id}.png`
                 numeroPokedex = apiSearchFetchJson.id  
            } else {

            }
           
        }catch {
            pesquisarPokemon.value = ""
            pokemonNomeSpan.innerText = "Not Found:C"
            numeroSpanPokedex.innerText = "#?"
            gifDoPokemon = document.getElementById("PokeGif").style.display = "none"
        }
        
    }
    botaoPesquisarClick()
})


//---------------------///


//----Prev - Next -------//


async function flechaJasonD ()  {

    flechaD.addEventListener("click", async () => {
    
        try{
         
           let a = numeroPokedex = numeroPokedex + 1
            let apiPoke = `https://pokeapi.co/api/v2/pokemon/${a}`
            let apiFetchDireita = await fetch(apiPoke)
            let apiFetchDireitaJason = await apiFetchDireita.json()
            numeroSpanPokedex.innerText = "#" + apiFetchDireitaJason.id
            pokemonNomeSpan.innerText = apiFetchDireitaJason.name
            gifDoPokemon =  document.getElementById("PokeGif").style.display = "block"
            gifDoPokemon = document.getElementById("PokeGif").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${apiFetchDireitaJason.id}.png`
            SoundPrevNext.play()
            if(apiFetchDireita.ok) {
                console.log('successful')
            }
        }catch{
           pokemonNomeSpan.innerText = "Not Found:C"
           numeroSpanPokedex.innerText = "#?"
           gifDoPokemon = document.getElementById("PokeGif").style.display = "none"
           if(numeroPokedex > 1026) {
            numeroPokedex = 1026
        }
        }
            
    })
}
flechaJasonD()


async function flechaJasonE () {

    flechaE.addEventListener("click", async () => {

        try{ 
        let b = numeroPokedex = numeroPokedex - 1
        let apiPoke = `https://pokeapi.co/api/v2/pokemon/${b}`
        let apiFetchEsquerda = await fetch(apiPoke)
        let apiFetchEsquerdaJson = await apiFetchEsquerda.json()
        numeroSpanPokedex.innerText = "#" + apiFetchEsquerdaJson.id
        pokemonNomeSpan.innerText = apiFetchEsquerdaJson.name
        gifDoPokemon =  document.getElementById("PokeGif").style.display = "block"
        gifDoPokemon = document.getElementById("PokeGif").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${apiFetchEsquerdaJson.id}.png`
        SoundPrevNext.play()
        if(apiFetchEsquerda.ok) {
            console.log('successful')
        } 
        }catch{
            pokemonNomeSpan.innerText = "Not Found:C"
            numeroSpanPokedex.innerText = "#?"
            gifDoPokemon = document.getElementById("PokeGif").style.display = "none"
            if(numeroPokedex <1) {
                numeroPokedex = 0
            }
            
        }
        })
}
flechaJasonE()


//------------  ---  -------------//
const botaoNextPokedex = document.getElementById("botaoNextPokedex")

botaoNextPokedex.addEventListener("click", () => {

    window.location.href = "/Pokedex2/html/index.html"

})











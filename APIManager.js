//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    loadUsers(){
        $.ajax({ 
            type: 'GET', 
            url: 'https://randomuser.me/api/?results=7',  
            success: (data) => {
                this.data.mainUser=data.results.map(r => { return{name : r.name , picture : r.picture.thumbnail}
                })
                this.data.friends= this.data.mainUser.splice(1)
              }
        })
    }
    loadQuote(){
        $.ajax({ 
            type: 'GET', 
            url: 'https://api.kanye.rest/',  
            success: (data) => {
                this.data.quote=data.quote
              }
        })
    }
    loadaboutme(){
        $.ajax({ 
            type: 'GET', 
            url: 'https://baconipsum.com/api/?type=meat-and-filler',  
            success: (data) => {
                this.data.aboutme=data[0]
              }
        })
    }
    loadPokemon(){
        $.ajax({ 
            type: 'GET', 
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * Math.floor(949))}/`,  
            success: (data) => {
                this.data.pokemon={name: data.name , picture: data.sprites.front_default }
              }
        })
    }
    loadData(){
        this.loadUsers()
        this.loadPokemon()
        this.loadQuote()
        this.loadaboutme()
    }
}

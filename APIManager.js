//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData(){
        $.ajax({ 
            type: 'GET', 
            url: 'https://randomuser.me/api/?results=7',  
            success: (data) => {
                this.data.users=data.results.map(r => { return{name : r.name , picture : r.picture.thumbnail}
                })
              }
        })
        $.ajax({ 
            type: 'GET', 
            url: 'https://api.kanye.rest/',  
            success: (data) => {
                this.data.quote=data.quote
              }
        })
    }
}

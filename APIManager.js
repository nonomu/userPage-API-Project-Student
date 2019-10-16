//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData(){
        //you should make all your API requests here
        //each request should update the `data` object accordingly
        // $.ajax({ 
        //     type: 'GET', 
        //     url: 'https://api.kanye.rest/',  
        //     success: (data) => {
        //         this.data=data
        //       }
        // })
        $.ajax({ 
            type: 'GET', 
            url: 'https://randomuser.me/api/?results=7',  
            success: (data) => {
                this.data.users=data.results.map(r => { return{name : r.name , picture : r.picture.thumbnail}
                })
              }
        })
    }
}

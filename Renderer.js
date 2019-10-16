// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        let source = $('#user-container').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ users })
        $('.user-container').append(newHTML)
    }
    _renderFriends(users) {
        let source = $('#friend').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ users })
        $('.friends-container').append(newHTML)
    }

    _renderQuote(quoteInfo) {
         $(".quote-container").append(`<p class="quote-container"> Favorite quote:</p> <div> ${quoteInfo}  </div>`)
    }

    _renderPokemon(pokemonInfo) {

    }

    _renderMeat(meatText) {

    }

    render(data) {
        this._renderUsers(data.mainUser)
        this._renderFriends(data.friends)
        this._renderQuote(data.quote)
       //this._renderPokemon(data.)
    }
}


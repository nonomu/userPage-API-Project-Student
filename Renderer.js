// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        let source = $('#user-container').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ users })
        $('.user-container').empty().append(newHTML)
    }
    _renderFriends(users) {
        let source = $('#friend').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ users })
        $('.friends-container').empty().append(newHTML)
    }

    _renderQuote(quoteInfo) {
         $(".quote-container").empty().append(`<p class="quote-container"> Favorite quote:</p> <div> ${quoteInfo}  </div>`)
    }

    _renderPokemon(pokemonInfo) {
        let source = $('#pokemon').html()
        let template = Handlebars.compile(source)
        let newHTML = template(pokemonInfo)
        $('.pokemon-container').empty().append(newHTML)
    }

    _renderMeat(meatText) {
        $('.meat-container').empty().append(`<div class="meat-text"> About me: <br> ${meatText} </div>`)
                 
    }

    render(data) {
        this._renderUsers(data.mainUser)
        this._renderFriends(data.friends)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.aboutme)
    }
}


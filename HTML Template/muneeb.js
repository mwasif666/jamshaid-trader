var allCategories = [
    {
        name: 'mix',
        price: '25$',
        backgroundimg: 'https://watermark.lovepik.com/photo/20211208/large/lovepik-fruits-and-vegetables-poster-picture_501615020.jpg'
    },
    {
        name: 'mix',
        price: '25$',
        backgroundimg: 'https://t3.ftcdn.net/jpg/06/09/78/34/360_F_609783461_HfpzFpb908IhXOR1PSKXGChoZZhXzRBH.jpg'
    },
    {
        name: 'mix',
        price: '25$',
        backgroundimg: 'https://lh3.googleusercontent.com/proxy/UuRkx_fQm07BmUAavqzWzr87XTgIPA2-z4HZAWR0z2VWk7oogAVcX4LN10UrDCST3R5hBovdeV5D1X10uhXT6oLFilHUwsYZKaAxog90c1JyN5oZKw16oZreSF6fEUhJTQF6LSftGZAagO3ODnM'
    }
]

var cards_sec = document.getElementById('cards-sec')

function createCards() {
    allCategories.forEach(function(category) {
        var card = document.createElement('div')
        card.setAttribute('class', 'main-card')

        var img = document.createElement('img')
        img.src = category.backgroundimg

        var name = document.createElement('h4')
        var nameText = document.createTextNode(category.name)
        name.appendChild(nameText)

        var price = document.createElement('h6')
        var priceText = document.createTextNode(category.price)
        price.appendChild(priceText)

        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(price)

        cards_sec.appendChild(card)
    })
}

createCards()
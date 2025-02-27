// ARRAY OF OBJECTS

const cardData = [
    {
        cardPicture: "https://img.drz.lazcdn.com/static/pk/p/b2b4ff4d5a37c4b325f9527e037120c1.jpg_400x400q80.jpg_.webp",
        cardTitle: "5W- Portable Hook LED Bulb",
        cardPrice: 180,
        cardRating: 4.2,
        cardReviews: 116
    },
    {
        cardPicture: "https://img.drz.lazcdn.com/static/pk/p/b2b4ff4d5a37c4b325f9527e037120c1.jpg_400x400q80.jpg_.webp",
        cardTitle: "10W- Portable Hook LED Bulb",
        cardPrice: 280,
        cardRating: 4.5,
        cardReviews: 16
    },
    {
        cardPicture: "https://img.drz.lazcdn.com/static/pk/p/b2b4ff4d5a37c4b325f9527e037120c1.jpg_400x400q80.jpg_.webp",
        cardTitle: "15W- Portable Hook LED Bulb",
        cardPrice: 540,
        cardRating: 4.1,
        cardReviews: 158
    },
    {
        cardPicture: "https://img.drz.lazcdn.com/static/pk/p/b2b4ff4d5a37c4b325f9527e037120c1.jpg_400x400q80.jpg_.webp",
        cardTitle: "1000W- Portable Hook LED Bulb",
        cardPrice: 920,
        cardRating: 3.4,
        cardReviews: 8
    },
]

cardData.map((i, ind) => console.log(
    `
    Name: ${i.cardTitle},
    Price: ${i.cardPrice}
    `
))

let cardRatings = cardData.filter((i) => i.cardRating >= 4.2)

console.log(cardRatings, "cardRatings")


cardRatings.map((i) => console.log(i.cardTitle, i.cardPrice))
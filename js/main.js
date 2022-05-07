//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
let newsKey = config.NEWS_API_KEY;

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://gnews.io/api/v4/search?q=${choice}&token=${newsKey}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.title').innerHTML = data.articles[0].title
        document.querySelector('.card-image').src = data.articles[0].image
        document.querySelector('.excerpt').innerHTML = data.articles[0].content
        document.querySelector('.news-date').innerHTML = data.articles[0].publishedAt

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
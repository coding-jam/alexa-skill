const request = require('request')

const REQUEST_OPTIONS = {
  url: 'http://codingjam.it/wp-json/wp/v2/posts/',
  json: true
}

const getTitles = () => new Promise((resolve, reject) => {
  request(REQUEST_OPTIONS, (error, response, body) => {
    if (error) {
      reject(error)
      return
    }

    const titles = body.map(item => {
      return item.title.rendered
    })

    resolve(titles)
  })
})

module.exports = {
  getTitles
}

const request = require('request')
const cheerio = require('cheerio')

const URL = 'http://codingjam.it/'

const getPost = url => new Promise((resolve, reject) => {
  request(url, function (error, response, html) {
    if (error) {
      reject(error)
      return
    }

    const $ = cheerio.load(html)

    const text =
        $('.entry-content')
          .first()
          .text()
          .replace(/\r?\n|\r/g, '')
          .replace(/\t/g, '')

    const title = $('.entry-title').first().text()

    resolve({
      text,
      title
    })
  })
})

const getTitles = () => new Promise((resolve, reject) => {
  request(URL, function (error, response, html) {
    if (error) {
      reject(error)
      return
    }

    const $ = cheerio.load(html)

    const titles = $('.entry-title').map((i, elem) => {
      return cheerio.load(elem).text()
    }).get()

    resolve(titles)
  })
})

const getFirstPostUrl = () => new Promise((resolve, reject) => {
  request(URL, function (error, response, html) {
    if (error) {
      reject(error)
      return
    }

    const $ = cheerio.load(html)

    const anchor = $('.entry-title a').first()

    resolve(anchor.attr('href'))
  })
})

const getFirtPost = () => getFirstPostUrl().then(getPost)

module.exports = {
  getFirtPost,
  getTitles
}

Cypress.Commands.add('randomString', () => {
  let stablePart = 'qwerty'
  let randomPart = '';
  let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 10; i++){
    randomPart += randomChars.charAt(
    Math.floor(Math.random() * randomChars.length));
  }
  return stablePart + randomPart;
})

Cypress.Commands.add('expectPostIdAsc', (response) => {
  let copyOfIdArray = []
  for (let i = 0; i < response.body.length; i++){
    copyOfIdArray.push(response.body[i].id)
  }
  let sortCopyOfIdArray = copyOfIdArray.sort()
  expect(copyOfIdArray).to.eq(sortCopyOfIdArray)
})

Cypress.Commands.add('expectEqualData', (data) => {
  expect(data.name).to.eq('Chelsey Dietrich')
  expect(data.username).to.eq('Kamren')
  expect(data.email).to.eq('Lucio_Hettinger@annie.ca')
  expect(data.address.street).to.eq('Skiles Walks')
  expect(data.address.suite).to.eq('Suite 351')
  expect(data.address.city).to.eq('Roscoeview')
  expect(data.address.zipcode).to.eq('33263')
  expect(data.address.geo.lat).to.eq('-31.8129')
  expect(data.address.geo.lng).to.eq('62.5342')
  expect(data.phone).to.eq('(254)954-1289')
  expect(data.website).to.eq('demarco.info')
  expect(data.company.name).to.eq('Keebler LLC')
  expect(data.company.catchPhrase).to.eq('User-centric fault-tolerant solution')
  expect(data.company.bs).to.eq('revolutionize end-to-end systems')
})

Cypress.Commands.add('expectBookIdAsc', (result) => {
  let copyOfIdArray = []
  for (let i = 0; i < result.catalog.book.length; i++){
    copyOfIdArray.push(result.catalog.book[i].$.id)
  }
  let sortCopyOfIdArray = copyOfIdArray.sort()
  expect(copyOfIdArray).to.eq(sortCopyOfIdArray)
})

Cypress.Commands.add('getBookWithMinPrice', (result) => {
  let minPrice = parseFloat(result.catalog.book[0].price[0])
  let index = 0
  for (let i = 1; i < result.catalog.book.length; i++){
    let priceValue = parseFloat(result.catalog.book[i].price[0])
    if (priceValue < minPrice){
      index = i
    }
  }
  return result.catalog.book[index]
})

Cypress.Commands.add('getBookWithMaxPrice', (result) => {
  let maxPrice = parseFloat(result.catalog.book[0].price[0])
  let index = 0
  for (let i = 1; i < result.catalog.book.length; i++){
    let priceValue = parseFloat(result.catalog.book[i].price[0])
    if (priceValue > maxPrice) {
      index = i
    }
  }
  return result.catalog.book[index]
})
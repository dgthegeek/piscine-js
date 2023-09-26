function citiesOnly(arrObj) {
    let cityElement = []
    arrObj.forEach(el => {
        cityElement.push(el['city'])
    });
    return cityElement
}

console.log(citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ]))
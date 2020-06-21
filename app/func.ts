import 'source-map-support/register'

function makeAnError () {
  console.log('Here here here')
  return 'this is right'
  // throw Error('This is wrong')
}

makeAnError()

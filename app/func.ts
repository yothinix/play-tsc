import 'source-map-support/register'

function makeAnError () {
  throw Error('This is wrong')
}

makeAnError()

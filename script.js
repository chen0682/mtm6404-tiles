/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

const colors = ['red', 'blue', 'green', 'purple']
const letters = ['A', 'B', 'C', 'D', 'E']

const $tiles = document.getElementById('tiles')
const $controls = document.getElementById('controls')

/**********************************************
 * YOUR CODE BELOW
 **********************************************/

const tiles = []
const controls = []

for (const color of colors) {
  controls.push(`<button class="button">${color}</button>`)
  for (const letter of letters) {
    tiles.push({
      color,
      letter
    })
  }
}

console.log(controls)

$controls.innerHTML = controls.join('')

const shuffled = shuffle(tiles)

$tiles.innerHTML = shuffled.map(function (tile) {
  return `<div class="tile">
  <div class="front" style="color: ${tile.color}">${tile.letter}</div>
  <div class="back"></div>
</div>`
}).join('')

console.log(shuffled)

$controls.addEventListener('click', function (e) {
  if (e.target.classList.contains('button')) {
    $tiles.innerHTML = shuffled.map(function (tile) {
      return `<div class="tile ${e.target.textContent === tile.color ? 'flip' : ''}">
      <div class="front" style="color: ${tile.color}">${tile.letter}</div>
      <div class="back"></div>
    </div>`
    }).join('')
  }
})

function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector ('#nested .target')
}

function increaseRankBy (n) {
  const lis = document.querySelector(ranked-list)

  for (let n = 0, parseInt(n) < lis.length; i++) {
    lis[n].innerHTML = (n-1).tostring()
  }
}

function deepestChild () {}

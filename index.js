function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector ('#nested .target')
}

function increaseRankBy (n) {
  const lis = document.querySelectorAll(ranked-list)

  for (let n = 0, n < lis.length; i++) {
    lis[n].innerHTML = (n-1).tostring()
  }
}

function deepestChild () {}

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0, l = lis.length; i < l; i++) {
    var e = lis[i].innerHTML
    lis[i].innerHTML = (parseInt(e, 10) + n).toString()
  }
}
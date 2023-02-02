let title = document.title
let variable = '$markov->'
let arr = ['About','Info','Location','Experience','Education','Skills']

let titleJS = () => {
  document.title = variable + arr[pageIndex];
}
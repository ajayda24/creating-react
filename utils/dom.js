const root = document.getElementById('root')

export const create = (element, id) => {
  var el = document.createElement(element)
  if (id) el.setAttribute('id', id)
  return el
}
export function add() {
  var args = arguments
  for (var i = 1; i < args.length; i++) {
    args[0].appendChild(args[i])
  }
}
export const rem = (where) => {
  var args = arguments
  for (var i = 1; i <= args.length; i++) {
    where.removeChild(args[i])
  }
}


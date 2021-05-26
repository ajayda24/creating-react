// import {screen} from '../script.js'



const useState = (defaultValue) => {
  let value = defaultValue
  const getValue = () => {
    return value
  }
  const setValue = (newValue,updatingDom) => {
    value = newValue
    updatingDom()
  }
  return [getValue, setValue]
}

export default useState
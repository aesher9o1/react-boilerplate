export const isEmailValid = (str) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(str.toLowerCase())
}

export const isPhoneValid = (str) => {
  const re = /^[0-9]{10}$/
  return re.test(str)
}

export const isNameValid = (str) => {
  const re = /^[a-zA-Z ]+$/
  return re.test(str.toLowerCase())
}

export const isCountryCodeValid = (str) => {
  const re = /^(\+?\d{1,3}|\d{1,4})$/
  return re.test(str)
}

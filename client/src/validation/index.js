const regExp = (regular, string) => {
  return regular.test(string)
}

const formValid = (obj) => {
  let validArray = [];

  if (obj.name.length < 3 || !regExp(/^[A-zА-яЁё]+$/, obj.name)) {
    validArray.push(0)
  } else {
    validArray.push(1)
  }

  if (obj.surname.length < 3 || !regExp(/^[A-zА-яЁё]+$/, obj.surname)) {
    validArray.push(0)
  } else {
    validArray.push(1)
  }

  if (obj.password.length < 6 || !regExp(/(?=.*[0-9])[0-9a-zA-Z!@#$%^&*]{6,}/g, obj.password)) {
    validArray.push(0)
  } else {
    validArray.push(1)
  }

  if (obj.password !== obj.confirmPass) {
    validArray.push(0)
  } else {
    validArray.push(1)
  }

  if (!regExp(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g, obj.email)) {
    validArray.push(0)
  }
  else {
    validArray.push(1)
  }

  return validArray
}

export default formValid

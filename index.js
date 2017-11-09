// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  Object.assign(driver, {key: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return driver.key = value
}

function deleteFromDriverByKey(driver, key) {
  return delete driver.key
}

function destructivelyDeleteFromdriverByKey(driver, key) {
  return delete driver.key
}
function validatePIN (pin) {
  pin = /^(\d{4}|\d{6})$/.test(pin);
  return pin;
}
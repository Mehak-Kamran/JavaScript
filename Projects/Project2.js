//bmi_calculator
form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  height = parseInt(document.querySelector('#height').value);
  weight = parseInt(document.querySelector('#weight').value);
  result = document.querySelector('#results');

  if (height == 0 || height == '' || isNaN(height)) {
    result.innerHTML = 'Please enter valid height';
  }
 else if (weight == 0 || weight == '' || isNaN(weight)) {
    result.innerHTML = 'Please enter valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

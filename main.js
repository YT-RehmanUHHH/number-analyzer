// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  document.getElementById("prime").innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.

function getSign(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

function evenOrOdd(num) {
  if (num % 2 == 1) {
    return "Odd";
  } else if (num % 2 == 0) {
    return "Even";
  } else if (num % 2 == -1) {
    return "Odd";
  } else {
    return "Even";
  }
}

function multipleOf10(num) {
  if (num % 10 == 0) {
    return "Yes";
  } else {
    return "No";
  }
}

function numDigits(num) {
  if (num > 0 && num < 10) {
    return "1";
  } else if (num >= 10 && num < 100) {
    return "2";
  } else if (num == 0) {
    return "1";
  } else if (num < 0 && num > -10) {
    return "1";
  } else if (num <= -10 && num > -100) {
    return "2";
  } else {
    return "3";
  }
}

//**BONUS**//
function isPrime(num) {
  result = "prime";
  if (num > 0) {
    for (x = 2; x <= num - 1; x++) {
      if (num % x == 0) {
        result = "not prime";
        break;
      }
    }
  }
  if (result == "prime") {
    return "Prime";
  } else {
    return "Not Prime";
  }
}

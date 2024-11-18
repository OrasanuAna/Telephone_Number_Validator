document.getElementById("check-btn").addEventListener("click", function () {
  const userInput = document.getElementById("user-input").value.trim();
  const resultsDiv = document.getElementById("results-div");
  const country = document.getElementById("country-select").value;

  // Verifică dacă câmpul de introducere este gol
  if (!userInput) {
    alert("Introduceți un număr de telefon pentru a valida.");
    return;
  }

  // Validare număr de telefon
  const isValid = validatePhoneNumber(userInput, country);

  // Actualizare rezultat
  if (isValid) {
    resultsDiv.textContent = `Număr valid (${country.toUpperCase()}): ${userInput}`;
    resultsDiv.style.color = "green"; // Afișează rezultatul în verde pentru valid
  } else {
    resultsDiv.textContent = `Număr invalid (${country.toUpperCase()}): ${userInput}`;
    resultsDiv.style.color = "red"; // Afișează rezultatul în roșu pentru invalid
  }
});

// Buton de ștergere pentru resetarea câmpurilor de introducere și rezultate
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("user-input").value = "";
  document.getElementById("results-div").textContent = "";
});

// Funcția de validare a numărului de telefon în funcție de țară
function validatePhoneNumber(number, country) {
  let pattern;

  // Selectăm expresia regulată în funcție de țara selectată
  if (country === "us") {
    // Expresie regulată pentru numerele din SUA
    pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  } else if (country === "ro") {
    // Expresie regulată pentru numerele din România (de ex. 07xx xxx xxx)
    pattern = /^(?:\+4|04)?07[0-8]\d{7}$/;
  } else {
    // În caz că țara nu este suportată
    alert("Țara selectată nu este suportată pentru validare.");
    return false;
  }

  // Returnează rezultatul validării
  return pattern.test(number);
}

let current = 1;

function changePattern() {
  current++;
  if (current > 5) current = 1;
  document.getElementById("patternText").innerText = "Pattern: " + current;
}

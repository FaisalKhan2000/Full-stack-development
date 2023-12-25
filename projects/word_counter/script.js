let textArea = document.getElementById("textBox");

textArea.addEventListener("input", function () {
  let text = this.value;
  // characters count
  let char = text.length;
  document.getElementById("charsCount").textContent = char;

  // words count
  text = text.trim();
  let words = text.split(" "); // converting the text to array
  let cleanList = words.filter(function (word) {
    return word !== "";
  });
  document.getElementById("wordsCount").textContent = cleanList.length;
});

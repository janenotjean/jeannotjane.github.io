// Standalone Web App
var urls = [
  "https://docs.google.com/forms/d/e/1FAIpQLSebaKeMLLR5TSDJeu_paTwDBjRf9VaFeBRJqJZej1XUkCxtYw/viewform?&entry.1535369965=ABC001",
  "https://docs.google.com/forms/d/e/1FAIpQLSebaKeMLLR5TSDJeu_paTwDBjRf9VaFeBRJqJZej1XUkCxtYw/viewform?&entry.1535369965=ABC002 ","https://docs.google.com/forms/d/e/1FAIpQLSebaKeMLLR5TSDJeu_paTwDBjRf9VaFeBRJqJZej1XUkCxtYw/viewform?&entry.1535369965=ABC003","https://docs.google.com/forms/d/e/1FAIpQLSebaKeMLLR5TSDJeu_paTwDBjRf9VaFeBRJqJZej1XUkCxtYw/viewform?&entry.1535369965=ABC004","https://docs.google.com/forms/d/e/1FAIpQLSebaKeMLLR5TSDJeu_paTwDBjRf9VaFeBRJqJZej1XUkCxtYw/viewform?&entry.1535369965=ABC005","https://docs.google.com/forms/d/e/1FAIpQLSebaKeMLLR5TSDJeu_paTwDBjRf9VaFeBRJqJZej1XUkCxtYw/viewform?&entry.1535369965=ABC006","https://docs.google.com/forms/d/e/1FAIpQLSebaKeMLLR5TSDJeu_paTwDBjRf9VaFeBRJqJZej1XUkCxtYw/viewform?&entry.1535369965=ABC007","https://docs.google.com/forms/d/e/1FAIpQLSebaKeMLLR5TSDJeu_paTwDBjRf9VaFeBRJqJZej1XUkCxtYw/viewform?&entry.1535369965=ABC008","https://docs.google.com/forms/d/e/1FAIpQLSebaKeMLLR5TSDJeu_paTwDBjRf9VaFeBRJqJZej1XUkCxtYw/viewform?&entry.1535369965=ABC009","https://docs.google.com/forms/d/e/1FAIpQLSebaKeMLLR5TSDJeu_paTwDBjRf9VaFeBRJqJZej1XUkCxtYw/viewform?&entry.1535369965=ABC010"
];

// Keep track of next index globally
var currentIndex = 0;

function doGet(e) {
  var response = {};

  if (currentIndex >= urls.length) {
    response.error = "All tags have been claimed";
  } else {
    response.url = urls[currentIndex];
    currentIndex++; // Move to the next URL for the next click
  }

  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify(response));
  return output;
}


























































// Split each new sentence to a separate line in the paragraph text. A sentence can be assumed to be a string of text terminated with a period (.)
const $paragraph = document.querySelector("p");
$paragraph.innerHTML = $paragraph.innerHTML.split(/\.[^.|<]/).join(".</p><p>") + "</p>";

const $paragraph = document.querySelector("p");
$paragraph.innerHTML = $paragraph.innerHTML
  .split(" ")
  .map((i) =>
    i.length > 8 ? `<span style="background-color:yellow">${i}</span>` : i
  ).join(" ");

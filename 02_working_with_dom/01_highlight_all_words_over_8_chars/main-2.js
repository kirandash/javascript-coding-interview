const $paragraph = document.querySelectorAll("p");
[...$paragraph].forEach(i =>
  i.innerHTML = i.innerHTML
    .split(" ")
    .map((i) =>
      i.length > 8 ? `<span style="background-color:yellow">${i}</span>` : i
    )
    .join(" ")
);

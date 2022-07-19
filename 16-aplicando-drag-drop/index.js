const paragraphs = document.querySelectorAll(".paragraph");
const sections = document.querySelectorAll(".section");
const bin = document.getElementById("bin");

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("dragstart", (event) => {
    paragraph.classList.add("dragging");
    event.dataTransfer.setData("id", paragraph.id);
  });

  paragraph.addEventListener("dragend", (event) => {
    paragraph.classList.remove("dragging");
  });
});

sections.forEach((section) => {
  section.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  section.addEventListener("drop", (event) => {
    const paragraph_id = event.dataTransfer.getData("id");
    const paragraph = document.getElementById(paragraph_id);
    section.appendChild(paragraph);
  });
});

bin.addEventListener("dragover", (event) => {
  event.preventDefault();
});

bin.addEventListener("drop", (event) => {
  const paragraph_id = event.dataTransfer.getData("id");
  const paragraph = document.getElementById(paragraph_id);
  bin.removeChild(paragraph);
});

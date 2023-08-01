function myToggleFunction() {
    let content = document.getElementById("myToggleShowContent");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }
function showPdf(id) {
  let pdfViewer = document.getElementById("pdf-viewer");
  if (pdfViewer != null && pdfViewer != undefined) {
    let src = "https://drive.google.com/file/d/" + id + "/preview?hl=en";
    pdfViewer.contentWindow.location.replace(src);
    document.body.style = "overflow:hidden;";
    document.getElementsByClassName("home-top")[0].style.display = "none";
    document.getElementById("popup").style.display = "block";
  }
}

function closePdf() {
  if (isPdfOpen()) {
    document.body.style = "overflow:visible;";
    document.getElementsByClassName("home-top")[0].style.display = "block";
    document.getElementById("popup").style.display = "none";
    document
      .getElementById("pdf-viewer")
      .contentWindow.location.replace("about:blank");
  }
}

function isPdfOpen() {
  let pdfViewer = document.getElementById("popup");
  if (
    pdfViewer != null &&
    pdfViewer != undefined &&
    pdfViewer.style.display == "block"
  )
    return true;
  return false;
}

document.addEventListener("keydown", ({ key }) => {
  if (key === "Escape") {
    if (isPdfOpen()) closePdf();
  }
});

var isChecking = !1;
function check() {
  (isChecking = !0),
    setTimeout(function () {
      void 0 === window.google_jobrunner &&
        ((document.getElementById("viewer").innerHTML =
          ' <section class="blog-area bg-color3"> <div class="blog-wrapper section-spacing"> <div class="container"> <div class="error-page text-center"> <p style="font-size:48px;color:red;"><i class="fa fa-exclamation-circle"></i></p><p>Please disable your Adblock or whitelist our website to view this document.</p><p>Your support helps us to keep this website up and running.<br/> After disabling the adblock, you can reload the page and continue to view the document. </p><p style="cursor:pointer;" onclick="window.location.reload(false);" class="btn-style2 btn btn-primary">Reload</p></div></div></div></section>'),
        (isChecking = !1));
    }, 1e4);
}
function view(e) {
    e=e.replaceAll("=@&4EBWr36X?zff$",'6').replaceAll("5u-T*ZB",'4').replaceAll("nVzd+","9").replaceAll("=#+aT=PHF$zY6#qXC","2").replaceAll("2P7*Re","7").replaceAll("3?X-","1").replaceAll("!3f4QSye6-","8").replaceAll("=z!-#-#5bKpk^-Z^","3").replaceAll("vmt^AVdJm","5").replaceAll("$rpk93W7@ADcD_HX","0");
  null != document.getElementById("document") &&
    ((document.getElementById("document").src =
      "https://drive.google.com/file/d/" + e + "/preview"),
    (document.getElementById("document").height = window.innerHeight)),
    (document.getElementById("viewer").style = "padding-bottom:30px"),
    document.getElementById("viewer").scrollIntoView(),
    isChecking || check();
}
window.onload = check();
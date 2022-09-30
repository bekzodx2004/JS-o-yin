function ishla() {
  min.innerText = "00";
  if (sec.innerText == "00") {
    sec.innerText = 60;
  }
  son = sec.innerText;
  son--;
  sec.innerText = son;
  t = setTimeout("ishla()", 1000);
  boshla.style.display = "none";
  circle.style.display = "block";
  if (son == "00") {
    circle.style.display = "none";
    boshla.style.display = "block";
    clearTimeout(t);
    sec.innerText = "00";
    natija.innerText = "Siz " + ball + " to'pladingiz !";
  }
  event.preventDefault();
}
massiv = [];
for (i = 10; i <= 90; i++) {
  massiv.push(i);
}
ball = 0;
function bosildi() {
  w = Math.random() * 100;
  w = Math.trunc(w + 10);
  t = Math.random() * 100;
  t = Math.trunc(t);
  l = Math.random() * 100;
  l = Math.trunc(l);
  if (t > 80)  t = 80;
  if (l > 80)  l = 80;
  
  circle.style.width = w + "px";
  circle.style.height = w + "px";
  circle.style.top = t + "%";
  circle.style.left = l + "%";

  ball++;
}

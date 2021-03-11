function Validade(email) {
  var allowed_emails = [
    "edsfr.tur19@uea.edu.br",
    "hgvn.eng19@uea.edu.br",
    "jcss.tur18@uea.edu.br",
    "pvads.eng19@uea.edu.br",
    "sjvb.cic18@uea.edu.br",
    "tsds.tur19@uea.edu.br", "000"]
  if (allowed_emails.includes(email)){
    window.open("https://repl.it/@Paguiar735/Semana2Higor#main.py", "_self");
    return "E-mail Válido";
  }
  else {
    return "E-mail Inválido";
  }
}

function Email_validation(email) {
  var email = document.getElementById("myText").value;
  document.getElementById("result").innerHTML = Validade(email);
}

function Fill_table(email) {
  var email = document.getElementById("myText").value;
  document.getElementById("result").innerHTML = Validade(email);
}

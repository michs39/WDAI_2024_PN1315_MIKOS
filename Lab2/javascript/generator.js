function generate() {
  usedCharacters = "0123456789qwertyuiopasdfghjklzxcvbnm";
  capitalLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  specialCharacters = "\"'\\;:`~!@#$%^&*()-=_+[]{},.<>/?|";

  min = document.getElementById("minNumOfCharacters").value;
  max = document.getElementById("maxNumOfCharacters").value;

  if (document.getElementById("capitalCharacters").checked) {
    usedCharacters = usedCharacters + capitalLetters;
  }
  if (document.getElementById("specialCharacters").checked) {
    usedCharacters = usedCharacters + specialCharacters;
  }

  numOfCharacters = 1 * min + Math.random() * (max - min + 1);
  numOfCharacters = Math.floor(numOfCharacters);

  varietyOfCharacters = usedCharacters.length;

  password = "";

  while (numOfCharacters > 0) {
    password =
      password +
      usedCharacters[Math.floor(Math.random() * varietyOfCharacters)];
    numOfCharacters--;
  }

  alert(password);
}

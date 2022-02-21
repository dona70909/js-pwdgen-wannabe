/* User name  */
const userName = prompt("Inserisci il tuo nome");
document.getElementById('nameUser').innerHTML = userName;

/* surname */
const surnameUser = prompt("Inserisci il tuo cognome");
document.getElementById('surname').innerHTML =  surnameUser;

/* colour */
const favouriteColor = prompt("Inserisci il tuo colore preferito");
document.getElementById('color').innerHTML =  favouriteColor;

/* concatenazione stringhe */
const userPassword = (userName + surnameUser + favouriteColor);
document.getElementById('password').innerHTML =  userPassword;
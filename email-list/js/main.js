// ^ RACCOLTA DATI
const emailList = document.getElementById("list-group-email");

// console.log(emailList);

// ^ SVOLGIMENTO
apiUri = "https://flynn.boolean.careers/exercises/api/random/mail";

let email = [];

for (let i = 0; i < 10; i++) {
  axios.get(apiUri).then((response) => {
    const currentEmail = response.data.response;
    email.push(currentEmail);
  });
}
console.log(email);

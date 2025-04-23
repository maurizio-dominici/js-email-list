// ^ RACCOLTA DATI
const emailList = document.getElementById("list-group-email");
let textList = "";
// console.log(emailList);

// ^ SVOLGIMENTO
apiUri = "https://flynn.boolean.careers/exercises/api/random/mail";

let email = [];

for (let i = 0; i < 10; i++) {
  axios.get(apiUri).then((response) => {
    const currentEmail = response.data.response;

    email.push(currentEmail);

    if (email.length === 10) {
      emailList.innerHTML = `
            <ul class="list-group">
             <li class="list-group-item">${email[0]}</li>
             <li class="list-group-item">${email[1]}</li>
             <li class="list-group-item">${email[2]}</li>
             <li class="list-group-item">${email[3]}</li>
             <li class="list-group-item">${email[4]}</li>
             <li class="list-group-item">${email[5]}</li>
             <li class="list-group-item">${email[6]}</li>
             <li class="list-group-item">${email[7]}</li>
             <li class="list-group-item">${email[8]}</li>
             <li class="list-group-item">${email[9]}</li>
            </ul>
        `;

      //   console.log(email);
    }
  });
}

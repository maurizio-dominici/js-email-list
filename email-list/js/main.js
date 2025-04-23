// ^FUNZIONI
const reloadPage = () => {
  location.reload();
};
// ^ RACCOLTA DATI
const emailList = document.getElementById("list-group-email");
const buttonRef = document.getElementById("buttonrefresh");

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
             <li class="list-group-item list-group-item-primary">${email[0]}</li>
             <li class="list-group-item list-group-item-secondary">${email[1]}</li>
             <li class="list-group-item list-group-item-success">${email[2]}</li>
             <li class="list-group-item list-group-item-danger">${email[3]}</li>
             <li class="list-group-item list-group-item-warning">${email[4]}</li>
             <li class="list-group-item list-group-item-warning">${email[5]}</li>
             <li class="list-group-item list-group-item-danger">${email[6]}</li>
             <li class="list-group-item list-group-item-success">${email[7]}</li>
             <li class="list-group-item list-group-item-secondary">${email[8]}</li>
             <li class="list-group-item list-group-item-primary">${email[9]}</li>
            </ul>
        `;

      buttonRef.innerHTML = `
            <button type="button" class="btn btn-light my-3">
                <i class="fa-solid fa-arrows-rotate"></i>
            </button>
        `;

      buttonRef.addEventListener("click", reloadPage);
      console.log(email);
    }
  });
}

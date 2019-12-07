const crmBackendUrl = "http://localhost:4001/customers";
window.onload = () => {
    fetch(crmBackendUrl.concat("/12345678910"))
         .then( res => res.json())
         .then( customer => {
              document.querySelector("#customer")
                  .innerText = customer.fullname;
         });
}

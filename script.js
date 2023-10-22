const url = "https://services-to-work-api-production.up.railway.app";
const contact = document.getElementById("contacts");

function deleteById(id) {
  const response = fetch(url + `/Contact/${id}`, { method: "delete" });
  return response.then(() => {
    alert("User deleted with success")
    location.reload(true)
  })
}

async function getAllContacts() {
  const response = await fetch(url + "/Contact");
  const data = await response.json();
  const contactList = data;

  if (contactList?.length > 0) {
    const li = document.createElement("li");
    const button = document.createElement("button");

    contactList?.map((item) => {
      contact.innerHTML += `
            <li>
            ${item.name}
                <button onclick="deleteById('${item.id}')" class="btn">Deletar</button>
            </li>`;
    });
  } else {
    contact.innerHTML = "Lista de contatos vazia";
  }
}




getAllContacts();

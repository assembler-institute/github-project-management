import users from "./__mocks__/users";

function initTable() {
  // TODO: add issue to fetch from a real API
  users.forEach((user) => {
    const currentTableNode = document.createElement("tr");

    currentTableNode.innerHTML = `
    <td class="border px-4 py-2">${user.name}</td>
    <td class="border px-4 py-2">${user.email}</td>
    `;
    document.getElementById("user-table-data").appendChild(currentTableNode);
  });
}

initTable();
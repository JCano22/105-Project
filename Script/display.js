function displayUsers(usersRa){
    let row = "";

    for(let i = 0; i < usersRa.length; i++){
        let user = usersRa[i];
        console.log(user);
        
        row = `
        <tr>
            <td>${user.email}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phoneNum}</td>
            <td>${user.paymentMethod}</td>
            <td style="background-color: ${user.color};"></td>
        </tr>
        `;
    
        $("#usersTable").append(row);
    }
}

function init(){
    let usersList = readUsers();
    displayUsers(usersList);
}
window.onload=init;
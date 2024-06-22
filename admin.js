// $(document).ready(function() {
//     fetchUsers();

//     function fetchUsers() {
//         $.ajax({
//             url: '/admin/users',
//             method: 'GET',
//             success: function(users) {
//                 let userTableBody = $('#userTable tbody');
//                 userTableBody.empty();
//                 users.forEach(user => {
//                     let userRow = `
//                         <tr>
//                             <td>${user.id}</td>
//                             <td>${user.username}</td>
//                             <td>${user.email}</td>
//                             <td>${user.role}</td>
//                             <td>
//                                 <button class="btn btn-sm btn-primary edit-user" data-id="${user.id}">Edit</button>
//                                 <button class="btn btn-sm btn-danger delete-user" data-id="${user.id}">Delete</button>
//                             </td>
//                         </tr>
//                     `;
//                     userTableBody.append(userRow);
//                 });

//                 $('.edit-user').on('click', handleEditUser);
//                 $('.delete-user').on('click', handleDeleteUser);
//             },
//             // error: function() {
//             //     alert('Error fetching users');
//             // }
//         });
//     }

//     function handleEditUser() {
//         let userId = $(this).data('id');
//         let username = prompt('Enter new username:');
//         let email = prompt('Enter new email:');
//         let role = prompt('Enter new role:');

//         $.ajax({
//             url: `/admin/user/${userId}`,
//             method: 'PUT',
//             contentType: 'application/json',
//             data: JSON.stringify({ username, email, role }),
//             success: function() {
//                 alert('User updated successfully');
//                 fetchUsers();
//             },
//             error: function() {
//                 alert('Error updating user');
//             }
//         });
//     }

//     function handleDeleteUser() {
//         let userId = $(this).data('id');

//         if (confirm('Are you sure you want to delete this user?')) {
//             $.ajax({
//                 url: `/admin/user/${userId}`,
//                 method: 'DELETE',
//                 success: function() {
//                     alert('User deleted successfully');
//                     fetchUsers();
//                 },
//                 error: function() {
//                     alert('Error deleting user');
//                 }
//             });
//         }
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    const userTableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Function to create a table row for each user
    users.forEach(user => {
        const row = userTableBody.insertRow();

        const cellId = row.insertCell(0);
        const cellUsername = row.insertCell(1);
        const cellEmail = row.insertCell(2);
        const cellRole = row.insertCell(3);
        const cellActions = row.insertCell(4);

        cellId.innerHTML = user.id;
        cellUsername.innerHTML = user.username;
        cellEmail.innerHTML = user.email;
        cellRole.innerHTML = user.role;
        cellActions.innerHTML = `<button class="btn btn-danger btn-sm delete-btn" data-id="${user.id}">Delete</button>`;
    });

    // Add event listener for delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const userId = this.getAttribute('data-id');
            const updatedUsers = users.filter(user => user.id != userId);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            location.reload();  // Refresh the page to update the table
        });
    });
});

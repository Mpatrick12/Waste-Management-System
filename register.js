document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = {
        username: document.getElementById('Username').value,
        email: document.getElementById('Email').value,
        password: document.getElementById('Password').value,
        role: document.getElementById('Role').value,
    };

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
            alert('User registered successfully');
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        alert('Error: Could not register user');
    }
});

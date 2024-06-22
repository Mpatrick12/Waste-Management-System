// document.addEventListener('DOMContentLoaded', () => {
//     const scheduleForm = document.getElementById('setschedule');
//     const repeatSelect = document.getElementById('repeat');
//     const biweeklySection = document.querySelector('.biweekly');
//     const addProjectBtn = document.getElementById('add-project-btn');
//     const saveBtn = document.getElementById('save');
//     const cancelBtn = document.getElementById('cancel');

//     // Show or hide biweekly section based on repeat select value
//     repeatSelect.addEventListener('change', (event) => {
//         if (event.target.value === 'biweekly') {
//             biweeklySection.style.display = 'block';
//         } else {
//             biweeklySection.style.display = 'none';
//         }
//     });

//     // Handle form submission
//     scheduleForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const formData = new FormData(scheduleForm);
//         const data = {
//             date: formData.get('due-date'),
//             time: formData.get('due-time'),
//             collector: formData.get('institute'),
//             repeat: formData.get('repeat')
//         };

//         if (data.repeat === 'biweekly') {
//             data.secondDate = formData.getAll('due-date')[1];
//             data.secondTime = formData.getAll('due-time')[1];
//         }

//         // Perform an action with the form data, e.g., send it to a server
//         console.log('Form Data:', data);

//         // Clear the form after submission
//         scheduleForm.reset();
//         biweeklySection.style.display = 'none';
//     });

//     // Handle save button click
//     saveBtn.addEventListener('click', (event) => {
//         event.preventDefault();
//         scheduleForm.submit();
//     });

//     // Handle cancel button click
//     cancelBtn.addEventListener('click', (event) => {
//         event.preventDefault();
//         scheduleForm.reset();
//         biweeklySection.style.display = 'none';
//     });

//     // Optionally, you can add other event listeners and functionality here
// });
    
// document.getElementById('setschedule').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const dueDate = document.getElementById('due-date').value;
//     const dueTime = document.getElementById('due-time').value;
//     const repeat = document.getElementById('repeat').value;

//     const schedule = {
//         dueDate,
//         dueTime,
//         repeat
//     };

//     let schedules = localStorage.getItem('schedules');
//     if (schedules) {
//         schedules = JSON.parse(schedules);
//     } else {
//         schedules = [];
//     }

//     schedules.push(schedule);
//     localStorage.setItem('schedules', JSON.stringify(schedules));

//     window.location.href = 'householdhome.html';
// });

document.getElementById('setschedule').addEventListener('submit', function(event) {
    event.preventDefault();

    const dueDate = document.getElementById('due-date').value;
    const dueTime = document.getElementById('due-time').value;

    const schedule = {
        dueDate,
        dueTime
    };

    let schedules = localStorage.getItem('schedules');
    if (schedules) {
        schedules = JSON.parse(schedules);
    } else {
        schedules = [];
    }

    schedules.push(schedule);
    localStorage.setItem('schedules', JSON.stringify(schedules));
    
    window.location.href = 'householdhome.html';
});

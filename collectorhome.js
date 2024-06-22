document.addEventListener('DOMContentLoaded', function() {
    const scheduleList = document.getElementById('schedule-list');
    const guide = document.querySelector('.guide');

    let schedules = localStorage.getItem('schedules');
    if (schedules) {
        schedules = JSON.parse(schedules);
    } else {
        schedules = [];
    }

    if (schedules.length > 0) {
        guide.style.display = 'none';
    }

    schedules.forEach((schedule, index) => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.style.display = 'flex';
        scheduleItem.style.flexDirection = 'column';
        scheduleItem.style.alignItems = 'flex-start';
        scheduleItem.style.padding = '10px';
        scheduleItem.style.marginBottom = '10px';
        scheduleItem.style.width = '70%';
        scheduleItem.style.margin = '10px auto';
        scheduleItem.style.border = '2px solid lightgray';
        scheduleItem.style.borderRadius = '5px';

        const title = document.createElement('h3');
        title.textContent = schedule.dueDate;
        title.style.color = 'green';
        title.style.marginBottom = '10px';

        const content = document.createElement('div');
        content.style.display = 'flex';
        content.style.justifyContent = 'space-between';
        content.style.alignItems = 'center';
        content.style.width = '100%';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.marginRight = '10px';
        checkbox.addEventListener('change', function() {
            schedules.splice(index, 1);
            localStorage.setItem('schedules', JSON.stringify(schedules));
            scheduleItem.remove();

            if (schedules.length === 0) {
                guide.style.display = 'block';
            }
        });

        const scheduleText = document.createElement('span');
        scheduleText.textContent = 'Waste Disposition Schedule';
        scheduleText.style.flex = '2';

        const timeText = document.createElement('span');
        timeText.textContent = schedule.dueTime;
        timeText.style.flex = '1';
        timeText.style.textAlign = 'right';
        timeText.style.marginRight = '10px';

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', function() {
            checkbox.checked = true;
            schedules.splice(index, 1);
            localStorage.setItem('schedules', JSON.stringify(schedules));
            scheduleItem.remove();

            if (schedules.length === 0) {
                guide.style.display = 'block';
            }
        });

        content.appendChild(checkbox);
        content.appendChild(scheduleText);
        content.appendChild(timeText);
        content.appendChild(doneButton);

        scheduleItem.appendChild(title);
        scheduleItem.appendChild(content);
        scheduleList.appendChild(scheduleItem);
    });
});
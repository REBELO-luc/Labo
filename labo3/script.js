let notificationId = 0;

function showNotification(type) {
    const text = document.getElementById('notification-text').value;

    if (text === '') {
        alert('Veuillez entrer du texte pour la notification.');
        return;
    }

    const container = document.getElementById('notification-container');
    
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = text;

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    container.appendChild(notification);

    const currentNotificationId = notificationId++;

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

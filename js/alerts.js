// js/alerts.js

document.addEventListener('DOMContentLoaded', function () {
    const alertsBlock = document.querySelector('.alerts__block');

    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.innerText = message;
        alertsBlock.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.classList.add('fade');
            setTimeout(() => {
                alertsBlock.removeChild(alertDiv);
            }, 500); // время для анимации исчезновения
        }, 3000); // время отображения уведомления
    }

    // Пример использования
    // showAlert('Это уведомление!', 'success');
});

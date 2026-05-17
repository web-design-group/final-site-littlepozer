// common.js
document.addEventListener('DOMContentLoaded', function() {
    // Бургер-меню
    const burger = document.querySelector('.burger');
    const sidePanel = document.querySelector('.side-panel');
    const overlay = document.querySelector('.panel-overlay');

    if (burger && sidePanel && overlay) {
        burger.addEventListener('click', function(e) {
            e.stopPropagation();
            sidePanel.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidePanel.classList.contains('active') ? 'hidden' : '';
        });

        overlay.addEventListener('click', function() {
            sidePanel.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        const links = sidePanel.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                sidePanel.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Модальное окно
    const modal = document.getElementById('bookingModal');
    const closeModal = document.querySelector('.close-modal');
    const bookingButtons = document.querySelectorAll('.booking-btn');

    function openModal() {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModalFunc() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    bookingButtons.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }
});
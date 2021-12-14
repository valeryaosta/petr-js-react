document.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    // Timer

    const deadline = '2021-12-25';

    function getTimeRemaining(endtime) {
        // 1 вычитаемое: количеcтво мс,кот б в конечном времени, до которого нужно дойти, досчитать;
        // 2 вычитаемок: тек дата в кол-ве мс;
        // t - разница между датами в кол-ве мс => после этого нужно превратить в кол-во дней, минут, секунд;
        const t = Date.parse(endtime) - Date.parse(new Date());
        // days кол-во суток до окончания даты
        const days = Math.floor(t / (1000 * 60 * 60 * 24));    // (1000 * 60 * 60 *24) - кол-во мс в сутках;
        // hours кол-во часов до таймера, хвостик в часах которого не хватает до полных суток
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));
        // minutes хвостик в минутах которого не хватает до полного часа
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            // если время вышло стоит прекратить таймер работать
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);


    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1 variant with add / remove classes
            modal.classList.add('show');
            modal.classList.remove('hide');

            // 2 variant with toggle
            // modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';
        })
    })

    function closeModal() {
        // 1 variant with add / remove classes
        modal.classList.remove('show');
        modal.classList.add('hide');

        // 2 variant with toggle
        // modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    })

})
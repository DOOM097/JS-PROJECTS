function timer(id, deadline) {
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.max(Math.floor((t / 1000) % 60), 0);
        const minutes = Math.max(Math.floor((t / 1000 / 60) % 60), 0);
        const hours = Math.max(Math.floor((t / (1000 * 60 * 60)) % 24), 0);
        const days = Math.max(Math.floor(t / (1000 * 60 * 60 * 24)), 0);

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function getZero(num) {
        return num < 10 ? '0' + num : num;
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const daysSpan = timer.querySelector('#days');
        const hoursSpan = timer.querySelector('#hours');
        const minutesSpan = timer.querySelector('#minutes');
        const secondsSpan = timer.querySelector('#seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                // Если время истекло, скрываем таймер и выводим сообщение
                timer.style.display = 'none';
                document.getElementById('timer-expired-message').style.display = 'block';
            } else {
                daysSpan.textContent = getZero(t.days);
                hoursSpan.textContent = getZero(t.hours);
                minutesSpan.textContent = getZero(t.minutes);
                secondsSpan.textContent = getZero(t.seconds);
            }
        }

        updateClock();
        const timeInterval = setInterval(updateClock, 1000);
    }

    setClock(id, deadline);
}

export default timer;

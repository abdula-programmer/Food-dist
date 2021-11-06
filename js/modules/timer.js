function timer() {
  function zeroAppend(num) {
    if (num >= 10) return num;
    else return `0${num}`;
  }
  const deadline = "2022-08-20";

  function getTimeRemaining(endTime) {
    const remainingTime = Date.parse(endTime) - Date.parse(new Date());

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor((remainingTime / (100 * 60 * 60)) % 24),
      minutes = Math.floor((remainingTime / (1000 * 60)) % 60),
      seconds = Math.floor((remainingTime / 1000) % 60);

    return {
      remaining: remainingTime,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setTime() {
    const days = document.querySelector("#days"),
      hours = document.querySelector("#hours"),
      minutes = document.querySelector("#minutes"),
      seconds = document.querySelector("#seconds"),
      timeinterval = setInterval(showTime, 1000);

    showTime();

    function showTime() {
      const t = getTimeRemaining(deadline);

      days.innerHTML = zeroAppend(t.days);
      hours.innerHTML = zeroAppend(t.hours);
      minutes.innerHTML = zeroAppend(t.minutes);
      seconds.innerHTML = zeroAppend(t.seconds);
    }
  }
  setTime();
}

export default timer;

const countdown = function (_config) {
  const tarDate = document.getElementById('countdown').getAttribute('data-date').split('-'); /*$(_config.target).getAttribute('data-date').split('-');*/
  const day = parseInt(tarDate[0]);
  const month = parseInt(tarDate[1]);
  const year = parseInt(tarDate[2]);
  let tarTime = document.getElementById('countdown').getAttribute('data-time'); /*$(_config.target).getAttribute('data-time');*/
  let tarhour, tarmin;

  if (tarTime != null) {
    tarTime = tarTime.split(':');
    tarhour = parseInt(tarTime[0]);
    tarmin = parseInt(tarTime[1]);
  }

  let months = [31, new Date().getFullYear() % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dateNow = new Date();
  let dateNowUTC = new Date(dateNow.getUTCFullYear(), dateNow.getUTCMonth(), dateNow.getUTCDate(), dateNow.getUTCHours(), dateNow.getUTCMinutes(), dateNow.getUTCSeconds());
  let dayNow = dateNowUTC.getDate();
  let monthNow = dateNowUTC.getMonth() + 1;
  let yearNow = dateNowUTC.getFullYear();
  let hourNow = dateNowUTC.getHours();
  let minNow = dateNowUTC.getMinutes();
  let count_day = 0, count_hour = 0, count_min = 0;
  let count_day_isSet = false;
  let isOver = false;

  // Set the date we're counting down to
  const countDownDate = new Date(year, month-1, day, tarhour, tarmin, 0, 0).getTime();


  const updateTime = () => {
    // Get todays date and time
    const now = new Date();
    const nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()).getTime();
    // Find the distance between now an the count down date
    const distance = countDownDate - nowUTC;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    requestAnimationFrame(updateTime);

     document.getElementById('day').innerHTML = addZero(days);
     document.getElementById('hour').innerHTML = addZero(hours);
     document.getElementById('min').innerHTML = addZero(minutes);
     document.getElementById('sec').innerHTML = addZero(seconds);

    // If the count down is over, write some text
    if (distance < 0) {
      $(".countdown").innerHTML = "EXPIRED";
    }
  }

  updateTime();
}

const addZero = (x) => (x < 10 && x >= 0) ? "0"+x : x;

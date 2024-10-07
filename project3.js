function updateTime() {
   const timeElement = document.getElementById('time');
   const dateElement = document.getElementById('date');
   const now = new Date();

   // Get hours, minutes, and seconds
   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();

   // Format time as HH:MM:SS
   hours = (hours < 10 ? '0' : '') + hours;
   minutes = (minutes < 10 ? '0' : '') + minutes;
   seconds = (seconds < 10 ? '0' : '') + seconds;

   timeElement.textContent = `${hours}:${minutes}:${seconds}`;

   // Get day, month, and year
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   const formattedDate = now.toLocaleDateString(undefined, options);

   dateElement.textContent = formattedDate;
}

// Update the clock every second
setInterval(updateTime, 1000);

// Initialize the time and date immediately
updateTime();

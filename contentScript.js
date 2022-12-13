if (typeof init === "undefined") {
  const init = function () {
    function getRandomTime(min, max) {
      // max takes a number as an argument for the maximum minutes you want to include
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      // add a leading zero if the number is less than 10
      if (randomNumber < 10) {
        randomNumber = "0" + randomNumber;
      }

      return randomNumber;
    }

    const changeHourValues = function (iframe) {
      for (let i = 0; i < 6; i++) {
        if (
          iframe.contentWindow.document
            .querySelector(`#day_${i}`)
            .textContent.includes("Samedi") ||
          iframe.contentWindow.document
            .querySelector(`#day_${i}`)
            .textContent.includes("Dimanche")
        ) {
          continue;
        }

        // Change Start hours
        const startHour_Hours_x = iframe.contentWindow.document.querySelector(
          `#startHour_Hours_${i}`,
        );

        // set the value of the select element to 9
        if (startHour_Hours_x) {
          startHour_Hours_x.value = "09";
        } else {
          continue;
        }

        // Change Start minutes
        // make random minutes between 01 and 20

        const randomStartMinutes = getRandomTime(0, 20);
        const startHour_Minutes_x = iframe.contentWindow.document.querySelector(
          `#startHour_Minutes_${i}`,
        );

        if (startHour_Minutes_x) {
          startHour_Minutes_x.value = String(randomStartMinutes);
        } else {
          continue;
        }

        // Change End hours
        const endHour_Hours_x = iframe.contentWindow.document.querySelector(
          `#endHour_Hours_${i}`,
        );

        if (endHour_Hours_x) {
          endHour_Hours_x.value = "17";
        } else {
          continue;
        }

        // Change End minutes
        const randomEndMinutes = getRandomTime(30, 50);
        const endHour_Minutes_x = iframe.contentWindow.document.querySelector(
          `#endHour_Minutes_${i}`,
        );

        if (endHour_Minutes_x) {
          endHour_Minutes_x.value = String(randomEndMinutes);
        } else {
          continue;
        }
      }
    };

    const iframe = document.querySelector("iframe[style='overflow: hidden;']");

    if (iframe) {
      iframe.addEventListener("load", function () {
        changeHourValues(iframe);
      });
    }
  };

  init();
}

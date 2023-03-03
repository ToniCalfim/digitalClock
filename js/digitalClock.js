"use strict";

/** General Info For This JavaScript file *************************************
 *
 * Project      : digitalClock
 * File Type    : JS
 * File Editor  : File was last edited using: VSCodium
 * Description  :
 * ****************************************************************************
 * Author   : Toni Calfim (751127@gmail.com)
 * ****************************************************************************
 * Version  : 1.0.0.1
 * Created  : Jan, 2023
 * Modified : Jan, 2023
 * Lincence : MIT
 * ****************************************************************************
 *
 * ****************************************************************************
 *
**/

class digitalClock {

    /** Once-only access to DOM */
    /** *********************** */
    #hourEL = document.getElementById("hours");
    #minuteEL = document.getElementById("minutes");
    #secondEL = document.getElementById("seconds");
    #ampmEL = document.getElementById("ampm");

    constructor() {

        this.#startClock();

    };

    /** Define Setters and Getters */
    /** ************************** */
    get hours() {

        return this.#hourEL.innerText;

    }

    get minutes() {

        return this.#minuteEL.innerText;

    }

    get seconds() {

        return this.#secondEL.innerText;

    }

    get ampm() {

        return this.#ampmEL.innerText;

    }

    /** Define methods */
    /** ************** */

    #startClock() {

        /** Cause the arrow function to continously repeat */
        setInterval(() => {

            this.#prepareHour();

        }, 1000);

    };

    #prepareHour() {

        /** Breaking Date() in hour pieces */
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let ampm = "";

        /** forceAmPm needs to come first to get hour variable unforced */
        ampm = this.forceAmPmFormat(hours);
        hours = this.forceTwelveHourFormat(hours);

        this.#updateDisplay(hours, minutes, seconds, ampm);

    };

    #updateDisplay(hours, minutes, seconds, ampm) {

        this.#hourEL.innerText = String(hours).padStart(2, "0");
        this.#minuteEL.innerText = String(minutes).padStart(2, "0");;
        this.#secondEL.innerText = String(seconds).padStart(2, "0");;
        this.#ampmEL.innerText = ampm;

    }

    forceTwelveHourFormat(hours) {

        /** Ternary Operator */
        (hours > 12) ? hours -= 12 : hours;

        return hours;

    };

    forceAmPmFormat(hours) {

        /** Ternary Operator */
        (hours > 12) ? ampm = "PM" : ampm = "AM";

        return ampm;

    };

}

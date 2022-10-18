const tzoffset = ((new Date()).getTimezoneOffset() * 60000)
class helper {

    static createArrayOfNumber = (length) => {

        return [...Array(length).keys()]

    }

    static createRandomNumber = () => (Math.floor(Math.random() * 10));

    static hasDot = (text) => text.includes('.');

    static createArray = (length) => new Array(length).fill();

    static isEmpty = (value) => {

        if (value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) ||
            (typeof value === 'string' && value.trim().length === 0)) {
            return true
        } else {
            return false
        }

    }

    static converSecondToFullDate = (time) => {

        let converSecondToMinute = time / 60;
        let minutePartIs = helper.hasDot(converSecondToMinute.toString()) ? converSecondToMinute.toString().split('.') : converSecondToMinute;
        let secondIs = minutePartIs[1] ? Math.round(+`.${minutePartIs[1]}` * 60) : 0;
        let converMinuteToHour = +minutePartIs[0] / 60;
        let hourPartIs = helper.hasDot(converMinuteToHour.toString()) ? converMinuteToHour.toString().split('.') : converMinuteToHour;
        let minuteIs = hourPartIs[1] ? Math.round(+`.${hourPartIs[1]}` * 60) : 0;
        let converHourToDay = +hourPartIs[0] / 24;
        let dayPartIs = helper.hasDot(converHourToDay.toString()) ? converHourToDay.toString().split('.') : converHourToDay;
        let hourIs = dayPartIs[1] ? Math.round(+`.${dayPartIs[1]}` * 24) : 0;
        let dayIs = dayPartIs[0] ? +dayPartIs[0] : 0

        return {
            'day': dayIs,
            'hour': hourIs,
            'minute': minuteIs,
            'second': secondIs,
        }
    }

    static converSecondTominute = (time) => {

        let converSecondToMinute = time / 60;
        let minutePartIs = helper.hasDot(converSecondToMinute.toString()) ? converSecondToMinute.toString().split('.') : converSecondToMinute;
        let secondIs = minutePartIs[1] ? Math.round(+`.${minutePartIs[1]}` * 60) : 0;
        let converMinuteToHour = +minutePartIs[0] / 60;
        let hourPartIs = helper.hasDot(converMinuteToHour.toString()) ? converMinuteToHour.toString().split('.') : converMinuteToHour;
        let minuteIs = hourPartIs[1] ? Math.round(+`.${hourPartIs[1]}` * 60) : 0;

        if (minuteIs < 10) {
            minuteIs = '0' + minuteIs;
        }

        if (secondIs < 10) {
            secondIs = '0' + secondIs;
        }

        return `${minuteIs} : ${secondIs}`
    }

    static makeRandomRGBColor() {

        let redValue = Math.floor(Math.random() * 255);
        let greenValue = Math.floor(Math.random() * 255);
        let blueValue = Math.floor(Math.random() * 255);

        let color = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'

        return color;
    }

    static getMonthName(id) {
        switch (id) {
            case 1: return 'January';
            case 2: return 'February';
            case 3: return 'March';
            case 4: return 'April';
            case 5: return 'May';
            case 6: return 'June';
            case 7: return 'July';
            case 8: return 'August';
            case 9: return 'September';
            case 10: return 'October';
            case 11: return 'November';
            case 12: return 'December';
        }
    }

    static getNowDate = () => {
        const current = new Date(Date.now() - tzoffset);
        // .toLocaleDateString('fa-IR') برای تاریخ شمسی
        return current.toISOString().slice(0, 10);
    }

    static getCurrentTime = () => {
        const current = new Date(Date.now() - tzoffset);
        // .toLocaleDateString('fa-IR') برای تاریخ شمسی
        return current.toISOString().slice(11, 19);
    }

    static getCustomPreviousMonth = (month) => {
        const current = new Date(Date.now() - tzoffset);
        current.setMonth(current.getMonth() - month);
        return current.toISOString().slice(0, 10);
    }

    static getPreviousWeek = () => {
        const current = (new Date(Date.now() - tzoffset));
        current.setDate(current.getDate() - 7);
        return current.toISOString().slice(0, 10);
    }

    static CalculateTheSumOfSeveralNumbers = (numbers) => {

        let sumNumbers = !this.isEmpty(numbers) && numbers.reduce((prev, current) => {
            return prev + current
        })

        return sumNumbers;
    }

    static setTextInUserClipboard = (text) => {
        if (window.navigator.clipboard) {
            window.navigator.clipboard.writeText(text)
            alert('text copy is successfuly')
        } else {
            alert('text copy was unsuccessful')
        }
    }

    static readTextFromUserClipboard = (callback) => {
        if (window.navigator.clipboard) {
            window.navigator.clipboard.readText().then(res => callback(res))
        }
    }
    
    static getUserBatteryInfos = (callback) => {
        if (window.navigator.clipboard) {
            window.navigator.getBattery().then(res=>callback(res))
        }
    }

}

export default helper;

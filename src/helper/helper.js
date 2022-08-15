
class helper {

    static createArrayOfNumber = (length) => {

        return [...Array(length).keys()]

    }

    static createRandomNumber = () => (Math.floor(Math.random() * 10));

    static createArray = (length) => new Array(length).fill();

    static isEmpty = (value) => {

        if (value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) ||
            (typeof value === 'string' && value.trim().length === 0)) {
            return true
        } else {
            return false
        }

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
        const current = new Date(Date.now())
        // .toLocaleDateString('fa-IR') برای تاریخ شمسی
        return current.toISOString().slice(0, 10);
    }

    static getCustomPreviousMonth = (month) => {
        const current = new Date(Date.now())
        current.setMonth(current.getMonth() - month);
        return current.toISOString().slice(0, 10);
    }

    static getPreviousWeek = () => {
        const current = (new Date(Date.now()))
        current.setDate(current.getDate() - 7);
        return current.toISOString().slice(0, 10);
    }

}

export default helper;

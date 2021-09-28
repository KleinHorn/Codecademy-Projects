class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(bool) {
        this._isCheckedOut = bool;
    }
    getAverageRating() {
        return this._ratings.reduce((a, b) => a + b) / this._ratings.length;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating) {
        this._ratings.push(rating);
    }
}

class Book extends Media {
    constructor()
}

const blah = new Media("Blah");
blah._ratings = [9, 9, 9, 8];
console.log(blah.ratings);
console.log(blah.getAverageRating());
console.log(blah.isCheckedout); // should return false
blah.toggleCheckOutStatus();
console.log(blah.isCheckedout); // should return true

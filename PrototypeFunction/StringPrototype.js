/**
 * Created by Viet Anh Tran on 17-Jun-17.
 */
String.prototype.isNullOrWhiteSpaces = function () {
    if (typeof this === 'undefined' || this == null) return true;

    return this.replace(/\s/g, '').length < 1;
};
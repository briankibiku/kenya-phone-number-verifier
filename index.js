const formatNumber = (phonenumber) => {
    var regEx = /^(?:254|\+254|0)?(7(?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/;
    if (phonenumber.match(regEx)) {
        return true
    } else {
        return false
    }
}

module.exports = formatNumber;
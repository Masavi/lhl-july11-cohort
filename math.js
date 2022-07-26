const math = {
  sum: function (numbersArray) {
    let sum = 0;

    for (const num of numbersArray) {
      // sum = sum + num;
      sum += num;
    }

    return sum;
  },
  isOdd: function(number) {
    if (number % 2 === 1) {
      return true
    } else {
      return false;
    }
  },
  abs: function(number) {
    if(number < 0) {
      return -number;
    }

    if(number >= 0) {
      return number;
    }

    return null;
  },
  subs: () => {
    
  }
}

module.exports = math

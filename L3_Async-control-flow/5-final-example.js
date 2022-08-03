const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };

  console.log('2 BEFORE TIMEOUT CALL');
  const timeoutData = setTimeout(() => {
    data.initials = "YAV";
    callback();
    return data;
  });

  console.log(timeoutData);

  console.log('3 AFTER TIMEOUT CALL');
}

console.log('1 BEFORE MAIN CALL');

const result = higherOrderFunc(() => {
  console.log('5 INSIDE CALLBACK');
})

console.log('4 AFTER MAIN CALL');

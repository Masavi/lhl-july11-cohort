function higherOrderFunction(callback) {
  console.log('Starting...');
  callback()
  console.log('Finished!');
}

higherOrderFunction(() => {
  console.log('HELLO FROM ARROW FUNCTION!');
})

higherOrderFunction(function(){
  console.log('hello from regular anon function!!');
})
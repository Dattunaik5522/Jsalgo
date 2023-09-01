const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    //Looping through array
    if (target === nums[i]) {
      //checking target element is there or not
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([3, 24, 24, 1, 0, 23, 32], 0));

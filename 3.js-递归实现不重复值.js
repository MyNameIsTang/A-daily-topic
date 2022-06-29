/**
 *  用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
 * */

function rand() {
  return Math.floor(Math.random() * 30 + 2);
}

function createArr(arr = []) {
  const r = rand();
  if (arr.includes(r)) {
    createArr(arr);
  } else {
    arr.push(r);
  }
  if (arr.length < 5) {
    createArr(arr);
  }
  return arr;
}

console.log(createArr());

const intersect = (nums1, nums2) => {
  let isNext = true;
  const nums2String = nums2.join('');

  const result = nums1.reduce((prev, item, index, arr) => {
    let isInclude = false;

    if (prev.length) {
      isInclude = isNext && nums2String.includes(`${prev}${item}`);
      isNext = isInclude;
    } else {
      isInclude = nums2String.includes(item);
    }

    if (isInclude) {
      prev += item;
    }

    return prev;
  }, '')

  return result.split('');
};

console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));
console.log(intersect([4,8,5], [9,4,5,8,4]));
console.log(intersect([3,7,2], [9,4,5,8,4]));
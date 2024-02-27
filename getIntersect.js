const intersect = (nums1, nums2) => {
  const nums2String = nums2.join('');

  const result = nums1.reduce((prev, item, arr) => {
    const isInclude = nums2String.includes(Boolean(prev.length) ? `${prev}${item}` : item);

    if (isInclude) {
      prev += item;
    }

    return prev;
  }, '')

  return result.split('');
};

console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));
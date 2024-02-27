const mergeTwoLists = (list1, list2) => {
  const template = { val: 0, next: null };
  let result = template;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      result.next = list1;
      list1 = list1.next;
    } else {
      result.next = list2;
      list2 = list2.next;
    }
    result = result.next;
  }

  result.next = list1 === null ? list2 : list1

  return template.next;
};
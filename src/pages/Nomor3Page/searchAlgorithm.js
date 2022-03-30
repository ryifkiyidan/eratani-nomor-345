export default function searchFilter(arr, inputKeyword) {
  return arr.filter((item) => {
    return Object.keys(item).some((prop) => {
      return item[prop].toString().toLowerCase().indexOf(inputKeyword) > -1;
    });
  });
}

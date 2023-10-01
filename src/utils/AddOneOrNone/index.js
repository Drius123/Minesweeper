export default function AddOneOrNone(indexArrForAddOne, arr) {
  // eslint-disable-next-line consistent-return
  indexArrForAddOne.forEach((itemForAddOne) => {
    if (arr[itemForAddOne] !== 'X') {
      // eslint-disable-next-line no-return-assign, no-param-reassign
      return arr[itemForAddOne] += 1;
    }
  });
}

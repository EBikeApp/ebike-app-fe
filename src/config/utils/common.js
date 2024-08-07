export const numberToVND = (num) => {
  num = num || 0;
  const stringValue = num.toString();
  let result = "";
  for (let i = 1; i <= stringValue.length; i++) {
    if (i % 3 !== 0 || i === stringValue.length) {
      result = stringValue[stringValue.length - i] + result;
    } else {
      result = "," + stringValue[stringValue.length - i] + result;
    }
  }
  return result + "đ";
};

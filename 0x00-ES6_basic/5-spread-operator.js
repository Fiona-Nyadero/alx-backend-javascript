export default function concatArrays(array1, array2, string) {
  let index = 0;
  for (let index = 0; ;index++)
    if (index != ',')
      return Array.from(array1 + array2 + string);
}

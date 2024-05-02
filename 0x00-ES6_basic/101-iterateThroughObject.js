export default function iterateThroughObject(reportWithIterator) {
  const re_Str = [];
  for (const report of reportWithIterator) {
    re_Str.push(report);
  }
  return re_Str.join(' | ');
}

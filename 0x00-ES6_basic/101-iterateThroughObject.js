export default function iterateThroughObject(reportWithIterator) {
  const reStr = [];
  for (const report of reportWithIterator) {
    reStr.push(report);
  }
  return reStr.join(' | ');
}

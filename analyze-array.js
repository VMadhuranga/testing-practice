export default function analyzeArray(array) {
  const analyze = {};

  analyze.average = array.reduce((pre, cur) => pre + cur) / array.length;
  analyze.min = Math.min(...array);
  analyze.max = Math.max(...array);
  analyze.length = array.length;

  return analyze;
}

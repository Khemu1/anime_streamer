export function formatNumber(num: number) {
  if (num < 1000) {
    return num.toString();
  }

  const suffixes = ["k", "M", "B", "T"];
  let suffixIndex = 0;
  let formattedNum = num;

  while (formattedNum >= 1000 && suffixIndex < suffixes.length) {
    formattedNum /= 1000;
    suffixIndex++;
  }

  return `${Math.floor(formattedNum * 10) / 10}${suffixes[suffixIndex - 1]}`;
}

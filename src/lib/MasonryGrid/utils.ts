export function toDecimalInt(possibleNumber: string): number {
  const BASE_TEN_RADIX = 10;
  return parseInt(possibleNumber, BASE_TEN_RADIX);
}

export function generateRandomId(initVal: number = 3): string {
  const initialValue = new Uint32Array(initVal);
  window.crypto.getRandomValues(initialValue);

  return (
    performance.now().toString(36) +
    Array.from(initialValue)
      .map(A => A.toString(36))
      .join('')
  ).replace(/\./g, '');
}

export function concatenateClassNames(
  initialClassName: string,
  otherClassNames: string
): string {
  const SEPARATOR = ' ';
  const concatenatedClassNames = initialClassName.concat(SEPARATOR, otherClassNames);
  return concatenatedClassNames;
}

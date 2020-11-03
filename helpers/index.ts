/**
 * Уникальная рандомная строка
 * @return string
 */
export const getUniqueStr = (): string =>
  (new Date().getTime() / Math.random()).toString(16).replace('.', '');

/**
 * Для склонений
 * ex: num2str({n}, [(1)'день', (2..4)'дня', (5..9)'дней'])
 *
 * @param count: number
 * @param textArr: string[]
 *
 * @return string
 */
export const num2str = (count: number, textArr: string[]): string => {
  count = Math.abs(count) % 100;
  const count1 = count % 10;

  return count > 10 && count < 20
    ? textArr[2]
    : count1 > 1 && count1 < 5
    ? textArr[1]
    : count1 == 1
    ? textArr[0]
    : textArr[2];
};

/**
 * Уникальные значения из 2х массивов
 *
 * @param array1
 * @param array2
 *
 * @return array
 */
export const getCommonItems = (array1: any[], array2: any[]): any[] => {
  const common: any[] = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        common.push(array1[i]);
      }
    }
  }

  return common;
};

/**
 * Сравнение объектов
 *
 * @param x: object
 * @param y: object
 *
 * @return boolean
 */
export const deepEqual = (x: any, y: any): boolean =>
  x && y && typeof x === 'object' && typeof y === 'object'
    ? Object.keys(x).length === Object.keys(y).length &&
      Object.keys(x).every((key) => deepEqual(x[key], y[key]))
    : x === y;

/**
 * Проверка на то, является ли ссылка внешней
 *
 * @param url: string
 *
 * @return boolean
 */
export const isUrlExternal = (url: string): boolean => /http(s):\/\//.test(url);

/**
 * @param from: number
 * @param to: number
 * @param step: number
 *
 * @return number[]
 */
export const range = (from: number, to: number, step = 1) => {
  let i: number = from;
  const range: any[] = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

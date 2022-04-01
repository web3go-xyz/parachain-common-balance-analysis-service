import BigNumber from "bignumber.js";

export class FunctionExt {
  constructor(parameters) { }

  public static async sleep(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(1);
        } catch (e) {
          reject(0);
        }
      }, delay);
    });
  }

  public static convertHex2Decimal(hex: string, decimals: number = 0): string {
    return new BigNumber(hex).div('1e' + decimals).toFixed();
  }

  public static convertHex2DecimalBigNumber(hex: string, decimals: number = 0): BigNumber {
    return new BigNumber(hex).div('1e' + decimals);
  }
}

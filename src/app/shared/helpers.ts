export class Helpers {
  public static zfill(num, width = 5): string {
    if (!num) {
      return '';
    }
    const numberOutput = Math.abs(num); /* Valor absoluto del número */
    const length = num.toString().length; /* Largo del número */
    const zero = '0'; /* String de cero */

    if (width <= length) {
      if (num < 0) {
        return ('-' + numberOutput.toString());
      } else {
        return numberOutput.toString();
      }
    } else {
      if (num < 0) {
        return ('-' + (zero.repeat(width - length)) + numberOutput.toString());
      } else {
        return ((zero.repeat(width - length)) + numberOutput.toString());
      }
    }
  }
}

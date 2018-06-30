export class RandomNumber {
  public static getBetween = (start: number, end: number): number => {
    const x = Math.floor(Math.random() * (end - start + 1) + start);
    console.log(`Start is ${start}, End is ${end}, Timeout is ${x}`);
    return x;
  }
}

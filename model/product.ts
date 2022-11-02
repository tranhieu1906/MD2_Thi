export class Product {
  private _id: number;
  private _name: string;
  private _type: string;
  private _price: number;
  private _amount: number;
  private _date: any;
  private _describe: string;

  constructor(
    id: number,
    name: string,
    type: string,
    price: number,
    amount: number,
    date: any,
    describe: string
  ) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._price = price;
    this._amount = amount;
    this._date = date;
    this._describe = describe;
  }

  getId(): number {
    return this._id;
  }

  setId(value: number) {
    this._id = value;
  }

  getName(): string {
    return this._name;
  }

  setName(value: string) {
    this._name = value;
  }

  getType(): string {
    return this._type;
  }

  setType(value: string) {
    this._type = value;
  }

  getPrice(): number {
    return this._price;
  }

  setPrice(value: number) {
    this._price = value;
  }

  getAmount(): number {
    return this._amount;
  }

  setAmount(value: number) {
    this._amount = value;
  }

  getDate(): Date {
    return this._date;
  }

  setDate(value: Date) {
    this._date = value;
  }

  getDescribe(): string {
    return this._describe;
  }

  setDescribe(value: string) {
    this._describe = value;
  }
}

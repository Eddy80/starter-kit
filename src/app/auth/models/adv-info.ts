export class AdvInfo{
  name:string;
  categoryId:number;
  categorySubId:number;
  countryId:number;
  cityId:number;
  districtId:number;
  genderId:number;
  showStartFrom: string;
  showStartTo: string;
  duration:number;
  dailyLimit: number;
  weeklyLimit: number;
  monthlyLimit: number;
  moneyAmount: number;

  constructor(name: string, categoryId: number, categorySubId: number,
              countryId: number, cityId: number, districtId: number,genderId:number,
              showStartFrom: string,  showStartTo: string,  duration:number,  dailyLimit: number,
              weeklyLimit: number, monthlyLimit: number,  moneyAmount:number) {
    this.name = name;

    this.categoryId = categoryId;
    this.categorySubId = categorySubId;

    this.countryId = countryId;
    this.cityId = cityId;
    this.districtId = districtId;

    this.genderId = genderId;

    this.showStartFrom = showStartFrom;
    this.showStartTo = showStartTo;

    this.duration = duration;

    this.dailyLimit = dailyLimit;
    this.weeklyLimit = weeklyLimit;
    this.monthlyLimit = monthlyLimit;

    this.moneyAmount = moneyAmount;

  }
}

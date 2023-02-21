import {AdvertisementCategory} from "./advertisementCategory";
import {AdvertisementCategorySub} from "./advertisementCategorySub";
import {User} from "./user";
import {Country} from "./Country";
import {City} from "./City";
import {District} from "./District";
import {Gender} from "./gender";

export class Advertisement {
  id: number;
  name: string;
  advertisementCategory: AdvertisementCategory;
  advertisementCategorySub: AdvertisementCategorySub;
  user: User;
  country: Country;
  city: City;
  district: District;
  gender: Gender;
  dailyLimit: number;
  weeklyLimit: number;
  monthlyLimit: number;
  showStartFrom: string;
  showStartTo: string;
  showDurationInSecond: number;
  isApprovedByAdmin: number;
  linkToBanner:string;
  created:string;
  advertisementKeywords:string;
  advertisementNegativeKeywords:string;
  moneyAmountInDollar:number;
}

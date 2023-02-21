import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CoreTranslationService} from "../../../../../@core/services/translation.service";
import {locale as en} from "../../i18n/en";
import {locale as fr} from "../../i18n/fr";
import {locale as de} from "../../i18n/de";
import {locale as pt} from "../../i18n/pt";
import {ContentHeader} from "../../../../layout/components/content-header/content-header.component";
import {Advertisement} from "../../../../auth/models/advertisement";
import {AdvertisementService} from "../../../../auth/service/advertisement.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AdvFileInfo} from "../../../../auth/models/adv-file-info";
import {AdvInfo} from "../../../../auth/models/adv-info";
import {FileUploader} from "ng2-file-upload";
import {FlatpickrOptions} from "ng2-flatpickr";
import {Gender} from "../../../../auth/models/gender";
import {Country} from "../../../../auth/models/Country";
import {City} from "../../../../auth/models/City";
import {GenderService} from "../../../../auth/service/gender.service";
import {CountryService} from "../../../../auth/service/country.service";
import {CityService} from "../../../../auth/service/city.service";
import {CategoryService} from "../../../../auth/service/category.service";
import {CategorysubService} from "../../../../auth/service/categorysub.service";
import {AdvertisementCategorySub} from "../../../../auth/models/advertisementCategorySub";
import {AdvertisementCategory} from "../../../../auth/models/advertisementCategory";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

const URL = `${environment.apiUrl}`;

@Component({
  selector: 'app-edit-adv-form',
  templateUrl: './edit-adv-form.component.html',
  styleUrls: ['./edit-adv-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditAdvFormComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });

  public timeOptions: FlatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    altInput: true
  };

  form: any= {};

  tail:string="";

  private advFileInfo : AdvFileInfo =
      {name:'', categoryId:0, categorySubId:0, personId:0, formId:0, documentTypeId:0,
        documentId:0, isSub:0, fileName:'', contentType:'', size:0, pageNumber:0};

  private advInfo : AdvInfo =
      {name:'', categoryId:0, categorySubId:0, countryId:0, cityId:0, districtId:0, genderId:0,
        showStartFrom:'', showStartTo:'', duration:0, dailyLimit:0, weeklyLimit:0, monthlyLimit:0, moneyAmount:0};

  fileToUpload: File | null = null;

  advertisement: Advertisement;

  categories : AdvertisementCategory[]  = [];
  subcategories : AdvertisementCategorySub[]  = [];


  selectedValue: number = 0;
  selectedValue2: number = 0;

  countries : Country[]=[];
  cities : City[]=[];
  selectedValueCountry: number = 0;
  selectedValueCity: number = 0;
  selectedValueDistrict: number = 0;

  genders : Gender[]=[];
  selectedValueGender: number = 0;
    private sub: Subscription;
    private id: any;

  selectOption(id: number) {
    this.selectedValue = id;
    this.categorysubService.getAllByCategory(id).subscribe(
        subcategories => {
          this.isFetching = true;
          this.subcategories = subcategories;
          this.selectedValue2 = this.subcategories[0].id;
          //alert(this.selectedValue2);
        }, //Bind to view
        err => {   console.log(err);    }
    );

  }
  selectOption2(id: number) {     this.selectedValue2 = id;  }

  selectOptionCountry(id: number) {
    this.selectedValueCountry = id;
    this.cityService.getAllByCountry(id).subscribe(
        cities =>{
          this.isFetching = true;
          this.cities = cities;
          this.selectedValueCity = this.cities[0].id;
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }
  selectOptionCity(id: number) {
    this.selectedValueCity = id;
  }

  selectOptionDistrict(id: number) {
    this.selectedValueDistrict = id;
  }

  selectOptionGender(id: number) {
    this.selectedValueGender = id;
  }




  onSubmit() {

  }


  uploadFiles({event}: { event: any } ) {

    const file:File[] = event.target.files;

    if (file) {

      //console.log('file', file)
      for (let i = 0; i < file.length; i++) {
        this.formData.append("file", file[i], file[i]['name']);
        this.advFileInfo.fileName = file[i]['name'];
      }
    }
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': ['application/json','multipart/formdata']})
  };

  RequestUpload() {
    //alert("Clicked");
    // AdvFileInfo
    this.advFileInfo.categoryId = this.selectedValue;
    this.advFileInfo.categorySubId = this.selectedValue2;
    this.advFileInfo.personId = 1;
    this.advFileInfo.name = this.advertisement.name;
    //  alert("AdvFileInfo Filled");
    // AdvInfo
    this.advInfo.categoryId = this.selectedValue;
    this.advInfo.categorySubId = this.selectedValue2;
    // alert("AdvInfo Filled1");
    this.advInfo.name = this.advertisement.name;
    // alert("AdvInfo Filled2");
    this.advInfo.countryId = this.selectedValueCountry;
    this.advInfo.cityId = this.selectedValueCity;
    //this.advInfo.districtId = this.selectedValueDistrict;
    // alert("AdvInfo Filled3");
    this.advInfo.genderId = this.selectedValueGender;
    //  alert("AdvInfo Filled4");
    this.advInfo.showStartFrom = this.advertisement.showStartFrom
    this.advInfo.showStartTo = this.advertisement.showStartTo;
    //  alert("AdvInfo Filled5");
    this.advInfo.duration = this.advertisement.showDurationInSecond;
    // alert("AdvInfo Filled6");
    this.advInfo.dailyLimit = this.advertisement.dailyLimit;
    this.advInfo.weeklyLimit = this.advertisement.weeklyLimit;
    this.advInfo.monthlyLimit = this.advertisement.monthlyLimit;
    // alert("AdvInfo Filled7");
    this.advInfo.moneyAmount = this.advertisement.moneyAmountInDollar;
    //  alert("AdvInfo Filled8");
    //console.log(this.advInfo);
    //console.log(this.advFileInfo);
    this.formData.append( 'AdvFileInfo',  JSON.stringify( this.advFileInfo ) );
    this.formData.append( 'AdvInfo',  JSON.stringify( this.advInfo ) );
    //console.log(this.formData);
    console.log("Start:")
    if (this.advFileInfo.fileName != "") {
        this.tail = "uploadFile";
        console.log(this.tail)
        this.http.patch(`${environment.apiUrl}/api/`+this.tail+'/'+this.id, this.formData, /*{ headers: this.httpOptions.headers }*/)
            .subscribe(() => {
                this._route.navigate(["/advertisement"]);
            });
    } else {
        this.tail = "advertisements";
        console.log(this.tail)
        this.http.patch(`${environment.apiUrl}/api/`+this.tail+'/'+this.id, this.advInfo, /*{ headers: this.httpOptions.headers }*/)
            .subscribe(() => {
                this._route.navigate(["/advertisement"]);
            });
    }


  }

  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */

  advertisements: Advertisement[];
  private isFetching: Boolean = false;

  p: Number = 1;
  count: Number = 5;


  constructor(private _coreTranslationService: CoreTranslationService,

              private advertisementService: AdvertisementService,
              private categoryService: CategoryService,
              private categorysubService: CategorysubService,
              private genderService: GenderService,
              private countryService: CountryService,
              private cityService: CityService,
              private http: HttpClient,

              private _route: Router,
              private  route: ActivatedRoute
  ) {
    this._coreTranslationService.translate(en, fr, de, pt)

  }

  // public
  public contentHeader: ContentHeader;

  public formData = new FormData();



  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------


  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Add New Advertisement',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Advertisements',
            isLink: true,
            link: '/advertisement'
          },
          {
            name: 'Add New Advertisement',
            isLink: false
          }
        ]
      }
    };




      this.sub = this.route.params.subscribe(params => {
          this.id = params['id'];
      });
    //  console.log(this.id);

    this.onGetAdvertisementById(this.id);

  }

  onGetAdvertisementById(id:number){
    this.advertisementService.getById(id).subscribe(
        advertisement =>{
          this.isFetching = true;
          this.advertisement = advertisement;
          this.selectedValue = advertisement.advertisementCategory.id;
          this.selectedValue2 = advertisement.advertisementCategorySub.id;
          this.selectedValueCountry = advertisement.country.id;
          this.selectedValueCity = advertisement.city.id;
          this.selectedValueGender = advertisement.gender.id;

          this.onFetchDictionaries(this.selectedValue, this.selectedValueCountry );
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);

        });
  }
  onFetchDictionaries(categoryId:number, countryId:number){
    // alert("Start Fetching");

    this.categoryService.getAll().subscribe(
        categories =>{
          this.isFetching = true;
          this.categories = categories;
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);

        });

    this.categorysubService.getAllByCategory(categoryId).subscribe(
        subcategories =>{
          this.isFetching = true;
          this.subcategories = subcategories;
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);

        });

    this.genderService.getAll().subscribe(
        genders =>{
          this.isFetching = true;
          this.genders = genders;
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);

        });

    this.countryService.getAll().subscribe(
        countries =>{
          this.isFetching = true;
          this.countries = countries;
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);

        });

    this.cityService.getAllByCountry(countryId).subscribe(
        cities =>{
          this.isFetching = true;
          this.cities = cities;
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);

        });

  }

}




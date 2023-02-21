import {Component, OnInit, ViewEncapsulation} from '@angular/core';
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
import {timeSnippetCode} from "./flatpickr.snippetcode";
import {Gender} from "../../../../auth/models/gender";
import {Country} from "../../../../auth/models/Country";
import {City} from "../../../../auth/models/City";
import {District} from "../../../../auth/models/District";
import {GenderService} from "../../../../auth/service/gender.service";
import {CountryService} from "../../../../auth/service/country.service";
import {CityService} from "../../../../auth/service/city.service";
import {CategoryService} from "../../../../auth/service/category.service";
import {CategorysubService} from "../../../../auth/service/categorysub.service";
import {AdvertisementCategorySub} from "../../../../auth/models/advertisementCategorySub";
import {AdvertisementCategory} from "../../../../auth/models/advertisementCategory";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";

const URL = `${environment.apiUrl}`;

@Component({
  selector: 'app-new-adv-form',
  templateUrl: './new-adv-form.component.html',
  styleUrls: ['./new-adv-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewAdvFormComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });

  public timeOptions: FlatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    altInput: true
  };

  // snippet code variables
  public _timeSnippetCode = timeSnippetCode;

  form: any= {};

  private advFileInfo : AdvFileInfo =
      {name:'', categoryId:0, categorySubId:0, personId:0, formId:0, documentTypeId:0,
        documentId:0, isSub:0, fileName:'', contentType:'', size:0, pageNumber:0};

  private advInfo : AdvInfo =
      {name:'', categoryId:0, categorySubId:0, countryId:0, cityId:0, districtId:0, genderId:0,
       showStartFrom:'', showStartTo:'', duration:0, dailyLimit:0, weeklyLimit:0, monthlyLimit:0, moneyAmount:0};

  fileToUpload: File | null = null;

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
    if (this.selectedValue !=0 )
        this.advFileInfo.categoryId = this.selectedValue;
    else
        this.advFileInfo.categoryId = 1000;
    if (this.selectedValue !=0 )
        this.advFileInfo.categorySubId = this.selectedValue2;
    else
        this.advFileInfo.categorySubId = 1000;
    this.advFileInfo.personId = 1;
    this.advFileInfo.name = this.form.name;
  //  alert("AdvFileInfo Filled");
    // AdvInfo
      if (this.selectedValue !=0 )
          this.advInfo.categoryId = this.selectedValue;
      else
          this.advInfo.categoryId = 1000;
      if (this.selectedValue !=0 )
          this.advInfo.categorySubId = this.selectedValue2;
      else
          this.advInfo.categorySubId = 1000;
   // alert("AdvInfo Filled1");
    this.advInfo.name = this.form.name;
   // alert("AdvInfo Filled2");
    if (this.selectedValueCountry !=0 )
       this.advInfo.countryId = this.selectedValueCountry;
    else
       this.advInfo.countryId = 1000;
      if (this.selectedValueCity !=0 )
          this.advInfo.cityId = this.selectedValueCity;
      else
          this.advInfo.cityId = 1000;

    //this.advInfo.districtId = this.selectedValueDistrict;
   // alert("AdvInfo Filled3");
      if (this.selectedValueGender !=0 )
          this.advInfo.genderId = this.selectedValueGender;
      else
          this.advInfo.genderId = 3;

  //  alert("AdvInfo Filled4");
    this.advInfo.showStartFrom = this.form.showStartFrom
    this.advInfo.showStartTo = this.form.showStartTo;
  //  alert("AdvInfo Filled5");
    this.advInfo.duration = this.form.duration;
   // alert("AdvInfo Filled6");
    this.advInfo.dailyLimit = this.form.dailyLimit;
    this.advInfo.weeklyLimit = this.form.weeklyLimit;
    this.advInfo.monthlyLimit = this.form.monthlyLimit;
   // alert("AdvInfo Filled7");
    this.advInfo.moneyAmount = this.form.moneyAmount;
  //  alert("AdvInfo Filled8");
    console.log(this.advInfo);
    this.formData.append( 'FileInfo',  JSON.stringify( this.advFileInfo ) );
    this.formData.append( 'AdvInfo',  JSON.stringify( this.advInfo ) );
    console.log(this.formData);
    this.http.post( `${environment.apiUrl}/api/uploadFile`, this.formData, /*{ headers: this.httpOptions.headers }*/ )
        .subscribe(( ) => {
          this._route.navigate(["/advertisement"]);
        });
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

              private categoryService: CategoryService,
              private categorysubService: CategorysubService,
              private genderService: GenderService,
              private countryService: CountryService,
              private cityService: CityService,
              private http: HttpClient,

              private _route: Router
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


    this.onFetchDictionaries();
    //console.log(this.genders);

  }

  onFetchDictionaries(){
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

    this.categorysubService.getAllByCategory(1).subscribe(
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

    this.cityService.getAllByCountry(9).subscribe(
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




import { Component, OnInit } from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";
import {ContentHeader} from "../../../layout/components/content-header/content-header.component";
import {UserService} from "../../../auth/service/user.service";
import {GenderService} from "../../../auth/service/gender.service";
import {User} from "../../../auth/models/user";
import {Gender} from "../../../auth/models/gender";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */

  users: User[];
  genders: Gender[];
  private isFetching: Boolean;

    title = 'Angular Pagination Tutorial';
    // Some array of things.
    public employeedata = [];
    // Pagination parameters.
    p: Number = 1;
    count: Number = 2;
    //console.log('Application loaded. Initializing data.');


  constructor(private _coreTranslationService: CoreTranslationService,
              private userService: UserService,
              private genderService: GenderService,
  ) {
    this._coreTranslationService.translate(en, fr, de, pt)

      this.employeedata = [
          { 'id': 1, 'name': 'Clare Cornau', 'phoneno': '(815) 6180492', 'email': 'ccornau0@bigcartel.com', 'gender': 'Female', 'nationality': 'Somalia' },
          { 'id': 2, 'name': 'Edouard Elsmore', 'phoneno': '(507) 3119958', 'email': 'eelsmore1@goo.gl', 'gender': 'Male', 'nationality': 'United States' },
          { 'id': 3, 'name': 'Aeriel Elldred', 'phoneno': '(478) 7181722', 'email': 'aelldred2@archive.org', 'gender': 'Female', 'nationality': 'Russia' },
          { 'id': 4, 'name': 'Abagael Meachem', 'phoneno': '(698) 4411762', 'email': 'ameachem3@columbia.edu', 'gender': 'Female', 'nationality': 'China' },
          { 'id': 5, 'name': 'Jeremiah Hadwen', 'phoneno': '(345) 6582965', 'email': 'jhadwen4@vkontakte.ru', 'gender': 'Male', 'nationality': 'Mongolia' },
          { 'id': 6, 'name': 'Rollin Wainscoat', 'phoneno': '(659) 9557733', 'email': 'rwainscoat5@thetimes.co.uk', 'gender': 'Male', 'nationality': 'Bhutan' },
          { 'id': 7, 'name': 'Micah Braddock', 'phoneno': '(864) 2101861', 'email': 'mbraddock6@yellowbook.com', 'gender': 'Male', 'nationality': 'Peru' },
          { 'id': 8, 'name': 'Jayme Crotty', 'phoneno': '(165) 5814372', 'email': 'jcrotty7@opensource.org', 'gender': 'Male', 'nationality': 'Niger' },
          { 'id': 9, 'name': 'Margo Braker', 'phoneno': '(428) 2282928', 'email': 'mbraker8@yahoo.co.jp', 'gender': 'Female', 'nationality': 'Argentina' },
          { 'id': 10, 'name': 'Bertie Bosman', 'phoneno': '(673) 5170425', 'email': 'bbosman9@google.co.jp', 'gender': 'Female', 'nationality': 'Greece' },
          { 'id': 11, 'name': 'Darelle Rowlands', 'phoneno': '(978) 8885907', 'email': 'drowlandsa@slate.com', 'gender': 'Female', 'nationality': 'Indonesia' },
          { 'id': 12, 'name': 'Neile Keets', 'phoneno': '(956) 9360112', 'email': 'nkeetsb@canalblog.com', 'gender': 'Female', 'nationality': 'Finland' },
          { 'id': 13, 'name': 'Shari Bussen', 'phoneno': '(240) 7150720', 'email': 'sbussenc@so-net.ne.jp', 'gender': 'Female', 'nationality': 'Philippines' },
          { 'id': 14, 'name': 'Arron Drivers', 'phoneno': '(416) 4076124', 'email': 'adriversd@com.com', 'gender': 'Male', 'nationality': 'Bosnia and Herzegovina' },
          { 'id': 15, 'name': 'Carola Balasin', 'phoneno': '(262) 7945277', 'email': 'cbalasine@blogger.com', 'gender': 'Female', 'nationality': 'Bolivia' },
          { 'id': 16, 'name': 'Clarinda Barrick', 'phoneno': '(501) 3984600', 'email': 'cbarrickf@t-online.de', 'gender': 'Female', 'nationality': 'China' },
          { 'id': 17, 'name': 'Inglis Treweela', 'phoneno': '(718) 4157883', 'email': 'itreweelag@tripod.com', 'gender': 'Male', 'nationality': 'Finland' },
          { 'id': 18, 'name': 'Yardley Georgeot', 'phoneno': '(213) 5730967', 'email': 'ygeorgeoth@360.cn', 'gender': 'Male', 'nationality': 'Portugal' },
          { 'id': 19, 'name': 'Hestia Palffrey', 'phoneno': '(349) 6453938', 'email': 'hpalffreyi@nba.com', 'gender': 'Female', 'nationality': 'Madagascar' },
          { 'id': 20, 'name': 'Gwendolyn Mordon', 'phoneno': '(474) 3068249', 'email': 'gmordonj@uiuc.edu', 'gender': 'Female', 'nationality': 'Greece' }
      ];
  }

  // public
  public contentHeader: ContentHeader;




  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'All users',
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
            name: 'Users',
            isLink: false
          }
        ]
      }
    };

    this.isFetching = false;
    this.userService.getAll().subscribe(
        users =>{
            this.isFetching = true;
            console.log(users.length);
            this.users = users['content'];
        console.log('this.users=' + this.users);
        console.log('this.users.length=' + this.users.length);
        console.log('this.users[0].firstName=' + this.users[0].firstName);
      }, //Bind to view
      err => {
      // Log errors if any
      console.log(err);

    });

    // this.genderService.getAll().subscribe(
    //     genders =>{
    //       this.genders = genders;
    //       console.log('this.genders=' + this.genders);
    //       console.log('this.users.genders=' + this.genders.length);
    //       console.log('this.users[0].genders=' + this.genders[0].name);
    //     }, //Bind to view
    //     err => {
    //       // Log errors if any
    //       console.log(err);
    //
    //     });
  }

  onFetchUsers(){
    this.isFetching = false;
    this.userService.getAll().subscribe(
        users =>{
                this.isFetching = true;
                this.users = users;
                    console.log('this.users=' + this.users);
                    console.log('this.users.length=' + this.users.length);
                    console.log('this.users[0].firstName=' + this.users[0].firstName);
      }, //Bind to view
      err => {
        // Log errors if any
                    console.log(err);
      });
  }

}

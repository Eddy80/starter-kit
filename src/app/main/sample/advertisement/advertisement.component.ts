import { Component, OnInit } from '@angular/core';
import {CoreTranslationService} from "../../../../@core/services/translation.service";
import {locale as en} from "../i18n/en";
import {locale as fr} from "../i18n/fr";
import {locale as de} from "../i18n/de";
import {locale as pt} from "../i18n/pt";
import {ContentHeader} from "../../../layout/components/content-header/content-header.component";
import {Advertisement} from "../../../auth/models/advertisement";
import {AdvertisementService} from "../../../auth/service/advertisement.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './advertisement.component.html'
})
export class AdvertisementComponent implements OnInit {
  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */

  advertisements: Advertisement[];
  isFetching: Boolean = false;

  p: Number = 1;
  count: Number = 15;


  constructor(private _coreTranslationService: CoreTranslationService,
              private advertisementService: AdvertisementService,
              private _router:Router,
              private _route: ActivatedRoute
  ) {
    this._coreTranslationService.translate(en, fr, de, pt)

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
      headerTitle: 'Advertisements',
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
            isLink: false
          }
        ]
      }
    };


     this.onFetchAdvertisements();


  }

    onFetchAdvertisements(){
        this.isFetching = true;
    this.advertisementService.getAll().subscribe(
        ads =>{
          this.isFetching = false;
          //console.log(ads.length);
          this.advertisements = ads['content'];
          //console.log('this.advertisements=' + this.advertisements);
          //console.log('this.advertisements.length=' + this.advertisements.length);
          //console.log('this.advertisements[0].name=' + this.advertisements[0].name);
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);

        });

  }

    getConfirmation() {
        var retVal = confirm("Do you want to continue ?");
        if( retVal == true ) {
            document.write ("User wants to continue!");
            return true;
        } else {
            document.write ("User does not want to continue!");
            return false;
        }
    }

  OnCreateNewAdvertisementForm() {
    this._router.navigate(['new'], {relativeTo:this._route})
  }

  OnDeleteAdvertisement(id:number) {
      var retVal = confirm("Are you shure you want to delete ?");
      if( retVal == true ) {
          this.advertisementService.delete(id).subscribe(( ) => {
              this.onFetchAdvertisements();
          });
      } else {
      }
  }

    OnEditAdvertisement(id:number) {
        this._router.navigate(['edit', id], {relativeTo:this._route})
    }
}

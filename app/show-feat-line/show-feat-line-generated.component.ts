/*
  This file is automatically generated. Any changes will be overwritten.
  Modify show-feat-line.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { TextBoxComponent } from '@radzen/angular/dist/textbox';
import { TextAreaComponent } from '@radzen/angular/dist/textarea';
import { NumericComponent } from '@radzen/angular/dist/numeric';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { GridComponent } from '@radzen/angular/dist/grid';
import { LabelComponent } from '@radzen/angular/dist/label';

import { ConfigService } from '../config.service';
import { AddFeatLineUnlockFeatComponent } from '../add-feat-line-unlock-feat/add-feat-line-unlock-feat.component';
import { AddFeatLineFeatRequirementComponent } from '../add-feat-line-feat-requirement/add-feat-line-feat-requirement.component';
import { AddFeatLineStatRequirementComponent } from '../add-feat-line-stat-requirement/add-feat-line-stat-requirement.component';
import { AddFeatLineDescriptionComponent } from '../add-feat-line-description/add-feat-line-description.component';
import { AddFeatLineFreeFeatComponent } from '../add-feat-line-free-feat/add-feat-line-free-feat.component';
import { AddFeatActionComponent } from '../add-feat-action/add-feat-action.component';


export class ShowFeatLineGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('heading0') heading0: HeadingComponent;
  @ViewChild('textbox0') textbox0: TextBoxComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('heading3') heading3: HeadingComponent;
  @ViewChild('textbox1') textbox1: TextBoxComponent;
  @ViewChild('heading4') heading4: HeadingComponent;
  @ViewChild('heading5') heading5: HeadingComponent;
  @ViewChild('textarea0') textarea0: TextAreaComponent;
  @ViewChild('heading11') heading11: HeadingComponent;
  @ViewChild('heading12') heading12: HeadingComponent;
  @ViewChild('numeric0') numeric0: NumericComponent;
  @ViewChild('heading13') heading13: HeadingComponent;
  @ViewChild('heading14') heading14: HeadingComponent;
  @ViewChild('numeric1') numeric1: NumericComponent;
  @ViewChild('button5') button5: ButtonComponent;
  @ViewChild('button6') button6: ButtonComponent;
  @ViewChild('heading10') heading10: HeadingComponent;
  @ViewChild('button3') button3: ButtonComponent;
  @ViewChild('grid5') grid5: GridComponent;
  @ViewChild('heading15') heading15: HeadingComponent;
  @ViewChild('button7') button7: ButtonComponent;
  @ViewChild('grid4') grid4: GridComponent;
  @ViewChild('heading9') heading9: HeadingComponent;
  @ViewChild('button1') button1: ButtonComponent;
  @ViewChild('grid1') grid1: GridComponent;
  @ViewChild('heading6') heading6: HeadingComponent;
  @ViewChild('button0') button0: ButtonComponent;
  @ViewChild('grid0') grid0: GridComponent;
  @ViewChild('heading8') heading8: HeadingComponent;
  @ViewChild('button2') button2: ButtonComponent;
  @ViewChild('grid2') grid2: GridComponent;
  @ViewChild('heading7') heading7: HeadingComponent;
  @ViewChild('button4') button4: ButtonComponent;
  @ViewChild('grid3') grid3: GridComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;
  Test: any;
  isAdmin: any;
  Feat: any;
  Name: any;
  Category: any;
  Description: any;
  EnergyCost: any;
  MaxEnergy: any;
  Edit: any;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


  load() {
    this.Test = sessionStorage.getItem("level");

    this.isAdmin = this.Test > 2;

    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
      withCredentials: true,
      params: new HttpParams().set('FeatID', this.parameters.FeatID)
    })
    .subscribe((result: any) => {
      this.Feat = result;

      this.Name = result.feat.Name ;

      this.Category = result.feat.Category ;

      this.Description = result.feat.Description ;

      this.EnergyCost = result.feat.EnergyCost;

      this.MaxEnergy = result.feat.MaxEnergy ;
    }, (result: any) => {

    });

    this.Edit = false;
  }

  button5Click(event: any) {
    if (this.Edit) {
        this.Edit = false;
    }

    if (!this.Edit) {
        this.Edit = true;
    }
  }

  button6Click(event: any) {
    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/UpdateFeat`, {
      withCredentials: true,
      params: new HttpParams().set('FeatID', this.parameters.FeatID)
                              .set('Name', `${this.Name}`)
                              .set('Category', `${this.Category}`)
                              .set('Description', `${this.Description}`)
                              .set('StartingCost', this.EnergyCost)
                              .set('MaxLevel', this.MaxEnergy)
    })
    .subscribe((result: any) => {
      this.Edit = false;

      this.Feat = result.value;

      this.Category = result.value.category;

      this.Name = result.value.name;

      this.Description = result.value.description;

      this.MaxEnergy = result.value.maxEnergy;

      this.EnergyCost = result.value.energyCost;
    }, (result: any) => {

    });
  }

  button3Click(event: any) {
    this.dialogService.open(AddFeatActionComponent, { parameters: {FeatID: this.parameters.FeatID}, title: 'Add Feat Action' })
        .afterClosed().subscribe(result => {
              this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    });
  }

  grid5Delete(event: any) {
    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/DeleteFeatAction`, {
      withCredentials: true,
      params: new HttpParams().set('FeatID', this.parameters.FeatID)
                              .set('FeatActionID', event.ID)
    })
    .subscribe((result: any) => {
      this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    }, (result: any) => {

    });
  }

  button7Click(event: any) {
    this.dialogService.open(AddFeatLineFreeFeatComponent, { parameters: {FeatID: this.parameters.FeatID}, title: 'Add Feat Line Free Feat' })
        .afterClosed().subscribe(result => {
              this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    });
  }

  grid4Delete(event: any) {
    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/RemoveFreeFeat`, {
      withCredentials: true,
      params: new HttpParams().set('FeatID', this.parameters.FeatID)
                              .set('FreeFeatID', event.ID)
    })
    .subscribe((result: any) => {
      this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    }, (result: any) => {

    });
  }

  grid4RowSelect(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['show-feat-line', event.ID]);
  }

  button1Click(event: any) {
    this.dialogService.open(AddFeatLineDescriptionComponent, { parameters: {FeatID: this.parameters.FeatID}, title: 'Add Feat Line Description' })
        .afterClosed().subscribe(result => {
              this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    });
  }

  grid1Delete(event: any) {
    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/RemoveFeatDescription`, {
      withCredentials: true,
      params: new HttpParams().set('FeatID', this.parameters.FeatID)
                              .set('Amount', event.Item2)
    })
    .subscribe((result: any) => {
      this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    }, (result: any) => {

    });
  }

  button0Click(event: any) {
    this.dialogService.open(AddFeatLineStatRequirementComponent, { parameters: {FeatID: this.parameters.FeatID}, title: 'Add Feat Line Stat Requirement' })
        .afterClosed().subscribe(result => {
              this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    });
  }

  grid0Delete(event: any) {
    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/RemoveStatRequirement`, {
      withCredentials: true,
      params: new HttpParams().set('FeatID', this.parameters.FeatID)
                              .set('Stat', event.Item1)
                              .set('Amount', event.Item2)
    })
    .subscribe((result: any) => {
      this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    }, (result: any) => {

    });
  }

  button2Click(event: any) {
    this.dialogService.open(AddFeatLineFeatRequirementComponent, { parameters: {FeatID: this.parameters.FeatID}, title: 'Add Feat Line Feat Requirement' })
        .afterClosed().subscribe(result => {
              this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    });
  }

  grid2Delete(event: any) {
    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/RemoveFeatRequirement`, {
      withCredentials: true,
      params: new HttpParams().set('FeatID', this.parameters.FeatID)
                              .set('RequiredFeat', event.Item1.ID )
    })
    .subscribe((result: any) => {
      this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    }, (result: any) => {

    });
  }

  grid2RowSelect(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['show-feat-line', event.Item1.ID]);
  }

  button4Click(event: any) {
    this.dialogService.open(AddFeatLineUnlockFeatComponent, { parameters: {FeatID: this.parameters.FeatID}, title: 'Add Feat Line Unlock Feat' })
        .afterClosed().subscribe(result => {
              this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    });
  }

  grid3Delete(event: any) {
    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/RemoveFeatRequirement`, {
      withCredentials: true,
      params: new HttpParams().set('FeatID', event.ID)
                              .set('RequiredFeat', this.parameters.FeatID)
    })
    .subscribe((result: any) => {
      this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/FeatLines/GetFeat`, {
        withCredentials: true,
        params: new HttpParams().set('FeatID', this.parameters.FeatID)
      })
      .subscribe((result: any) => {
        this.Feat = result;
      }, (result: any) => {

      });
    }, (result: any) => {

    });
  }

  grid3RowSelect(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['show-feat-line', event.Item1.ID]);
  }
}

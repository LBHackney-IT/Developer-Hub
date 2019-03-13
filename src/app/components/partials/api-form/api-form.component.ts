import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IApi } from 'src/app/interfaces/IApi';
import { compliancyConfigMap } from '../../../shared/config';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { selectApiList } from '../../../store/selectors/api.selectors';
import { GetApiList, AddApiSuccess, AddApi } from '../../../store/actions/api.actions';
import { retry } from 'rxjs/operators';
import { AlertService } from '../../../services/alert.service';
import { SpinnerService } from '../../../services/spinner.service';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.scss']
})
export class ApiFormComponent implements OnInit {

  constructor(private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private store: Store<IAppState>,
    private alertService: AlertService,
    private spinnerService: SpinnerService,
    private router: Router
  ) { }

  creating = false;

  api: IApi;

  apiForm = new FormGroup({
    id: new FormControl(null, [
      // Validators.required
    ]),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    summary: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    compliant: new FormGroup({
      open_source: new FormControl(false, [
        Validators.required
      ]),
      test_driven: new FormControl(false, [
        Validators.required
      ]),
      endpoint_documentation: new FormControl(false, [
        Validators.required
      ]),
      centralised_logging: new FormControl(false, [
        Validators.required
      ]),
      centralised_application_monitoring: new FormControl(false, [
        Validators.required
      ]),
      centralised_exception_monitoring: new FormControl(false, [
        Validators.required
      ]),
      authentication: new FormControl(false, [
        Validators.required
      ]),
      deployment_pipeline: new FormControl(false, [
        Validators.required
      ]),
      automated_tests: new FormControl(false, [
        Validators.required
      ]),
      twelve_factor_conformant: new FormControl(false, [
        Validators.required
      ]),
      cloud_hosted: new FormControl(false, [
        Validators.required
      ]),
      automated_linting: new FormControl(false, [
        Validators.required
      ]),
      automated_vulnerabilty_testing: new FormControl(false, [
        Validators.required
      ]),
      documentation: new FormControl(false, [
        Validators.required
      ]),

    }),
    internal: new FormControl(true, [
      Validators.required
    ]),
    staging: new FormGroup({
      url: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      swagger_url: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      deployed: new FormControl(null, [
        Validators.required
      ]),
      healthStatus: new FormControl(false, [
        Validators.required
      ])
    }),
    production: new FormGroup({
      url: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      swagger_url: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      deployed: new FormControl(null, [
        Validators.required
      ]),
      healthStatus: new FormControl(false, [
        Validators.required
      ])
    }),
    approved: new FormControl(false, [
      Validators.required
    ]),
    stage: new FormControl(null, [
      Validators.required
    ]),
    github_url: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    owner: new FormGroup({
      product: new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        contactDetails: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.email
        ]),
      }),
      technical: new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        contactDetails: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.email
        ]),
      }),
    }),
  });

  /**
 *
 *
 * @readonly
 * @memberof RegisterComponent
 */
  get f() { return this.apiForm.controls; }

  submitForm = () => {
    const api: IApi = this.apiForm.getRawValue();
    this.store.dispatch(new AddApi(api));
    this.router.navigateByUrl('/api-list');
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    if (id !== 'new') {
      this.getApiAndPatchValues(id);
    } else {
      this.creating = true;
    }
  }


  /**
   * @summary this function calls the ApiService
   * to fetch the single API
   * by passing the api.id in the url string
   * @param {id}
   * @memberof ApiFormComponent
   */
  getApiAndPatchValues = (id: string): void => {
    this.spinnerService.displaySpinner();
    this.store.pipe(select(selectApiList)).subscribe(
      (response: IApi[]) => {
        this.spinnerService.hideSpinner();
        const apis: IApi[] = response;
        const api = apis.find(item => item.id === id);
        this.api = api;
        this.patchValuesApi();
      },
      (error) => {
        this.spinnerService.hideSpinner();
        this.store.dispatch(new GetApiList());
      });
  }

  /**
   * This creates an object with compliancy ID and the compliancyConfigMap
   * to retrieve the text for each compliancy.
   * It then sorts  the array of objects in ascending order based on the first character.
   *
   * @memberof ApiFormComponent
   */
  generateCompliancyObjects = (): object[] => {
    const compliantFormGroup = this.apiForm.controls.compliant as FormGroup;
    const compliantControls = compliantFormGroup.controls;
    const compliantObject = Object.keys(compliantControls);
    return compliantObject.map((id) => {
      return {
        id: id,
        text: compliancyConfigMap[id]
      };
    }).sort((a, b) => {
      return a.text.charCodeAt(0) - b.text.charCodeAt(0);
    });
  }


  /**
   * @summary This function updates
   * some of the values in the forms.
   * If all values are getting updated, change
   * from patchValue() to setValue() for further
   * validation at runtime
   *
   * @memberof ApiFormComponent
   */
  patchValuesApi(): void {
    this.apiForm.patchValue({
      id: this.api.id,
      title: this.api.title,
      summary: this.api.summary,
      internal: this.api.internal,
      staging: this.api.staging,
      production: this.api.production,
      description: this.api.description,
      approved: this.api.approved,
      stage: this.api.stage,
      github_url: this.api.github_url,
      owner: this.api.owner,
      compliant: this.api.compliant
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IApi } from 'src/app/interfaces/IApi';
import { compliancyConfigMap } from '../../../shared/config';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { selectApiList } from '../../../store/selectors/api.selectors';
import { GetApiList } from '../../../store/actions/api.actions';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.scss']
})
export class ApiFormComponent implements OnInit {

  constructor(private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private store: Store<IAppState>
  ) { }


  api: IApi;

  apiForm = new FormGroup({
    id: new FormControl('id', [
      Validators.required
    ]),
    title: new FormControl('', [
      Validators.required
    ]),
    summary: new FormControl('summary', [
      Validators.required
    ]),
    compliant: new FormGroup({
      revision_control: new FormControl('', [
        Validators.required
      ]),
      dependency_management: new FormControl('', [
        Validators.required
      ]),
      environment_config: new FormControl('', [
        Validators.required
      ]),
      decoupled_services: new FormControl('', [
        Validators.required
      ]),
      build_run_stage: new FormControl('', [
        Validators.required
      ]),
      stateless_process: new FormControl('', [
        Validators.required
      ]),
      export_services: new FormControl('', [
        Validators.required
      ]),
      scalable_process: new FormControl('', [
        Validators.required
      ]),
      rapid_start_shutdown: new FormControl('', [
        Validators.required
      ]),
      maintain_consistency_between_stages: new FormControl('', [
        Validators.required
      ]),
      logging: new FormControl('', [
        Validators.required
      ]),
      admin_management_process: new FormControl('', [
        Validators.required
      ])
    }),
    internal: new FormControl(null, [
      Validators.required
    ]),
    staging: new FormGroup({
      url: new FormControl('', [
        Validators.required
      ]),
      swagger_url: new FormControl('', [
        Validators.required
      ]),
      deployed: new FormControl(null, [
        Validators.required
      ]),
      healthStatus: new FormControl(null, [
        Validators.required
      ])
    }),
    production: new FormGroup({
      url: new FormControl('', [
        Validators.required
      ]),
      swagger_url: new FormControl('', [
        Validators.required
      ]),
      deployed: new FormControl(null, [
        Validators.required
      ]),
      healthStatus: new FormControl('', [
        Validators.required
      ])
    }),
    description: new FormControl('', [
      Validators.required
    ]),
    approved: new FormControl('false', [
      Validators.required
    ]),
    stage: new FormControl('', [
      Validators.required
    ]),
    github_url: new FormControl('', [
      Validators.required
    ]),
    owner: new FormGroup({
      product: new FormGroup({
        name: new FormControl('', [
          Validators.required
        ]),
        contactDetails: new FormControl('', [
          Validators.required
        ]),
      }),
      technical: new FormGroup({
        name: new FormControl('', [
          Validators.required
        ]),
        contactDetails: new FormControl('', [
          Validators.required
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
    this.apiService.putApi(api).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.getApiAndPatchValues(id);
  }


  /**
   * @summary this function calls the ApiService
   * to fetch the single API
   * by passing the api.id in the url string
   * @param {id}
   * @memberof ApiFormComponent
   */
  getApiAndPatchValues = (id: string): void => {
    this.store.pipe(select(selectApiList)).subscribe(
      (response: IApi[]) => {
          const apis: IApi[] = response;
          const api = apis.find(item => item.id === id);
          this.api = api;
          this.patchValuesApi();
      },
      (error) => {
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

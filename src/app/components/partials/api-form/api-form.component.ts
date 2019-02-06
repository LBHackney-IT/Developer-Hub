import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IApi } from 'src/app/interfaces/IApi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.scss']
})
export class ApiFormComponent implements OnInit {

  constructor(private apiService: ApiService,
              private activeRoute: ActivatedRoute) { }

  
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
    internal: new FormControl('', [
      Validators.required
    ]),
    staging: new FormGroup({
      url: new FormControl('', [
        Validators.required
      ]),
      swagger_url: new FormControl('', [
        Validators.required
      ]),
      deployed: new FormControl('', [
        Validators.required
      ]),
      healthStatus: new FormControl('false', [
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
      deployed: new FormControl('', [
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
    console.log('submit');
  }
  ngOnInit() {
    console.log(this.f);

    const id = this.activeRoute.snapshot.params['id'];

    this.getApi(id);

    console.log('api from console' + this.api)
  }

  getApi = (id: string): void => {
    this.apiService.getApi(id)
    .subscribe(
      (response) => {
        this.api = response;
      },
      (error) => {
        console.log(error);
      });
  }


}

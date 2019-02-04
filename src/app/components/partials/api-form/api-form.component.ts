import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.scss']
})
export class ApiFormComponent implements OnInit {

  constructor() { }

  apiForm = new FormGroup({
    id: new FormControl('id', [
      Validators.required
    ]),
    title: new FormControl('title', [
      Validators.required
    ]),
    summary: new FormControl('summary', [
      Validators.required
    ]),
    compliant: new FormGroup({
      revision_control: new FormControl('true', [
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
      healthStatus: new FormControl('', [
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
    approved: new FormControl('', [
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
  }


}

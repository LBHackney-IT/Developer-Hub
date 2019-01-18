import { IApi } from '../interfaces/IApi';

export const apis: IApi[] = [
  {
    id: 'asbestos',
    title: "Asbestos API",
    summary: "The Asbestos API provides asbestos related information on London Borough of Hackney property stock.",
    compliant: {
      revision_control: true,
      dependency_management: true,
      environment_config: true,
      decoupled_services: true,
      build_run_stage: true,
      stateless_process: true,
      export_services: true,
      scalable_process: false,
      rapid_start_shutdown: false,
      maintain_consistency_between_stages: false,
      logging: false,
      admin_management_process: false
    },
    staging: {
      url: "http://10.160.0.137:667/swagger/index.html",
      swagger_url: "http://10.160.0.137:667/swagger/index.html",
      deployed: true, 
      healthStatus: true,
    },
    production: {
      url: "http://10.160.0.137:557/swagger/index.html",
      swagger_url: "http://10.160.0.137:557/swagger/index.html",
      deployed: true, 
      healthStatus: true,
    },
    github_url: "https://github.com/LBHackney-IT/HackneyAsbestosAPI",
    owner: {
      name: "Name",
      contactDetails: "name@email.com"
    },
    description: "The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements. The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports." 
  },
  {
    id: 'income_collection',
    title: "Income Collection API",
    summary: "The Income Collection API is a Rails application that serves as the back end for the LBH Income Collection application.", 
    compliant: {
      revision_control: true,
      dependency_management: true,
      environment_config: true,
      decoupled_services: true,
      build_run_stage: true,
      stateless_process: true,
      export_services: true,
      scalable_process: true,
      rapid_start_shutdown: true,
      maintain_consistency_between_stages: true,
      logging: true,
      admin_management_process: true
    },
    staging: {
      url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/income",
      swagger_url: "not available",
      deployed: true, 
      healthStatus: true,
    },
    production: {
      url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/income",
      swagger_url: "not available",
      deployed: true, 
      healthStatus: true,
    },
    owner: {
      name: "Name",
      contactDetails: "name@email.com"
    },
    github_url: "https://github.com/LBHackney-IT/LBH-IncomeCollection",
    description: "The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements. The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports." 
  },
  {
    id: 'manage_a_tenancy',
    title: "Manage a Tenancy API",
    summary: "The Manage a Tenancy API allows estate officers and managers to search for and retrieve residents’ contact and account details.", 
    compliant: {
      revision_control: true,
      dependency_management: true,
      environment_config: true,
      decoupled_services: true,
      build_run_stage: true,
      stateless_process: false,
      export_services: false,
      scalable_process: false,
      rapid_start_shutdown: false,
      maintain_consistency_between_stages: false,
      logging: false,
      admin_management_process: false
    },
    staging: {
      url: "https://sandboxapi.hackney.gov.uk/manageatenancy/swagger/index.html",
      swagger_url: "https://sandboxapi.hackney.gov.uk/manageatenancy/swagger/index.html",
      deployed: true, 
      healthStatus: true,
    },
    production: {
      url: "https://api.hackney.gov.uk/manageatenancy/swagger/index.html",
      swagger_url: "https://api.hackney.gov.uk/manageatenancy/swagger/index.html",
      deployed: true, 
      healthStatus: false,
    },
    owner: {
      name: "Name",
      contactDetails: "name@email.com"
    },
    github_url: "https://github.com/LBHackney-IT/Manage_a_tenancy_API",
    description: "The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements. The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports." 
  },
  {
    id: 'ncc',
    title: "NCC API",
    summary: "The NCC API provides up to date information on Neighbourhood Contact Centre CRM application, connecting to on cloud Microsoft Dynamics CRM 365 datastore and the legacy Universal Housing database for some data.", 
    compliant: {
      revision_control: true,
      dependency_management: true,
      environment_config: true,
      decoupled_services: true,
      build_run_stage: true,
      stateless_process: false,
      export_services: false,
      scalable_process: false,
      rapid_start_shutdown: false,
      maintain_consistency_between_stages: false,
      logging: false,
      admin_management_process: false
    },
    staging: {
      url: "https://sandboxapi.hackney.gov.uk/lbhnccapi/swagger/index.html",
      swagger_url: "https://sandboxapi.hackney.gov.uk/lbhnccapi/swagger/index.html",
      deployed: true, 
      healthStatus: true,
    },
    production: {
      url: "http://api.hackney.gov.uk/lbhnccapi/swagger/index.html",
      swagger_url: "http://api.hackney.gov.uk/lbhnccapi/swagger/index.html",
      deployed: true, 
      healthStatus: false,
    },
    owner: {
      name: "Name",
      contactDetails: "name@email.com"
    },
    github_url: "https://github.com/LBHackney-IT/LBHNCCApi",
    description: "The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements. The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports." 
  },
  {
    id: 'rent_account',
    title: "Rent Account API",
    summary: "The Rent API provides up to date information on Rent Accounts.", 
    compliant: {
      revision_control: true,
      dependency_management: true,
      environment_config: true,
      decoupled_services: true,
      build_run_stage: true,
      stateless_process: true,
      export_services: true,
      scalable_process: true,
      rapid_start_shutdown: true,
      maintain_consistency_between_stages: true,
      logging: true,
      admin_management_process: true
    },
    staging: {
      url: "https://example.com/staging",
      swagger_url: "https://example.com/staging/swagger/v1/swagger.json",
      deployed: true, 
      healthStatus: true,
    },
    production: {
      url: "https://example.com",
      swagger_url: "https://example.com/swagger/v1/swagger.json",
      deployed: true, 
      healthStatus: false,
    },
    owner: {
      name: "Name",
      contactDetails: "name@email.com"
    },
    github_url: "https://github.com/LBHackney-IT/RentAccountAPI",
    description: "The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements. The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports." 
  },
  {
    id: 'repairs',
    title: "Repairs API",
    summary: "The Repairs API provides up to date data on repairs-related information with the Hackney Council.", 
    compliant: {
      revision_control: true,
      dependency_management: true,
      environment_config: true,
      decoupled_services: true,
      build_run_stage: true,
      stateless_process: true,
      export_services: true,
      scalable_process: true,
      rapid_start_shutdown: true,
      maintain_consistency_between_stages: true,
      logging: true,
      admin_management_process: true
    },
    staging: {
      url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/repairs/swagger/index.html",
      swagger_url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/repairs/swagger/index.html",
      deployed: true, 
      healthStatus: true,
    },
    production: {
      url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/repairs/swagger/index.html",
      swagger_url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/repairs/swagger/index.html",
      deployed: true, 
      healthStatus: true,
    },
    owner: {
      name: "Name",
      contactDetails: "name@email.com"
    },
    github_url: "https://github.com/LBHackney-IT/Hackney_Repairs_API",
    description: "The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements. The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports." 
  },
  {
    id: 'tenancy',
    title: "Tenancy API",
    summary: "The Tenancy API provides up to date information on tenancies and arrears information about tenants.", 
    compliant: {
      revision_control: true,
      dependency_management: true,
      environment_config: true,
      decoupled_services: true,
      build_run_stage: true,
      stateless_process: true,
      export_services: true,
      scalable_process: true,
      rapid_start_shutdown: true,
      maintain_consistency_between_stages: true,
      logging: true,
      admin_management_process: true
    },
    staging: {
      url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/tenancy/",
      swagger_url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/tenancy/swagger",
      deployed: true, 
      healthStatus: true,
    },
    production: {
      url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/tenancy/swagger",
      swagger_url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/tenancy/swagger",
      deployed: true, 
      healthStatus: true,
    },
    owner: {
      name: "Name",
      contactDetails: "name@email.com"
    },
    github_url: "https://github.com/LBHackney-IT/LBHTenancyAPI",
    description: "The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements. The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports." 
  },
  {
    id: 'tenancy_management_process',
    title: "Tenancy Management Process API",
    summary: "The Tenancy Management Process API provides the logic and act as an engine built specifically for the Manage a Tenancy process.", 
    compliant: {
      revision_control: false,
      dependency_management: false,
      environment_config: false,
      decoupled_services: false,
      build_run_stage: false,
      stateless_process: false,
      export_services: false,
      scalable_process: false,
      rapid_start_shutdown: false,
      maintain_consistency_between_stages: false,
      logging: false,
      admin_management_process: false
    },
    staging: {
      url: "https://sandboxapi.hackney.gov.uk/tmprocessapi/swagger/",
      swagger_url: "https://sandboxapi.hackney.gov.uk/tmprocessapi/swagger/",
      deployed: true, 
      healthStatus: true,
    },
    production: {
      url: "https://api.hackney.gov.uk/tmprocess/swagger/",
      swagger_url: "https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/tenancy/swagger",
      deployed: true, 
      healthStatus: true,
    },
    owner: {
      name: "Name",
      contactDetails: "name@email.com"
    },
    github_url: "https://github.com/LBHackney-IT/LBHTenancyAPI",
    description: "The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements. The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports." 
  }
];
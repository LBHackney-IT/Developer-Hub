const apis = [
    {
        'compliant': {
            'endpoint_documentation': true,
            'twelve_factor_conformant': true,
            'centralised_exception_monitoring': true,
            'automated_tests': true,
            'documentation': true,
            'automated_vulnerabilty_testing': false,
            'cloud_hosted': true,
            'deployment_pipeline': true,
            'centralised_logging': true,
            'open_source': true,
            'test_driven': true,
            'centralised_application_monitoring': false,
            'authentication': true,
            'automated_linting': false
        },
        'approved': true,
        'summary': 'The Repairs API provides up to date data on repairs-related information with the Hackney Council.',
        'stage': 'alpha',
        'github_url': 'https://github.com/LBHackney-IT/Hackney_Repairs_API',
        'owner': {
            'technical': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            },
            'product': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            }
        },
        'internal': true,
        'production': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/repairs/swagger/index.html',
            'swagger_url': 'https://api.hackney.gov.uk/unboxedhackneyrepairs/swagger/v1/swagger.json'
        },
        'description': 'Lorem Ipsum',
        'id': 'repairs',
        'staging': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/repairs/swagger/index.html',
            'swagger_url': 'https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/repairs/swagger/v1/swagger.json'
        },
        'title': 'Repairs API'
    },
    {
        'compliant': {
            'endpoint_documentation': true,
            'twelve_factor_conformant': true,
            'centralised_exception_monitoring': true,
            'automated_tests': true,
            'documentation': true,
            'automated_vulnerabilty_testing': true,
            'cloud_hosted': true,
            'deployment_pipeline': true,
            'centralised_logging': true,
            'open_source': true,
            'test_driven': true,
            'centralised_application_monitoring': true,
            'authentication': true,
            'automated_linting': true
        },
        'approved': true,
        'summary': 'The Tenancy Management Process API provides the logic and act as an engine built specifically for the Manage a Tenancy process.',
        'stage': 'alpha',
        'github_url': 'https://github.com/LBHackney-IT/LBHTenancyAPI',
        'owner': {
            'technical': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            },
            'product': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            }
        },
        'internal': true,
        'production': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://api.hackney.gov.uk/tmprocess/swagger/',
            'swagger_url': 'https://api.hackney.gov.uk/tmprocess/swagger/v1/swagger.json'
        },
        'description': 'Test',
        'id': 'tenancy_management_process',
        'staging': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://sandboxapi.hackney.gov.uk/tmprocessapi/swagger/',
            'swagger_url': 'https://sandboxapi.hackney.gov.uk/tmprocessapi/swagger/'
        },
        'title': 'Tenancy Management Process API'
    },
    {
        'compliant': {
            'endpoint_documentation': true,
            'twelve_factor_conformant': true,
            'centralised_exception_monitoring': true,
            'automated_tests': true,
            'documentation': true,
            'automated_vulnerabilty_testing': true,
            'cloud_hosted': true,
            'deployment_pipeline': true,
            'centralised_logging': true,
            'open_source': true,
            'test_driven': true,
            'centralised_application_monitoring': true,
            'authentication': true,
            'automated_linting': true
        },
        'approved': true,
        'summary': 'The NCC API provides up to date information on Neighbourhood Contact Centre CRM application, connecting to on cloud Microsoft Dynamics CRM 365 datastore and the legacy Universal Housing database for some data.',
        'stage': 'beta',
        'github_url': 'https://github.com/LBHackney-IT/LBHNCCApi',
        'owner': {
            'technical': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            },
            'product': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            }
        },
        'internal': true,
        'production': {
            'deployed': true,
            'healthStatus': false,
            'url': 'http://api.hackney.gov.uk/lbhnccapi/swagger/index.html',
            'swagger_url': 'https://api.hackney.gov.uk/lbhnccapi/swagger/v1/swagger.json'
        },
        'description': 'The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements.The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports.',
        'id': 'ncc',
        'staging': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://sandboxapi.hackney.gov.uk/lbhnccapi/swagger/index.html',
            'swagger_url': 'https://sandboxapi.hackney.gov.uk/lbhnccapi/swagger/index.html'
        },
        'title': 'NCC API'
    },
    {
        'compliant': {
            'endpoint_documentation': true,
            'twelve_factor_conformant': true,
            'centralised_exception_monitoring': true,
            'automated_tests': true,
            'documentation': true,
            'automated_vulnerabilty_testing': true,
            'cloud_hosted': true,
            'deployment_pipeline': true,
            'centralised_logging': true,
            'open_source': true,
            'test_driven': true,
            'centralised_application_monitoring': true,
            'authentication': true,
            'automated_linting': true
        },
        'approved': true,
        'summary': 'The Manage a Tenancy API allows estate officers and managers to search for and retrieve residents’ contact and account details.',
        'stage': 'alpha',
        'github_url': 'https://github.com/LBHackney-IT/Manage_a_tenancy_API',
        'owner': {
            'technical': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            },
            'product': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            }
        },
        'internal': false,
        'production': {
            'deployed': true,
            'healthStatus': false,
            'url': 'https://api.hackney.gov.uk/manageatenancy/swagger/index.html',
            'swagger_url': 'https://api.hackney.gov.uk/manageatenancy/swagger/v1/swagger.json'
        },
        'description': 'The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements.The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports.',
        'id': 'manage_a_tenancy',
        'staging': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://sandboxapi.hackney.gov.uk/manageatenancy/swagger/index.html',
            'swagger_url': 'https://sandboxapi.hackney.gov.uk/manageatenancy/swagger/index.html'
        },
        'title': 'Manage a Tenancy API'
    },
    {
        'compliant': {
            'endpoint_documentation': true,
            'twelve_factor_conformant': true,
            'centralised_exception_monitoring': false,
            'automated_tests': true,
            'documentation': true,
            'automated_vulnerabilty_testing': true,
            'cloud_hosted': true,
            'deployment_pipeline': true,
            'centralised_logging': false,
            'open_source': true,
            'test_driven': true,
            'centralised_application_monitoring': false,
            'authentication': true,
            'automated_linting': true
        },
        'approved': true,
        'summary': 'The Asbestos API provides asbestos related information on London Borough of Hackney property stock.',
        'stage': 'alpha',
        'github_url': 'https://github.com/LBHackney-IT/HackneyAsbestosAPI',
        'owner': {
            'technical': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            },
            'product': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            }
        },
        'internal': true,
        'production': {
            'deployed': true,
            'healthStatus': true,
            'url': 'http://10.160.0.137:557/swagger/index.html',
            'swagger_url': 'http://10.160.0.137:557/swagger/v1/swagger.json'
        },
        'description': 'The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements.The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports.',
        'id': 'asbestos',
        'staging': {
            'deployed': true,
            'healthStatus': true,
            'url': 'http://10.160.0.137:667/swagger/index.html',
            'swagger_url': 'http://10.160.0.137:667/swagger/index.html'
        },
        'title': 'Asbestos API'
    },
    {
        'compliant': {
            'endpoint_documentation': true,
            'twelve_factor_conformant': true,
            'centralised_exception_monitoring': true,
            'automated_tests': true,
            'documentation': true,
            'automated_vulnerabilty_testing': true,
            'cloud_hosted': true,
            'deployment_pipeline': true,
            'centralised_logging': true,
            'open_source': true,
            'test_driven': true,
            'centralised_application_monitoring': true,
            'authentication': true,
            'automated_linting': true
        },
        'approved': true,
        'summary': 'The NCC API provides up to date information on Neighbourhood Contact Centre CRM application, connecting to on cloud Microsoft Dynamics CRM 365 datastore and the legacy Universal Housing database for some data.',
        'stage': 'beta',
        'github_url': 'https://github.com/LBHackney-IT/LBHNCCApi',
        'owner': {
            'technical': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            },
            'product': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            }
        },
        'internal': false,
        'production': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/income',
            'swagger_url': 'not available'
        },
        'description': 'The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements.The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports.',
        'id': 'income_collection',
        'staging': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/income',
            'swagger_url': 'not available'
        },
        'title': 'Income Collection API'
    },
    {
        'compliant': {
            'endpoint_documentation': true,
            'twelve_factor_conformant': true,
            'centralised_exception_monitoring': false,
            'automated_tests': true,
            'documentation': false,
            'automated_vulnerabilty_testing': false,
            'cloud_hosted': true,
            'deployment_pipeline': true,
            'centralised_logging': false,
            'open_source': true,
            'test_driven': true,
            'centralised_application_monitoring': false,
            'authentication': true,
            'automated_linting': false
        },
        'approved': true,
        'summary': 'The Rent API provides up to date information on Rent Accounts.',
        'stage': 'alpha',
        'github_url': 'https://github.com/LBHackney-IT/RentAccountAPI',
        'owner': {
            'technical': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            },
            'product': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            }
        },
        'internal': true,
        'production': {
            'deployed': true,
            'healthStatus': false,
            'url': 'https://example.com',
            'swagger_url': 'not availiable'
        },
        'description': 'The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements.The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports.',
        'id': 'rent_account',
        'staging': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://example.com/staging',
            'swagger_url': 'https://example.com/staging/swagger/v1/swagger.json'
        },
        'title': 'Rent Account API'
    },
    {
        'compliant': {
            'endpoint_documentation': true,
            'twelve_factor_conformant': true,
            'centralised_exception_monitoring': true,
            'automated_tests': true,
            'documentation': true,
            'automated_vulnerabilty_testing': true,
            'cloud_hosted': true,
            'deployment_pipeline': true,
            'centralised_logging': true,
            'open_source': true,
            'test_driven': true,
            'centralised_application_monitoring': true,
            'authentication': true,
            'automated_linting': true
        },
        'approved': true,
        'summary': 'The Tenancy API provides up to date information on tenancies and arrears information about tenants.',
        'stage': 'beta',
        'github_url': 'https://github.com/LBHackney-IT/LBHTenancyAPI',
        'owner': {
            'technical': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            },
            'product': {
                'name': 'name',
                'contactDetails': 'email@email.com'
            }
        },
        'internal': true,
        'production': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/tenancy/swagger',
            'swagger_url': 'not available'
        },
        'description': 'The Asbestos API provides asbestos related information on London Borough of Hackney property stock. This API provides data from PSI2000, a data source that used to be hosted on-prem and that is currently accessed externally as a software as a service. The endpoints of Asbestos API allow access to data about inspections carried on in properties via the property references. If there is one or more inspections for a property, the id's contained allows to query other specific in order to get more specific asbestos data about the property like rooms, floors or elements.The API also allows to access to the actual documents related to asbestos inspections on properties like photos, floorplans and reports.',
        'id': 'tenancy',
        'staging': {
            'deployed': true,
            'healthStatus': true,
            'url': 'https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/tenancy/',
            'swagger_url': 'https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/tenancy/swagger'
        },
        'title': 'Tenancy API'
    }
]
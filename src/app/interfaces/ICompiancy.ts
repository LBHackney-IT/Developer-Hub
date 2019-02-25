/**
 *
 *
 * @export
 * @interface ICompiancy
 */
export interface ICompiancy {
    open_source: boolean;
    test_driven: boolean;
    endpoint_documentation: boolean;
    centralised_logging: boolean;
    centralised_application_monitoring: boolean;
    centralised_exception_monitoring: boolean;
    authentication: boolean;
    deployment_pipeline: boolean;
    automated_tests: boolean;
    twelve_factor_conformant: boolean;
    cloud_hosted: boolean;
    automated_linting: boolean;
    automated_vulnerabilty_testing: boolean;
    documentation: boolean;
}

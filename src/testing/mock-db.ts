import { IApi } from 'src/app/interfaces/IApi';
import * as Faker from 'faker/locale/en_GB';
export const generateTestApis = (numberOfApis: number): IApi[] => {
    const apis: IApi[] = [];
    for (let i = 0; i < numberOfApis; i++) {
        apis.push(generateRandomApi());
    }
    return apis;
};

const generateRandomApi = (): IApi => {
    return {
        id: Faker.random.alphaNumeric(8),
        title: Faker.lorem.word() + ' API',
        summary: Faker.lorem.words(10),
        compliant: {
            endpoint_documentation: Faker.random.boolean(),
            twelve_factor_conformant: Faker.random.boolean(),
            centralised_exception_monitoring: Faker.random.boolean(),
            automated_tests: Faker.random.boolean(),
            documentation: Faker.random.boolean(),
            automated_vulnerabilty_testing: Faker.random.boolean(),
            cloud_hosted: Faker.random.boolean(),
            deployment_pipeline: Faker.random.boolean(),
            centralised_logging: Faker.random.boolean(),
            open_source: Faker.random.boolean(),
            test_driven: Faker.random.boolean(),
            centralised_application_monitoring: Faker.random.boolean(),
            authentication: Faker.random.boolean(),
            automated_linting: Faker.random.boolean()
        },
        internal: Faker.random.boolean(),
        staging: {
            url: Faker.internet.url(),
            swagger_url: Faker.internet.url(),
            deployed: Faker.random.boolean(),
            healthStatus: Faker.random.boolean()
        },
        production: {
            url: Faker.internet.url(),
            swagger_url: Faker.internet.url(),
            deployed: Faker.random.boolean(),
            healthStatus: Faker.random.boolean()
        },
        description: Faker.lorem.words(20),
        approved: Faker.random.boolean(),
        stage: Faker.random.word(),
        github_url: Faker.internet.url(),
        owner: {
            product: {
                name: Faker.name.firstName() + ' ' + Faker.name.lastName(),
                contactDetails: Faker.internet.email()
            },
            technical: {
                name: Faker.name.firstName() + ' ' + Faker.name.lastName(),
                contactDetails: Faker.internet.email()
            }
        }
    };
};

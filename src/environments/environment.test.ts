export const environment = {
    production: false,
    cognito: {
        userPoolId: 'eu-west-2_rQ3dI3Vbp',
        region: 'eu-west-2',
        clientId: 'fjnkqnloe7adg1b85kvdmmscm'
    },
    // apiURL : {
    //   tokenService: 'http://localhost:3000/',
    //   apiService: 'http://localhost:3000/'
    // }
    apiURL: {
        tokenService: 'https://j88uh2klte.execute-api.eu-west-2.amazonaws.com/dev/',
        apiService: 'https://j88uh2klte.execute-api.eu-west-2.amazonaws.com/dev/'
    }
};

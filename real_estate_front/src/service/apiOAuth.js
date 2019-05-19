const credentials = {
                client: {
                    id: 'est1oM5HFpGWPro7v147GIJKaBAbM5HKaMI2XYBo2av',
                    secret: 'oGl2xH3srFntDrXywt2bVZlyTRDpFbxf5OgMapINJuEkH0qbdT8Zryips1XBr89LCZeBaP1ONPHCJCDo3fAAjGYePQ95B5oe3utExzC340KytTGmIxD5t9pQtUEiShjX',
                },
                auth: {
                  tokenHost: 'http://104.248.27.0',
                  tokenPath: '/api/v1/auth/token/',
                  revokePath: '/api/v1/auth/revoke_token/'
                },
                options: {
                  bodyFormat: 'json',
                }
            };
export const oauth2 = require('simple-oauth2').create(credentials);


export const accessToken = (token) => {
    return  oauth2.accessToken.create(token)
};


export default oauth2
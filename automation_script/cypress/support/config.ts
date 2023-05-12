export interface EnvObj {
    beta: string | number,
    staging: string | number,
    prod: string | number
}

export interface Config {
    ENV: string,
    customURL: string,
    schoolCode: string,
    password: string,
    tenantId: EnvObj,
    buildingId: EnvObj,
    admin: EnvObj,
    loginPage: string,
    customLoginPage: string
    tmsAPI: string,
    nodeAPI: string,
    analyticsAPI: string,
}
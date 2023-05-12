module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity:false,
  experimentalSessionAndOrigin: true,
  pageLoadTimeout: 180000,
  experimentalModifyObstructiveThirdPartyCode: true,
  experimentalInteractiveRunEvents: true,
  env: {
    LOGIN_URL:"https://betalaunchpad.classlink.com",
    // USER_NAME:"vineet2@yopmail.com",
    // PASSWORD:"vineet2@yopmail.com",
    USER_NAME:"classlink@motherson.com",
    PASSWORD:"Buy@V3st",
    AD_USER_NAME:'qastudent',
    AD_PASSWORD:'Buy@V3st',
    CODE:'QA2',
    GOOGLE_USER:"mfaremember@classlink.ai",
    GOOGLE_PASSWORD:"Buy@V3st",
    AZURE_USER:"Spstest81021@outlook.com",
    AZURE_PASSWORD:"MSOutlook@2021",
    // AZURE_USER:"vishal.agarwal@classlink.com",
    // AZURE_PASSWORD:"MSOutlook@2021",
    MICROSOFT_ONLINE:"https://login.microsoftonline.com",
    MICROSOFT_LIVE:"https://login.live.com"
  },
};

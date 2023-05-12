export const env = {
    gwstoken:"ff17d47d-fa75-4498-9cf2-9922566d8f9f",
    tenant_gwstoken:"ff4b3498-0d1d-4c46-ba18-9061117c3fe6",
    one_roster_api_key:"bbb14a6a33b44f309ca09a2cc673521c",
    node_api:"https://betanodeapi.classlink.com",
    orcache_api:"https://beta-orcache-api.apis.classlink.com",
    onroster_api:"https://onerostercache-api-beta.classlink.io",
    myfiles_api:"https://betamyfiles.classlink.com",
    app_id:1083,
    tenant_id:2,
    isload:true,
    app:{
      classes:'classes',
      courses:'courses',
      orgs:'orgs',
      
    },
    data:{
    sourcedId:"testCourse01"  //clases
     //sourcedId:"000112"     //courses
    //sourcedId:"000112"
    
    },
    eload: {
      load:{
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
             { duration: '2m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 2 minutes.
             { duration: '5m', target: 100 }, // stay at 100 users for 5 minutes
             { duration: '3m', target: 500 }, // ramp-up to 500 users over 3 minutes (peak hour starts)
             { duration: '2m', target: 500 }, // stay at 500 users for short amount of time (peak hour)
             { duration: '3m', target: 1000 }, // ramp-down to 1000 users over 3 minutes (peak hour ends)
             { duration: '10m', target: 1000 }, // continue at 1000 for additional 10 minutes
             { duration: '5m', target: 0 }, // ramp-down to 0 users
        ],
        gracefulRampDown: '0s',
      }
    },
    eload_1: {
      load:{
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
            { duration: '30s', target: 500 }
        ],
        gracefulRampDown: '0s',
      }
    },
    estress:{
      stress:{
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
            { duration: '2m', target: 100 },
            { duration: '5m', target: 100 },
            { duration: '2m', target: 1000 },
            { duration: '5m', target: 1000 },
            { duration: '2m', target: 5000 }, 
            { duration: '5m', target: 5000 },
            { duration: '2m', target: 10000 }, 
            { duration: '5m', target: 10000 }, 
            { duration: '10m', target: 0 }
        ],
        gracefulRampDown: '0s',
      }
    }
  };
  
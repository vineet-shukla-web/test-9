export const env = {
    gwstoken:"fff265e0-9dc2-455b-baaa-fd48de8e703d",
    tenant_gwstoken:"ffa75f74-cb4f-4021-952b-400ff50ab0ea",
    one_roster_api_key:"bbb14a6a33b44f309ca09a2cc673521c",
    node_api:"https://betanodeapi.classlink.com",
    orcache_api:"https://beta-orcache-api.apis.classlink.com",
    onroster_api:"https://onerostercache-api-beta.classlink.io",
    app_id:1083,
    isload:true,
    app:{
      classes:'classes',
      courses:'courses',
      orgs:'orgs',
      
    },
    data:{
    //sourcedId:"testCourse01"
    sourcedId:"000112"
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
            { duration: '30s', target: 10 }
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
  
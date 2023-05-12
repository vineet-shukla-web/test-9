import http from 'k6/http';
import { check, sleep, fail } from 'k6';
import { env } from './env.js';

export const options = {
  scenarios: env.isload ? env.eload_1 : env.estress
};

export default function () {
  const data = JSON.stringify({
      LPApplicationId: 1083,
      RosterServerAppId: 2275,
  });
  const headers =
    {
        'Content-Type': 'application/json',
        'gwstoken': env.tenant_gwstoken
    };
  const res = http.post(env.node_api + '/admin/applications/rosterserver/assignapp', data, { headers: headers });
  //console.log("res",JSON.stringify(res.body))
  const result=check(res, { 'status was 200': (r) => r.status == 200, 'status was 1': (r) => r.status == 1});
  if(!result){
    fail('Response fail')
  }
  sleep(1);
}
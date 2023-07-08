import http from 'k6/http';
import { check, sleep, fail } from 'k6';
import { env } from './env.js';

export const options = {
  scenarios: env.isload ? env.eload_1 : env.estress
};

export default function () {
  const headers = {
    headers: {
      accept: 'application/json, text/plain, */*',
      gwstoken: env.gwstoken
    }
  };

  const res = http.get(`${env.node_api}/v2/oneroster/my/info`, headers);
  const result = check(res, {
    'status was 200': (r) => r.status == 200,
    'status was 1': (r) => JSON.parse(r.body).status == 1
  });
  if (!result) {
    fail("Request fail");
  }
  sleep(1);
}
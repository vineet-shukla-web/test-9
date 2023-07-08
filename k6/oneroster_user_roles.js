import http from 'k6/http';
import { check, sleep, fail } from 'k6';
import { env } from './env.js';

const url=env.node_api + '/admin/applications/rosterserver/roles';
export const options = {
    scenarios: env.isload ? env.eload1 : env.estress
};

export default function () {
    const data = JSON.stringify({
        orApplicationId: 368,
        roles: ["teacher"]
    });
    const headers =
    {
        'Content-Type': 'application/json',
        'gwstoken': env.tenant_gwstoken
    };
    const res = http.post(url, data, { headers: headers });
    const result = check(res, {
        'status was 200': (r) => r.status == 200,
        'status was 1': (r) => JSON.parse(r.body).status == 1
    });
    if (!result) {
        fail("Request fail");
    }
    sleep(1);
}
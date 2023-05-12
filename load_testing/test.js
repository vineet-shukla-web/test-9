import http from 'k6/http';
import { check, sleep, fail } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'
//const url = 'https://betanodeapi.classlink.com/admin/oneroster/applications/1083/classes/assign';


const urls = [
  'https://betalaunchpad.classlink.com/notqa2',
  'https://betalaunchpad.classlink.com/123',
  'https://betalaunchpad.classlink.com/notqa2',
]


export default function () {
  // const headers = { 'Content-Type': 'application/json',
  //   'gwstoken':'ffa75f74-cb4f-4021-952b-400ff50ab0ea' };
  // const data = {sourcedId: "testCourse01"};

  // const res = http.put(url, JSON.stringify(data), { headers: headers });

  // console.log(JSON.stringify(res.body));
  const url = urls[randomIntBetween(0, urls.length - 1)]

  // our HTTP request, note that we are saving the response to res, which can be accessed later
  const res = http.get(url)

  sleep(1)
  //console.log("============res",res)

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    // 'status is 500': (r) => r.status === 500,
    // 'status is 404': (r) => r.status === 404
  })

  if(!checkRes){
    fail("Request fail");
  }
}

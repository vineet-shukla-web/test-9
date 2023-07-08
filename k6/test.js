import http from 'k6/http';

const url = 'https://betanodeapi.classlink.com/admin/oneroster/applications/1083/classes/assign';

export default function () {
  const headers = { 'Content-Type': 'application/json',
    'gwstoken':'ffa75f74-cb4f-4021-952b-400ff50ab0ea' };
  const data = {sourcedId: "testCourse01"};

  const res = http.put(url, JSON.stringify(data), { headers: headers });

  console.log(JSON.stringify(res.body));
}

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10m', target: 300 },
        { duration: '20m', target: 300 },
        { duration: '5s', target: 0 },
    ],
};

export default function () {
    let url = 'Seu endpoint'; // Endpoint da app
    let params = {
        headers: {
            'Authorization': 'Bearer CHAVE', // Autenticação caso necessaria
        },
    };

    let res = http.get(url, params);
    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    let errorRes = http.get(errorUrl, params);
    check(errorRes, {
        'status is 404': (r) => r.status === 404, // Tratando erros 404
    });

    sleep(1);
}

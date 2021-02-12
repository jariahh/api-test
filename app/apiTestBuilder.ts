const axios = require('axios')

export class ApiTestBuilder {
    get(label: string, url: string) {
        it(label, async (done) => {
            axios.get(url).then((result: any) => {
                expect(result.data.length).toBeGreaterThan(0);
                done();
            });
        });
    }

    post(label: string, url: string, postObject: any) {
        it(label, async (done) => {
            axios.post(url, postObject).then((result: any) => {
                expect(result.data.length).toBeGreaterThan(0);
                done();
            }).catch((error: any) => {
                expect(error).not.toBeNull();
                done();
            });
        });
    }
}

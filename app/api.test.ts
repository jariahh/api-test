const axios = require('axios')

it("should make a get request", async(done) => {
    axios.get('http://google.com').then((result: any) => {
        expect(result.data.length).toBeGreaterThan(0);
        done();
    });
});
it("should make a post request", async(done) => {
    axios.post('http://google.com', {'data': 'to post'}).then((result: any) => {
        expect(result.data.length).toBeGreaterThan(0);
        done();
    }).catch((error: any) => {
        expect(error).not.toBeNull();
        done();
    });
});
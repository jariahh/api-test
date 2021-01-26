import * as http from 'http';
it("should work with async", async(done) => {
    http.get('http://google.com').on('response', (result) => {
        expect(result.statusCode).toBe(301);
        done();
    });
});
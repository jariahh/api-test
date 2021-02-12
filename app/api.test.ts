import {ApiTestBuilder} from "./apiTestBuilder";

const tests = [
    {
        type: 'post',
        label: 'this should post',
        url: 'https://google.com',
        postObject: {data: 'whatever the object looks like'}
        },
    {
        type: 'get',
        label: 'this should get',
        url: 'https://google.com'
    }];
describe('this is the base test runner', () => {
    const apiTestBuilder = new ApiTestBuilder();
    tests.forEach(test => {
        switch(test.type) {
            case 'get':
                apiTestBuilder.get(test.label, test.url);
                break;
            case 'post':
                apiTestBuilder.post(test.label, test.url, test.postObject);
                break;
        }
    })
})

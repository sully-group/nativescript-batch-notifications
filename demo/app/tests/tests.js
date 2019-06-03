var Batch = require("nativescript-batch-notifications").Batch;
var batch = new Batch();

describe("greet function", function() {
    it("exists", function() {
        expect(batch.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(batch.greet()).toEqual("Hello, NS");
    });
});
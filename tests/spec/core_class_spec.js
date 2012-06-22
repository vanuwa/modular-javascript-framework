/**
 * Created with JetBrains WebStorm.
 * User: Va Nuwa
 * Date: 6/22/12
 * Time: 7:55 AM
 * To change this template use File | Settings | File Templates.
 */
describe("CoreClass", function() {
    var core,
        CoreClass;

    beforeEach(function() {
        core = window.MJF.Core;
        CoreClass = window.MJF.CoreClass;
    });

    afterEach(function() {

    });

    it("should be extendable", function() {
        expect(CoreClass.extendCore).toBeDefined();
        expect(CoreClass.extendCore).toEqual(jasmine.any(Function));
    });

    describe("when CoreClass has been extended", function() {

        beforeEach(function() {
            CoreClass.extendCore({
                someNewFunction: function() {
                    return 1;
                }
            });
        });

        it("should be possible to access extended methods", function() {
            expect(core.someNewFunction).toEqual(jasmine.any(Function));
        });

        it("should not replace startModule method", function() {
            expect(core.startModule).toEqual(jasmine.any(Function));
        });
    });
});

var angular2_1 = require('angular2/angular2');
var NgGrid_1 = require('src/NgGrid');
function main() {
    describe("NgGrid Directive", function () {
        it("should initialise element styles and config onInit", function () {
            spyOn(angular2_1.Renderer.prototype, "setElementClass");
            spyOn(angular2_1.Renderer.prototype, "setElementStyle");
            spyOn(NgGrid_1.NgGrid.prototype, "setConfig");
            var renderer = new angular2_1.Renderer();
            var ngGrid = new NgGrid_1.NgGrid(null, null, renderer, null);
            ngGrid.onInit();
            expect(renderer.setElementClass).toHaveBeenCalled();
            expect(renderer.setElementStyle).toHaveBeenCalled();
            expect(ngGrid.setConfig).toHaveBeenCalled();
            renderer.setElementStyle.calls.reset();
            renderer.setElementClass.calls.reset();
            ngGrid.setConfig.calls.reset();
            ngGrid.autoStyle = false;
            ngGrid.onInit();
            expect(renderer.setElementClass).toHaveBeenCalled();
            expect(renderer.setElementStyle).not.toHaveBeenCalled();
            expect(ngGrid.setConfig).toHaveBeenCalled();
        });
        it("should set dragEnable to the relevant value on enable/disable drag", function () {
            var ngGrid = new NgGrid_1.NgGrid(null, null, null, null);
            ngGrid.dragEnable = false;
            ngGrid.enableDrag();
            expect(ngGrid.dragEnable).toBe(true);
            ngGrid.disableDrag();
            expect(ngGrid.dragEnable).toBe(false);
        });
    });
}
exports.main = main;

//# sourceMappingURL=data:application/json;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyLCBLZXlWYWx1ZURpZmZlcnMsIER5bmFtaWNDb21wb25lbnRMb2FkZXIgfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcbmltcG9ydCB7IE5nR3JpZCwgTmdHcmlkSXRlbSwgTmdHcmlkUGxhY2Vob2xkZXIgfSBmcm9tICdzcmMvTmdHcmlkJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xyXG5cdGRlc2NyaWJlKFwiTmdHcmlkIERpcmVjdGl2ZVwiLCAoKSA9PiB7XHJcblx0XHRpdChcInNob3VsZCBpbml0aWFsaXNlIGVsZW1lbnQgc3R5bGVzIGFuZCBjb25maWcgb25Jbml0XCIsICgpID0+IHtcclxuXHRcdFx0c3B5T24oUmVuZGVyZXIucHJvdG90eXBlLCBcInNldEVsZW1lbnRDbGFzc1wiKTtcclxuXHRcdFx0c3B5T24oUmVuZGVyZXIucHJvdG90eXBlLCBcInNldEVsZW1lbnRTdHlsZVwiKTtcclxuXHRcdFx0c3B5T24oTmdHcmlkLnByb3RvdHlwZSwgXCJzZXRDb25maWdcIik7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcclxuXHRcdFx0dmFyIG5nR3JpZCA9IG5ldyBOZ0dyaWQobnVsbCwgbnVsbCwgcmVuZGVyZXIsIG51bGwpO1xyXG5cdFx0XHRcclxuXHRcdFx0bmdHcmlkLm9uSW5pdCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0ZXhwZWN0KHJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcykudG9IYXZlQmVlbkNhbGxlZCgpO1xyXG5cdFx0XHRleHBlY3QocmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKS50b0hhdmVCZWVuQ2FsbGVkKCk7XHJcblx0XHRcdGV4cGVjdChuZ0dyaWQuc2V0Q29uZmlnKS50b0hhdmVCZWVuQ2FsbGVkKCk7XHJcblx0XHRcdFxyXG5cdFx0XHQoPGFueT5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUpLmNhbGxzLnJlc2V0KCk7XHJcblx0XHRcdCg8YW55PnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcykuY2FsbHMucmVzZXQoKTtcclxuXHRcdFx0KDxhbnk+bmdHcmlkLnNldENvbmZpZykuY2FsbHMucmVzZXQoKTtcclxuXHRcdFx0XHJcblx0XHRcdG5nR3JpZC5hdXRvU3R5bGUgPSBmYWxzZTtcclxuXHRcdFx0bmdHcmlkLm9uSW5pdCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0ZXhwZWN0KHJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcykudG9IYXZlQmVlbkNhbGxlZCgpO1xyXG5cdFx0XHRleHBlY3QocmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xyXG5cdFx0XHRleHBlY3QobmdHcmlkLnNldENvbmZpZykudG9IYXZlQmVlbkNhbGxlZCgpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGl0KFwic2hvdWxkIHNldCBkcmFnRW5hYmxlIHRvIHRoZSByZWxldmFudCB2YWx1ZSBvbiBlbmFibGUvZGlzYWJsZSBkcmFnXCIsICgpID0+IHtcclxuXHRcdFx0dmFyIG5nR3JpZCA9IG5ldyBOZ0dyaWQobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCk7XHJcblx0XHRcdFxyXG5cdFx0XHRuZ0dyaWQuZHJhZ0VuYWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRuZ0dyaWQuZW5hYmxlRHJhZygpO1xyXG5cdFx0XHRcclxuXHRcdFx0ZXhwZWN0KG5nR3JpZC5kcmFnRW5hYmxlKS50b0JlKHRydWUpO1xyXG5cdFx0XHRcclxuXHRcdFx0bmdHcmlkLmRpc2FibGVEcmFnKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRleHBlY3QobmdHcmlkLmRyYWdFbmFibGUpLnRvQmUoZmFsc2UpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
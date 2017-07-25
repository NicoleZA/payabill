"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frame_1 = require("ui/frame");
var nativescript_ocr_1 = require("nativescript-ocr");
var image_source_1 = require("image-source");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        var _this = _super.call(this) || this;
        _this.ocr = new nativescript_ocr_1.OCR();
        var me = _this;
        setTimeout(function () { me.onLoad(); }, 5000);
        ;
        return _this;
    }
    ViewModel.prototype.onLoad = function () {
        var me = this;
    };
    ViewModel.prototype.onReload = function () {
        var me = this;
    };
    ;
    ViewModel.prototype.scanTap = function () {
        var me = this;
        me.doRecognize();
    };
    ViewModel.prototype.doRecognize = function () {
        var _this = this;
        var me = this;
        var img = new image_source_1.ImageSource();
        var progress = frame_1.topmost().currentPage.getViewById("progress");
        img.fromFile("~/image/sample1.png").then(function (success) {
            // var ocrData = {
            //   image: img,
            //   whitelist: "ABCDEF",     // you can include only certain characters in the result
            //   blacklist: "0123456789", // .. or you can exclude certain characters from the result
            //   onProgress: (percentage: number) => {
            //     console.log(`Decoding progress: ${percentage}%`);
            //   }
            // }
            var ocrData = {
                image: img,
                onProgress: function (percentage) {
                    progress.value = percentage;
                    console.log("Decoding progress: " + percentage + "%");
                }
            };
            if (success)
                return _this.ocr.retrieveText(ocrData);
        }).then(function (result) {
            me.set("result", result.text);
            //            this.set(HelloWorldModel.BUSY_KEY, false);
            if (result)
                console.log("Result: " + result.text);
        }).catch(function (err) {
            console.log("Error: " + err);
        });
    };
    return ViewModel;
}(observable_1.Observable));
exports.ViewModel = ViewModel;
var viewModel;
function onLoaded(args) {
    var page = args.object;
    if (!viewModel) {
        viewModel = new ViewModel();
    }
    else {
        viewModel.onReload();
    }
    page.bindingContext = viewModel;
}
exports.onLoaded = onLoaded;
;
function onNavigatingTo(args) {
    var me = viewModel;
    if (!args.isBackNavigation)
        return;
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw4Q0FBNkM7QUFHN0Msa0NBQW1DO0FBR25DLHFEQUEyRDtBQUMzRCw2Q0FBMkM7QUFJM0M7SUFBK0IsNkJBQVU7SUFJdkM7UUFBQSxZQUNFLGlCQUFPLFNBSVI7UUFQTyxTQUFHLEdBQUcsSUFBSSxzQkFBRyxFQUFFLENBQUM7UUFJdEIsSUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDO1FBQ2QsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUM7O0lBQ0gsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFDRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDRCQUFRLEdBQWY7UUFDRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7SUFFSywyQkFBTyxHQUFkO1FBQ0UsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCwrQkFBVyxHQUFYO1FBQUEsaUJBOEJDO1FBN0JDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksR0FBRyxHQUFnQixJQUFJLDBCQUFXLEVBQUUsQ0FBQztRQUN6QyxJQUFJLFFBQVEsR0FBYyxlQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBR3ZFLEdBQUcsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFnQjtZQUN4RCxrQkFBa0I7WUFDbEIsZ0JBQWdCO1lBQ2hCLHNGQUFzRjtZQUN0Rix5RkFBeUY7WUFDekYsMENBQTBDO1lBQzFDLHdEQUF3RDtZQUN4RCxNQUFNO1lBQ04sSUFBSTtZQUNKLElBQUksT0FBTyxHQUFHO2dCQUNaLEtBQUssRUFBRSxHQUFHO2dCQUNWLFVBQVUsRUFBRSxVQUFDLFVBQWtCO29CQUM3QixRQUFRLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsVUFBVSxNQUFHLENBQUMsQ0FBQztnQkFDbkQsQ0FBQzthQUNGLENBQUE7WUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQTBCO1lBQ2pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5Qix3REFBd0Q7WUFDeEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBVyxNQUFNLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxHQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHSCxnQkFBQztBQUFELENBQUMsQUF6REQsQ0FBK0IsdUJBQVUsR0F5RHhDO0FBekRZLDhCQUFTO0FBMkR0QixJQUFJLFNBQW9CLENBQUM7QUFFekIsa0JBQXlCLElBQUk7SUFDM0IsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDZixTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ2xDLENBQUM7QUFSRCw0QkFRQztBQUFBLENBQUM7QUFFRix3QkFBK0IsSUFBSTtJQUNqQyxJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUM7SUFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFBQyxNQUFNLENBQUM7QUFDckMsQ0FBQztBQUhELHdDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndWkvYnV0dG9uJztcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gJ3VpL2ZyYW1lJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tICd1aS9wcm9ncmVzcyc7XHJcblxyXG5pbXBvcnQgeyBPQ1IsIFJldHJpZXZlVGV4dFJlc3VsdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtb2NyXCI7XHJcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcblxyXG4gIHByaXZhdGUgb2NyID0gbmV3IE9DUigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IG1lLm9uTG9hZCgpIH0sIDUwMDApO1xyXG4gICAgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTG9hZCgpIHtcclxuICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25SZWxvYWQoKSB7XHJcbiAgICB2YXIgbWUgPSB0aGlzO1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzY2FuVGFwKCkge1xyXG4gICAgdmFyIG1lID0gdGhpcztcclxuICAgIG1lLmRvUmVjb2duaXplKCk7XHJcbiAgfVxyXG5cclxuICBkb1JlY29nbml6ZSgpOiB2b2lkIHtcclxuICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICBsZXQgaW1nOiBJbWFnZVNvdXJjZSA9IG5ldyBJbWFnZVNvdXJjZSgpO1xyXG4gICAgdmFyIHByb2dyZXNzICA9IDxQcm9ncmVzcz50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoXCJwcm9ncmVzc1wiKVxyXG5cclxuXHJcbiAgICBpbWcuZnJvbUZpbGUoXCJ+L2ltYWdlL3NhbXBsZTEucG5nXCIpLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcclxuICAgICAgLy8gdmFyIG9jckRhdGEgPSB7XHJcbiAgICAgIC8vICAgaW1hZ2U6IGltZyxcclxuICAgICAgLy8gICB3aGl0ZWxpc3Q6IFwiQUJDREVGXCIsICAgICAvLyB5b3UgY2FuIGluY2x1ZGUgb25seSBjZXJ0YWluIGNoYXJhY3RlcnMgaW4gdGhlIHJlc3VsdFxyXG4gICAgICAvLyAgIGJsYWNrbGlzdDogXCIwMTIzNDU2Nzg5XCIsIC8vIC4uIG9yIHlvdSBjYW4gZXhjbHVkZSBjZXJ0YWluIGNoYXJhY3RlcnMgZnJvbSB0aGUgcmVzdWx0XHJcbiAgICAgIC8vICAgb25Qcm9ncmVzczogKHBlcmNlbnRhZ2U6IG51bWJlcikgPT4ge1xyXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coYERlY29kaW5nIHByb2dyZXNzOiAke3BlcmNlbnRhZ2V9JWApO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgICB2YXIgb2NyRGF0YSA9IHtcclxuICAgICAgICBpbWFnZTogaW1nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M6IChwZXJjZW50YWdlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIHByb2dyZXNzLnZhbHVlID0gcGVyY2VudGFnZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBEZWNvZGluZyBwcm9ncmVzczogJHtwZXJjZW50YWdlfSVgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1Y2Nlc3MpIHJldHVybiB0aGlzLm9jci5yZXRyaWV2ZVRleHQob2NyRGF0YSk7XHJcbiAgICB9KS50aGVuKChyZXN1bHQ6IFJldHJpZXZlVGV4dFJlc3VsdCkgPT4ge1xyXG4gICAgICBtZS5zZXQoXCJyZXN1bHRcIiwgcmVzdWx0LnRleHQpO1xyXG4gICAgICAvLyAgICAgICAgICAgIHRoaXMuc2V0KEhlbGxvV29ybGRNb2RlbC5CVVNZX0tFWSwgZmFsc2UpO1xyXG4gICAgICBpZiAocmVzdWx0KSBjb25zb2xlLmxvZyhgUmVzdWx0OiAke3Jlc3VsdC50ZXh0fWApO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxudmFyIHZpZXdNb2RlbDogVmlld01vZGVsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZGVkKGFyZ3MpIHtcclxuICB2YXIgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gIGlmICghdmlld01vZGVsKSB7XHJcbiAgICB2aWV3TW9kZWwgPSBuZXcgVmlld01vZGVsKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZpZXdNb2RlbC5vblJlbG9hZCgpO1xyXG4gIH1cclxuICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdmlld01vZGVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcclxuICB2YXIgbWUgPSB2aWV3TW9kZWw7XHJcbiAgaWYgKCFhcmdzLmlzQmFja05hdmlnYXRpb24pIHJldHVybjtcclxufVxyXG5cclxuIl19
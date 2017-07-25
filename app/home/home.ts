
import { Observable } from "data/observable";
import { Page } from 'ui/page';
import { Button } from 'ui/button';
import { topmost } from 'ui/frame';
import { Progress } from 'ui/progress';

import { OCR, RetrieveTextResult } from "nativescript-ocr";
import { ImageSource } from "image-source";



export class ViewModel extends Observable {

  private ocr = new OCR();

  constructor() {
    super();
    var me = this;
    setTimeout(function () { me.onLoad() }, 5000);
    ;
  }

  public onLoad() {
    var me = this;
  }

  public onReload() {
    var me = this;
  };

  public scanTap() {
    var me = this;
    me.doRecognize();
  }

  doRecognize(): void {
    var me = this;
    let img: ImageSource = new ImageSource();
    var progress  = <Progress>topmost().currentPage.getViewById("progress")


    img.fromFile("~/image/sample1.png").then((success: boolean) => {
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
        onProgress: (percentage: number) => {
          progress.value = percentage;
          console.log(`Decoding progress: ${percentage}%`);
        }
      }
      if (success) return this.ocr.retrieveText(ocrData);
    }).then((result: RetrieveTextResult) => {
      me.set("result", result.text);
      //            this.set(HelloWorldModel.BUSY_KEY, false);
      if (result) console.log(`Result: ${result.text}`);
    }).catch((err) => {
      console.log(`Error: ${err}`);
    })
  }


}

var viewModel: ViewModel;

export function onLoaded(args) {
  var page = <Page>args.object;
  if (!viewModel) {
    viewModel = new ViewModel();
  } else {
    viewModel.onReload();
  }
  page.bindingContext = viewModel;
};

export function onNavigatingTo(args) {
  var me = viewModel;
  if (!args.isBackNavigation) return;
}


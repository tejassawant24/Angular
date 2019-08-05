import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "prohttps"
})
export class ProPipe implements PipeTransform {
  transform(val: any, arg: any) {
    let img = "";
    if (val) {
      img = val;
    } else {
      img = arg;
    }
    if (img) {
      if (img.indexOf("https") == -1) {
        img = img.replace("http", "https");
      }
    }
    return img;
  }
}

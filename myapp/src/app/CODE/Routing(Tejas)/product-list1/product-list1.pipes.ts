import { Pipe, PipeTransform } from "@angular/core";
import { Iprods } from "../../../Shared/model/Routing(Tejas)/prods";

@Pipe({
  name: "search"
})
export class searchPipes implements PipeTransform {
  public val1;
  transform(val: Iprods[], arg: string) {
    if (!val) {
      console.log(val);
      return [];
    }

    if (!arg) {
      console.log(arg);
      return val;
    }
    if (arg) {
      return val.filter(item => {
        return item.product.toLowerCase().includes(arg.toLowerCase());
      });
    }
  }
}

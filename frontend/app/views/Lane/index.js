import { CompositeView } from "backbone.marionette";
import template from "./template.pug";

export default CompositeView.extend({
  className: 'col-3',
  
  template,

  templateContext() {
    return {
      title: this.model.get("title"),
    };
  },
});

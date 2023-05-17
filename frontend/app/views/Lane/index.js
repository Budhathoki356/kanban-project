import { CollectionView } from "backbone.marionette";
import template from "./template.pug";

export default CollectionView.extend({
  template,

  templateContext() {
    return {
      title: this.model.get('title')
    }
  }
});

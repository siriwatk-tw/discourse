import DropdownSelectBoxComponent from "select-kit/components/dropdown-select-box";
import discourseComputed, { on } from "discourse-common/utils/decorators";

export default DropdownSelectBoxComponent.extend({
  classNames: ["period-chooser"],
  rowComponent: "period-chooser/period-chooser-row",
  headerComponent: "period-chooser/period-chooser-header",
  content: Ember.computed.oneWay("site.periods"),
  value: Ember.computed.alias("period"),
  isHidden: Ember.computed.alias("showPeriods"),

  @discourseComputed("isExpanded")
  caretIcon(isExpanded) {
    return isExpanded ? "caret-up" : "caret-down";
  },

  @on("didUpdateAttrs", "init")
  _setFullDay() {
    this.headerComponentOptions.setProperties({
      fullDay: this.fullDay
    });
    this.rowComponentOptions.setProperties({
      fullDay: this.fullDay
    });
  },

  actions: {
    onSelect() {
      if (this.action) {
        this.action(this.computedValue);
      }
    }
  }
});

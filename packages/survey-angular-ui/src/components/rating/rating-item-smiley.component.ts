import { AfterViewInit, Component, Input } from "@angular/core";
import { ListModel, Action, QuestionRatingModel, RenderedRatingItem } from "survey-core";
import { BaseAngular } from "../../base-angular";
import { AngularComponentFactory } from "../../component-factory";

@Component({
  selector: "sv-ng-rating-item-smiley",
  templateUrl: "./rating-item-smiley.component.html",
  styleUrls: ["../../hide-host.scss"],
})

export class RatingItemSmileyComponent extends BaseAngular<RenderedRatingItem> {
  @Input() element: any;
  @Input() model!: QuestionRatingModel;
  @Input() item!: RenderedRatingItem;
  @Input() index!: number;

  onClick(event: any): void {
    this.model.setValueFromClick(event.target.value);
    event.stopPropagation();
  }

  getModel() {
    return this.item;
  }
}

AngularComponentFactory.Instance.registerComponent("sv-rating-item-smiley", RatingItemSmileyComponent);
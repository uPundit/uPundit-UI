import { Component, Prop, h } from "@stencil/core";
import { strokeWidth } from "../up-global";

interface upRateLevel {
  source: string;
  num: number;
  stars: number;
}

export interface uprating extends Array<upRateLevel> {}

@Component({
  tag: "up-stars",
  styleUrl: "up-stars.css",
  shadow: true
})
export class UpStars {
  // The stars component height
  @Prop({ mutable: true }) height?: string = "100%";
  @Prop({ mutable: true }) ratings?: uprating = [
    { source: "my", num: -1, stars: 0.85 },
    { source: "friends", num: 5, stars: 0.65 },
    { source: "school", num: 13, stars: 0.45 },
    { source: "following", num: 1000, stars: 0.25 },
    { source: "others", num: 99999, stars: 0.45 }
  ];

  render() {
    const numStars: number = 5;
    const starsHW: number = 100;

    return (
      <svg
        id="the-stars"
        height={this.height}
        viewBox={"0 0 1000 ".concat((this.ratings.length * starsHW).toString())}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.ratings.map((rating, index) => {
          return (
            <g id={rating.source} transform={"translate(0.0, ".concat((index * starsHW + 5).toString(), ".0)")}>
              <defs>
                <mask id={rating.source.concat("-mask")} fill="white">
                  <rect
                    id={rating.source.concat("-rect")}
                    x="495"
                    y="0"
                    width={(rating.stars * numStars * starsHW).toString()}
                    height="100"
                  ></rect>
                </mask>
              </defs>
              <text
                id={rating.source.concat("-num")}
                font-family="Courier-Bold, Courier"
                font-size="100"
                font-weight="bold"
                letter-spacing="3"
              >
                <tspan x="450" y="83" writing-mode="rl" text-anchor="end">
                  {rating.num > 0 ? rating.num.toLocaleString(undefined, { maximumFractionDigits: 0 }) : ""}
                </tspan>
              </text>
              <path
                id={rating.source.concat("-stars")}
                stroke-width={strokeWidth.toString()}
                class="not-active"
                d="M945,0 L959.694631,29.7745751 L992.552826,34.5491503 L968.776413,57.7254249 L974.389263,90.4508497 L945,75 L915.610737,90.4508497 L921.223587,57.7254249 L897.447174,34.5491503 L930.305369,29.7745751 L945,0 Z M845,0 L859.694631,29.7745751 L892.552826,34.5491503 L868.776413,57.7254249 L874.389263,90.4508497 L845,75 L815.610737,90.4508497 L821.223587,57.7254249 L797.447174,34.5491503 L830.305369,29.7745751 L845,0 Z M745,0 L759.694631,29.7745751 L792.552826,34.5491503 L768.776413,57.7254249 L774.389263,90.4508497 L745,75 L715.610737,90.4508497 L721.223587,57.7254249 L697.447174,34.5491503 L730.305369,29.7745751 L745,0 Z M645,0 L659.694631,29.7745751 L692.552826,34.5491503 L668.776413,57.7254249 L674.389263,90.4508497 L645,75 L615.610737,90.4508497 L621.223587,57.7254249 L597.447174,34.5491503 L630.305369,29.7745751 L645,0 Z M545,0 L559.694631,29.7745751 L592.552826,34.5491503 L568.776413,57.7254249 L574.389263,90.4508497 L545,75 L515.610737,90.4508497 L521.223587,57.7254249 L497.447174,34.5491503 L530.305369,29.7745751 L545,0 Z"
              ></path>
              <path
                id={rating.source.concat("-masked")}
                mask={"url(#".concat(rating.source, "-mask)")}
                stroke-width={strokeWidth.toString()}
                class="active"
                d="M945,0 L959.694631,29.7745751 L992.552826,34.5491503 L968.776413,57.7254249 L974.389263,90.4508497 L945,75 L915.610737,90.4508497 L921.223587,57.7254249 L897.447174,34.5491503 L930.305369,29.7745751 L945,0 Z M845,0 L859.694631,29.7745751 L892.552826,34.5491503 L868.776413,57.7254249 L874.389263,90.4508497 L845,75 L815.610737,90.4508497 L821.223587,57.7254249 L797.447174,34.5491503 L830.305369,29.7745751 L845,0 Z M745,0 L759.694631,29.7745751 L792.552826,34.5491503 L768.776413,57.7254249 L774.389263,90.4508497 L745,75 L715.610737,90.4508497 L721.223587,57.7254249 L697.447174,34.5491503 L730.305369,29.7745751 L745,0 Z M645,0 L659.694631,29.7745751 L692.552826,34.5491503 L668.776413,57.7254249 L674.389263,90.4508497 L645,75 L615.610737,90.4508497 L621.223587,57.7254249 L597.447174,34.5491503 L630.305369,29.7745751 L645,0 Z M545,0 L559.694631,29.7745751 L592.552826,34.5491503 L568.776413,57.7254249 L574.389263,90.4508497 L545,75 L515.610737,90.4508497 L521.223587,57.7254249 L497.447174,34.5491503 L530.305369,29.7745751 L545,0 Z"
              ></path>
            </g>
          );
        })}
      </svg>
    );
  }
}

import { Component, Prop, h } from "@stencil/core";

interface upRateLevel {
  id: string;
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
  @Prop({ mutable: true }) height?: string = "7rem";
  @Prop({ mutable: true }) ratings?: uprating = [
    { id: "my", num: -1, stars: 0.0 },
    { id: "friends", num: 0, stars: 0.0 },
    { id: "school", num: 0, stars: 0.0 },
    { id: "following", num: 0, stars: 0.0 },
    { id: "others", num: 0, stars: 0.0 }
  ];

  render() {
    const starsWidth: number = 500;
    const starsHeight: number = 100;

    return (
      <svg height={this.height} viewBox="0 0 1000 505">
        {this.ratings.map((rating, index) => {
          return (
            <g id={rating.id} transform={"translate(0.0, ".concat((index * starsHeight + 5).toString(), ".0)")}>
              <mask id={rating.id.concat("Mask")} maskContentUnits="userSpaceOnUse">
                <rect
                  id="Rect"
                  x="0"
                  y="0"
                  width={(rating.stars * starsWidth).toString()}
                  height="100"
                  fill="white"
                ></rect>
              </mask>
              <g id="MaskedStars" mask={"url(#".concat(rating.id, "Mask)")} transform="translate(495.0, 3.0)">
                <polygon
                  id="S1"
                  points="50 75 20.6107374 90.4508497 26.2235871 57.7254249 2.44717419 34.5491503 35.3053687 29.7745751 50 0 64.6946313 29.7745751 97.5528258 34.5491503 73.7764129 57.7254249 79.3892626 90.4508497"
                ></polygon>
                <polygon
                  id="S2"
                  points="150 75 120.610737 90.4508497 126.223587 57.7254249 102.447174 34.5491503 135.305369 29.7745751 150 0 164.694631 29.7745751 197.552826 34.5491503 173.776413 57.7254249 179.389263 90.4508497"
                ></polygon>
                <polygon
                  id="S3"
                  points="250 75 220.610737 90.4508497 226.223587 57.7254249 202.447174 34.5491503 235.305369 29.7745751 250 0 264.694631 29.7745751 297.552826 34.5491503 273.776413 57.7254249 279.389263 90.4508497"
                ></polygon>
                <polygon
                  id="S4"
                  points="350 75 320.610737 90.4508497 326.223587 57.7254249 302.447174 34.5491503 335.305369 29.7745751 350 0 364.694631 29.7745751 397.552826 34.5491503 373.776413 57.7254249 379.389263 90.4508497"
                ></polygon>
                <polygon
                  id="S5"
                  points="450 75 420.610737 90.4508497 426.223587 57.7254249 402.447174 34.5491503 435.305369 29.7745751 450 0 464.694631 29.7745751 497.552826 34.5491503 473.776413 57.7254249 479.389263 90.4508497"
                ></polygon>
              </g>
              <g id="StarsBackground" transform="translate(495.0, 3.0)" stroke-width="4" fill-opacity="0.2">
                <polygon
                  id="S1"
                  points="50 75 20.6107374 90.4508497 26.2235871 57.7254249 2.44717419 34.5491503 35.3053687 29.7745751 50 0 64.6946313 29.7745751 97.5528258 34.5491503 73.7764129 57.7254249 79.3892626 90.4508497"
                ></polygon>
                <polygon
                  id="S2"
                  points="150 75 120.610737 90.4508497 126.223587 57.7254249 102.447174 34.5491503 135.305369 29.7745751 150 0 164.694631 29.7745751 197.552826 34.5491503 173.776413 57.7254249 179.389263 90.4508497"
                ></polygon>
                <polygon
                  id="S3"
                  points="250 75 220.610737 90.4508497 226.223587 57.7254249 202.447174 34.5491503 235.305369 29.7745751 250 0 264.694631 29.7745751 297.552826 34.5491503 273.776413 57.7254249 279.389263 90.4508497"
                ></polygon>
                <polygon
                  id="S4"
                  points="350 75 320.610737 90.4508497 326.223587 57.7254249 302.447174 34.5491503 335.305369 29.7745751 350 0 364.694631 29.7745751 397.552826 34.5491503 373.776413 57.7254249 379.389263 90.4508497"
                ></polygon>
                <polygon
                  id="S5"
                  points="450 75 420.610737 90.4508497 426.223587 57.7254249 402.447174 34.5491503 435.305369 29.7745751 450 0 464.694631 29.7745751 497.552826 34.5491503 473.776413 57.7254249 479.389263 90.4508497"
                ></polygon>
              </g>
              <text
                id="Text"
                font-family="Courier-Bold, Courier"
                font-size="100"
                font-weight="bold"
                letter-spacing="3.75"
                stroke-width="0"
              >
                <tspan x="450" y="83" writing-mode="rl" text-anchor="end">
                  {rating.num > 0 ? rating.num.toLocaleString(undefined, { maximumFractionDigits: 0 }) : ""}
                </tspan>
              </text>
            </g>
          );
        })}
      </svg>
    );
  }
}

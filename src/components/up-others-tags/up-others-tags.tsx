import { Component, Prop, h } from "@stencil/core";
import { strokeWidth } from "../up-global";

interface activeBy {
  source: string;
  important: boolean;
  discussion: boolean;
}

export interface tag extends Array<activeBy> {}

@Component({
  tag: "up-others-tags",
  styleUrl: "up-others-tags.css",
  shadow: true
})
export class UpOthersTags {
  @Prop({ mutable: true }) height?: string = "100%";
  @Prop({ mutable: true }) tags?: tag = [
    { source: "friends", important: true, discussion: false },
    { source: "school", important: false, discussion: false },
    { source: "following", important: false, discussion: true },
    { source: "others", important: false, discussion: false }
  ];

  render() {
    const topTag: number = 25;
    const tagSpace: number = 27;
    const circleStroke: number = strokeWidth / 2;

    const usersTypeIcon = {
      friends: [10.0, 10.0, 1, 1, 0.0, 0.0, 0.0, 0.0],
      school: [5.0, 5.0, -1, -1, -5.0, -5.0, 0.0, 0.0],
      following: [5.0, 15.0, -1, 1, -5.0, -15.0, 0.0, 10.0],
      others: [15.0, 5.0, 1, -1, -15.0, -5.0, 10.0, 0.0]
    };

    return (
      <svg id="others-tags" height={this.height} viewBox="0 0 445 150">
        <g id="icons" class="opacity" transform="translate(75.0, 25.0)">
          <path
            id="important"
            d="M3.50211166,97.8980465 L50,74.1997743 L96.4978883,97.8980465 C97.4525186,96.8188636 98,95.4190664 98,93.9260694 L98,8 C98,4.6862915 95.3137085,2 92,2 L8,2 C4.6862915,2 2,4.6862915 2,8 L2,93.9260694 C2,95.4190664 2.54748139,96.8188636 3.50211166,97.8980465 Z"
          ></path>
          <path
            id="discussion"
            d="M196.428571,40.8571429 C203.203466,40.8571429 208.714286,35.3463234 208.714286,28.5714286 C208.714286,21.7965338 203.203466,16.2857143 196.428571,16.2857143 C189.653677,16.2857143 184.142857,21.7965338 184.142857,28.5714286 C184.142857,35.3463234 189.653677,40.8571429 196.428571,40.8571429 Z M296.428571,40.8571429 C303.203466,40.8571429 308.714286,35.3463234 308.714286,28.5714286 C308.714286,21.7965338 303.203466,16.2857143 296.428571,16.2857143 C289.653677,16.2857143 284.142857,21.7965338 284.142857,28.5714286 C284.142857,35.3463234 289.653677,40.8571429 296.428571,40.8571429 Z M282.695813,53.9166273 C290.5442,59.1118027 295.986959,67.2374085 297.692597,76.5714286 L310.714286,76.5714286 C313.560609,76.5714286 315.857143,74.2748948 315.857143,71.4285714 L315.857143,64.2857143 C315.857143,57.5108195 310.346323,52 303.571429,52 L289.285714,52 C286.905132,52 284.637818,52.6782588 282.695813,53.9166273 Z M246.428571,48 C259.140966,48 269.428571,37.7123948 269.428571,25 C269.428571,12.2876052 259.140966,2 246.428571,2 C233.716177,2 223.428571,12.2876052 223.428571,25 C223.428571,37.7123948 233.716177,48 246.428571,48 Z M262.168532,59.1428571 C257.173563,61.4750589 251.866459,62.7142857 246.428571,62.7142857 C240.997496,62.7142857 235.714188,61.4790427 230.690401,59.1428571 L229.285714,59.1428571 C216.193855,59.1428571 205.571429,69.7652838 205.571429,82.8571429 L205.571429,89.2857143 C205.571429,94.0963234 209.475105,98 214.285714,98 L278.571429,98 C283.382038,98 287.285714,94.0963234 287.285714,89.2857143 L287.285714,82.8571429 C287.285714,69.7652838 276.663288,59.1428571 263.571429,59.1428571 L262.168532,59.1428571 Z M210.161335,53.9166305 C208.219328,52.6782599 205.952013,52 203.571429,52 L189.285714,52 C182.510819,52 177,57.5108195 177,64.2857143 L177,71.4285714 C177,74.2748948 179.296534,76.5714286 182.142857,76.5714286 L195.145528,76.5714286 C196.86868,67.2342122 202.315701,59.1099645 210.161335,53.9166305 Z"
            fill-rule="nonzero"
          ></path>
        </g>
        {this.tags.map((active, index) => {
          return (
            <g id={active.source} transform={"translate(45.0, ".concat((index * tagSpace + topTag).toString(), ".0)")}>
              <g id="important" transform="translate(0.0, 0.0)">
                <circle
                  id="frame"
                  class={active.important ? "active" : "not-active"}
                  stroke-width={circleStroke.toString()}
                  cx="10"
                  cy="10"
                  r={(10 - circleStroke / 2).toString()}
                ></circle>
                <g
                  id="tip"
                  stroke-width="0"
                  transform={"translate(".concat(
                    usersTypeIcon[active.source][0],
                    `, `,
                    usersTypeIcon[active.source][1],
                    `) 
                  scale(`,
                    usersTypeIcon[active.source][2],
                    `, `,
                    usersTypeIcon[active.source][3],
                    `) 
                  translate(`,
                    usersTypeIcon[active.source][4],
                    `, `,
                    usersTypeIcon[active.source][5],
                    `) 
                  translate(`,
                    usersTypeIcon[active.source][6],
                    `, `,
                    usersTypeIcon[active.source][7],
                    `)`
                  )}
                  class="active"
                >
                  <path
                    id="shape"
                    d="M9.9997568,0.0704003283 L10,10 L0.047,9.999 L0.256715828,9.9961582 C5.63962066,9.84857292 9.96245811,5.4673887 9.9997568,0.0704003283 Z"
                  ></path>
                </g>
              </g>
              <g id="discussion" transform="translate(175.0, 0.0)">
                <circle
                  id="frame"
                  class={active.discussion ? "active" : "not-active"}
                  stroke-width={circleStroke.toString()}
                  cx="10"
                  cy="10"
                  r={(10 - circleStroke / 2).toString()}
                ></circle>
                <g
                  id="tip"
                  stroke-width="0"
                  transform={"translate(".concat(
                    usersTypeIcon[active.source][0],
                    `, `,
                    usersTypeIcon[active.source][1],
                    `) 
                  scale(`,
                    usersTypeIcon[active.source][2],
                    `, `,
                    usersTypeIcon[active.source][3],
                    `) 
                  translate(`,
                    usersTypeIcon[active.source][4],
                    `, `,
                    usersTypeIcon[active.source][5],
                    `) 
                  translate(`,
                    usersTypeIcon[active.source][6],
                    `, `,
                    usersTypeIcon[active.source][7],
                    `)`
                  )}
                  class="active"
                >
                  <path
                    id="shape"
                    d="M9.9997568,0.0704003283 L10,10 L0.047,9.999 L0.256715828,9.9961582 C5.63962066,9.84857292 9.96245811,5.4673887 9.9997568,0.0704003283 Z"
                  ></path>
                </g>
              </g>
            </g>
            // <circle id={active.source} transform={"translate(50.0, ".concat((index * tagSpace + 25).toString(), ".0)")}>
            //   <circle id="discussion" fill-opacity={active.discussion ? "1.0" : "0.2"} cx="185" cy="10" r="9"></circle>
            //   <circle id="important" fill-opacity={active.important ? "1.0" : "0.2"} cx="10" cy="10" r="9"></circle>
            // </circle>
          );
        })}
      </svg>
    );
  }
}

import { Component, Prop, h } from "@stencil/core";
import { strokeWidth } from "../up-global";

export interface myActivity {
  important: boolean;
  discussion: boolean;
  notes: boolean;
  private: boolean;
}

@Component({
  tag: "up-my-tags",
  styleUrl: "up-my-tags.css",
  shadow: true
})
export class UpMyTags {
  // The stars component height
  @Prop({ mutable: true }) height?: string = "100%";
  @Prop({ mutable: true }) activity?: myActivity = {
    important: false,
    discussion: false,
    notes: false,
    private: false
  };

  render() {
    return (
      <svg height={this.height} viewBox="0 0 750 150">
        <g id="MyMarks" class="opacity" fill-rule="nonzero">
          <g id="important" class={this.activity.important ? "active" : "disable"} transform="translate(64.0, 25.0)">
            <path d="M3.50211166,97.8980465 L50,74.1997743 L96.4978883,97.8980465 C97.4525186,96.8188636 98,95.4190664 98,93.9260694 L98,8 C98,4.6862915 95.3137085,2 92,2 L8,2 C4.6862915,2 2,4.6862915 2,8 L2,93.9260694 C2,95.4190664 2.54748139,96.8188636 3.50211166,97.8980465 Z"></path>
          </g>
          <g id="discussion" class={this.activity.discussion ? "active" : "disable"} transform="translate(214.0, 25.0)">
            <path d="M21.4285714,40.8571429 C28.2034662,40.8571429 33.7142857,35.3463234 33.7142857,28.5714286 C33.7142857,21.7965338 28.2034662,16.2857143 21.4285714,16.2857143 C14.6536766,16.2857143 9.14285714,21.7965338 9.14285714,28.5714286 C9.14285714,35.3463234 14.6536766,40.8571429 21.4285714,40.8571429 Z M121.428571,40.8571429 C128.203466,40.8571429 133.714286,35.3463234 133.714286,28.5714286 C133.714286,21.7965338 128.203466,16.2857143 121.428571,16.2857143 C114.653677,16.2857143 109.142857,21.7965338 109.142857,28.5714286 C109.142857,35.3463234 114.653677,40.8571429 121.428571,40.8571429 Z M107.695813,53.9166273 C115.5442,59.1118027 120.986959,67.2374085 122.692597,76.5714286 L135.714286,76.5714286 C138.560609,76.5714286 140.857143,74.2748948 140.857143,71.4285714 L140.857143,64.2857143 C140.857143,57.5108195 135.346323,52 128.571429,52 L114.285714,52 C111.905132,52 109.637818,52.6782588 107.695813,53.9166273 Z M71.4285714,48 C84.1409662,48 94.4285714,37.7123948 94.4285714,25 C94.4285714,12.2876052 84.1409662,2 71.4285714,2 C58.7161766,2 48.4285714,12.2876052 48.4285714,25 C48.4285714,37.7123948 58.7161766,48 71.4285714,48 Z M87.1685321,59.1428571 C82.1735626,61.4750589 76.8664594,62.7142857 71.4285714,62.7142857 C65.9974964,62.7142857 60.7141883,61.4790427 55.6904009,59.1428571 L54.2857143,59.1428571 C41.1938552,59.1428571 30.5714286,69.7652838 30.5714286,82.8571429 L30.5714286,89.2857143 C30.5714286,94.0963234 34.4751052,98 39.2857143,98 L103.571429,98 C108.382038,98 112.285714,94.0963234 112.285714,89.2857143 L112.285714,82.8571429 C112.285714,69.7652838 101.663288,59.1428571 88.5714286,59.1428571 L87.1685321,59.1428571 Z M35.1613351,53.9166305 C33.2193284,52.6782599 30.9520132,52 28.5714286,52 L14.2857143,52 C7.5108195,52 2,57.5108195 2,64.2857143 L2,71.4285714 C2,74.2748948 4.29653379,76.5714286 7.14285714,76.5714286 L20.1455279,76.5714286 C21.86868,67.2342122 27.3157009,59.1099645 35.1613351,53.9166305 Z"></path>
          </g>
          <g id="notes" class={this.activity.notes ? "active" : "disable"} transform="translate(407.0, 25.0)">
            <path d="M98,62.2857143 L98,5.35714286 C98,3.49296236 96.5070376,2 94.6428571,2 L5.35714286,2 C3.49296236,2 2,3.49296236 2,5.35714286 L2,94.6428571 C2,96.5070376 3.49296236,98 5.35714286,98 L62.2857143,98 L62.2857143,69.6428571 C62.2857143,65.5918591 65.5918591,62.2857143 69.6428571,62.2857143 L98,62.2857143 Z M97.9381041,73.4285714 L73.4285714,73.4285714 L73.4285714,97.9362275 C74.0795954,97.8088309 74.6775308,97.4940421 75.1482864,97.0232864 L97.0232864,75.1482864 C97.4956117,74.6759612 97.8117555,74.074652 97.9381041,73.4285714 Z"></path>
          </g>
          <g id="private" class={this.activity.private ? "active" : "disable"} transform="translate(557.0, 25.0)">
            <path d="M1.94667101,69.7872755 C1.9431734,69.7908003 1.9397346,69.79425 1.93635514,69.7976239 C1.94746495,69.7860091 1.9572019,69.7735647 1.96558096,69.7605814 Z M2.28067579,69.4250862 C8.87731878,69.3321239 14.9755267,67.383946 20.5780653,64.1200817 L21.5011233,63.5823369 L22.4613387,64.0505165 C29.6142499,67.538116 37.8484785,69.4285714 46.4285714,69.4285714 C71.070462,69.4285714 90.8571429,54.2090587 90.8571429,35.7142857 C90.8571429,17.2195127 71.070462,2 46.4285714,2 C21.7866808,2 2,17.2195127 2,35.7142857 C2,42.6425056 4.78619931,49.2523758 9.9571547,54.8993187 L10.8411485,55.8646843 L10.3102649,57.0611535 C8.93473686,60.161224 7.09274653,63.184704 4.99961157,66.0225468 C3.96982874,67.4187117 2.88478706,68.7426256 2.28067579,69.4250862 Z M101.96798,34.127637 C101.989417,34.6495568 102,35.178238 102,35.7142857 C102,60.5631712 76.9842823,80.5714286 46.4285714,80.5714286 C45.3685728,80.5714286 44.3029513,80.5393458 43.1896731,80.4756616 C50.8642028,91.0856083 65.6470937,98 82.1428571,98 C90.758062,98 98.9902532,96.1155225 106.105588,92.6241472 L107.06752,92.152143 L107.993363,92.6915103 C113.596058,95.9554654 119.694449,97.903661 126.291304,97.9965225 C125.666725,97.2933417 124.595375,95.9883044 123.57254,94.6033259 C121.478577,91.767977 119.635993,88.7413415 118.260172,85.6303435 L117.730356,84.4323263 L118.616859,83.4679291 C123.778651,77.8525908 126.571429,71.2217546 126.571429,64.2857143 C126.571429,51.4292576 116.893827,39.7987921 101.96798,34.127637 Z"></path>
          </g>
        </g>
        <g
          id="frame"
          transform="translate(10.0, 5.0)"
          stroke-width={strokeWidth.toString()}
          class={Object.keys(this.activity).some(k => this.activity[k]) ? "activeFrame" : "disableFrame"}
          fill="none"
        >
          <rect id="frame" x="2" y="2" width="726" height="136" rx="66"></rect>
        </g>
      </svg>
    );
  }
}
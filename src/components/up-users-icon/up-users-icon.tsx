import { Component, Prop, h } from "@stencil/core";
import { strokeWidth } from "../up-global";

@Component({
  tag: "up-users-icon",
  styleUrl: "up-users-icon.css",
  shadow: true
})
export class UpUsersIcon {
  // The stars component height
  @Prop({ mutable: true }) height?: string = "100%";
  @Prop({ mutable: true }) source: string;
  @Prop({ mutable: true }) active: boolean;

  render() {
    const usersTypeIcon = {
      my: [0.0, 0.0, 0, 0, 0.0, 0.0, 0.0, 0.0],
      friends: [50.0, 50.0, 1, 1, 0.0, 0.0, 0.0, 0.0],
      school: [25.0, 25.0, -1, -1, -25.0, -25.0, 0.0, 0.0],
      following: [25.0, 75.0, -1, 1, -25.0, -75.0, 0.0, 50.0],
      others: [75.0, 25.0, 1, -1, -75.0, -25.0, 50.0, 0.0]
    };

    // Tip rotation setting
    return (
      <svg id="users-icon" height={this.height} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        {/* Create the user icon circle */}
        <g id={this.source}>
          <circle
            id={this.source.concat("-circle")}
            stroke-width={strokeWidth.toString()}
            class={this.active ? "active" : "not-active"}
            r={(50 - strokeWidth / 2).toString()}
            cx="50"
            cy="50"
          ></circle>
        </g>
        {/* Create the tip */}
        <g
          id={this.source === "my" ? "NONE" : this.source.concat("-tip")}
          visibility={this.source === "my" ? "hidden" : "visible"}
          transform={"translate(".concat(
            usersTypeIcon[this.source][0],
            `, `,
            usersTypeIcon[this.source][1],
            `) 
          scale(`,
            usersTypeIcon[this.source][2],
            `, `,
            usersTypeIcon[this.source][3],
            `) 
          translate(`,
            usersTypeIcon[this.source][4],
            `, `,
            usersTypeIcon[this.source][5],
            `) 
          translate(`,
            usersTypeIcon[this.source][6],
            `, `,
            usersTypeIcon[this.source][7],
            `)`
          )}
          class="active"
        >
          <path d="M50,-2.84217094e-14 L50,50 L-0.001,49.999 L0.709530107,49.9933014 C27.7316359,49.5562219 49.5551632,27.7846346 49.9932854,0.826841425 L50,-2.84217094e-14 Z"></path>
        </g>
      </svg>
    );
  }
}

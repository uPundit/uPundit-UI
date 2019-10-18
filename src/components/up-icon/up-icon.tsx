import { Component, Prop, h } from '@stencil/core';
 
@Component({
  tag: 'up-icon',
  styleUrl: 'up-icon.css',
  shadow: true
})
export class UpIcon {
  // Icon height
  @Prop({ mutable: true }) height?: string = '2em';

  render() {
    return (
      <svg id='iconimage' height={this.height} viewBox='0 0 512 512'>
        <defs>
          <linearGradient id='backgradient' x1='50%' y1='300%' x2='50%' y2='0%'>
            <stop id='top' offset='0%'></stop>
            <stop id='bottom' offset='200%'></stop>
          </linearGradient>
        </defs>
          <rect id='backlogo' fill='url(#backgradient)' x='0' y='0' width='512' height='512' />
          <path id='iconlogo' d='M325.380493,96 C375.428278,96 416,136.571756 416,186.619509 C416,236.667267 375.428284,277.239007 325.380493,277.239033 C308.346457,277.22459 291.66139,272.409356 277.238948,263.345602 L277.238948,263.345602 L277.238948,325.381731 C277.237017,327.518821 277.159488,329.655174 277.006507,331.786783 C276.79532,334.800616 276.433545,337.802003 275.922538,340.779697 C275.406657,343.757428 274.742141,346.70749 273.931483,349.618822 C273.124021,352.529586 272.171525,355.398156 271.077561,358.213789 C269.984625,361.031655 268.751399,363.793078 267.382506,366.487704 C266.010079,369.179515 264.503882,371.801 262.869561,374.342338 C261.238214,376.884202 259.480808,379.342918 257.603923,381.70928 C255.727393,384.075046 253.733788,386.345538 251.630568,388.51226 C249.522836,390.682926 247.307715,392.74667 244.993528,394.695737 C242.685696,396.639856 240.282198,398.467487 237.792017,400.1718 C235.29512,401.878004 232.714378,403.458149 230.059481,404.906302 C227.409312,406.353979 224.688437,407.66828 221.907039,408.844286 C219.125095,410.021592 216.286023,411.059057 213.400456,411.952796 C210.511943,412.847365 207.580465,413.596794 204.617023,414.19827 C201.658348,414.796459 198.671632,415.246443 195.668046,415.546541 C192.661312,415.848687 189.641346,416.000652 186.619469,416.000652 C184.482396,416.000652 182.346068,415.920712 180.214493,415.767492 C177.200448,415.556534 174.198841,415.194968 171.220917,414.684147 C168.243422,414.168269 165.293594,413.503778 162.382491,412.693168 C159.471707,411.885683 156.603117,410.933162 153.787468,409.839171 C150.9696,408.746434 148.208165,407.513409 145.513514,406.14472 C142.821891,404.772079 140.200601,403.265681 137.659466,401.63117 C135.117438,399.99988 132.658558,398.242518 130.292033,396.365665 C127.92627,394.489086 125.655784,392.49543 123.489072,390.392159 C121.318401,388.284446 119.254651,386.069343 117.305576,383.755176 C115.361442,381.447542 113.533779,379.044246 111.829418,376.554269 C110.123239,374.057364 108.54312,371.476616 107.094993,368.821714 C105.647283,366.171541 104.33295,363.45066 103.156914,360.669254 C101.979605,357.887148 100.942152,355.047911 100.048441,352.162179 C99.1539066,349.273821 98.4044966,346.3425 97.8030241,343.379218 C97.2044295,340.420564 96.754041,337.433848 96.4535435,334.430242 C96.15157,331.423331 96,328.403198 96,325.381164 L96,325.381164 L96,256.000656 C96,250.367667 98.2375681,244.965363 102.220676,240.98222 C106.203783,236.999078 111.606067,234.761381 117.239056,234.761411 L117.239056,234.761411 C122.871974,234.76899 128.274174,237.006678 132.257235,240.989766 C136.240295,244.972855 138.477944,250.375071 138.477924,256.007989 L138.477924,256.007989 L138.477924,325.388628 C138.478003,326.525354 138.518343,327.661719 138.598869,328.795589 C138.710743,330.397202 138.902668,331.992216 139.173924,333.574651 C139.44953,335.154683 139.803925,336.719955 140.235782,338.26461 C140.664488,339.811751 141.170317,341.336478 141.751373,342.833076 C142.330462,344.328804 142.983938,345.794658 143.709357,347.225152 C144.439541,348.654274 145.24073,350.04599 146.109924,351.395086 C146.976834,352.746264 147.910789,354.053232 148.908286,355.311093 C149.905697,356.569134 150.965415,357.776495 152.083468,358.928649 C153.200425,360.081787 154.374364,361.178332 155.600885,362.214174 C156.831046,363.247253 158.112145,364.218111 159.439373,365.123106 C160.764667,366.027985 162.134378,366.866033 163.543373,367.634111 C164.949487,368.402892 166.393112,369.100983 167.868854,369.725777 C169.348433,370.35395 170.858546,370.907626 172.393516,371.384725 C173.925164,371.856483 175.479414,372.251463 177.050461,372.568189 C178.626609,372.887536 180.21777,373.127705 181.817957,373.287793 C183.413218,373.448868 185.01553,373.530148 186.618902,373.531326 C187.755749,373.528797 188.89215,373.485998 190.025967,373.403012 C191.627576,373.290967 193.222577,373.098872 194.804991,372.827446 C196.385044,372.551798 197.950335,372.197359 199.495007,371.765456 C201.042095,371.33677 202.566772,370.830966 204.063322,370.249941 C205.558908,369.670627 207.02461,369.016936 208.454944,368.291314 C209.884264,367.561172 211.276175,366.760007 212.625464,365.890822 C213.976631,365.02388 215.283586,364.089894 216.541433,363.092366 C217.799285,362.094977 219.006462,361.035297 220.158441,359.917297 C221.311538,358.800128 222.408026,357.625974 223.443795,356.399238 C224.47711,355.169283 225.448214,353.88838 226.353465,352.561335 C227.258319,351.236039 228.096341,349.866329 228.864394,348.457335 C229.632768,347.051166 230.330455,345.60751 230.954851,344.13176 C231.583218,342.652434 232.137109,341.142568 232.614441,339.607835 C233.086188,338.075974 233.481137,336.521509 233.797811,334.950248 C234.116972,333.374109 234.356958,331.782967 234.516866,330.182808 C234.677964,328.587517 234.759263,326.985173 234.760457,325.381768 L234.760457,325.381768 L234.760457,186.619527 C234.760449,136.57179 275.332156,96 325.379926,96 L325.379926,96 Z M325.379926,138.478058 C298.792122,138.478058 277.238381,160.031741 277.238381,186.619527 C277.238381,213.207328 298.792108,234.761033 325.379926,234.761033 C351.967744,234.761033 373.521472,213.207328 373.521472,186.619527 C373.521472,160.031741 351.96773,138.478058 325.379926,138.478058 Z' />
      </svg>
      );
  }
}
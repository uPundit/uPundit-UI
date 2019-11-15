/* eslint-disable */
/* tslint:disable */
/**
 * This is an auto generated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { myActivity } from './components/up-my-tags/up-my-tags';
import { tag } from './components/up-others-tags/up-others-tags';
import { uprating } from './components/up-stars/up-stars';

export namespace Components {
  interface UpIcon {
    height?: string;
  }
  interface UpLogo {
    height?: string;
  }
  interface UpMyTags {
    activity?: myActivity;
    height?: string;
  }
  interface UpOthersTags {
    height?: string;
    tags?: tag;
  }
  interface UpStars {
    height?: string;
    ratings?: uprating;
  }
  interface UpUsersIcon {
    active: boolean;
    height?: string;
    source: string;
  }
}

declare global {
  interface HTMLUpIconElement extends Components.UpIcon, HTMLStencilElement {}
  const HTMLUpIconElement: {
    prototype: HTMLUpIconElement;
    new (): HTMLUpIconElement;
  };

  interface HTMLUpLogoElement extends Components.UpLogo, HTMLStencilElement {}
  const HTMLUpLogoElement: {
    prototype: HTMLUpLogoElement;
    new (): HTMLUpLogoElement;
  };

  interface HTMLUpMyTagsElement extends Components.UpMyTags, HTMLStencilElement {}
  const HTMLUpMyTagsElement: {
    prototype: HTMLUpMyTagsElement;
    new (): HTMLUpMyTagsElement;
  };

  interface HTMLUpOthersTagsElement extends Components.UpOthersTags, HTMLStencilElement {}
  const HTMLUpOthersTagsElement: {
    prototype: HTMLUpOthersTagsElement;
    new (): HTMLUpOthersTagsElement;
  };

  interface HTMLUpStarsElement extends Components.UpStars, HTMLStencilElement {}
  const HTMLUpStarsElement: {
    prototype: HTMLUpStarsElement;
    new (): HTMLUpStarsElement;
  };

  interface HTMLUpUsersIconElement extends Components.UpUsersIcon, HTMLStencilElement {}
  const HTMLUpUsersIconElement: {
    prototype: HTMLUpUsersIconElement;
    new (): HTMLUpUsersIconElement;
  };
  interface HTMLElementTagNameMap {
    'up-icon': HTMLUpIconElement;
    'up-logo': HTMLUpLogoElement;
    'up-my-tags': HTMLUpMyTagsElement;
    'up-others-tags': HTMLUpOthersTagsElement;
    'up-stars': HTMLUpStarsElement;
    'up-users-icon': HTMLUpUsersIconElement;
  }
}

declare namespace LocalJSX {
  interface UpIcon {
    height?: string;
  }
  interface UpLogo {
    height?: string;
  }
  interface UpMyTags {
    activity?: myActivity;
    height?: string;
  }
  interface UpOthersTags {
    height?: string;
    tags?: tag;
  }
  interface UpStars {
    height?: string;
    ratings?: uprating;
  }
  interface UpUsersIcon {
    active?: boolean;
    height?: string;
    source?: string;
  }

  interface IntrinsicElements {
    'up-icon': UpIcon;
    'up-logo': UpLogo;
    'up-my-tags': UpMyTags;
    'up-others-tags': UpOthersTags;
    'up-stars': UpStars;
    'up-users-icon': UpUsersIcon;
  }
}

export { LocalJSX as JSX };

declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'up-icon': LocalJSX.UpIcon & JSXBase.HTMLAttributes<HTMLUpIconElement>;
      'up-logo': LocalJSX.UpLogo & JSXBase.HTMLAttributes<HTMLUpLogoElement>;
      'up-my-tags': LocalJSX.UpMyTags & JSXBase.HTMLAttributes<HTMLUpMyTagsElement>;
      'up-others-tags': LocalJSX.UpOthersTags & JSXBase.HTMLAttributes<HTMLUpOthersTagsElement>;
      'up-stars': LocalJSX.UpStars & JSXBase.HTMLAttributes<HTMLUpStarsElement>;
      'up-users-icon': LocalJSX.UpUsersIcon & JSXBase.HTMLAttributes<HTMLUpUsersIconElement>;
    }
  }
}

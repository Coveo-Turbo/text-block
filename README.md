# TextBlock

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

1. Install the component into your project.

```
npm i @coveops/text-block
```

2. Use the Component or extend it

Typescript:

```javascript
import { TextBlock, ITextBlockOptions } from '@coveops/text-block';
```

Javascript

```javascript
const TextBlock = require('@coveops/text-block').TextBlock;
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * from '@coveops/text-block'
```

4. Or for quick testing, you can add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/text-block@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

5. Include the component in your template as follows:

Place the component in your markup:

```html
<div class="CoveoTextBlock"></div>
```

## Options

The following options can be configured:

| Option | Required | Type | Default | Notes |
| --- | --- | --- | --- | --- |
| `as` | No | string | `p` | Type of element, i.e. `h1`, `p`, `span`, etc. |
| `ariaHidden` | No | boolean | `true` | This sets the aria-hidden attribute to `true` or `false`. |
| `overrideAriaHidden` | No | boolean | `false` | This removes the aria-hidden attribute and allows for replacing it with another system, such as the `.sr-only` class provided in the Bootstrap framework.  |
| `content` | No | string | `label` | Content of the text block. |
| `contentType` | No | string |  | Specifies the content type of the text block. Preset values are `header` or `text`. You can pass your own `contentType` and it will be treated as a class. By default, you have the `text-block` class, which can be overriden. |
| `constantlyVisible` | No | boolean | `false` | Specifies whether the text block should be constantly visible in the UI, regardless of the result obtained from the query. Useful if you need a page header title. |

## About the `text-block` CSS class

No rules are directly applied to the `.text-block` class. You may style it as you need it. However, here are the default styles:

```
.CoveoTextBlock{
    background-color: #fff;
}
.CoveoTextBlock .text-block.header {
    font-weight: bold;
}
.CoveoTextBlock .text-block.header,
.CoveoTextBlock .text-block.text {
    white-space: normal;
}
@media screen and (max-device-width: 768px) {
    .text-block.header,
    .text-block.text {
        padding: 5px 15px;
        margin: 0px;
    }
}
```

## Extending

Extending the component can be done as follows:

```javascript
import { TextBlock, ITextBlockOptions } from "@coveops/text-block";

export interface IExtendedTextBlockOptions extends ITextBlockOptions {}

export class ExtendedTextBlock extends TextBlock {}
```

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`
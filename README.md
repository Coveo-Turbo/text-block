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
| `content` | No | string | `label` | Content of the text block. |
| `contentType` | No | string | `text` | Specifies the content type of the text block. Valid values are `header` or `text`. |
| `constantlyVisible` | No | boolean | `false` | Specifies whether the text block should be constantly visible in the UI, regardless of the result obtained from the query. Useful if you need a page header title. |

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
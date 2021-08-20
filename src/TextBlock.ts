import { $$, Component, IComponentBindings, ComponentOptions, IQuerySuccessEventArgs, QueryEvents, INoResultsEventArgs } from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface ITextBlockOptions {
    content: string;
    contentType: string;
    constantlyVisible: boolean;
}

@lazyComponent
export class TextBlock extends Component {
    static ID = 'TextBlock';
    static options: ITextBlockOptions = {
        content: ComponentOptions.buildStringOption({ defaultValue: 'label' }),
        contentType: ComponentOptions.buildStringOption({ defaultValue: 'text' }),
        constantlyVisible: ComponentOptions.buildBooleanOption({ defaultValue: false }),
    };
    static contentTypeOptions = [
        'header',
        'text',
    ];

    constructor(public element: HTMLElement, public options: ITextBlockOptions, public bindings: IComponentBindings) {
        super(element, TextBlock.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, TextBlock, options);

        this.bind.onRootElement(QueryEvents.querySuccess, (args: IQuerySuccessEventArgs) => this.handleQuerySuccess(args));
        this.bind.onRootElement(QueryEvents.queryError, () => this.handleQueryError());
        this.bind.onRootElement(QueryEvents.noResults, (args: INoResultsEventArgs) => this.handleNoResults());
    }


    private handleQueryError() {
        this.reset();
    }

    private handleNoResults() {
        this.reset();
    }

    private handleQuerySuccess(data: IQuerySuccessEventArgs) {
        this.reset();
        if (this.options.constantlyVisible || data.results.results.length != 0) {
            this.build();
        }
    }

    private reset() {
        $$(this.element).empty();
    }

    protected build() {
        this.renderTextBlock();
    }

    protected renderTextBlock() {
        // fall back to default `text` class if no valid value.
        const classes = TextBlock.contentTypeOptions.indexOf(this.options.contentType) > -1 ? `text-block ${this.options.contentType}` : 'text-block text';
        const textBlockElement = $$('p', { className: classes, ariaHidden: 'false' }, this.options.content).el;
        $$(this.element).append(textBlockElement);
    }
}
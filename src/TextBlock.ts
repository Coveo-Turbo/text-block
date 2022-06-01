import { $$, Component, IComponentBindings, ComponentOptions, IQuerySuccessEventArgs, QueryEvents, INoResultsEventArgs } from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface ITextBlockOptions {
    as: string;
    content: string;
    contentType: string;
    constantlyVisible: boolean;
    ariaHidden: boolean;
    overrideAriaHidden: boolean;
}

@lazyComponent
export class TextBlock extends Component {
    static ID = 'TextBlock';
    static options: ITextBlockOptions = {
        as: ComponentOptions.buildStringOption({ defaultValue: 'p' }),
        content: ComponentOptions.buildStringOption({ defaultValue: 'label' }),
        contentType: ComponentOptions.buildStringOption({ defaultValue: '' }),
        constantlyVisible: ComponentOptions.buildBooleanOption({ defaultValue: false }),
        ariaHidden: ComponentOptions.buildBooleanOption({ defaultValue: false }),
        overrideAriaHidden: ComponentOptions.buildBooleanOption({ defaultValue: false }),
    };
    static hasResults: boolean = true;

    constructor(public element: HTMLElement, public options: ITextBlockOptions, public bindings: IComponentBindings) {
        super(element, TextBlock.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, TextBlock, options);

        this.bind.onRootElement(QueryEvents.querySuccess, (args: IQuerySuccessEventArgs) => this.handleQuerySuccess(args));
        this.bind.onRootElement(QueryEvents.queryError, () => this.handleQueryError());
        this.bind.onRootElement(QueryEvents.noResults, (args: INoResultsEventArgs) => this.handleNoResults());
    }


    private handleQueryError() {
        this.reset();
        TextBlock.hasResults = false;
    }

    private handleNoResults() {
        this.reset();
        TextBlock.hasResults = false;
    }

    private handleQuerySuccess(data: IQuerySuccessEventArgs) {
        this.reset();
        if (data.results.totalCount > 0) { TextBlock.hasResults = true; }
        if (this.options.constantlyVisible || TextBlock.hasResults) { this.build(); }
    }

    private reset() {
        $$(this.element).empty();
    }

    protected build() {
        this.renderTextBlock();
    }

    protected renderTextBlock() {
        const { ariaHidden, as, content, contentType, overrideAriaHidden } = this.options;
        const classes = `text-block ${contentType}`;
        let attributes;
        if (!overrideAriaHidden) {
            attributes = { className: classes, ariaHidden: ariaHidden.toString() }
        } else {
            attributes = { className: classes }
        }
        const textBlockElement = $$(as, attributes, content).el;
        $$(this.element).append(textBlockElement);
    }
}
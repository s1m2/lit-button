import { LitElement, html, TemplateResult, PropertyDeclarations, css } from 'lit';

export class McButton extends LitElement {

    static styles = css`
        button {
            border: 0;
            padding: 12px 24px;
            border-radius: 4px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            line-height: 24px;
            font-size: 18px;
        }

        .button--primary {
            background: #1d4289;
            color: #FFFFFF;
        }

        .button--secondary {
            background: #00bfb2;
            color: #1b365d;
        }

        .button--tertiary {
            background: none;
            color: #000000;
        }

        button:hover {
            cursor: pointer;
        }
    `;

    public label = "";
    public buttonType = "primary";

    // Get the properties 
    static get properties(): PropertyDeclarations {
        return {
            label: { type: String },
            buttonType: { type: String }
        }
    }

    render(): TemplateResult {
        return html`<button class="button--${this.buttonType}">${this.label}</button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "mc-button": McButton;
    }
}

customElements.get('mc-button') || customElements.define('mc-button', McButton);
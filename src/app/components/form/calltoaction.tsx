import { Component, h } from 'preact';
import './calltoaction.css'


interface CTAProps {
    buttonText?: string,
    onClick: any,
}

interface CTAState {
}


export class CTAComponent extends Component<CTAProps, CTAState>{

    getDefaultProps() {
        return {
            buttonText: 'Отправить'
        }
    }

    constructor(props: CTAProps) {
        super(props);
        this.state = {
        }
    }

    click(e) {
        this.props.onClick()
    }

    render() {
        return (
            <div class="form--item">
                <button onClick={(e) => this.click(e)} className='actionButton'>{this.props.buttonText}</button>
            </div>
        );
    }
}

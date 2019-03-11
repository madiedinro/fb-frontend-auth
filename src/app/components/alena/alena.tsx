import { Component, h } from 'preact';
import './alena.css'
import AlenaImg from './alena-2.png'

interface AlenaProps {
    title?: string,
    mainText?: string,
    bottomText?: string,
}

interface AuthState {
}

export class AlenaComponent extends Component<AlenaProps, AuthState>{

    getDefaultProps() {
        return {
            buttonText: 'Отправить'
        }
    }

    constructor(props: AlenaProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='alena--container'>
                <div className='alena--center'>
                    <img className='alena--image' src={AlenaImg} />
                    <div className='alena--text'>
                        <div>{this.props.title}</div>
                        <div>{this.props.mainText}</div>
                    </div>
                </div>
                <div key='start'>{this.props.bottomText}</div>

            </div>
        );
    }
}

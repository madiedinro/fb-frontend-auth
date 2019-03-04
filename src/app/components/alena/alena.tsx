import { Component, h } from 'preact';
import { ShowIf } from '../../lib';
import './alena.css'

interface AlenaProps {
    title?: string,
    mainText?: string,
    buttonText?: string,
    bottomText?: string,
    onClick?: any,
}

interface AuthState {
}

export class AlenaComponent extends Component<AlenaProps, AuthState>{
    
    getDefaultProps(){
        return {
            buttonText: 'Отправить'
        }
    }

    constructor(props: AlenaProps) {
        super(props);
        this.state = {
            status: 'prepared'
        }
    }

    mainActionCalled(e){
        this.props.onClick()
    }

    render() {
        return (
            <div className='alena--container'>
                
                    <div className='alena--center'>
                        <img className='alena--image' src='images/alena-2.png' />
                        <div className='alena--title'>{this.props.title}</div>
                        <div className='alena--text'>{this.props.mainText}</div>
                    </div>
                    <ShowIf condition={this.props.onClick}>
                        <div className='buttonBlock'>
                            <div>
                                <button onClick={this.mainActionCalled} className='submitButton'></button>
                            </div>
                        </div>
                    </ShowIf>
                    <div key='start'>{this.props.bottomText}</div>
                
            </div>
        );
    }
}

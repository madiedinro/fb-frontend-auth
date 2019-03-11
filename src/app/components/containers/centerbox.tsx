import { Component, h, VNode } from 'preact';
import './centerbox.css'

export class CenterBoxContainer extends Component<{}, {}>{
    render() {
        return (
            <div className='box--container'>
                <div className='box--center'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

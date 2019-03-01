import { Component, h } from 'preact';
import { FacebookLogin } from '../facebook';
import { ShowIf } from '../../shoif';

type AuthStatus = 'ok' | 'prepared' | 'fail';

interface AuthState {
    status: AuthStatus;
}

export class AlenaAuth extends Component<{}, AuthState>{


    constructor(props: {}) {
        super(props);

        this.state = {
            status: 'prepared'
        }

        this.getContent = this.getContent.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth(status: AuthStatus) {
        this.setState({ status: status });
    }

    getContent(status: AuthStatus) {
        if (status === 'ok') {
            return 'Авторизация пройдера! У вас такие токены... ммм... 😉';
        }

        if (status === 'prepared') {
            return 'Такс, такс, такс. Будем проверять вас. Давно не мочились? ';
        }

        if (status === 'fail') {
            return 'Ну ничего, ПТУ еще ни кто не отменял.'
        }
    }

    render() {
        return (
            <div className='alenaContainer'>
                <div className='alenaBox'>
                    <div className='alenaCenter'>
                        <img className='alenaImage' src='images/alena-2.png' />
                        <div className='alenaText'>{this.getContent(this.state.status)}</div>
                    </div>
                    <ShowIf condition={this.state.status !== 'ok'}>
                        <div key='start'>
                            <div className='policy'>
                                Отправляя данные вы соглашаетесь с <a href='https://digitalgod.be/policy'>политикой конфиденциальности</a>
                            </div>
                            <div className='facebookBlock'>
                                <FacebookLogin change={this.handleAuth} />
                            </div>
                        </div>
                    </ShowIf>
                </div>
            </div>
        );
    }


}

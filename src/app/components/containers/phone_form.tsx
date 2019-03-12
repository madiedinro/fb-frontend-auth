import { Component, h } from 'preact';
import './phone_form.css'
import { AlenaComponent } from '../alena'
import { NumberInput, CTAComponent } from '../form'
import { CenterBoxContainer } from './centerbox'
import { DGodApi } from '../../lib/api';
import { ShowIf } from '../../lib';

interface PhoneFormProps {
    api: DGodApi;
    account_linking_token?: string;
    redirect_uri?: string;
}

interface PhoneFormState {
    stage: string;
    phone?: string;
    code?: string;
    result?: string;
    phone_status?: number;
    code_status?: number;
    done?: number;
    step: number;
    error?: string;
}


export class PhoneFormContainer extends Component<PhoneFormProps, PhoneFormState>{
    state: PhoneFormState = {
        stage: 'init',
        step: 0,
    }

    setPhone(phone) {
        this.setState({ phone })
    }

    setCode(code) {
        this.setState({ code })
    }

    checkDone(res: { [k: string]: any }) {
        const { redirect_uri } = this.props;
        if (res.auth_code ) {
            setTimeout(() => {
                const redir_url = redirect_uri + '&authorization_code=' + res.auth_code;
                location.href = redir_url
            }, 100)
        }
    }

    submit() {
        const { api, account_linking_token } = this.props;
        const { phone, code, } = this.state
        const data = { phone, code, account_linking_token }
        api.requestCode(data)
            .then((res) => {
                if (res && typeof res == 'object') {
                    this.setState(res)
                    this.checkDone(res)
                }
            })
    }


    render() {
        const { error, phone_status, code_status } = this.state;
        const step = (phone_status && 1 || 0) +
                        ((phone_status && code_status) && 1 || 0)
        return (
            <CenterBoxContainer>
                <div className='phone--form'>
                    <AlenaComponent title={"Бот Алена"} mainText={"Доставать и спамить не буду. Буду просто хладнокровно смотреть."}></AlenaComponent>
                    <h3>Такс, приступим.</h3>
                    <p>
                        <ShowIf condition={step === 0}>
                        Напиши свой номер мобильного телефона, начиная с кода страны. Россия и Казахстан +7, Беларусь +375 и Украина +380.
                        </ShowIf>
                        <ShowIf condition={step === 1}>
                            <span>
                                Я отправила сообщение на номер
                                <strong>{' '}{this.state.phone}.{' '}</strong>
                                Какие цифры пришли?
                            </span>
                        </ShowIf>
                        <ShowIf condition={error}>
                            <div className="form--error">
                            {error}
                            </div>
                        </ShowIf>
                        <ShowIf condition={step === 2}>
                            Готово! Отправляю обратно фейсбуку
                        </ShowIf>
                    </p>
                    <div class='phone--form--group'>
                        <ShowIf condition={step === 0}>
                            <NumberInput onChange={(val) => this.setPhone(val)} placeholder="Номер телефона с кодом страны" />
                        </ShowIf>
                        <ShowIf condition={step === 1}>
                            <NumberInput onChange={(val) => this.setCode(val)} placeholder="Введите код из смс сообщения" />
                        </ShowIf>
                        <ShowIf condition={step !== 2}>
                            <CTAComponent onClick={() => this.submit()} buttonText="Дальше" />
                        </ShowIf>
                    </div>
                </div>
            </CenterBoxContainer>
        );
    }
}

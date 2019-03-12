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
        if (res && res.auth_code ) {
            const { redirect_uri } = this.props;
            setTimeout(() => {
                location.href = redirect_uri + '&authorization_code=' + res.auth_code;
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
                    const step = (res.phone_status && 1 || 0) +
                        ((res.phone_status && res.code_status) && 1 || 0)
                    this.setState({
                        phone_status: res.phone_status,
                        code_status: res.code_status,
                        step
                    })
                    this.checkDone(res)
                }
            })
    }


    render() {
        const { step } = this.state;
        return (
            <CenterBoxContainer>
                <div className='phone--form'>
                    <AlenaComponent title={"Бот Алена"} mainText={"Доставать и спамить не буду. Буду просто хладнокровно смотреть."}></AlenaComponent>
                    <h3>Итак, приступимс</h3>
                    <p>
                        <ShowIf condition={step === 0}>
                            На указанный номер телефона я пришлю сообщение с дальнейшими инструкциями.
                        </ShowIf>
                        <ShowIf condition={step === 1}>
                            <span>
                                Я отправила сообщение на номер
                                <strong>{' '}{this.state.phone}.{' '}</strong>
                                Какие цифры пришли?
                            </span>
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

import { Component, h } from 'preact';
import { AlenaComponent } from './components/alena';
import './styles/app.css'
import { Router, route } from 'preact-router';

export interface AppProps {
	title: string;
}

interface AppState {
	title: string;
}

export class App extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
	}

	render(props: AppProps, state: AppState) {
		return (
			<div className='wrapper'>
			<Router>
				<AlenaComponent path="/alena/auth_success" title={"Все получилочь!"} mainText={"Можно закрыть вкладку"} />
				<AlenaComponent path="/alena/too_late" title={"Ну и где тебя носило?"} mainText={"Мне сказали, что запрашиваемого ресурса уже нет. Если это старая ссылка, возможно вышло ее время."} />
				<AlenaComponent default title={"Ай-ай-ай!"} mainText={"Не шути со мной..."} />
			</Router>
			</div>
		)
	}
}
import { Component, h } from 'preact';
import { AlenaComponent } from './components/alena';
import './styles/app.css'
import { Router, route } from 'preact-router';
// import { createHashHistory } from 'history';


export interface AppProps {
	title: string;
}

interface AppState {
	title: string;
}

//  history={createHashHistory()

export class App extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
	}

	render(props: AppProps, state: AppState) {
		return (
			<div className='wrapper'>
			<Router>
				<AlenaComponent path="/auth_success" title={"Все получилочь!"} mainText={"Можно закрыть вкладку"} />
				<AlenaComponent default title={"Ай-ай-ай!"} mainText={"Не шути со мной..."} />
			</Router>
			</div>
		)
	}
}
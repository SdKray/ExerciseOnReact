import React from 'react';
import './App.css';
import Student from './components/Student';
import { Divercion } from './components/Divercion';

function App() {
	let Luis = {
		nombre: 'Luis Alberto',
		telfono: '7711854073',
		city: 'Pachuca'
	};
	let Enrique = {
		nombre: 'Cb',
		telfono: '7711854073',
		city: 'Pachuca'
	};
	let d = new Date();
	console.log(
		'La fecha de hoy: ',
		d.getDate(),
		'/',
		d.getMonth() + 1,
		'/',
		d.getFullYear()
	);
	console.log('El año es: ', d.getFullYear());
	console.log('El mes es: ', d.getMonth() + 1);
	console.log('El dia es: ', d.getDate());
	console.log(
		'La hora es: ',
		d.getHours(),
		':',
		d.getMinutes(),
		':',
		d.getSeconds()
	);
	//d.setDate(6);
	//d.setHours(17);
	function DameDia() {
		switch (d.getDay()) {
			case 0:
				return 'Domingo';
			case 1:
				return 'Lunes';

			case 2:
				return 'Martes';

			case 3:
				return 'Miercoles';

			case 4:
				return 'Jueves';

			case 5:
				return 'Viernes';

			case 6:
				return 'Sabado';

			default:
				break;
		}
	}

	if (d.getHours() < 12 && d.getHours() >= 0) {
		console.log('Buenos Dias!');
	} else if (d.getHours() >= 12 && d.getHours() < 18) {
		console.log('Buenas Tardes!');
	} else if (d.getHours() >= 18 && d.getHours() < 24) {
		console.log('Buenas Noches!');
	}
	console.log('Diferencias de años(mi edad): ', d.getFullYear() - 1998);
	console.log('Diferencias de dias(dias restantes): ', 31 - d.getDate());
	console.log(
		'Diferencias de horas(horas restante del dia): ',
		24 - d.getHours()
	);
	return (
		<div className='App'>
			<p>
				<span>Hora: </span>
				{d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()}
			</p>
			<br />
			<p>
				<span>Fecha: </span>
				{DameDia() +
					' ' +
					d.getDate() +
					' de ' +
					(d.getMonth() + 1) +
					' del año ' +
					d.getFullYear()}
			</p>
			<Divercion>
				<Student seleccion='Luis' Luis={Luis} Enrique={Enrique} />
			</Divercion>
		</div>
	);
}

export default App;

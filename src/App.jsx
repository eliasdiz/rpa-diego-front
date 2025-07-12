import './App.css';
import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import { io } from 'socket.io-client';
import toast from 'react-hot-toast';

const socket = io('https://rpa-diego-back-production.up.railway.app');  // Conexión al backend

export default function App() {
	const [activeTab, setActiveTab] = useState("manual");
	const [cantidad, setCantidad] = useState(0);
	const [hora, setHora] = useState("09:00");
	const [contador, setContador] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Escuchar eventos desde el backend
	useEffect(() => {
		socket.on('update-leads', ({ count }) => setContador(count));
		socket.on('automatizacion-iniciada', () => setIsRunning(true));
		socket.on('automatizacion-detenida', () => setIsRunning(false));
		socket.on('login-fallido', (mensajeError) => {
			toast.error(mensajeError);  // Mostrar alerta de login fallido
			setIsRunning(false);  // Detener la automatización
		});

		// Añadir escucha para el evento 'login-exitoso'
		socket.on('login-exitoso', () => {
			toast.success('¡Login exitoso!');  // Mostrar alerta de login exitoso
		});

		return () => {
			socket.off('update-leads');
			socket.off('automatizacion-iniciada');
			socket.off('automatizacion-detenida');
			socket.off('login-fallido');
			socket.off('login-exitoso');  // Limpiar el evento al desmontar
		};
	}, []);

	// Guardar la configuración (cantidad y hora)
	const onGuardar = () => {
		if (cantidad <= 0) {
			toast.error("La cantidad de prospectos debe ser mayor que cero.");
			return;
		}

		const payload = {
			cantidad: Number(cantidad),
			hora,
			modo: activeTab
		};

		toast.promise(
			new Promise((resolve, reject) => {
				socket.emit('guardar-config', payload);
				socket.once('config-guardada', resolve);
				socket.once('error-config', reject);
			}),
			{
				loading: 'Guardando configuración...',
				success: '¡Configuración guardada con éxito!',
				error: 'Error al guardar la configuración.',
			}
		);
	};

	// Guardar las credenciales
	const onGuardarCredenciales = () => {
		if (!email || !password) {
			toast.error('Por favor, ingresa un correo y una contraseña válidos');
			return;
		}

		const payload = {
			email,
			passwordHash: password,
		};

		toast.promise(
			new Promise((resolve, reject) => {
				socket.emit('guardar-config', payload);
				socket.once('config-guardada', resolve);
				socket.once('error-config', reject);
			}),
			{
				loading: 'Guardando credenciales...',
				success: '¡Credenciales guardadas!',
				error: 'Error al guardar las credenciales.',
			}
		);
	};

	// Iniciar la automatización
	const iniciarAutomatizacion = () => {
		if (cantidad <= 0) {
			toast.error("Configura una cantidad válida de prospectos antes de iniciar.");
			return;
		}
		socket.emit('iniciar-automatizacion');
		setContador(0);
		setIsRunning(true);
	};

	// Detener la automatización
	const detenerAutomatizacion = () => {
		socket.emit('detener-automatizacion');
		setIsRunning(false);
		toast.success("Automatización detenida");  // Mostrar alerta que la automatización se detuvo
	};

	return (
		<div className="h-[100vh] bg-gray-700 flex justify-center items-center">
			<Dashboard
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				cantidad={cantidad}
				setCantidad={setCantidad}
				hora={hora}
				setHora={setHora}
				contador={contador}
				isRunning={isRunning}
				onGuardar={onGuardar}
				onStart={iniciarAutomatizacion}
				onStop={detenerAutomatizacion}
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				onGuardarCredenciales={onGuardarCredenciales}
			/>
		</div>
	);
}

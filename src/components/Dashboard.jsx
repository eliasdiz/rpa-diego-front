import React, { useState } from "react"
import {
	GearSixIcon, ToggleRightIcon, ToggleLeftIcon, UsersIcon, PlayIcon,
	ClockIcon, StopIcon, FloppyDiskIcon, RobotIcon, XIcon
} from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function Dashboard({
	activeTab, setActiveTab, cantidad, setCantidad,
	hora, setHora, contador, isRunning, onGuardar,
	onStart, onStop, email, setEmail, password, setPassword, onGuardarCredenciales
}) {
	const [showCredentials, setShowCredentials] = useState(false)

	return (
		<Card className="w-full max-w-md mx-auto bg-gray-800 border-gray-700 shadow-2xl relative overflow-visible">
			{/* Formulario de credenciales flotante */}
			{showCredentials && (
				<div className="absolute z-50 top-4 left-1/2 -translate-x-1/2 bg-gray-900 rounded-xl border border-gray-600 p-4 w-[90%] shadow-lg">
					<div className="flex justify-between items-center mb-3">
						<h3 className="text-white text-sm font-semibold">Credenciales de acceso</h3>
						<XIcon
							className="text-gray-400 cursor-pointer hover:text-white"
							size={20}
							onClick={() => setShowCredentials(false)}
						/>
					</div>

					<div className="space-y-3">
						<Input
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-gray-700 border border-gray-600 text-white"
						/>
						<Input
							placeholder="Contraseña"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="bg-gray-700 border border-gray-600 text-white"
						/>
						<Button
							className="w-full bg-blue-600 hover:bg-blue-700 text-white"
							onClick={() => {
								onGuardarCredenciales()
								setShowCredentials(false)
							}}
						>
							Guardar credenciales
						</Button>
					</div>
				</div>
			)}

			<CardHeader className="text-center pb-3 px-4 relative">
				{/* Icono de configuración */}
				<div
					className="absolute top-2 right-4 cursor-pointer hover:rotate-180 transition-transform duration-300"
					onClick={() => setShowCredentials(!showCredentials)}
				>
					<GearSixIcon className="text-white" size={24} weight="duotone" />
				</div>

				<div className="flex flex-col items-center gap-2">
					<CardTitle className="text-white text-xl capitalize leading-tight">automatización de prospectos</CardTitle>
				</div>
				<CardDescription className="text-gray-400 text-sm">
					Configura y controla la automatización de Prospectos
				</CardDescription>
			</CardHeader>

			<CardContent className="space-y-4 px-4">
				<div className="flex justify-center items-center gap-8 py-2">
					<div className="flex items-center">
						{isRunning ? (
							<ToggleRightIcon className="text-green-500" size={36} weight="duotone" />
						) : (
							<ToggleLeftIcon className="text-orange-500" size={36} weight="duotone" />
						)}
					</div>

					<div className="flex items-center gap-2">
						<UsersIcon size={32} className="text-green-500" weight="duotone" />
						<span className="text-white text-xl font-bold">{contador}</span>
					</div>
				</div>

				<Separator className="bg-gray-700" />

				<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
					<TabsList className="flex w-full bg-gray-700 p-1">
						<TabsTrigger
							value="manual"
							className="flex-1 data-[state=active]:bg-gray-600 data-[state=active]:text-white text-gray-300 text-sm"
						>
							<PlayIcon className="mr-1 h-3 w-3" /> Manual
						</TabsTrigger>
						<TabsTrigger
							value="automatico"
							className="flex-1 data-[state=active]:bg-gray-600 data-[state=active]:text-white text-gray-300 text-sm"
						>
							<RobotIcon className="mr-1 h-3 w-3" /> Automático
						</TabsTrigger>
					</TabsList>

					<div className="relative h-72 overflow-hidden">
						{/* Vista Manual */}
						<div className={`absolute inset-0 transition-transform duration-500 ${activeTab === "manual" ? "translate-x-0" : "-translate-x-full"}`}>
							<div className="mt-4 space-y-4 h-full">
								<div className="space-y-3">
									<h3 className="text-white text-lg text-center">Prospectos</h3>
									<div className="flex justify-center items-center gap-3">
										<Input
											type="number"
											value={cantidad}
											onChange={(e) => setCantidad(e.target.value)}
											className="w-16 text-center bg-gray-700 border border-gray-500 text-white"
										/>
										<FloppyDiskIcon
											size={42}
											className="text-blue-500 cursor-pointer"
											weight="duotone"
											onClick={onGuardar}
										/>
									</div>
								</div>

								<Separator className="bg-gray-700" />

								<div className="flex flex-col gap-3 items-center">
									<Button
										onClick={onStart}
										className="w-full border border-green-500/50 bg-green-900/10 hover:bg-green-900/20 text-green-500 py-4"
									>
										<PlayIcon size={20} weight="duotone" />
										Iniciar
									</Button>
									<Button
										onClick={onStop}
										className="w-full border border-red-500/50 bg-red-900/10 hover:bg-red-900/20 text-red-500 py-4"
									>
										<StopIcon size={20} weight="duotone" />
										Detener
									</Button>
								</div>
							</div>
						</div>

						{/* Vista Automático */}
						<div className={`absolute inset-0 transition-transform duration-500 ${activeTab === "automatico" ? "translate-x-0" : "translate-x-full"}`}>
							<div className="mt-4 space-y-4 h-full">
								<div className="space-y-3">
									<h3 className="text-white text-lg text-center">Prospectos</h3>
									<div className="flex justify-center items-center gap-3">
										<Input
											type="number"
											value={cantidad}
											onChange={(e) => setCantidad(e.target.value)}
											className="w-16 text-center bg-gray-700 border border-gray-500 text-white"
										/>
									</div>
								</div>

								<div className="bg-gray-700/50 p-3 rounded-lg space-y-3">
									<div className="flex items-center gap-2 justify-center">
										<ClockIcon size={18} className="text-blue-400" weight="duotone" />
										<h4 className="text-white font-medium text-sm">Hora de inicio</h4>
									</div>
									<div className="flex justify-center">
										<Input
											type="time"
											value={hora}
											onChange={(e) => setHora(e.target.value)}
											className="w-32 bg-gray-700 border border-gray-500 text-white text-center"
										/>
									</div>
								</div>

								<Button
									onClick={onGuardar}
									className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm"
								>
									Guardar configuración
								</Button>
							</div>
						</div>
					</div>
				</Tabs>
			</CardContent>
		</Card>
	)
}

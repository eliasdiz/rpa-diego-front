
import React from "react"
import { useState } from "react"
import { GearSixIcon, ToggleRightIcon, ToggleLeftIcon, UsersIcon, PlayIcon, ClockIcon, StopIcon, FloppyDiskIcon, RobotIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function Dashboard() {
	const [service] = useState(false) 
	const [newUsers] = useState(2) 
	const [activeTab, setActiveTab] = useState("manual")
	const [schedule, setSchedule] = useState({
		startTime: "09:00",
	})


	return (
		<Card className="w-full max-w-md mx-auto bg-gray-800 border-gray-700 shadow-2xl">
			<CardHeader className="text-center pb-3 px-4">
				<div className="flex flex-col items-center gap-2">
					<GearSixIcon className="text-white" size={28} weight="duotone" />
					<CardTitle className="text-white text-xl capitalize leading-tight">automatización de prospectos</CardTitle>
				</div>
				<CardDescription className="text-gray-400 text-sm">
					Configura y controla la automatización de Prospectos
				</CardDescription>
			</CardHeader>

			<CardContent className="space-y-4 px-4">
				<div className="flex justify-center items-center gap-8 py-2">
					<div className="flex items-center">
						{service ? (
							<ToggleRightIcon className="text-green-500" size={36} weight="duotone" />
						) : (
							<ToggleLeftIcon className="text-orange-500" size={36} weight="duotone" />
						)}
					</div>

					<div className="flex items-center gap-2">
						<UsersIcon size={32} className="text-green-500" weight="duotone" />
						<span className="text-white text-xl font-bold">{newUsers}</span>
					</div>
				</div>

				<Separator className="bg-gray-700" />

				<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
					<TabsList className="flex w-full bg-gray-700 p-1">
						<TabsTrigger
							value="manual"
							className="flex-1 data-[state=active]:bg-gray-600 data-[state=active]:text-white data-[state=active]:shadow-sm text-gray-300 cursor-pointer text-sm transition-all duration-300"
						>
							<PlayIcon className="mr-1 h-3 w-3" />
							Manual
						</TabsTrigger>
						<TabsTrigger
							value="automatico"
							className="flex-1 data-[state=active]:bg-gray-600 data-[state=active]:text-white data-[state=active]:shadow-sm text-gray-300 cursor-pointer text-sm transition-all duration-300"
						>
							<RobotIcon className="mr-1 h-3 w-3" />
							Automático
						</TabsTrigger>
					</TabsList>

					<div className="relative h-72 overflow-hidden">
						<div
							className={`absolute inset-0 transition-transform duration-500 ease-in-out ${activeTab === "manual" ? "translate-x-0" : "-translate-x-full"
								}`}
						>
							<div className="mt-4 space-y-4 h-full">
								<div className="space-y-3">
									<h3 className="text-white text-lg text-center">Prospectos</h3>

									<div className="flex justify-center items-center gap-3">
										<Input
											type="number"
											className="w-16 text-center bg-gray-700 border-[0.5px] border-gray-500 text-white text-sm focus:border-gray-400 focus:ring-0"
										/>
										<FloppyDiskIcon 
											size={42} 
											className="text-blue-500 cursor-pointer" 
											weight="duotone" 
										/>
									</div>
								</div>

								<Separator className="bg-gray-700" />

								<div className="flex flex-col gap-3 items-center">
									<Button
										variant="ghost"
										className="w-full border border-green-500/50 hover:bg-green-900/20 hover:border-green-500 flex gap-2 items-center justify-center py-4 bg-green-900/10 transition-all duration-200"
									>
										<PlayIcon size={20} className="text-green-500" weight="duotone" />
										<span className="text-green-500 text-sm">Iniciar</span>
									</Button>

									<Button
										variant="ghost"
										className="w-full border border-red-500/50 hover:bg-red-900/20 hover:border-red-500 flex gap-2 items-center justify-center py-4 bg-red-900/10 transition-all duration-200"
									>
										<StopIcon size={20} className="text-red-500" weight="duotone" />
										<span className="text-red-500 text-sm">Detener</span>
									</Button>
								</div>
							</div>
						</div>

						<div
							className={`absolute inset-0 transition-transform duration-500 ease-in-out ${activeTab === "automatico" ? "translate-x-0" : "translate-x-full"
								}`}
						>
							<div className="mt-4 space-y-4 h-full">
								<div className="space-y-3">
									<h3 className="text-white text-lg text-center">Prospectos</h3>

									<div className="flex justify-center items-center gap-3">
										<Input
											type="number"
											className="w-16 text-center bg-gray-700 border-[0.5px] border-gray-500 text-white text-sm focus:border-gray-400 focus:ring-0"
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
											value={schedule.startTime}
											onChange={(e) => setSchedule((prev) => ({ ...prev, startTime: e.target.value }))}
											className="w-32 bg-gray-700 border-[0.5px] border-gray-500 text-white text-center text-sm focus:border-gray-400 focus:ring-0"
										/>
									</div>
								</div>

								<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm transition-all duration-200">
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

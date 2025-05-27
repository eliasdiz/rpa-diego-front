import { Button, Tab, Tabs, Typography } from '@mui/material'
import { FloppyDiskIcon, GearSixIcon, PlayIcon, StopIcon, ToggleLeftIcon, ToggleRightIcon, UsersIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import Input from '@mui/joy/Input';

export default function Dashboard() {
	const [service] = useState(false)
	const newUsers = 2

	return (
		<div className='flex flex-col items-center gap-4 w-full md:w-[90%] lg:w-[80%] xl:w-[50%] h-auto min-h-[90%] border border-gray-500 rounded-lg shadow-2xl bg-gray-800 p-3 md:p-5'>

			<div className='flex flex-col justify-center items-center gap-2 md:gap-3 capitalize w-full text-center'>
				<div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5'>
					<GearSixIcon color='white' size={32} md:size={40} weight='duotone' />
					<Typography color='white' fontSize={{ xs: 24, md: 29 }}>
						automatizacion de prospectos
					</Typography>
				</div>
				<Typography className='text-gray-400' fontSize={{ xs: 14, md: 15 }}>
					Configura y controla la de automatización de Prospectos
				</Typography>
			</div>

			<div className='w-full flex justify-center items-center gap-8 md:gap-12 mt-3 md:mt-5'>
				{
					service ?
						<ToggleRightIcon color='green' size={50} md:size={35} weight='duotone' />
						:
						<ToggleLeftIcon color='orange' size={50} md:size={35} weight='duotone' />
				}

				<div className='flex justify-center items-center gap-3'>
					{
						newUsers > 0 ?
							<UsersIcon color='green' size={40} md:size={35} weight='duotone' />
							:
							<UsersIcon color='orange' size={40} md:size={35} weight='duotone' />
					}
					<Typography color='white' fontSize={{ xs: 30, md: 25 }}>{newUsers}</Typography>
				</div>
			</div>

			<div className='flex justify-center w-full border-white p-2 md:p-3'>
				<div className='flex flex-col items-center gap-2 md:gap-3 w-full'>
					<Typography fontSize={{ xs: 27, md: 25 }} color='white'>Prospectos</Typography>

					<div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-4 w-full'>
						<Input
							type='number'
							size='md'
							variant='solid'
							className='w-[68px] p-1 md:p-2 text-aling-center'
							sx={{
								'& input': {
								textAlign: 'center',  // Centra el texto dentro del input
								padding: '0.5rem',    // Ajusta el padding si es necesario
								}
							}}
						/>
						<FloppyDiskIcon size={60} md:size={50} color='blue' weight='duotone' />
					</div>

					<div className='flex flex-col  gap-5 md:gap-5 mt-4 md:mt-6 w-full justify-center items-center p-2'>
						<Button
							className='flex flex-col items-center justify-center p-1 md:p-2 w-[50%] sm:w-auto'
							color='success'
							variant='outlined'
						>
							<PlayIcon size={28} md:size={35} color='green' weight='duotone' />
							<span className='text-xs md:text-base'>iniciar</span>
						</Button>

						<Button
							className='flex flex-col items-center justify-center p-1 md:p-2 w-[50%] sm:w-auto'
							color='error'
							variant='outlined'
						>
							<StopIcon size={28} md:size={35} color='red' weight='duotone' />
							<span className='text-xs md:text-base'>detener</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
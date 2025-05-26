import { Typography } from '@mui/material'
import { GearSixIcon, ToggleLeftIcon, ToggleRightIcon, UsersIcon } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Dashboard() {
	const [service] = useState(true)
	const newUsers = 2



	return (
		<div className='flex flex-col items-center gap-4 w-[50%] h-[80%] border border-gray-500 rounded-lg shadow-2xl bg-gray-800 p-5'>

			<div className='flex flex-col justify-center items-center gap-2 capitalize'>
				<div className='flex justify-center items-center gap-5'>
					<GearSixIcon color='white' size={40} weight='duotone' />
					<Typography color='white' fontSize={29}>
						control de automatizacion
					</Typography>
				</div>
				<Typography className='text-gray-400' fontSize={15}>
					Configura y controla tus procesos de automatización
				</Typography>
			</div>

			<div className='w-[30%] flex justify-around items-center mt-4'>
				{
					service ?
						<ToggleRightIcon color='green' size={35} weight='duotone' />
						:
						<ToggleLeftIcon color='orange' size={35} weight='duotone' />
				}

				<div className='flex justify-center items-center gap-4'>
					{
						newUsers > 0 ?
							<UsersIcon color='green' size={35} weight='duotone' />
							:
							<UsersIcon color='orange' size={35} weight='duotone' />
					}
					<Typography color='white' fontSize={25}>{newUsers}</Typography>
				</div>
			</div>

			<div className='w-full'>

			</div>

		</div>
	)
}
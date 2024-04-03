import { useUSerForm } from '@/hooks/user';
import { type UserSecure } from '@/types/user';
import React from 'react';

interface UserFormProps {
	initialUserData?: UserSecure | null;
}

export const UserForm = ({ initialUserData }: UserFormProps): React.ReactElement => {
	const { handleSubmit, onSubmit, register, errors, showPsw, handleShowPswChange, isSubmitting } =
		useUSerForm(initialUserData);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
				<div className='sm:col-span-2'>
					<input type='hidden' id='id' {...register('id')} />
					<label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
						Email (richiesto)
					</label>
					<input
						id='email'
						{...register('email')}
						type='text'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
						placeholder='john.doe@example.com'
					/>
					{errors.email != null && (
						<p className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.email.message}</p>
					)}
				</div>

				{initialUserData == null && (
					<>
						<div className='sm:col-span-2'>
							<div>
								<label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Password (richiesto)
								</label>
								<input
									id='password'
									{...register('password')}
									type={showPsw === 1 ? 'text' : 'password'}
									placeholder={showPsw === 1 ? 'SuperSegretaPassword123' : '••••••••'}
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								/>
								{errors.password != null && (
									<p className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.password.message}</p>
								)}
							</div>
						</div>
						<div className='sm:col-span-2'>
							<div>
								<label
									htmlFor='confirmPassword'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Conferma Password (richiesto)
								</label>
								<input
									id='confirmPassword'
									{...register('confirmPassword')}
									type={showPsw === 1 ? 'text' : 'password'}
									placeholder={showPsw === 1 ? 'SuperSegretaPassword123' : '••••••••'}
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								/>
								{errors.confirmPassword != null && (
									<p className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.confirmPassword.message}</p>
								)}
							</div>
							<div className='flex items-start my-2'>
								<div className='flex items-center h-5'>
									<input
										id='show-psw'
										aria-describedby='show-psw'
										type='checkbox'
										className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
										required={false}
										value={showPsw}
										onChange={handleShowPswChange}
									/>
								</div>
								<div className='ml-3 text-sm'>
									<label htmlFor='show-psw' className='font-light text-gray-500 dark:text-gray-300 underline'>
										Mostra password
									</label>
								</div>
							</div>
						</div>
					</>
				)}
				<div className='w-full'>
					<div>
						<label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
							Nome (richiesto)
						</label>
						<input
							id='name'
							type='text'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='John'
							{...register('name')}
						/>
						{errors.name != null && (
							<p className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.name.message}</p>
						)}
					</div>
				</div>
				<div className='w-full'>
					<div>
						<label htmlFor='lastName' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
							Cognome (richiesto)
						</label>
						<input
							id='lastName'
							type='text'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Doe'
							{...register('lastName')}
						/>
						{errors.lastName != null && (
							<p className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.lastName.message}</p>
						)}
					</div>
				</div>
				<div className='sm:col-span-2'>
					<label htmlFor='category' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
						Roulo
					</label>
					<select
						id='category'
						{...register('role')}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
					>
						<option value={-1}>Seleziona il ruolo</option>
						<option value={0}>HR</option>
						<option value={1}>Admin</option>
					</select>

					<div className='my-2 text-sm text-gray-700 dark:text-gray-300'>
						{errors.role != null ? (
							<span>{errors.role.message}</span>
						) : (
							<>
								<span className='font-medium'>Spiegazione: </span>
								<ul>
									<li>
										<span className='text-bold'>HR</span>: può insirire/modificare/eliminare eventi
									</li>
									<li>
										<span className='text-bold'>Admin</span>: può insirire/modificare/eliminare utenti e può fare ciò
										che fa un utente HR
									</li>
								</ul>
							</>
						)}
					</div>
				</div>
			</div>

			<button
				type='submit'
				className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
			>
				{isSubmitting ? 'Caricamento...' : initialUserData != null ? 'Aggiorna' : 'Registra'}
			</button>
			{!initialUserData && (
				<div className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
					L&apos;utente che stai registrando riceverà un&apos;email con le istruzioni per cominciare ad usare la
					piattaforma.
				</div>
			)}
		</form>
	);
};

import { type UserFormFieds, type UserSecure, userFormSchema } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const useUSerForm = (initialUserData?: UserSecure | null) => {
	const router = useRouter();
	const [showPsw, setShowPsw] = useState(0);

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<UserFormFieds>({
		defaultValues: {
			id: initialUserData?.id || -1,
			email: initialUserData?.email || '',
			password: initialUserData ? 'a1b2c3d4' : '',
			confirmPassword: initialUserData ? 'a1b2c3d4' : '',
			name: initialUserData?.name || '',
			lastName: initialUserData?.lastName || '',
			role: initialUserData?.role.toString(),
		},
		resolver: zodResolver(userFormSchema),
	});

	const handleShowPswChange = () => {
		setShowPsw(showPsw ^ 1);
	};

	const onSubmit: SubmitHandler<UserFormFieds> = async (data) => {
		if (data.password !== data.confirmPassword) {
			setError('confirmPassword', {
				message: 'Le nuove password non corrispondono.',
			});
			return;
		}

		if (data.role.endsWith('-1')) {
			setError('role', { message: 'Seleziona un valore.' });
			return;
		}
		if (!initialUserData) {
			await axios
				.post('/api/user/register', {
					email: data.email,
					password: data.password,
					role: data.role,
					name: data.name,
					lastName: data.lastName,
				})
				.then(() => {
					router.push('/user/list-all');
					toast.success('Utente registrato con successo');
				})
				.catch(() => {
					setError('email', {
						message: 'Esiste già un utente con questa email.',
					});
					toast.error('Esiste già un utente con questa email.');
				});
		} else {
			await axios
				.put('/api/user/edit', {
					id: data.id,
					email: data.email,
					password: data.password,
					role: data.role,
					name: data.name,
					lastName: data.lastName,
				})
				.then(() => {
					router.push('/user/list-all');
					toast.success('Utente registrato con successo');
				})
				.catch(() => {
					setError('email', {
						message: 'Esiste già un utente con questa email.',
					});
					toast.error('Esiste già un utente con questa email.');
				});
		}
	};

	return {
		handleSubmit,
		onSubmit,
		register,
		errors,
		showPsw,
		handleShowPswChange,
		isSubmitting,
	};
};

import { Loader } from '@/components/ui/Loader'

export default function Loading() {
	return (
		<div className="flex items-center justify-center fixed inset-0">
			<Loader />
		</div>
	)
}
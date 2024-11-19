import React, { useState, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const IntegratedSafari = () => {
	const [packageName, setPackageName] = useState('');
	const [attractions, setAttractions] = useState([]);
	const [facilities, setFacilities] = useState([]);
	const [currentAttraction, setCurrentAttraction] = useState({ name: '', price: '' });
	const [currentFacility, setCurrentFacility] = useState({ name: '', price: '' });
	const [timeSlots, setTimeSlots] = useState([]);
	const [currentSlot, setCurrentSlot] = useState({
		from: '',
		to: '',
		seats: 0,
	});
	const [quotaType, setQuotaType] = useState('Online');
	const [quotaSeats, setQuotaSeats] = useState(0);
	const [quotaList, setQuotaList] = useState([]);
	const [submittedEntries, setSubmittedEntries] = useState([]);

	// Load from local storage
	useEffect(() => {
		const savedEntries =
			JSON.parse(localStorage.getItem('submittedEntries')) || [];
		setSubmittedEntries(savedEntries);
	}, []);

	// Save submitted entries to local storage
	useEffect(() => {
		localStorage.setItem('submittedEntries', JSON.stringify(submittedEntries));
	}, [submittedEntries]);

	// Add attraction or facility
	const addAttraction = () => {
		if (currentAttraction.name && currentAttraction.price) {
			setAttractions([...attractions, currentAttraction]);
			setCurrentAttraction({ name: '', price: '' });
		} else {
			toast.error('Please fill both fields for attractions!');
		}
	};

	const addFacility = () => {
		if (currentFacility.name && currentFacility.price) {
			setFacilities([...facilities, currentFacility]);
			setCurrentFacility({ name: '', price: '' });
		} else {
			toast.error('Please fill both fields for facilities!');
		}
	};

	// Add time slot
	const addTimeSlot = () => {
		if (currentSlot.from && currentSlot.to && currentSlot.seats > 0) {
			setTimeSlots([...timeSlots, currentSlot]);
			setCurrentSlot({ from: '', to: '', seats: 0 });
		} else {
			toast.error('Please fill all time slot fields!');
		}
	};

	// Add quota
	const addQuota = () => {
		if (quotaSeats > 0) {
			setQuotaList([...quotaList, { type: quotaType, seats: quotaSeats }]);
			setQuotaSeats(0);
		} else {
			toast.error('Please assign seats for the selected quota type!');
		}
	};

	// Handle submission
	const handleSubmit = () => {
		if (!packageName) {
			alert('Package Name is required!');
			return;
		}

		if (!attractions.length) {
			alert('Please add at least one attraction!');
			return;
		}

		if (!facilities.length) {
			alert('Please add at least one facility!');
			return;
		}

		if (!timeSlots.length) {
			alert('Please add at least one time slot!');
			return;
		}

		if (!quotaList.length) {
			alert('Please add at least one quota distribution!');
			return;
		}

		const data = {
			packageName,
			attractions,
			facilities,
			timeSlots,
			quotaList,
		};

		setSubmittedEntries([...submittedEntries, data]);

		// Reset form fields
		setPackageName('');
		setAttractions([]);
		setFacilities([]);
		setTimeSlots([]);
		setQuotaList([]);
		toast.success('Package submitted successfully!');
	};

	return (
		<div className="p-6 mx-auto bg-gray-50 shadow rounded-lg max-w-3xl">
			<h2 className="text-2xl font-bold mb-4">Integrated Safari Master Form</h2>

			{/* Package Name */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Package Name</label>
				<input
					type="text"
					className="w-full mt-1 border rounded-lg p-2"
					placeholder="Enter package name"
					value={packageName}
					onChange={(e) => setPackageName(e.target.value)}
				/>
			</div>

			{/* Attractions */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Attractions</label>
				<div className="grid sm:grid-cols-3 gap-2 mt-1">
					<input
						type="text"
						className="border rounded-lg p-2"
						placeholder="Attraction Name"
						value={currentAttraction.name}
						onChange={(e) =>
							setCurrentAttraction({ ...currentAttraction, name: e.target.value })
						}
					/>
					<input
						type="number"
						className="border rounded-lg p-2"
						placeholder="Price"
						value={currentAttraction.price}
						onChange={(e) =>
							setCurrentAttraction({
								...currentAttraction,
								price: parseFloat(e.target.value) || '',
							})
						}
					/>
					<button
						className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-1"
						onClick={addAttraction}
					>
						<FiPlus /> Add
					</button>
				</div>
				<div className="mt-2 flex gap-2 flex-wrap">
					{attractions.map((attraction, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-gray-200 rounded-lg text-sm flex items-center gap-1"
						>
							{attraction.name} (₹{attraction.price}){' '}
							<AiFillDelete
								className="text-red-500 cursor-pointer"
								onClick={() =>
									setAttractions(attractions.filter((_, i) => i !== index))
								}
							/>
						</span>
					))}
				</div>
			</div>

			{/* Facilities */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Facilities</label>
				<div className="grid sm:grid-cols-3 gap-2 mt-1">
					<input
						type="text"
						className="border rounded-lg p-2"
						placeholder="Facility Name"
						value={currentFacility.name}
						onChange={(e) =>
							setCurrentFacility({ ...currentFacility, name: e.target.value })
						}
					/>
					<input
						type="number"
						className="border rounded-lg p-2"
						placeholder="Price"
						value={currentFacility.price}
						onChange={(e) =>
							setCurrentFacility({
								...currentFacility,
								price: parseFloat(e.target.value) || '',
							})
						}
					/>
					<button
						className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-1"
						onClick={addFacility}
					>
						<FiPlus /> Add
					</button>
				</div>
				<div className="mt-2 flex gap-2 flex-wrap">
					{facilities.map((facility, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-gray-200 rounded-lg text-sm flex items-center gap-1"
						>
							{facility.name} (₹{facility.price}){' '}
							<AiFillDelete
								className="text-red-500 cursor-pointer"
								onClick={() =>
									setFacilities(facilities.filter((_, i) => i !== index))
								}
							/>
						</span>
					))}
				</div>
			</div>

			{/* Time Slots */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Time Slots</label>
				<div className="grid sm:grid-cols-4 gap-2 mt-1">
					<input
						type="time"
						className="border rounded-lg p-2"
						value={currentSlot.from}
						onChange={(e) =>
							setCurrentSlot({ ...currentSlot, from: e.target.value })
						}
					/>
					<input
						type="time"
						className="border rounded-lg p-2"
						value={currentSlot.to}
						onChange={(e) =>
							setCurrentSlot({ ...currentSlot, to: e.target.value })
						}
					/>
					<div>
						<label className="text-sm">Seats</label>
						<input
							type="number"
							className="border rounded-lg p-2 w-full mt-1"
							placeholder="Seats"
							value={currentSlot.seats}
							onChange={(e) =>
								setCurrentSlot({
									...currentSlot,
									seats: parseInt(e.target.value) || 0,
								})
							}
						/>
					</div>
					<button
						className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-1"
						onClick={addTimeSlot}
					>
						<FiPlus /> Add
					</button>
				</div>
				<div className="mt-2 flex gap-2 flex-wrap">
					{timeSlots.map((slot, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-gray-200 rounded-lg text-sm flex items-center gap-1"
						>
							{slot.from} - {slot.to} ({slot.seats} seats){' '}
							<AiFillDelete
								className="text-red-500 cursor-pointer"
								onClick={() =>
									setTimeSlots(timeSlots.filter((_, i) => i !== index))
								}
							/>
						</span>
					))}
				</div>
			</div>

			{/* Quota */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Quota Distribution</label>
				<div className="grid sm:grid-cols-3 gap-2 mt-1">
					<select
						className="border rounded-lg p-2"
						value={quotaType}
						onChange={(e) => setQuotaType(e.target.value)}
					>
						<option value="Online">Online</option>
						<option value="Offline">Offline</option>
					</select>
					<input
						type="number"
						className="border rounded-lg p-2"
						placeholder="Seats"
						value={quotaSeats}
						onChange={(e) => setQuotaSeats(parseInt(e.target.value) || 0)}
					/>
					<button
						className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-1"
						onClick={addQuota}
					>
						<FiPlus /> Add
					</button>
				</div>
				<div className="mt-2 flex gap-2 flex-wrap">
					{quotaList.map((quota, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-gray-200 rounded-lg text-sm flex items-center gap-1"
						>
							{quota.type}: {quota.seats}{' '}
							<AiFillDelete
								className="text-red-500 cursor-pointer"
								onClick={() =>
									setQuotaList(quotaList.filter((_, i) => i !== index))
								}
							/>
						</span>
					))}
				</div>
			</div>

			{/* Submit */}
			<button
				className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-medium"
				onClick={handleSubmit}
			>
				Submit Package
			</button>

			{/* Submitted Entries */}
			<div className="mt-6">
				<h3 className="text-lg font-semibold">Submitted Entries</h3>
				<div className="overflow-x-auto">
					<table className="w-full mt-2 border">
						<thead>
							<tr className="bg-gray-200">
								<th className="border px-4 py-2">Package</th>
								<th className="border px-4 py-2">Attractions</th>
								<th className="border px-4 py-2">Facilities</th>
								<th className="border px-4 py-2">Time Slots</th>
								<th className="border px-4 py-2">Quota</th>
							</tr>
						</thead>
						<tbody>
							{submittedEntries.map((entry, index) => (
								<tr key={index}>
									<td className="border px-4 py-2">{entry.packageName}</td>
									<td className="border px-4 py-2">
										<ul>
											{entry.attractions.map((attraction, i) => (
												<li key={i}>
													{attraction.name} (₹{attraction.price})
												</li>
											))}
										</ul>
									</td>
									<td className="border px-4 py-2">
										<ul>
											{entry.facilities.map((facility, i) => (
												<li key={i}>
													{facility.name} (₹{facility.price})
												</li>
											))}
										</ul>
									</td>
									<td className="border px-4 py-2">
										<ul>
											{entry.timeSlots.map((slot, i) => (
												<li key={i}>
													{slot.from} - {slot.to} ({slot.seats} seats)
												</li>
											))}
										</ul>
									</td>
									<td className="border px-4 py-2">
										<ul>
											{entry.quotaList.map((quota, i) => (
												<li key={i}>
													{quota.type}: {quota.seats}
												</li>
											))}
										</ul>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default IntegratedSafari;

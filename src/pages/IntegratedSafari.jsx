import React, { useState, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const IntegratedSafari = () => {
	const [packageName, setPackageName] = useState('');
	const [attractions, setAttractions] = useState([]);
	const [facilities, setFacilities] = useState([]);
	const [currentAttraction, setCurrentAttraction] = useState('');
	const [currentFacility, setCurrentFacility] = useState('');
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
		if (currentAttraction) {
			setAttractions([...attractions, currentAttraction]);
			setCurrentAttraction('');
		}
	};

	const addFacility = () => {
		if (currentFacility) {
			setFacilities([...facilities, currentFacility]);
			setCurrentFacility('');
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
		<div className="p-6 mx-auto bg-gray-50 shadow rounded-lg">
			<h2 className="text-2xl font-bold mb-4">Integrated Safari Admin Form</h2>

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
				<div className="flex gap-2 mt-1">
					<input
						type="text"
						className="flex-grow border rounded-lg p-2"
						placeholder="Enter attraction"
						value={currentAttraction}
						onChange={(e) => setCurrentAttraction(e.target.value)}
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
							{attraction}{' '}
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
				<div className="flex gap-2 mt-1">
					<input
						type="text"
						className="flex-grow border rounded-lg p-2"
						placeholder="Enter facility"
						value={currentFacility}
						onChange={(e) => setCurrentFacility(e.target.value)}
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
							{facility}{' '}
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
				<div className="flex gap-2 mt-1">
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
					<input
						type="number"
						className="border rounded-lg p-2"
						placeholder="Seats"
						value={currentSlot.seats}
						onChange={(e) =>
							setCurrentSlot({
								...currentSlot,
								seats: parseInt(e.target.value),
							})
						}
					/>
					<button
						className="px-4 py-2 bg-green-500 text-white rounded-lg"
						onClick={addTimeSlot}
					>
						Add
					</button>
				</div>
				<ul className="mt-2">
					{timeSlots.map((slot, index) => (
						<li key={index} className="text-sm">
							{slot.from} - {slot.to} ({slot.seats} seats)
						</li>
					))}
				</ul>
			</div>
			{/* Quota Distribution */}
			<div className="mb-4">
				<label className="block text-sm font-medium">Quota Distribution</label>
				<div className="flex gap-2 mt-1">
					<select
						className="border rounded-lg p-2"
						value={quotaType}
						onChange={(e) => setQuotaType(e.target.value)}
					>
						<option>Online</option>
						<option>Counter1</option>
						<option>Counter2</option>
						<option>Counter3</option>
					</select>
					<input
						type="number"
						className="border rounded-lg p-2"
						placeholder="Seats"
						value={quotaSeats}
						onChange={(e) => setQuotaSeats(parseInt(e.target.value) || 0)}
					/>
					<button
						className="px-4 py-2 bg-green-500 text-white rounded-lg"
						onClick={addQuota}
					>
						Add
					</button>
				</div>
				<ul className="mt-2">
					{quotaList.map((quota, index) => (
						<li
							key={index}
							className="text-sm flex justify-between items-center"
						>
							{quota.type} - {quota.seats} seats
							<AiFillDelete
								className="text-red-500 cursor-pointer"
								onClick={() =>
									setQuotaList(quotaList.filter((_, i) => i !== index))
								}
							/>
						</li>
					))}
				</ul>
			</div>

			{/* Submit */}
			<div className="mt-4">
				<button
					className="px-6 py-2 bg-blue-500 text-white rounded-lg"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</div>

			{/* Submitted Entries */}
			<div className="mt-6">
				<h3 className="font-bold text-lg mb-2">Submitted Entries</h3>
				<ul className="text-sm">
					{submittedEntries.map((entry, index) => (
						<li key={index} className="mb-2 p-2 border rounded-lg">
							<strong>{entry.packageName}</strong>
							<div>Attractions: {entry.attractions.join(', ')}</div>
							<div>Facilities: {entry.facilities.join(', ')}</div>
							<div>
								Time Slots:{' '}
								{entry.timeSlots
									.map(
										(slot) => `${slot.from}-${slot.to} (${slot.seats} seats)`,
									)
									.join(', ')}
							</div>
							<div>
								Quotas:{' '}
								{entry.quotaList
									.map((quota) => `${quota.type} (${quota.seats} seats)`)
									.join(', ')}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default IntegratedSafari;

import { Link } from 'react-router-dom';
import { Chat } from '../../types/chat';
import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
// import UserFour from '../../images/user/user-04.png';
// import UserFive from '../../images/user/user-05.png';
import UserFour from '../../images/brand/d1.jpg';
import UserFive from '../../images/brand/d2.jpg';
const chatData: Chat[] = [
	{
		avatar: UserFour,
		name: 'Rahul Verma',
		text: 'Active',
		time: 12,
		textCount: 1,
		color: '#10B981',
	},
	{
		avatar: UserFive,
		name: 'Anshu',
		text: 'Logout',
		time: 12,
		textCount: 2,
		color: '#DC3545',
	},
	{
		avatar: UserFour,
		name: 'Amit Kumar',
		text: "Active",
		time: 32,
		textCount: 1,
		color: '#10B981',
	},
	{
		avatar: UserFive,
		name: 'Inactive',
		text: 'Great',
		time: 32,
		textCount: 2,
		color: '#FFBA00',
	},
	{
		avatar: UserFour,
		name: 'Aman Gupta',
		text: 'Active',
		time: 32,
		textCount: 1,
		color: '#10B981',
	},
	{
		avatar: UserFour,
		name: 'Neha Singh',
		text: 'Inactive',
		time: 32,
		textCount: 2,
		color: '#FFBA00',
	},
];

const ChatCard = () => {
	return (
		<div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
			<h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
				Counter Admin
			</h4>

			<div>
				{chatData.map((chat, key) => (
					<Link
						to="/"
						className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
						key={key}
					>
						<div className="relative h-14 w-14 rounded-full">
							<img src={chat.avatar} alt="User" className='rounded-full'/>
							<span
								className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
								style={{ backgroundColor: chat.color }}
							></span>
						</div>

						<div className="flex flex-1 items-center justify-between">
							<div>
								<h5 className="font-medium text-black dark:text-white">
									{chat.name}
								</h5>
								<p>
									<span className="text-sm text-black dark:text-white">
										{chat.text}
									</span>
									<span className="text-xs"> . {chat.time} min</span>
								</p>
							</div>
							{chat.textCount !== 0 && (
								<div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
									<span className="text-sm font-medium text-white">
										{' '}
										{chat.textCount}
									</span>
								</div>
							)}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ChatCard;

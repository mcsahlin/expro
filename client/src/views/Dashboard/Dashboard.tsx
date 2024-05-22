import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
	return (
		<div className='Dashboard'>
			/** Nav top */
			<div>
				<div>
					<Link>
						<icon></icon>
					</Link>
				</div>
				<div>
					<Link>
						<icon></icon>
					</Link>
				</div>
				<div>
					<Link>
						<icon></icon>
					</Link>
				</div>
				<div>
					<Link>
						<icon></icon>
					</Link>
				</div>
			</div>
			// Goal card deck
			<section className='deck deck--gCard'>
				<Card className='gCard'></Card>
			</section>
			<div className='progressbar'></div>
			<aside className='gauge gauge--power' />
			<div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<aside className='gauge gauge--habits' />
			<div></div>
			<div>
				<div>
					<Button />
				</div>
				<div>
					<Button />
				</div>
			</div>
			<div>
				<div>
					<Link>
						<icon></icon>
					</Link>
				</div>
				<div>
					<Link>
						<icon></icon>
					</Link>
				</div>
				<div>
					<Link>
						<icon></icon>
					</Link>
				</div>
				<div>
					<Link>
						<icon></icon>
					</Link>
				</div>
			</div>
		</div>
	);
};

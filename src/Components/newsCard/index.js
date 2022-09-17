import React from 'react';
import no_img from '../../assets/images/No_image.jpg';

function NewsItems({ img1, title, nurl }) {
	return (
		<div className="d-flex justify-content-center">
			<div
				className="card my-3 shadow p-3 mb-5 bg-body rounded "
				style={{ width: '18rem' }}
			>
				<img
					src={img1 ? img1 : no_img}
					style={{ height: '8rem' }}
					className="card-img-top"
					alt="no"
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<a
						href={nurl}
						target="_blank"
						rel="noreferrer"
						className="btn btn-primary"
					>
						Read more
					</a>
				</div>
			</div>
		</div>
	);
}

export default NewsItems;

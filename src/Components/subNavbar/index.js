import React from 'react';
import { useLocation } from 'react-router-dom';
import { BsChevronDoubleDown } from 'react-icons/bs';
import '../../styles/subNavbar/style.scss';

function Navbar2() {
	let location = useLocation();

	return (
		<div>
			<div className="d-flex justify-content-end">
				<div className="btn-group dropstart fix-container">
					<button
						type="button"
						className="btn btn-primary dropdown-toggle"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<BsChevronDoubleDown />
					</button>
					<ul className="dropdown-menu bg-color">
						<li className="nav-item">
							<a
								className={`text-color nav-link ${
									location.pathname === '/health' ? 'active' : ''
								}`}
								href="/health"
							>
								Health
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`text-color nav-link ${
									location.pathname === '/science' ? 'active' : ''
								}`}
								href="/science"
							>
								Science
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`text-color nav-link ${
									location.pathname === '/technology' ? 'active' : ''
								}`}
								href="/technology"
							>
								Technology
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar2;

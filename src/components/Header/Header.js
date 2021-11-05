import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
import './Header.css'
const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="navbar">
					<div className="navbar__logo">
						<Link to="/">
							<img src={Logo} alt="makers logo" />
						</Link>
					</div>
					<ul className="navbar__right">
						<li>Главная</li>
						<li>Документация</li>
						<Link to="/add"><li>Добавить</li></Link>
						<li><input type="text" placeholder="Поиск" /></li>
						<li>GitHub</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
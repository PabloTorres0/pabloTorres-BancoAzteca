

const NavBar: React.FC = () => {
	return (
		<nav className='navbar navbar-expand-lg custome-navbar'>
			<div className='marginNav'>
				<a className='navbar-brand text-nav' href='/'>
					Banco Azteca
				</a>
				<a className='navbar-brand text-nav' href='/logIn'>
					/ LogIn
				</a>
			</div>
		</nav>
	)
}

export default NavBar

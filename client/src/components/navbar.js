import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';

function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position={'static'}>
				<Toolbar>
					<Typography variant='h5' component='div'>
						<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
							ReactLogin
						</Link>
					</Typography>
					<Box alignItems='right' sx={{ flexGrow: 1, textAlign: 'right' }}>
						<Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>
							Login
						</Link>
						<Link to='/register' style={{ textDecoration: 'none', color: 'white' }}>
							Register
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;

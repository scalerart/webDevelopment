import Container from 'react-bootstrap/Container';
import logo from '../assets/images/The_New_York_Times_logo.png'

function Header() {
    return (
        <header>
            <Container fluid className='px-4'>
                <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                    <span className='d-flex flex-column'>
                        <span>Sunday, March 29, 2026</span>
                        <span>Today's Paper</span>
                    </span>
                    <img width={'50%'} src={logo} alt="" />
                    <span>Dow-1.73%</span>
                </div>
                <nav className='text-center d-flex justify-content-center align-items-center gap-4 pb-2 border-bottom border-1 border-dark'>
                    <a className='text-decoration-none text-secondary' href="#">U.S.</a>
                    <a className='text-decoration-none text-secondary' href="#">World</a>
                    <a className='text-decoration-none text-secondary' href="#">Business</a>
                    <a className='text-decoration-none text-secondary' href="#">Arts</a>
                    <a className='text-decoration-none text-secondary' href="#">Lifestyle</a>
                    <a className='text-decoration-none text-secondary' href="#">Opinion</a>
                    <a className='text-decoration-none text-secondary' href="#">Video</a>
                    <a className='text-decoration-none text-secondary' href="#">Audio</a>
                    <a className='text-decoration-none text-secondary' href="#">Games</a>
                </nav>
            </Container>
        </header>
    )
}

export default Header
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
    

    return (
        <div className='header-border'>
            <div className='header'>
                <Link to="#" className='link'>About</Link>
                <Link to="#" className='link'>Home</Link>
                <Link to="#" className='link'>Projects</Link>
            </div>
        </div>
    )
}
import './navbar.scss';
import { useActiveTab } from '@/hooks/useActiveTab';
const Navbar = () => {
    const {switchActiveTab} = useActiveTab();
    return(
        <nav id="navbar" className='navbar'>
            <ul>
                <li onClick={() => switchActiveTab('overview')}>Overview</li>
                <li onClick={() => switchActiveTab('memory_space')}>Memory Spaces</li>
                <li onClick={() => switchActiveTab('create')}>Create</li>
                <li onClick={() => switchActiveTab('structure')}>Structure</li>
                <li onClick={() => switchActiveTab('settings')}>Settings</li>
            </ul>
        </nav>
    )
}

export default Navbar;
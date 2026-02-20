import { Box } from 'lucide-react'
import Button from './ui/Button';
import { useOutletContext } from 'react-router';



const Navbar = () => {
    const { isSignedIn, userName, signIn, signOut } = useOutletContext<AuthContext>()

    const handleAuthClick = async () => {
        if (isSignedIn) {
            try {
                await signOut();

            } catch (error) {
                console.error(`puter sign Out failed: ${error}`)

            }
            return;
        }

        try {
            await signIn();

        } catch (error) {
            console.error(`Puter sign In failed: ${error}`)
        }


    }
    return (
        <header className="navbar ">
            <nav className="inner">
                <div className="left">
                    <div className="brade flex gap-2">
                        <Box className='logo' />
                        <span className="name">
                            Roomify
                        </span>

                    </div>
                    <ul className='links'>
                        <a href='#'>Product</a>
                        <a href='#'>Pricing</a>
                        <a href='#'>About</a>
                        <a href='#'>Contact</a>

                    </ul>
                </div>

                <div className='actions'>
                    {isSignedIn ? (
                        <>
                            <span className="greeting">
                                {userName ? `Hi ${userName}` : "Signed In"}


                            </span>
                            <Button size="sm" onClick={handleAuthClick} className="btn">
                                Log Out

                            </Button>
                        </>

                    ) : (
                        <>
                            <button onClick={handleAuthClick} size="sm" variant="ghost" className='cursor-pointer'>
                                Log In

                            </button>

                            <a href="#upload" className='cta'>
                                Get Started

                            </a>
                        </>


                    )}




                </div>

            </nav >

        </header >
    )
}

export default Navbar
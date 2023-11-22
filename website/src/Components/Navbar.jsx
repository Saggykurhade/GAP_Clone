import './navbar.css'

const Navbar = () => {

    return (

        <div id='navbar-screen'>

            <div className='navbar-1'>
                <div className='nav-1-left'>
                    <img src='data:image/png;base64,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' />
                </div>

                <div className='nav-1-right'>
                    <div className='nav-1-right-left'>
                        <div>
                            <p style={{ fontWeight: '700', letterSpacing: '-1px' }}>OLD NAVY</p>
                            <p style={{ fontFamily: "Helvetica Neue Helvetica, Arial, Roboto, sans-serif" }}>BANANA REPUBLIC</p>
                            <p><span><i class="fa-brands fa-galactic-republic"></i>ATHLETA</span></p>
                            <p>babyGap</p>
                        </div>

                        <div style={{ width: '380px' }}>
                            <p>Free Shipping on $50+ for Rewards Members <u>SIGN IN OR JOIN DETAILS</u></p>
                        </div>
                    </div>

                    <div className='nav-1-right-right'>
                        <div>
                            <p className='sign-in-p'>Sign In <br /><span><b>YOUR ACCOUNT</b></span></p>
                        </div>
                        <i class="fa-solid fa-bag-shopping fa-2xl"></i>
                    </div>

                </div>
            </div>

            <div className='navbar-2'>
                <div className='nav2-left'>
                    <img src='https://logos-world.net/wp-content/uploads/2020/09/Gap-Logo-2016-present.jpg' />
                </div>

                <div className='nav2-mid'>
                    <p>NEW</p>
                    <p>WOMEN</p>
                    <p>MEN</p>
                    <p>GIRLS</p>
                    <p>BOYS</p>
                    <p>TODDLER</p>
                    <p>BABY</p>
                    <p>MATERNITY</p>
                    <p>SALE</p>
                    <p style={{ fontWeight: "700" }}>THE GIFT SHOP</p>
                </div>

                <div className='nav2-right'>
                    <input type='text' placeholder='Search: ' />
                    <div>
                        <i class="fa-solid fa-circle-pause"></i>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar
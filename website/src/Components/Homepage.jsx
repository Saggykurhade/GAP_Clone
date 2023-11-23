import React from 'react';
import Navbar from './Navbar';
import './homepage.css';
import Footer from './Footer';


const Homepage = () => {

  return (
    <>
      <Navbar />

      <div className='home-screen'>

        <div style={{ height: '310px', width: '95%', margin: 'auto' }}>
          <div style={{ fontSize: '23px', paddingTop: '50px' }}>Black Friday Sale </div>
          <span style={{ marginTop: '70px', fontSize: '115px' }}>40% OFF EVERYTHING</span>
          <div style={{ marginTop: '15px', fontSize: '14px' }}>Because its treat <i>everyone</i> season.</div>
          <img style={{ marginLeft: '80%', height: '290px', width: '323px', marginTop: '-240px' }} src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSPjGULxboM3FTRtZGWV7Z2jMJVc08OtaJJdQDTZYRXuq8YTEq8' />
        </div>

        <div className='navbar-3'>
          <div className='nav3-left'>
            <p>WOMEN</p>
            <p>MATERNITY</p>
            <p>MEN</p>
            <p>GIRLS</p>
            <p>BOYS</p>
            <p>TODDLER GIRL</p>
            <p>TODDLER BOY</p>
            <p>BABY GIRL</p>
            <p>BABY BOY</p>
          </div>

          <div className='nav3-right'>
            <p style={{ marginLeft: '265px', marginTop: '38px', fontSize: '11px' }}>Applied at checkout. Excludes brand collaborations. <u>DETAILS</u></p>
          </div>
        </div>

        <div className='Home-body1'>
          <h1 className='home-body-h1'>60% Off Really Big Deals</h1>
          <div className='home-body-p'>
            <p>For wrapping & keeping.</p>
            <span>Online only.<u>DETAILS</u></span>
          </div>
          <div className='home-4-photos'>
            <div>
              <div className='home-img4'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweaters_Default_DESK' />
              </div>
              <div className='home-img-desc'>
                <div>
                  <h1>Sweaters from $22</h1>
                  <p>Kids' & Baby from $15</p>
                </div>
                <div>
                  <button>SHOP NOW +</button>
                </div>
              </div>
            </div>
            <div>
              <div className='home-img4'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweats_Default_DESK' />
              </div>
              <div className='home-img-desc'>
                <div>
                  <h1>Sweats from $19</h1>
                  <p>Kids' & Baby from $12</p>
                </div>
                <div>
                  <button>SHOP NOW +</button>
                </div>
              </div>
            </div>
            <div>
              <div className='home-img4'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Tees_Default_DESK' />
              </div>
              <div className='home-img-desc'>
                <div>
                  <h1>Tees from $12</h1>
                  <p>Kids' & Baby from $7</p>
                </div>
                <div>
                  <button>SHOP NOW +</button>
                </div>
              </div>
            </div>
            <div>
              <div className='home-img4'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/20231120_BF_PJs_Default_DESK    ' />
              </div>
              <div className='home-img-desc'>
                <div>
                  <h1>PJs from $15</h1>
                  <p>Kids' & Baby from $10</p>
                </div>
                <div>
                  <button>SHOP NOW +</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='home-body2'>
          <h2 className='body2-h2'>Black Friday Deals You'll Love</h2>
          <div className='body2-5photos'>
            <div>
              <div className='photos5'>
                <img src='https://www.gap.com/webcontent/0054/006/018/cn54006018.jpg' />
              </div>
              <p className='photos2-desc'>Vintage Soft Raglan Sweatshirt</p>
            </div>
            <div>
              <div className='photos5'>
                <img src='https://www.gap.com/webcontent/0054/006/004/cn54006004.jpg' />
              </div>
              <p className='photos2-desc'>Vintage Soft Hoodie</p>
            </div>
            <div>
              <div className='photos5'>
                <img src='https://www.gap.com/webcontent/0054/005/932/cn54005932.jpg' />
              </div>
              <p className='photos2-desc'>Vintage Soft Cargo Sweatpants</p>
            </div>
            <div>
              <div className='photos5'>
                <img src='https://www.gap.com/webcontent/0053/979/116/cn53979116.jpg' />
              </div>
              <p className='photos2-desc'>Mid Rise Cloud Light Flare Sweatpants</p>
            </div>
            <div>
              <div className='photos5'>
                <img src='https://www.gap.com/webcontent/0029/445/732/cn29445732.jpg' />
              </div>
              <p className='photos2-desc'>Vintage Soft Classic Full-Zip Hoodie</p>
            </div>
          </div>
        </div>

        <div className='home-body3'>
          <h2 className='body3-h2'>Shop by Division</h2>
          <div className='photos8'>
            <div>
              <div className='photos8-img'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_Women_DESK' />
              </div>
              <p className='photos8-desc'><u>WOMEN</u> +</p>
            </div>

            <div>
              <div className='photos8-img'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_Men_DESK' />
              </div>
              <p className='photos8-desc'><u>MEN</u></p>
            </div>

            <div>
              <div className='photos8-img'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_Girls_DESK' />
              </div>
              <p className='photos8-desc'><u>GIRLS</u></p>
            </div>

            <div>
              <div className='photos8-img'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_Boys_DESK' />
              </div>
              <p className='photos8-desc'><u>BOYS</u></p>
            </div>

            <div>
              <div className='photos8-img'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_ToddlerGirl_DESK' />
              </div>
              <p className='photos8-desc'><u>TODDLER GIRL</u></p>
            </div>

            <div>
              <div className='photos8-img'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_ToddlerBoy_DESK' />
              </div>
              <p className='photos8-desc'><u>TODDLER BOY</u></p>
            </div>

            <div>
              <div className='photos8-img'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_BabyGirl_DESK' />
              </div>
              <p className='photos8-desc'><u>BABY GIRL</u></p>
            </div>

            <div>
              <div className='photos8-img'>
                <img src='https://gapprod.a.bigcontent.io/v1/static/HOL235662_BabyBoy_DESK  ' />
              </div>
              <p className='photos8-desc'><u>BABY BOY</u></p>
            </div>
          </div>
        </div>

      </div>

      <Footer />

    </>
  )
}

export default Homepage
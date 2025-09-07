import { Footer } from '../../Components/Footer/Footer'
import { Navv } from '../../Components/Navv/Navv'
import Styles from './Categories.module.css'

export const Categories = () => {
  return (
    <div className={Styles.category}>
      <Navv/>
        <h2 className='p-8 text-[2rem] text-bold' >
          All Categories
        </h2>
        <div className={Styles.categoryBox1}>
          {/* Electronics */}
          <div className={Styles.Box}>
            <h3 className='text-[1.5rem] font-medium'>Electronics</h3>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/p5.jpg" 
                    alt="video games" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Video Games</h4>
                    <p className={Styles.itemSubtitle}>Electronics</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/d1.jpg" 
                    alt="drone" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Drone</h4>
                    <p className={Styles.itemSubtitle}>Electronics</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/Speaks.webp" 
                    alt="drone" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Speaker</h4>
                    <p className={Styles.itemSubtitle}>Electronics</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/officedevices.jpg" 
                    alt="drone" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Office Devices</h4>
                    <p className={Styles.itemSubtitle}>Electronics</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/computera.jpg" 
                    alt="drone" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Computer Accessories</h4>
                    <p className={Styles.itemSubtitle}>Electronics</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
          </div>
          {/* Sport */}
          <div className={Styles.Box}>
            <h3 className='text-[1.5rem] font-medium'>Sports</h3>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/bycycle.jpg" 
                    alt="" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Cycling</h4>
                    <p className={Styles.itemSubtitle}>Sports</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/skateboard.jpg" 
                    alt="" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Skateboard</h4>
                    <p className={Styles.itemSubtitle}>Sports</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/balls.jpg" 
                    alt="" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Sport Balls</h4>
                    <p className={Styles.itemSubtitle}>Sports</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/gym.jpg" 
                    alt="" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Gym Equipments</h4>
                    <p className={Styles.itemSubtitle}>Sports</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
          </div>
          {/* Film */}
          <div className={Styles.Box}>
            <h3 className='text-[1.5rem] font-medium'>Film & Photography</h3>
             <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/cam3.jpg" 
                    alt="" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Camera</h4>
                    <p className={Styles.itemSubtitle}>Film & Photography</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/camcoder.jpg" 
                    alt="" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Camcorders</h4>
                    <p className={Styles.itemSubtitle}>Film & Photography</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/ringlights.webp" 
                    alt="" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Ring Lights</h4>
                    <p className={Styles.itemSubtitle}>Film & Photography</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
            <div className={Styles.electList}>
                <a href="#">
                  <img 
                    src="/Images/tripods.webp" 
                    alt="" 
                    className={Styles.itemImage} 
                  />
                  <div className={Styles.itemInfo}>
                    <h4 className={Styles.itemTitle}>Tripods</h4>
                    <p className={Styles.itemSubtitle}>Film & Photography</p>
                  </div>
                  <span className={Styles.arrow}>&#8250;</span>
                </a>
            </div>
          </div>
        </div>
        <div className={Styles.categoryBox2}>
          {/* Garden */}
            <div className={Styles.Box}>
              <h3 className='text-[1.5rem] font-medium'>Garden</h3>
              <div className={Styles.electList}>
                  <a href="#">
                    <img 
                      src="/Images/rake.jpg" 
                      alt="" 
                      className={Styles.itemImage} 
                    />
                    <div className={Styles.itemInfo}>
                      <h4 className={Styles.itemTitle}>Rake & Shovels</h4>
                      <p className={Styles.itemSubtitle}>Garden</p>
                    </div>
                    <span className={Styles.arrow}>&#8250;</span>
                  </a>
              </div>
              <div className={Styles.electList}>
                  <a href="#">
                    <img 
                      src="/Images/hoses.jpg" 
                      alt="" 
                      className={Styles.itemImage} 
                    />
                    <div className={Styles.itemInfo}>
                      <h4 className={Styles.itemTitle}>Garden hoses</h4>
                      <p className={Styles.itemSubtitle}>Garden</p>
                    </div>
                    <span className={Styles.arrow}>&#8250;</span>
                  </a>
              </div>
              <div className={Styles.electList}>
                  <a href="#">
                    <img 
                      src="/Images/mower.jpg" 
                      alt="" 
                      className={Styles.itemImage} 
                    />
                    <div className={Styles.itemInfo}>
                      <h4 className={Styles.itemTitle}>Lawn Mower</h4>
                      <p className={Styles.itemSubtitle}>Garden</p>
                    </div>
                    <span className={Styles.arrow}>&#8250;</span>
                  </a>
              </div>
            </div>
          {/* Home */}
            <div className={Styles.Box}>
              <h3 className='text-[1.5rem] font-medium'>Home</h3>
              <div className={Styles.electList}>
                  <a href="#">
                    <img 
                      src="/Images/home1.jpg" 
                      alt="" 
                      className={Styles.itemImage} 
                    />
                    <div className={Styles.itemInfo}>
                      <h4 className={Styles.itemTitle}>Home Decoration</h4>
                      <p className={Styles.itemSubtitle}>Home</p>
                    </div>
                    <span className={Styles.arrow}>&#8250;</span>
                  </a>
              </div>
              <div className={Styles.electList}>
                  <a href="#">
                    <img 
                      src="/Images/toolbox.jpg" 
                      alt="" 
                      className={Styles.itemImage} 
                    />
                    <div className={Styles.itemInfo}>
                      <h4 className={Styles.itemTitle}>Toolbox</h4>
                      <p className={Styles.itemSubtitle}>Home</p>
                    </div>
                    <span className={Styles.arrow}>&#8250;</span>
                  </a>
              </div>
              <div className={Styles.electList}>
                  <a href="#">
                    <img 
                      src="/Images/christmas.jpg" 
                      alt="" 
                      className={Styles.itemImage} 
                    />
                    <div className={Styles.itemInfo}>
                      <h4 className={Styles.itemTitle}>Christmas Decoration</h4>
                      <p className={Styles.itemSubtitle}>Other</p>
                    </div>
                    <span className={Styles.arrow}>&#8250;</span>
                  </a>
              </div>
            </div>
            {/* Other */}
            <div className={Styles.Box}>
              <h3 className='text-[1.5rem] font-medium'>Other</h3>
              <div className={Styles.electList}>
                  <a href="#">
                    <img 
                      src="/Images/boardgames.jpg" 
                      alt="" 
                      className={Styles.itemImage} 
                    />
                    <div className={Styles.itemInfo}>
                      <h4 className={Styles.itemTitle}>Board games & puzzles</h4>
                      <p className={Styles.itemSubtitle}>Other</p>
                    </div>
                    <span className={Styles.arrow}>&#8250;</span>
                  </a>
              </div>
            </div>
        </div>
      <div className={Styles.foot}>
        <Footer/>
      </div>
    </div>
  )
}

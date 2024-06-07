import '../App.css';
import '../index.css';
import AnimatedDots from './Animateddots';
function Home() {



  return (
    <div className="home">
        {/* ----------hero-section------ */}

        <div className='hero_section'>
          <div className='left'>
            <p className='sp'>#1 BLOCKCHAIN SECURITY APP</p>
            <h1>Depin AI & Rwa Smart marketplace Search on Web 3.0</h1>
            <div className='buttons'>
              <a href='/' className='btn'>
                Whitepaper
              </a>
              <a href='/' className='btn1'>
                Trade
              </a>
            </div>
          </div>
          <div className='right'>
          <AnimatedDots className="dots1" />
            <img className='circle' src='/images/hero-circle.png' alt='logo' />
            <img className='circle-bg' src='/images/hero-circle-bg.png' alt='logo' />
          </div>
          <img src='/images/star.png' alt='logo' className='s1' />
          <img src='/images/star.png' alt='logo' className='s2' />
          <img src='/images/star.png' alt='logo' className='s3' />
          <img src='/images/star.png' alt='logo' className='s4' />
        </div>

        {/* ------------partners------------- */}

        <div className='partners'>
          <a href='/'>
            <img src='/images/p1.png' alt='logo' />
          </a>
          <a href='/'>
            <img src='/images/p2.png' alt='logo' />
          </a>
          <a href='/'>
            <img src='/images/p3.png' alt='logo' />
          </a>
          <a href='/'>
            <img src='/images/p4.png' alt='logo' />
          </a>
          <a href='/'>
            <img src='/images/p5.png' alt='logo' />
          </a>
        </div>

        {/* ---------------features---------- */}

        <div className='sectors' id='feature'>
          <h2>Sectors</h2>
          <div className='content'>
            <div className='box'>
              <img src='/images/sector1.png' alt='loog' />
              <h3>GPU (CPU/TPU)</h3>
            </div>
            <div className='box'>
              <img src='/images/sector2.png' alt='loog' />
              <h3>HARDWARE</h3>
            </div>
            <div className='box'>
              <img src='/images/sector3.png' alt='loog' />
              <h3>NODES</h3>
            </div>
            <div className='box'>
              <img src='/images/sector4.png' alt='loog' />
              <h3>HASHING POWER</h3>
            </div>
            <div className='box'>
              <img src='/images/sector5.png' alt='loog' />
              <h3>MINING</h3>
            </div>
            <div className='box'>
              <img src='/images/sector6.png' alt='loog' />
              <h3>MACHINE LEARNING</h3>
            </div>
            <div className='box'>
              <img src='/images/sector7.png' alt='loog' />
              <h3>VPS</h3>
            </div>
            <div className='box'>
              <img src='/images/sector8.png' alt='loog' />
              <h3>DATA</h3>
            </div>
            <div className='box'>
              <img src='/images/sector9.png' alt='loog' />
              <h3>SECURITY</h3>
            </div>
            <div className='box'>
              <img src='/images/sector10.png' alt='loog' />
              <h3>WIFI</h3>
            </div>
            <div className='box'>
              <img src='/images/sector11.png' alt='loog' />
              <h3>WIFI</h3>
            </div>
            <div className='box'>
              <img src='/images/sector12.png' alt='loog' />
              <h3>MAPS</h3>
            </div>
          </div>
        </div>

        {/* ---------------web3---------- */}

        <div className='web3' id='about'>
          <div className='left'>
            <img src='/images/web3.png' alt='logo'/>
            <img className='bg' src='/images/web3-bg.png' alt='logo'/>
            <AnimatedDots className="dots2" />
          </div>
          <div className='right'>
          <img className='bg' src='/images/web3-bg1.png' alt='logo'/>
            <p className='sp'>
              Bringing  Infrastructure owners & users together 
            </p>
            <h2>Our AI algohrytms <br/> search the web3.0 daily for opportunities  in DePin, AI and RWA field.</h2>
            <p>We Arbitrage and use this data for revenue generation mechanism like above (Remote mining, Gpu Arbitrage, power/energy outsourcing and many more. )</p>
          </div>
        </div>

        {/* -------------tokenomics------------- */}

        <div className='tokenomics' id='tokenomics'>
          <div className='left'>
            <img className='bg' src='/images/token-left-bg.png' alt='logo' />
            <p className='sp'>TOKEN METRICS</p>
            <h2>RWA DePin - <br/> Token Contract</h2>
            <div className='content'>
              <ul>
                <li>Buy/sell tax: 4.9%</li>
                <li>Development & Infrastructure: 2.5%</li>
                <li>Marketing: 2.4%</li>
              </ul>
              <ul>
                <li>Liquidity will be locked</li>
                <li>Contract will be renounced</li>
                <li>No transfer tax</li>
                <li>No max buy/-wallet limits</li>
                <li>Anti-snipe precautions</li>
              </ul>
            </div>
          </div>
          <div className='right'>
            <img src='/images/token-img.png' alt='logo'/>
            <img className='bg' src='/images/web3-bg.png' alt='logo'/>
            <AnimatedDots className="dots3" />
          </div>
        </div>
        <div className='started'>
        <AnimatedDots className="dots4" />
          <div className='left'>
            <h2>Lorem ipsum dolor sit</h2>
            <p>We work hard every day to make life of our clients better and happier</p>
          </div>
          <div className='right'>
            <a href='/' className='btn1'>
              Get started
            </a>
          </div>
        </div>

        {/* -------------roadmap------------- */}

        <div className='roadmap' id='roadmap'>
          <p className='sp'>STEPS WE FOLLOW</p>
          <h2>Our Roadmap</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. </p>
          <div className='box'>
            <ul>
              <li>Ideation</li>
              <li>Concept Prototype</li>
              <li>Targeted Market Research</li>
              <li>Feature Design Development</li>
              <li>Revenue Model Formulation</li>
            </ul>
          </div>
          <div className='box'>
            <ul>
              <li>Platform Functional Refinements</li>
              <li>Strategic Product Marketing Initiatives</li>
              <li>Launch of Mobile Applications</li>
              <li>Integration of Telegram Features</li>
              <li>Establishment of Investors Club</li>
            </ul>
          </div>
          <div className='box'>
            <ul>
              <li>Token Presale/Launch</li>
              <li>Official Product Launch</li>
              <li>Additional Trading Bots Integration</li>
              <li>Premium Influencer Area Launch</li>
              <li>Exclusive Trading Channels Openin</li>
            </ul>
          </div>
          <div className='box'>
            <ul>
              <li>Traders Connect - Social Media <br/> for Traders</li>
              <li>Beta Testing of New Features</li>
              <li>Integration of Multiple Markets</li>
              <li>Alpha Release of Market Prediction Tools</li>
              <li>AI Powered Trading</li>
            </ul>
          </div>
          <img src='/images/roadmap-bg.png' alt='logo' className='bg' />
          <img src='/images/roadmap.png' alt='logo' className='map' />
          <img src='/images/web3.png' alt='logo' className='eth' />
          <AnimatedDots className="dots5" />
        </div>

        {/* -------------secure------------- */}

        <div className='secure'>
          <p className='sp'>PEACE OF MIND IS OUR #1 PRIORITY</p>
          <h2>Start securing from today</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href='/' className='btn1'>
            Get started
          </a>
          <img src='/images/secure1.png' className='img1' alt='logo' />
          <img src='/images/secure2.png' className='img2' alt='logo' />
          <AnimatedDots className="dots6" />
        </div>

        <p className='disclaimer'>
          <span>⚠️</span> DISCLAIMER <span> ⚠️</span> <br/>
          We support natural buyers. Any tool-assisted buying, like the use of sniper bots, or other ways of executing buys automatically, is not recommended. We view this as an attempt to get an unfair advantage over others,
          and the contract is designed to detect and punish activity like
          this with high taxes. We are not responsible of any sanctions, as a result of tool-assisted buying at launch.
        </p>

    </div>
  );
}

export default Home;

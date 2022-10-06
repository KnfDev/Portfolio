import "./App.css";
import LeagueTrack from "./images/LeagueTrack.png";
import RestaurantLanding from "./images/RestaurantLanding.png";
import Resume from "./images/Resume.pdf";
import Photo from "./images/Photo.png";
import script from "./images/script.png";
import Study from "./images/Study.png";
import linkedin from "./images/linkedin.png";
import Github from "./images/Github.jpg";
function App() {
  return (
    <div className="container-fluid">
      <div className="row navBar">
        <span className="col">
          <a href="#About_Me">About</a>
        </span>
        <span className="col">
          <a href={Resume}>Resume</a>
        </span>
        <span className="col">
          <a href="mailto:iamknf@gmail.com">Contact</a>
        </span>
      </div>
      <div className="row header">
        <div className="col col col-lg-4 col-xl-4">
          <p className="aloha">
            <span className="pineapple">Aloha</span>, I'm Kenneth & I'm a
            Full-Stack Developer
          </p>
        </div>
        <div className="col col-sm col-lg-4 col-xl-4">
          <img className="script" src={script} alt="" />
        </div>
      </div>

      <div className="row projectRow1">
        <span className="col col-sm col-lg-6 col-xl-6">
          <a href="https://github.com/KnfDev/riot-stats-clone">
            <img className="project1" src={LeagueTrack} alt="" />
          </a>
          <div className="description">
            <p>
              Uses Riot API to make get requests for player and match
              information, All champion and item Icons also pulled from Riot API
            </p>
            <p>Front-end: React.js || Javascript || CSS || Bootstrap</p>
            <p>Back-end: Axios || Express.js || Riot API</p>
          </div>
        </span>
        <div className="col league-info panel">
          <h3>League of Legends stat aggregator clone (work in progress)</h3>
          <p>
            This is my first personal project and I wanted to make something
            that reflected a part of me. But asking to describe oneself can be
            pretty difficult. After wracking my head trying to find something
            deep and philisophical about me that made me special I decided to
            just be honest and shallow.
          </p>
          <p>I am gamer.</p>
          <p>
            I am ashamed to say I have played and loved League for 10+ years
            now, I've made so many friends around the world through League and
            I've even gotten into some relationships with people who played
            league in Hawaii. It's been a huge part of my life so I decided to
            try my hand at replicating one of the stat trackers out there like
            op.gg or u.gg since game design itself is currently outside of what
            I am capable of.
          </p>
        </div>
      </div>

      <div className="row projectRow2">
        <span className="project2Span col col-sm col-lg-6 col-xl-6">
          <a
            className="project2a"
            href="https://knf-restaurant-client.herokuapp.com/dashboard"
          >
            <img className="project2" src={RestaurantLanding} alt="" />
          </a>
          <div className="description">
            <p>
              A dynamic Full-Stack project with a Front-end UI built on react
              that can make GET, POST, PUT, DELETE requests to a PostgreSQL
              Database through a Back-end built with Knex and Express.
            </p>
            <p>Front-end: React.js || Javascript || CSS || Bootstrap</p>
            <p>
              Back-end: Knex || Express.js || Node.js || PostgreSQL || RESTful
              API
            </p>
          </div>
        </span>
        <div className="col restaurant-info panel">
          <h3>Restaurant App</h3>
          <p>
            This is a project developed with my team at Thinkful, it's a
            restaurant reservations and tables management App. To be honest the
            whole time I was learning how to code it felt like a struggle and
            there were definitely a lot of moments I thought this wasn't the
            right field for me.
          </p>

          <p>
            I'm really glad I stuck it out until the very end though because
            while working on this project I really felt like everything began to
            click. While I had mostly been in the passenger seat throughout a
            large part of the program, I finally felt like I was able to be the
            driver for this project and it felt really good! I wanted to go for
            a more modern Cafe type feel for the aesthetics because I've always
            loved cafes and there aren't that many in Hawaii.
          </p>
        </div>
      </div>
      <div className="row projectRow1">
        <span className="col col-sm col-lg-6 col-xl-6">
          <a href="https://github.com/KnfDev/Study-Tool-Application">
            <img className="project1" src={Study} alt="" />
          </a>
          <div className="description">
            <p>
              Uses Riot API to make get requests for player and match
              information, All champion and item Icons also pulled from Riot API
            </p>
            <p>Front-end: React.js || Javascript || CSS || Bootstrap</p>
            <p>Back-end: Axios || Express.js || Riot API</p>
          </div>
        </span>
        <div className="col league-info panel">
          <h3>Flashcard Study app - Front-end deployed only - github linked</h3>
        </div>
      </div>

      <div id="About_Me" className="row aboutMe">
        <div className="heading">About Me</div>
        <div className="aboutMeInfo col col-l-9 col-xl-9">
          <p>
            Aloha! I'm a software developer based in Hawaii and I recently quit
            my job of 5 years working Front Desk at a hotel.
            <p>
              I've been in hospitality for more than half my life now, starting
              in the food service industry at the age of 14.
            </p>
            <p>
            By Hawaii standards, the pay at my recent job was actually pretty
            good, enough to pay a mortgage and still have some spending money
            left over to enjoy and I was kind of muddling through my life
            settling for that. 
            </p>
            <p>
            That is until recently where I had a big life-changing experience
            and it really made me reevaluate my life and what I had done up
            until that point... 
            </p>
            <p>
            The conclusion that I came to was that I wasn't
            happy, I didn't feel fulfilled or accomplished, and I didn't feel
            like I was important or I existed or made an impact in any way and
            these feelings were bleeding into my personal life and
            relationships, personally it was the darkest year of my life. 
            </p>
            <p>
            10 years ago I actually had been enrolled at my local college with
            Computer Science as my intended major but I had to drop out due to
            financial reasons and continued working full-time in the hospitality
            industry.
            </p>
            <p>

            Fast forward to the present and I realized I haven't ever
            really accomplished anything that I could be proud of. So I decided
            I wanted to live my life from that point on in a way that 10 years
            from now, or 20 years or at the end of my life, I can look back and
            not have any regrets, say that I tried my best and be proud of
            myself and what I've done. 
            </p>
            <p>
            I swallowed my pride and asked to move
            back into my parent's home, I quit my job and enrolled in a
            Full-stack Immersive Software Engineering program at Thinkful to
            take a step toward completing what I had started 10 years ago. 
            </p>
            <p>

            It's
            been a difficult 6 months, I've never felt more incompetent or
            stupid in my life, and I really doubted if this was something that I
            was capable of doing anymore at this point. While my confidence has
            been at an all-time low, I am able to say that even though there
            were many head-banging and hair-pulling moments I enjoyed every
            second of it. 
            </p>
            <p>

            Now almost 6 months since the start of the program I
            am absolutely ecstatic to announce I have completed the course. I
            know this is just the first small step and I have a really long road
            ahead of me, but I'm so happy to be able to say that I have no
            regrets about starting this new journey regardless of where it takes
            me. I really want to thank all the instructors, teachers assistants,
            and all my cohort mates who helped pull me through to the end! Also
            much thanks to all who took the time to read this, It was very
            embarrassing! 
            </p>
            <p>

            Mahalo lui noa and ahui hou kakou! 
            <p>
              Kenneth
            </p>
            </p>
          </p>
        </div>
            <img className="me col" src={Photo} alt="" />
        <div className="row footer">
          <div className="linkedin">
            <a
              className="linkedIn"
              href="https://www.linkedin.com/in/kenneth-mai-software-engineer/"
            >
              <img src={linkedin} alt="" />
            </a>
            <a className="github" href="https://github.com/KnfDev">
              <img src={Github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

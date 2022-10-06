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
        <div className="test col col col-lg-7 col-xl-8">
          <p className="aloha">
            <span className="pineapple">Aloha</span>, I'm Kenneth & I'm a
            Full-Stack Developer
          </p>
        </div>
        <div className="col col-sm col-lg-4 col-xl-4">
          <img className="script" src={Photo} alt="" />
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
          <h3>Restaurant App Full-Stack Dynamic</h3>
          <p>
            This is a project developed with my team at Thinkful, it's a
            restaurant reservations and tables management App that interacts
            with a PostgreSQL database. To be honest the whole time I was
            learning how to program it felt like a struggle and there were
            definitely a lot of moments I thought this wasn't something I was
            capable of doing anymore at my age.
          </p>

          <p>
            I'm really glad I stuck it out until the very end though because
            while working on this project I really felt like everything began to
            click. While I had mostly been in the passenger seat throughout a
            large part of the program, I finally felt like I was able to be the
            driver for this project and it felt really good!
          </p>
          <p>
            I wanted to go for a more modern Cafe type feel for the aesthetics
            because I've always loved cafes and there aren't that many in
            Hawaii.
          </p>
        </div>
      </div>

      <div className="row projectRow1">
        <span className="col col-sm col-m col-lg-6 col-xl-6">
          <a href="https://github.com/KnfDev/Study-Tool-Application">
            <img className="project1" src={Study} alt="" />
          </a>
          <div className="description">
            <p>Description Here</p>
            <p>Front-end: React.js || Javascript || CSS || Bootstrap</p>
            <p>Back-end: Axios || Express.js</p>
          </div>
        </span>
        <div className="col league-info panel">
          <h3>Flashcard Study app - Front-end deployed only - github linked</h3>
          <p>Description Here</p>
        </div>
      </div>

      <div id="About_Me" className="row aboutMe">
        <div className="heading">About Me</div>
        <div className="aboutMeInfo col">
          <p>Aloha!</p>
          I'm Kenneth from the beautiful sate of Hawaii and I'll be turning 34
          on Oct 28 2022,
          <p>
            To keep things short, I've been in hospitality for almost 20 years
            now. First job was at Cold Stones when I was 14 or 15 years old and
            I was working as a Front Desk Representative for The Marriott for
            the past 5 years.
          </p>
          <p>
            In the beginning of 2022 I had a big life changing moment, no it
            wasn't Covid. But it really made me reevaluate my life and what I
            had accomplished up until now.
          </p>
          <p>
            Sad to say what I realized was that I hadn't accomplished much,
            there wasn't much I was proud of, and my life was full of regret.
          </p>
          <p>
            10 years ago I had actually been enrolled at my local College for
            Computer Science but I had to drop out due to financial reasons, 10
            years later I had managed to become a home owner and I was making
            enough to pay for mortgage and still have some money left over to
            enjoy. I was miserable.
          </p>
          <p>
            I decided I wanted to live in a way that whether it's 5 years from
            today, or 10 years, or at the end of my life I can look back and be
            proud of myself. So I enrolled at Thinkful in their Software
            Engineering Immersion program to take a step toward
            completing what I attempted a decade ago.
          </p>
          <p>
            It’s been a difficult 6 months, I’ve never felt more incompetent or
            stupid in my life, and I really doubted if this was something that I
            was capable of doing anymore at this point. While my confidence has
            been at an all-time low, I am able to say that even though there
            were many head-banging and hair-pulling moments I enjoyed every
            second of it.
          </p>
          <p>
            I know this is just the first single small step and I have a really long
            road ahead of me, but I’m so happy to be able to say that I have no
            regrets about starting this new journey regardless of where it takes
            me.
          </p>
          <br />
          <p>Mahalo lui noa and ahui hou kakou!</p>
          <p>Kenneth</p>
        </div>
        {/* <img className="me col" src={Photo} alt="" /> */}
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

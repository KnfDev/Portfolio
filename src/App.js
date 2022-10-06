import "./App.css";
import LeagueTrack from "./images/LeagueTrack.png";
import RestaurantLanding from "./images/RestaurantLanding.png";
import Resume from "./images/Resume.pdf";
import Photo from "./images/Photo.png";
import script from "./images/script.png"
import Study from "./images/Study.png"
function App() {
  return (
    <div className="container-fluid">
      <div className="row navBar">
        <span className="col">
          <a href="#About_Me">About Me</a>
        </span>
        <span className="col">
          <a href={Resume}>Resume</a>
        </span>
        <span className="col">
          <a href="mailto:iamknf@gmail.com">Contact</a>
        </span>
      </div>
      <div className="row header">
        <div className="col col-sm col-lg-4 col-xl-4">
          <p className="aloha">
            <span className="pineapple">Aloha</span>, I'm Kenneth & I'm a
            Full-Stack Developer
          </p>
        </div>
        <div className="col col-sm col-lg-4 col-xl-4">
          <img className="script" src={script} alt=""/>
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
        <div className="col league-info">
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
            Have been one since 3rd grade when my parents made their first big
            mistake of getting me a Sega Genesis.
          </p>
          <p>
            Since that day I've loved games. Tetris,{" "}
            <span className="mario">Mario</span>, Sonic, Banjo Kazooie,
            PowerStone, Battle Toads.. The list is endless
          </p>
          <p>
            Fast forward to 7th grade and we hit big mistake number two.. They
            got me a pc and our internet connection at the time was AOL.. which
            happened to offer Warcraft 2, which happened to charged you $/minute
            played, I can't tell you how mad my parents were when the internet
            bill for the month was $200~{" "}
          </p>
          <p>
            From there I loved all the Blizzard games of that era; Diablo,
            Starcraft, Warcraft. Warcraft 3 had Dota which eventually led me to
            League of Legends
          </p>
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
        <div className="col restaurant-info">
          <h3>Restaurant App</h3>
          <p>
            I went to College for Culinary Arts. Not a choice I would make
            again, but at least I can cook for me and my loved ones!
          </p>
          <p>
            In my early 20's I was working in mainly Italian or Japanese
            restaurants but I quickly learned it wasn't for me as a profession.
          </p>
          <p>
            After a couple years working in a Japanese restaurant my best friend
            and I decided to travel abroad to Japan for a year and learn
            Japanese, knowing how to cook was a huge benefit and it was a great
            talking point for meeting new people at our dorm!
          </p>
          <p>
            I still enjoy cooking for the people close to me and I very very
            much enjoy eating good food, my favorite cuisines are Japanese and
            French but I'm not very picky. I hope one day I'll be able to travel
            freely and experience food from all around the world.
          </p>

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
      </div>

      <div className="row projectRow3">
        <span className="projectSspan col col-sm col-lg-6 col-xl-6">
          <a href="https://knfdevflashcard.vercel.app/">
            <img className="project1" src={Study} alt="" />
          </a>
          <div className="description">
            <p>
              Description Here
            </p>
            <p>Front-end: React.js || Javascript || CSS || Bootstrap</p>
            <p>Back-end: Axios || Express.js</p>
          </div>
        </span>
        <div className="col study-info">
          <h3>Flashcard Study App</h3>
          <p>
            Description here
          </p>
        </div>
      </div>

      <div id="About_Me" className="row aboutMe">
        <div className="heading">About Me</div>
        <img className="me" src={Photo} alt="" />
        <div></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At temporibus
          delectus libero expedita fugit explicabo, beatae maxime iste nesciunt.
          Ipsum laboriosam ullam illum veritatis corrupti tempore a libero amet
          aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          temporibus delectus libero expedita fugit explicabo, beatae maxime
          iste nesciunt. Ipsum laboriosam ullam illum veritatis corrupti tempore
          a libero amet aliquid. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. At temporibus delectus libero expedita fugit
          explicabo, beatae maxime iste nesciunt. Ipsum laboriosam ullam illum
          veritatis corrupti tempore a libero amet aliquid. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. At temporibus delectus libero
          expedita fugit explicabo, beatae maxime iste nesciunt. Ipsum
          laboriosam ullam illum veritatis corrupti tempore a libero amet
          aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          temporibus delectus libero expedita fugit explicabo, beatae maxime
          iste nesciunt. Ipsum laboriosam ullam illum veritatis corrupti tempore
          a libero amet aliquid. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. At temporibus delectus libero expedita fugit
          explicabo, beatae maxime iste nesciunt. Ipsum laboriosam ullam illum
          veritatis corrupti tempore a libero amet aliquid.
        </p>
      </div>
    </div>
  );
}

export default App;

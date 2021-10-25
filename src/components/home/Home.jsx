import '../../styles/home/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home__splash"></div>
      <div className="home__container">
        <div className="home__container__description info-cont">
          <h1>ROARED GAMES</h1>
          <p>
            Wether you want to tell the world about your favorite game or maybe
            you want to warn others? Become a collaborator at Roared Games!
          </p>
        </div>
        <div className="home__container__latest info-cont">
          <h1>Latest Reviews</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

import "./HomePage.css";

const lifecycleImages = [
  {
    src: "/assets/winter.jpg",
    alt: "Spotted Lanternfly white egg mass on a tree in winter",
  },
  {
    src: "/assets/spring.jpg",
    alt: "Black Spotted LanternFly nymph with white spots in spring",
  },
  {
    src: "/assets/summer.jpg",
    alt: "Red and black Spotted Lanternfly nymph with white spots in summer",
  },
  {
    src: "/assets/fall.jpg",
    alt: "Adult Spotted Lanternfly that has black spots on their tan wings",
  },
];
function HomePage() {
  return (
    <section className="home-page">
      <div className="home-info">
        <h1>EYE ON THE FLY</h1>

        <div className="lantern-images">
          {lifecycleImages.map((image, index) => (
            <div className="lifecycle-stage" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        <div className="mission-statement">
          <h2>Eye On The Fly Mission Statement</h2>
          <p>
            This website was built to be a resource for all New Jersey citizens
            to come together to track and combat the increasing spread of the
            invasive species known as the Spotted Lanternfly (
            <em>Lycorma Delicatula</em>).
          </p>
          <p>
            Head over to the Submission page to add your sighting and see it represented, according to location, on our Tracker page.
          </p>
          <p>For additional information, images, and other helpful resources check out the Resources page!</p>
        </div>
      </div>
    </section>
  );
}
export default HomePage;

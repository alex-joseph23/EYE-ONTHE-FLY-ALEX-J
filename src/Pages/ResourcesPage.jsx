import "./ResourcesPage.css";
import { useState } from "react";
import Button from "../components/Button";

const galleryImages = [
  { src: "/assets/winter.jpg" },
  { src: "/assets/spring.jpg" },
  { src: "/assets/summer.jpg" },
  { src: "/assets/fall.jpg" },
];
function ResourcesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="resources-page">
      <div className="resources-title">
        <h1>Resources Page</h1>
      </div>
      <div className="page-layout">
        <div className="gallery">
          <img
            className="gallery=image"
            src={galleryImages[currentIndex].src}
          />

          <div className="next-button">
            <Button
              label="<"
              onClick={() =>
                setCurrentIndex(
                  (currentIndex - 1 + galleryImages.length) %
                    galleryImages.length
                )
              }
            />
            <Button
              label=">"
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % galleryImages.length)
              }
            />
          </div>
        </div>

        <h2>Reporting</h2>
        <p className="reporting">
          You can and should report any sightings to the New Jersey Department
          of Agriculture using this email, reportspottedlanternflynj@ag.nj.gov,
          along with any possible images, location specifics, and other details.
          If your sighting is located in West Windsor Township there is an
          additional email that you can report your sighting to,
          SLFLY@westwindsortwp.com.
        </p>

        <h3>Identification</h3>
        <p className="identification">
          It is important be able to properly identify the presence of a Spotted
          Lanternfly as early as you can. The SLF has distinctive seasonal
          characteristics as shown in the images to the left. Spring: they
          appear all black with white spots on their bodies. Summer: Their color
          changes to bright red with black stripes and white spots. Fall: The
          spotted lanternfly matures into a semi flying insect (really a
          leafhopper) with brown wings covered in black dots as well as one set
          of bright red wings with black dots underneath their top wings. Their
          body is striped in yellow and black. You could potentially identify
          their egg masses on trees fresh ones being white to brown with a
          protective blob like covering that will dry up and get darker with
          time.
        </p>
        <h4>Proactive Prevention and Dealing with Infestations</h4>
        <p className="prevention">
          In addition to properly identifying and destroying any egg masses,
          single insects, or emerging swarms there some other ways to prevent
          the likelihood of a potential infestation. The Spotted Lanternfly
          while unfortunately can feed on a wide variety of different host
          plants and trees they do seem to have preferences. The number 1 of
          those preferences has proven to be the Tree of Heaven. This plant is
          also invasive in the United States so removing this plant from your
          property and from their food sources is a simple decision. The Tree of
          Heaven, however is notoriously hard to get rid off and has been known
          to damage the foundations of homes. Please do further research and
          consult professionals for removal. Other popular host plants for the
          Spotted Lanternfly include grapes, hops, apple, stone fruit, maple,
          poplar, walnut, and willow. These plants often provide ecological and
          even economical benefits so tactics to prevent or treat an infestation
          should avoid removal. A common and safe method to killing the spotted
          lanternfly is to mix water with dawn dish soap. Spraying this solution
          will kill the lanternflies and will not damage your plants or harm
          your pets. Checking your belongings like vehicles, packages, moving
          boxes, ect. for egg masses or hitch-hiking insects is another
          important way to help stop the spread.
        </p>
        <h5>Additional Links and Resources</h5>
      </div>
    </section>
  );
}
export default ResourcesPage;

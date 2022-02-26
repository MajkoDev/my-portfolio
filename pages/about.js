import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.main}>
      <h1 className={styles.section_title}>About Page</h1>


      <section className='section section_about_me'>
        <div className='container'>
          <h2 className={styles.section_subtitle}>O mne.</h2>

          <div className={styles.card_me}>
            <h3 className={styles.card_me_title}>kto som?</h3>
            <p>
              venujem sa web vývoju. <br />
              tvorím zaujímavé a živé veci na internet. <br />
              chcem preskočiť od záujmu k povolaniu.
            </p>
          </div>

          <div className={styles.card_me}>
            <h3 className={styles.card_me_title}>čo momentálne?</h3>
            <p>
              momentálne tvorím projekty pre môj Github. <br />
              experimentujem s reactom and prehlbujem znalosti javascriptu.{" "}
              <br />
              tvorím stránky, ktoré chcem ponúknuť známym pre využitie.
            </p>
          </div>

          <div className={styles.card_me}>
            <h3 className={styles.card_me_title}>a kam?</h3>
            <p>
              chcem sa zapojiť do skutočných projektov.
              <br />
              najlepšie nájsť miesto, kde by som sa mohol ponoriť do
              programovania. <br />
              poznať zaujímavých ľudí a vyškúšať rôznorodé technologie. <br />
              ale v prvom rade, tvoriť niečo živé a pekné na nete.
            </p>
          </div>

          <div className={styles.card_me}>
            <h3 className={styles.card_me_title}>osobné bio.</h3>
            <p>
              som takmer 25-ročný. <br />
              nemám rád sociálne siete, najmä facebook a instagram. <br />
              naposledy som videl film <strong>White Tyger</strong>{" "}
            </p>
          </div>
        </div>
      </section>


        <section className="section section_my_skills">
            <div className="container">
                <h2 className={styles.section_subtitle}>moje schopnosti.</h2>

                <div className="card_skills">
                    <h3>základy web vývoja. </h3>
                    <ul>
                        <li>poznám html, css, javascript</li>
                        <li>stále viac a viac sa učím javascript, keďže ho využívam na aplikácie a projekty</li>
                    </ul>
                </div>

                <div className="card_skills">
                    <h3>dizajnovanie.</h3>
                    <ul>
                        <li>viem Css, milujem Sass, poznám Less, vyskúšal som aj PostCss</li>
                        <li>navrhujem v softwari Figma, plánujem vyskúšať Adobe XD</li>
                        <li>tvoril som a využíval bootstrap, tailwind, chakra,…</li>
                        <li>pri React som využil aj Styled-Comp, Storybook, Emotion</li>
                    </ul>
                </div>

                <div className="card_skills">
                    <h3>Front-End.</h3>
                    <ul>
                        <li>sústreďujem sa na React a jeho ekosystem</li>
                        <li>viem základy, kontext, hooks, router (pozri projekty)</li>
                        <li>pracoval som s Next.js a aj Gatsby</li>
                    </ul>
                </div>

                <div className="card_skills">
                    <h3>Back-End.</h3>
                    <ul>
                        <li>morem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>horem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
}

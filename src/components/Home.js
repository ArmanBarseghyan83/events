import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.img}>
        <img src="https://www.thesu.org.uk/pageassets/events/events.jpg" alt="event"/>
      </div>
      <article className={classes.article}>
        <p>Check Out The Latest Events In Our Listings.</p>
        <p>Take Your Outings To The Next Level With These Events. </p>
      </article>
    </div>
  );
}

export default Home;

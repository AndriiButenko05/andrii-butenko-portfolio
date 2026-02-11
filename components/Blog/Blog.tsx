import css from "@/app/page.module.css";
export default function Blog() {
  return (
    <section className={css.blog} id="blog">
      <div className={css["section-header"]}>
        <div className={css["section-label"]}>Latest Articles</div>
        <h2 className={css["section-title"]}>From The Blog</h2>
      </div>
      <div className={css["blog-grid"]}>
        <div className={css["blog-card"]}>
          <div className={css["blog-date"]}>Feb 05, 2026</div>
          <h3>Optimizing React Performance at Scale</h3>
          <p>
            Deep dive into advanced techniques for improving React application
            performance, including code splitting, memoization, and virtual
            scrolling.
          </p>
          <a href="#" className={css["read-more"]}>
            Read More
          </a>
        </div>

        <div className={css["blog-card"]}>
          <div className={css["blog-date"]}>Jan 28, 2026</div>
          <h3>Building Resilient Microservices</h3>
          <p>
            Best practices for designing fault-tolerant distributed systems with
            proper error handling, circuit breakers, and monitoring.
          </p>
          <a href="#" className={css["read-more"]}>
            Read More
          </a>
        </div>

        <div className={css["blog-card"]}>
          <div className={css["blog-date"]}>Jan 15, 2026</div>
          <h3>Modern CSS Layout Techniques</h3>
          <p>
            Exploring CSS Grid, Flexbox, and container queries to create
            responsive, maintainable layouts without media queries.
          </p>
          <a href="#" className={css["read-more"]}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

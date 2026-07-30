"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import styles from "./NewsletterSignup.module.css";

/**
 * NewsletterSignup
 *
 * IMPORTANT: this form does not actually send anywhere yet. The old
 * WordPress site posted this to a WordPress plugin; a static Next.js site
 * has no backend of its own to receive it.
 *
 * To wire this up for real, pick one:
 *   1. An email service's own signup form/API (Mailchimp, ConvertKit,
 *      Buttondown, etc.) — replace handleSubmit's body with a fetch()
 *      call to their API.
 *   2. A small serverless function (e.g. a Next.js Route Handler at
 *      app/api/subscribe/route.js) that forwards the email to your
 *      email service.
 *
 * Until then this component just validates the input and shows a
 * "thanks" message, so the UI can be reviewed independently of the
 * backend work.
 */
export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitted

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    // TODO: replace with a real call to an email service or API route.
    console.log("Newsletter signup (not yet connected to a backend):", email);

    setStatus("submitted");
    setEmail("");
  }

  return (
    <section className={styles.section}>
      <Container width="narrow" className={styles.inner}>
        <h2 className={styles.title}>STAY UPDATED</h2>
        <p className={styles.subtitle}>Sign up for our newsletter and get updates on what we've been working on.</p>

        {status === "submitted" ? (
          <p className={styles.thanks}>Thanks for signing up!</p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className={styles.srOnly}>
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Submit Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.submit}>
              SUBMIT EMAIL
            </button>
          </form>
        )}

        <p className={styles.privacy}>
          We care about the protection of your data. Read our{" "}
          <a href="https://toduguam.com/privacy/">Privacy Policy</a>.
        </p>
      </Container>
    </section>
  );
}

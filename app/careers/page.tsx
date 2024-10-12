"use client";
import React from "react";
import styles from './terms.module.css';

export default function TermsPage() {
  return (
    <div className={styles.termsPage}>
      <header className={styles.header}>
        <h1>Unlock your Potential</h1>
      </header>
      <div className="text-left text-base sm:text-lg w-[70%]">
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>
              <a href="https://docs.google.com/document/d/e/2PACX-1vTiKCa8VA_Rk8hffR8PvCQsH9mcrhodHYwRR82l9PyRyLPZcO68RZj6Ex_1P9UM5AzqxkoVVJpNJB3H/pub" target="_blank" rel="noopener noreferrer">
                Customer Support
              </a>
            </strong>
          </li>
          <li>
            <strong>
              <a href="https://docs.google.com/document/d/e/2PACX-1vRLCRuZ3J23xuhBIktxrCSe4CuDPgp3wRPxCPMGzldGlegTh8OpR7LCuuHMH8cZb3gJ4uUGEkblmDbd/pub" target="_blank" rel="noopener noreferrer">
                Business Executive
              </a>
            </strong>
          </li>
          <li>
            <strong>
              <a href="https://docs.google.com/document/d/e/2PACX-1vR0Og6hNr65a506RtLMNrm-FwzCZVXh2218p8YZ2RD5y03SUz5hZ6xobfIQ9D-Nn7G2E5VGA4je9d0m/pub" target="_blank" rel="noopener noreferrer">
                Video Editor
              </a>
            </strong>
          </li>
        </ol>
      </div>
    </div>
  );
}

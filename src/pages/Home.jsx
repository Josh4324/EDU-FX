import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="home-section1">
          <div>
            <div className="htext1 ">Become FX Master</div>
            <div className="htext2">
              Smart Traders Academy empowers individuals to master the art of
              Forex trading and achieve financial independence through trading.
            </div>
          </div>
          <div>
            <img src="./images/img1.png" />
          </div>
        </section>
        <section className="home-section2">
          <div className="htext3">About the Course</div>
          <div className="htext4">FX Mastery Accelerator</div>
          <div className="htext5">
            The FX Mastery Accelerator program is specially designed to help
            struggling, unprofitable traders to improve their general trading
            knowledge and become profitable.
          </div>
        </section>
        <section className="home-section3">
          <div className="htext6">Smart Traders Academy Curriculum</div>

          <div>
            <div className="htext7">Introduction to Forex</div>
            <div className="htext7">Technical Tools</div>
            <div className="htext7">Technical Analysis</div>
            <div className="htext7">Strategy Development</div>
            <div className="htext7">Trade Execution</div>
            <div className="htext7">Trading Psychology</div>
            <div className="htext7">Risk management</div>
          </div>

          <button className="but">Get Full Access</button>
        </section>
        <section className="home-section4">
          <div className="htext8">Smart Traders Premium</div>
          <div className="htext9">
            Smart Traders Premium offers profitable trade opportunities in the
            FX market through quality trade signals
          </div>
          <button className="but">Join Premium</button>
        </section>
        <section className="home-section5">
          <div className="htext10">Hear from our students</div>
          <div className="cardlist">
            <div className="card">
              <div>The training improved my understanding of Forex trading</div>
              <div>-Samson O</div>
            </div>

            <div className="card">
              <div>
                The training has helped me to become a profitable trader
              </div>
              <div>-Alex</div>
            </div>

            <div className="card">
              <div>
                I have enrolled in many courses but this actually simplifies
                forex trading, I made $1500 in my first month
              </div>
              <div>-Adeleke</div>
            </div>

            <div className="card">
              <div>
                I learnt to make money from Forex without using my capital
              </div>
              <div>-Dorathy</div>
            </div>
          </div>
        </section>
        <section className="home-section6">
          <div>
            <div className="htext11">About us</div>
            <div className="htext12">
              At Smart Traders Academy, we believe that Forex trading is not
              merely a financial endeavor, but a transformative journey of
              self-discovery and personal growth. We believe in the power of
              collaboration and mentorship, and our academy provides a
              supportive environment where students can connect, share insights,
              and learn from each other's experiences.
            </div>
            <div className="htext13">About the Founder</div>
            <div className="htext14">
              I am Segz, I have been trading Crypto/FX for 7 years. After all my
              years of trading in the financial market, I was inspired to set up
              Smart Traders Academy because there are enormous potentials within
              the financial market which can only be utilized by those with
              proper trading knowledge. Smart Traders Academy empowers
              individuals to master the art of Forex trading and achieve
              financial independence through trading. Join us on this
              exhilarating journey towards financial freedom and personal
              growth. Together, let's unlock your full potential and embark on a
              path of Forex mastery.
            </div>
          </div>
          <img className="img2" src="./images/img2.png" />
        </section>
        <section className="home-section7">
          <div className="htext15">
            Join our community of smart traders through our general telegram
            group
          </div>

          <button className="but2">Join Telegram</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
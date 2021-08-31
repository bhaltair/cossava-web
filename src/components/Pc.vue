<template>
  <section class="section1">
    <div class="nav">
      <img src="../assets/pc/logo.png" alt="" />
      <ul>
        <li class="active">Home</li>
        <li>Pitch Deck</li>
        <li>Whitepaper</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div class="container">
      <div>
        <h2>Africa’s Content Incentive Infrastructure Network</h2>
        <p>
          A blockchain infrastructure that connects the value chain of content
          creation through an incentive &nbsp; consensus mechanism that benefits
          consumers, content producers and platforms in the ecosystem.
        </p>
        <button>Get Early Access</button>
      </div>
    </div>
  </section>

  <section class="section section2 container">
    <div class="section2-item">
      <div class="left">
        <div class="hd">
          <img src="../assets/works-logo.png" alt="" class="logo" />
          <span>WORKS</span>
        </div>
        <h3>Maximize the value of art works</h3>
        <p>
          Connect the African Art & Music Culture to the global market, using
          NFT as the vehicle.
        </p>
      </div>
      <div class="right">
        <img src="../assets/Works.gif" alt="" class="bd-bg" />
      </div>
    </div>
    <div class="section2-item section2-item2">
      <div class="left">
        <div class="hd">
          <img src="../assets/skills-logo.png" alt="" class="logo" />
          <span>SKILLS</span>
        </div>
        <h3>Improve freelance & gig economy</h3>
        <p>
          Improve freelance & gig economy opportunities to provide Africans
          additional source of income - Improve Adricans’ livelihood through the
          exchange of skills.
        </p>
      </div>
      <div class="right">
        <img src="../assets/Skills.gif" alt="" class="bd-bg" />
      </div>
    </div>
    <div class="section2-item section2-item3">
      <div class="left">
        <div class="hd">
          <img src="../assets/attention-logo.png" alt="" class="logo" />
          <span>ATTENTION</span>
        </div>
        <h3>Build an engagement incentive infrastructure</h3>
        <p>
          Improve freelance & gig economy opportunities to provide Africans
          additional source of income - Improve Adricans’ livelihood through the
          exchange of skills.
        </p>
      </div>
      <div class="right">
        <img src="../assets/Attention.gif" alt="" class="bd-bg" />
      </div>
    </div>
  </section>

  <section class="section section3">
    <div class="container">
      <h2>
        Cassava’s
        <span>Utility Scenario</span>
      </h2>
      <div class="section3-list">
        <div class="section3-item">
          <div class="logo">
            <img src="../assets/section3-1.png" alt="" />
          </div>
          <div class="bd">
            <h3>Incentive Mechnism</h3>
            <ul>
              <li>Earn</li>
              <li>Staking</li>
            </ul>
          </div>
        </div>
        <div class="section3-item">
          <div class="logo">
            <img src="../assets/section3-2.png" alt="" />
          </div>
          <div class="bd">
            <h3>Cassava as an Asset</h3>
            <ul>
              <li>Payment</li>
              <li>AMM Swap</li>
              <li>Lending platform</li>
              <li>NFT marketplace</li>
            </ul>
          </div>
        </div>
        <div class="section3-item section3-item_last">
          <div class="logo">
            <img src="../assets/section3-3.png" alt="" />
          </div>
          <div class="bd">
            <h3>Public Blockchain &nbsp; Infrastructure</h3>
            <ul>
              <li>Ecosystem</li>
              <li>Governance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section4 container">
    <div class="section4-left">
      <h2>
        Cassava
        <span>NFTs</span>
      </h2>
      <h3>Support the growth of African Artists</h3>
      <div class="section4-item">
        <img src="../assets/section4-1.png" alt="" />
        <span
          >Issue & distribute African creators NFTs om open trading
          platform.</span
        >
      </div>
      <div class="section4-item">
        <img src="../assets/section4-2.png" alt="" />
        <span>Upvote/bidding/auction/payment via Cassava Token.</span>
      </div>
    </div>
    <img src="../assets/section4.png" alt="" />
  </section>

  <section class="section section5 container" :class="classObject">
    <h2><span>People</span> Behind Cassava</h2>
    <h3>
      Meet the people dedicated to bringing context to the African crypto
      ecosystem
    </h3>
    <ul>
      <li :class="index === 0 ? 'active' : ''" @click="() => onClick(0)">
        <span>Core Team</span>
      </li>
      <li :class="index === 1 ? 'active' : ''" @click="() => onClick(1)">
        <span>Advisor</span>
      </li>
    </ul>

    <swiper
      :options="swiperOptions"
      @activeIndexChange="onSlideChange"
      class="swiper"
      @swiper="setControlledSwiper"
    >
      <swiper-slide>
        <div class="members">
          <div class="member">
            <img src="../assets/obasi.png" alt="" />
            <h2>Obasi Francis Ifegwu</h2>
            <h3>Co-Founder</h3>
            <p>
              co-founder of DeSpace Protocol, raised over $2,000,000 in funding.
            </p>
          </div>
          <div class="member">
            <img src="../assets/nancy.png" alt="" />
            <h2>Nancy Nwachukwu</h2>
            <h3>Co-Founder, Ops Lead</h3>
            <p>Former CMO in Scooper and Transsion Manager.</p>
          </div>
          <div class="member">
            <img src="../assets/vincent.png" alt="" />
            <h2>Vincent Li</h2>
            <h3>Co-Founder</h3>
            <p>co-founder & CEO of Future Hub backed by Transsion Holdings</p>
          </div>
          <div class="member" style="margin: 0">
            <img src="../assets/adeyinka.png" alt="" />
            <h2>Adeyinka Ogunlami</h2>
            <h3>Content Lead</h3>
            <p>
              Worked with companies like Pulse Nigeria, Maxima Media and Gogle
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="members">
          <div class="member">
            <img src="../assets/jerome.png" alt="" />
            <h2>Jerome Wong</h2>
            <h3>Co-Founder & CBO, Everest Ventures Group</h3>
          </div>
          <div class="member">
            <img src="../assets/cordel.png" alt="" />
            <h2>Cordel Robin-Coker</h2>
            <h3>Co-Founder & CEO, Carry1st</h3>
          </div>
          <div class="member">
            <img src="../assets/khaled.png" alt="" />
            <h2>Khaled Ben Jilani</h2>
            <h3>Senior Partner, AfricInvest</h3>
          </div>
          <div class="member">
            <img src="../assets/adewale.png" alt="" />
            <h2>Adewale Yusuf</h2>
            <h3>Founder & CEO, Techpoint Africa</h3>
          </div>
          <div class="member">
            <img src="../assets/yat.png" alt="" />
            <h2>Yat Siu</h2>
            <h3>Co-Founder & Chairman, Animoca Brands</h3>
          </div>
          <div class="member">
            <img src="../assets/lauren.png" alt="" />
            <h2>Lauren Selig</h2>
            <h3>Co-founder, Shake and Bake Productions and VALIS Studios</h3>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>

  <section class="section section6">
    <div class="container">
      <div>
        <ul class="nav">
          <li class="active">Home</li>
          <li>Pitch Deck</li>
          <li>Whitepaper</li>
          <li>Contact Us</li>
        </ul>
        <ul class="privacy">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div class="joinus">
        <h2>Join our Community</h2>
        <ul class="social">
          <a href="https://t.me/cassavanetwork" target="_blank">
            <li>
              <img src="../assets/telegram.png" alt="" />
              Telegram
            </li>
          </a>
          <a href="https://twitter.com/CassavaNetwork" target="_blank">
            <li>
              <img src="../assets/twitter.png" alt="" />

              Twitter
            </li>
          </a>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const width = document.documentElement.clientWidth;
const isLarge = width > 1920;

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      index: 0,
      classObject: {
        container: !isLarge,
        "container-lg": isLarge,
      },
      swiperOptions: {},
      controlledSwiper: null,
    };
  },
  onCreated() {
    window.addEventListener("resize", () => {
      const width = document.documentElement.clientWidth;
      const isLarge = width > 1920;
      this.classObject = {
        container: !isLarge,
        "container-lg": isLarge,
      };
    });
  },
  methods: {
    setControlledSwiper(swiper) {
      this.controlledSwiper = swiper;
    },
    getActiveIndex: (swiper) => {
      return swiper.activeIndex;
    },
    onSlideChange(swiper, index2) {
      const index = this.getActiveIndex(swiper);
      this.index = index;
    },
    onClick(index) {
      this.controlledSwiper.slideTo(index);
    },
  },
};
</script>

<style lang="postcss" scoped>
.container {
  width: 1180px;
  margin: 0 auto;
}

.container-lg {
  width: 1424px;
  margin: 0 auto;
}

.section1 {
  height: 880px;
  background-color: #f5faf8;
  background-image: url(../assets/pc/section1.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center 511px;
  & .nav {
    width: 1180px;
    padding-top: 69px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & img {
      width: 154px;
      height: 34px;
    }
    & ul {
      display: inline-flex;
      & li {
        font-size: 18px;
        font-weight: 400;
        color: #999999;
        text-align: center;
        margin-right: 20px;
        cursor: pointer;
      }
      & .active {
        color: #be380f;
        padding-bottom: 5px;
        border-bottom: 3px solid #be380f;
      }
    }
  }
  & .container {
    margin-top: 121px;
  }
  & h2 {
    height: 153px;
    font-size: 80px;
    font-weight: 500;
    color: #333333;
    line-height: 90px;
    text-align: center;
    margin-bottom: 63px;
  }
  & p {
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    color: #777777;
    line-height: 32px;
    text-align: center;
  }
  & button {
    width: 243px;
    height: 58px;
    line-height: 58px;
    background: #0a9c58;
    border-radius: 10px;
    color: #ffffff;
    text-align: center;
    appearance: none;
    border: 0;
    font-size: 18px;
    font-weight: 400;
    display: block;
    margin: 0 auto;
    margin-top: 72px;
  }
}

.section2 {
  & .section2-item {
    display: flex;
    margin-top: 83px;
    & .left {
      & .logo {
        width: 21px;
        height: 19px;
      }
      & span {
        height: 15px;
        font-size: 18px;
        font-weight: 800;
        color: #b53d18;
        line-height: 20px;
        margin-left: 10px;
      }
      & h3 {
        width: 460px;
        height: 77px;
        font-size: 38px;
        font-weight: 800;
        color: #333333;
        line-height: 48px;
        margin-top: 35px;
      }
      & p {
        width: 444px;
        height: 42px;
        font-size: 18px;
        font-weight: 400;
        color: #999999;
        line-height: 24px;
        margin-top: 35px;
      }
    }
    & .right {
      flex: 1;
      margin-top: 29px;
      text-align: right;
      & > img {
        width: 456px;
        height: 320px;
        object-fit: cover;
      }
    }
  }
}

.section3 {
  padding-top: 159px;
  height: 890px;
  background: linear-gradient(0deg, #f9fff7, #ffffff);
  & h2 {
    height: 42px;
    font-size: 60px;
    font-weight: bold;
    color: #333333;
    text-align: center;
    & span {
      color: #087a45;
    }
  }
  & .section3-list {
    display: flex;
    margin-top: 111px;
    & .section3-item {
      width: 362px;
      height: 442px;
      background: #ffffff;
      box-shadow: 0px 0px 30px 0px rgba(8, 122, 69, 0.08);
      border-radius: 10px;
      margin-right: 47px;
      padding: 46px;
      & .logo {
        width: 70px;
        height: 70px;
        & img {
          object-fit: contain;
          width: 70px;
          height: 70px;
        }
      }
      & .bd {
        margin-top: 40px;
        margin-bottom: 36px;
        & h3 {
          font-size: 24px;
          font-weight: 800;
          color: #333333;
          line-height: 20px;
          margin-bottom: 36px;
        }
        & ul {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: flex-start;
          & li {
            height: 27px;
            background: rgba(0, 189, 101, 0.1);
            border-radius: 14px;
            padding: 0 20px;
            line-height: 27px;
            text-align: center;
            margin-bottom: 20px;
            font-weight: 400;
            color: #666666;
            font-size: 16px;
          }
        }
      }
    }
    & .section3-item_last {
      margin-right: 0;
    }
  }
}

.section4 {
  display: flex;
  margin-top: 140px;
  & .section4-left {
    flex: 1;
    & h2 {
      font-size: 60px;
      font-weight: bold;
      color: #333333;
      line-height: 90px;
      & span {
        color: #087a45;
      }
    }
    & h3 {
      font-size: 24px;
      font-weight: bold;
      color: #333333;
      line-height: 20px;
      margin-bottom: 48px;
    }
    & .section4-item {
      width: 517px;
      height: 150px;
      background: #fafcfa;
      border-radius: 10px;
      margin-bottom: 28px;
      display: flex;
      align-items: center;
      padding-left: 45px;
      & img {
        width: 64px;
        height: 64px;
        margin-right: 44px;
      }
      & span {
        width: 282px;
        font-size: 18px;
        font-weight: 400;
        color: #999999;
        line-height: 26px;
      }
    }
  }
  & > img {
    width: 527px;
    height: 497px;
    margin-right: 78px;
  }
}

.section5 {
  margin-top: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h2 {
    font-size: 60px;
    font-weight: bold;
    color: #333333;
    line-height: 90px;
    text-align: center;
    & span {
      color: #087a45;
    }
  }
  & > h3 {
    font-size: 18px;
    font-weight: bold;
    color: #999999;
    line-height: 20px;
    text-align: center;
    margin-bottom: 47px;
  }
  & > ul {
    display: inline-flex;
    margin-bottom: 105px;
    & li {
      font-size: 24px;
      font-weight: 800;
      color: rgba(51, 51, 51, 0.2);
      line-height: 20px;
      margin-right: 85px;
      cursor: pointer;
    }
    & li:last-child {
      margin: 0;
    }
    & .active {
      color: #087a45;
      border-bottom: 3px solid #087a45;
      padding-bottom: 10px;
    }
  }
  & .swiper {
    width: 100%;
  }
  & .members {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & .member {
      width: 320px;
      height: 420px;
      background: rgba(246, 247, 250, 0);
      border: 1px solid #eeeeee;
      margin-right: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 48px;
      & img {
        width: 150px;
        height: 150px;
        margin-top: 42px;
        border-radius: 50%;
      }
      & h2 {
        font-size: 24px;
        font-weight: bold;
        color: #333333;
        margin-top: 33px;
        text-align: center;
      }
      & h3 {
        font-size: 18px;
        font-weight: bold;
        color: #087a45;
        margin-top: 24px;
        text-align: center;
        width: 200px;
      }
      & p {
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        line-height: 20px;
        margin-top: 31px;
        text-align: center;
        width: 185px;
      }
    }
    /* & .member:last-child {
      margin-right: 0;
    } */
  }
}

.section6 {
  height: 196px;
  background: rgba(245, 250, 248, 1);
  margin-top: 100px;
  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    & .nav {
      display: inline-flex;
      margin-bottom: 32px;
      & li {
        font-size: 18px;
        font-weight: 400;
        color: #333333;
        text-align: center;
        margin-right: 20px;
        cursor: pointer;
      }
    }
    & .privacy {
      display: flex;
      & li {
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        margin-right: 20px;
      }
    }
    & .joinus {
      & h2 {
        font-size: 24px;
        font-weight: 500;
        color: #333333;
        line-height: 38px;
        margin-bottom: 17px;
      }
      & ul {
        display: flex;
        & li {
          width: 110px;
          height: 40px;
          background: #2ca5e0;
          border-radius: 20px;
          display: flex;
          align-items: center;
          font-size: 12px;
          font-weight: 500;
          color: #ffffff;
          line-height: 32px;
          margin-right: 15px;
          & img {
            width: 20px;
            height: 20px;
            margin-left: 15px;
            margin-right: 7px;
          }
        }
        & li:last-child {
          background: rgba(50, 141, 197, 1);
        }
      }
      & .social {
        & a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>

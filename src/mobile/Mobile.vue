<template>
  <div>
    <div class="section section1">
      <div>
        <img src="../assets/logo.png" alt="" class="logo" />
        <img
          src="../assets/category.png"
          class="category"
          @click="showCategory"
        />
      </div>
      <h2>Africa’s Content Incentive Infrastructure Network</h2>
      <p>
        A blockchain infrastructure that connects the value chain of content
        creation through an incentive consensus mechanism that benefits
        consumers, content producers and platforms in the ecosystem.
      </p>
      <button>Get Early Access</button>
    </div>
    <section class="section section2">
      <div class="section2-item">
        <div class="hd">
          <img src="../assets/works-logo.png" alt="" class="logo" />
          <span>WORKS</span>
        </div>
        <div class="bd">
          <div>
            <h3>Maximize the value of art works</h3>
            <p>
              Connect the African Art & Music Culture to the global market,
              using NFT as the vehicle.
            </p>
          </div>
          <img src="../assets/Works.gif" alt="" class="bd-bg" />
        </div>
      </div>
      <div class="section2-item section2-item2">
        <div class="hd">
          <img src="../assets/skills-logo.png" alt="" class="logo" />
          <span>SKILLS</span>
        </div>
        <div class="bd">
          <div>
            <h3>Improve freelance & gig economy</h3>
            <p>
              Improve freelance & gig economy opportunities to provide Africans
              additional source of income - Improve Adricans’ livelihood through
              the exchange of skills.
            </p>
          </div>
          <img src="../assets/Skills.gif" alt="" class="bd-bg" />
        </div>
      </div>
      <div class="section2-item section2-item3">
        <div class="hd">
          <img src="../assets/attention-logo.png" alt="" class="logo" />
          <span>ATTENTION</span>
        </div>
        <div class="bd">
          <div>
            <h3>Build an engagement incentive infrastructure</h3>
            <p>
              Improve freelance & gig economy opportunities to provide Africans
              additional source of income - Improve Adricans’ livelihood through
              the exchange of skills.
            </p>
          </div>
          <img src="../assets/Attention.gif" alt="" class="bd-bg" />
        </div>
      </div>
    </section>
    <section class="section section3">
      <h2>
        Cassava’s
        <span>Utility Scenario</span>
      </h2>
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
      <div class="section3-item">
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
    </section>
    <section class="section section4">
      <h2>
        Cassava
        <span>NFTs</span>
      </h2>
      <h3>Support the growth of African Artists</h3>
      <img src="../assets/section4.png" alt="" />
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
    </section>
    <section class="section section5">
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
        >
        <swiper-slide>
          <div class="members">
            <div class="member">
              <img src="../assets/obasi.png" alt="" />
              <h2>Obasi Francis Ifegwu</h2>
              <h3>Co-Founder</h3>
              <p>
                co-founder of DeSpace Protocol, raised over $2,000,000 in
                funding.
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
            <div class="member">
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
      <ul class="privacy">
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </ul>
    </section>

    <section class="collapse" v-show="categoryShow">
      <div class="hd">
        <img src="../assets/category-logo.png" alt="" class="logo" />
        <img
          src="../assets/close.png"
          alt=""
          class="close-logo"
          @click="onCollapseClose"
        />
      </div>
      <ul>
        <div>Home</div>
        <div>Pitch Deck</div>
        <div>Whitepaper</div>
        <div>Contact Us</div>
      </ul>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      index: 0,
      swiperOptions: {},
      controlledSwiper: null,
      categoryShow: false,
    };
  },
  methods: {
    onCollapseClose() {
      this.categoryShow = false;
    },
    showCategory() {
      this.categoryShow = true;
    },
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
.collapse {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #46995d;
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  & .hd {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 46px;
    padding-top: 40px;
    & .logo {
      width: 183px;
      height: 40px;
    }
    & .close-logo {
      width: 34px;
      height: 34px;
    }
  }
  & ul {
    height: 534px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & div {
      color: #fff;
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 50px;
    }
  }
}
.section1 {
  width: 750px;
  height: 880px;
  background-color: #f6faf8;
  background-image: url(../assets/section1-img.png);
  background-size: 750px 163px;
  background-repeat: no-repeat;
  background-position: center 636px;
  position: relative;
  & .logo {
    width: 183px;
    height: 40px;
    margin-left: 46px;
    margin-top: 41px;
  }
  & .category {
    width: 36px;
    height: 32px;
    position: absolute;
    right: 46px;
    top: 41px;
  }
  & h2 {
    font-weight: 500;
    color: #333333;
    line-height: 60px;
    font-size: 52px;
    width: 607px;
    margin: 0 auto;
    margin-top: 87px;
    text-align: center;
  }
  & p {
    width: 634px;
    height: 117px;
    font-size: 22px;
    font-weight: bold;
    color: #777777;
    line-height: 32px;
    margin: 0 auto;
    margin-top: 59px;
    text-align: center;
  }
  & button {
    width: 280px;
    height: 68px;
    background: #46995e;
    border-radius: 10px;
    appearance: none;
    border: 0;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
    font-size: 22px;
    margin: 0 auto;
    margin-top: 60px;
    display: block;
  }
}
.section2 {
  & .section2-item {
    margin-top: 88px;
    margin-left: 50px;
    & .hd {
      & .logo {
        width: 21px;
        height: 19px;
      }
      & span {
        height: 17px;
        font-size: 22px;
        font-weight: 800;
        color: #a84526;
        line-height: 20px;
        margin-left: 10px;
      }
    }
    & .bd {
      display: flex;
      margin-top: 15px;
      & h3 {
        width: 329px;
        font-size: 36px;
        font-weight: 800;
        color: #333333;
        line-height: 48px;
        margin-top: 21px;
      }
      & p {
        width: 349px;
        width: 365px;
        font-size: 22px;
        font-weight: 400;
        color: #999999;
        line-height: 32px;
        margin-top: 40px;
      }
      & .bd-bg {
        width: 294.6px;
        height: 206.7px;
        margin-left: 43px;
        object-fit: cover;
      }
    }
  }
  & .section2-item2 {
    & .bd {
      & h3 {
        width: 346px;
      }
      & .bd-bg {
        width: 315px;
        height: 328px;
        margin-left: 21px;
      }
    }
  }
  & .section2-item3 {
    & .bd {
      & h3 {
        width: 397px;
      }
      & .bd-bg {
        width: 247px;
        height: 247px;
        margin-left: 24px;
      }
    }
  }
}
.section3 {
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 940px;
  width: 750px;
  background: linear-gradient(0deg, #fafff8, #ffffff);
  & h2 {
    font-size: 52px;
    font-weight: bold;
    color: #333333;
    line-height: 90px;
    margin-bottom: 73px;
    & span {
      color: #35784a;
    }
  }
  & .section3-item {
    width: 660px;
    background: #ffffff;
    box-shadow: 0px 0px 30px 0px rgba(53, 120, 74, 0.08);
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 47px 0;
    & .logo {
      width: 100px;
      height: 100px;
      background: #f8fcf7;
      border-radius: 10px;
      margin-left: 42px;
      margin-right: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      & img {
        width: 60px;
        height: 60px;
      }
    }
    & .bd {
      flex: 1;
      & h3 {
        font-size: 32px;
        font-weight: 800;
        color: #333333;
        line-height: 38px;
      }
      & ul {
        display: inline-flex;
        flex-wrap: wrap;
        margin-top: 22px;
        & li {
          /* width: 101px; */
          padding: 0 25px;
          height: 38px;
          background: rgba(84, 185, 110, 0.1);
          border-radius: 19px;
          color: #666666;
          font-size: 22px;
          font-weight: 400;
          line-height: 42px;
          text-align: center;
          margin-right: 20px;
          margin-bottom: 14px;
        }
      }
    }
  }
}
.section4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    font-size: 52px;
    font-weight: bold;
    color: #333333;
    line-height: 90px;
    margin-bottom: 35px;
    margin-top: 84px;
    & span {
      color: #35784a;
    }
  }
  & h3 {
    width: 423px;
    height: 23px;
    font-size: 24px;
    font-weight: bold;
    color: #999999;
    line-height: 20px;
    margin-bottom: 74px;
  }
  & img {
    width: 527px;
    height: 497px;
    margin-bottom: 73px;
  }
  & .section4-item {
    width: 660px;
    height: 150px;
    background: #fafcfa;
    border-radius: 10px;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    & img {
      width: 62px;
      height: 62px;
      margin-left: 55px;
      margin-right: 51px;
      margin-top: 70px;
    }
    & span {
      font-size: 22px;
      font-weight: 400;
      color: #999999;
      line-height: 32px;
      width: 405px;
    }
  }
}
.section5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 122px;
  padding-bottom: 90px;
  & > h2 {
    font-size: 52px;
    font-weight: bold;
    color: #35784a;
    line-height: 90px;
    color: #333333;
    & span {
      color: #35784a;
    }
  }
  & > h3 {
    width: 604px;
    font-size: 24px;
    font-weight: bold;
    color: #999999;
    line-height: 32px;
    text-align: center;
    margin-top: 34px;
  }
  & > ul {
    display: inline-flex;
    margin-top: 57px;
    margin-bottom: 41px;
    & li {
      width: 166px;
      font-size: 32px;
      font-weight: 800;
      line-height: 20px;
      color: rgba(51, 51, 51, 0.2);
      text-align: center;
      padding-bottom: 10px;
    }
    & li.active {
      color: #35784a;
      border-bottom: 3px solid #35784a;
    }
    & li:first-child {
      margin-right: 90px;
    }
  }
  & .swiper {
    width: 660px;
  }
  & .members {
    width: 660px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & .member {
      width: 320px;
      height: 420px;
      background: rgba(246, 247, 250, 0);
      border: 1px solid #eeeeee;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      & img {
        width: 150px;
        height: 150px;
        margin-top: 40px;
        border-radius: 50%;
      }
      & h2 {
        width: 273px;
        font-size: 26px;
        font-weight: bold;
        color: #333333;
        margin-top: 31px;
        text-align: center;
        margin-bottom: 13px;
      }
      & h3 {
        width: 224px;
        font-size: 20px;
        font-weight: bold;
        color: #35784a;
        text-align: center;
        margin-bottom: 21px;
      }
      & p {
        width: 242px;
        font-size: 20px;
        font-weight: 400;
        color: #999999;
        line-height: 26px;
        text-align: center;
      }
    }
  }
}
.section6 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  height: 290px;
  background: #f6faf8;
  & h2 {
    width: 297px;
    height: 30px;
    font-size: 32px;
    font-weight: 500;
    color: #333333;
    line-height: 38px;
    margin-top: 43px;
  }
  & .social {
    display: flex;
    margin-top: 58px;
    & a {
      text-decoration: none;
    }
    & li {
      width: 190px;
      height: 70px;
      line-height: 70px;
      background: #50a4db;
      border-radius: 35px;
      color: #fff;
      display: flex;
      align-items: center;
      font-size: 21px;
      font-weight: 500;
      & img {
        width: 36px;
        height: 36px;
        margin-left: 25px;
        margin-right: 17px;
      }
    }
    & li:last-child {
      background: #4a8cc0;
      margin-left: 26px;
    }
  }
  & .privacy {
    display: flex;
    & li {
      /* width: 113px; */
      height: 18px;
      font-size: 18px;
      font-weight: 400;
      color: #999999;
      line-height: 76px;
    }
    & li:last-child {
      margin-left: 60px;
    }
  }
}
</style>

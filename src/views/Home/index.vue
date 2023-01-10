<template>
  <div class="Home">

    <div class="home__banner">
      <div class="container">
        <div class="home__banner-wrapper">
          <div class="banner-content">
            <h1>Мировой лидер</h1>
            <p><span>Partniers & Solutions</span> мировой лидер и еще что-то...</p>
            <router-link class="button" :to="{name: 'contact'}">связаться с нами</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="home__team">
      <div class="container">
        <div class="home__team-wrapper">
          <div class="team-content" v-animate-onscroll="{down : 'toTop'}">
            <h1>Наша команда</h1>
            <p><span>Лучшие специалисты мира</span> будут работать над вашим успехом</p>
            <router-link class="button" :to="{name: 'about'}">Подробнее</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="home__directions">
      <div class="container">
        <div class="home__directions-wrapper">
          <div class="directions-content" v-animate-onscroll="{down : 'toTop'}">
            <h1>Направления</h1>
            <p><span>Все направления</span> которые вам нужны!</p>
            <router-link class="button" :to="{name: 'directions'}">Подробнее</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="home__partniers">
      <div class="container">
        <div class="home__partniers-wrapper">
          <div class="partniers-content" v-animate-onscroll="{down : 'toTop'}">
            <h1>Наши партнеры</h1>
            <p><span>Самые крупные компании</span> такие как SpaceX</p>
            <router-link class="button" :to="{name: 'partniers'}">Подробнее</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home-page'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.toTop {
  margin-bottom: 0 !important;
  opacity: 1 !important;
}
@keyframes toTop {
  0% {}
  100% {
    margin-bottom: 0 ;
    opacity: 1 ;
  }
}
.home {

  &__banner {
    height: 100vh;
    background-image: url('@/assets/home/banner_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    &-wrapper {
      display: flex;
      height: 100vh;
      align-items: center;

      .banner-content {
        max-width: 440px;
        opacity: 0;
        margin-bottom: -100px;
        animation-name: toTop;
        animation-duration: 1.2s;
        animation-fill-mode: forwards;

        @media(max-width: 1139px) {
          max-width: 100%;
          flex: 0 0 100%;
        }

        h1 {
          font-size: 72px;
          font-weight: 900;
          color: $primary;

          @media(max-width: 1139px) {
            font-size: 36px;
          }
        }

        p {
          font-size: 22px;
          font-weight: 700;
          color: $primary;
          margin-top: 20px;
          @media(max-width: 1139px) {
            font-size: 18px;
          }
          
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }

  &__team {
    height: 100vh;
    background-image: url('@/assets/home/team_bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &-wrapper {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .team-content {
        max-width: 440px;
        margin-bottom: -100px;
        opacity: 0;
        transition: 1.2s;
        @media(max-width: 1139px) {
          max-width: 100%;
          flex: 0 0 100%;
        }

        h1 {
          font-size: 72px;
          font-weight: 900;
          color: $primary;

          @media(max-width: 1139px) {
            font-size: 36px;
          }
        }

        p {
          font-size: 22px;
          font-weight: 700;
          color: $primary;
          margin-top: 20px;

          @media(max-width: 1139px) {
            font-size: 18px;
          }
          
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }

  &__directions {
    height: 100vh;
    background-image: url('@/assets/home/directions_bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &-wrapper {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .directions-content {
        max-width: 440px;
        margin-bottom: -100px;
        opacity: 0;
        transition: 1.2s;
        @media(max-width: 1139px) {
          max-width: 100%;
          flex: 0 0 100%;
        }

        h1 {
          font-size: 72px;
          font-weight: 900;
          color: $primary;

          @media(max-width: 1139px) {
            font-size: 36px;
          }
        }

        p {
          font-size: 22px;
          font-weight: 700;
          color: $primary;
          margin-top: 20px;

          @media(max-width: 1139px) {
            font-size: 18px;
          }
          
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }

  &__partniers {
    height: 100vh;
    background-image: url('@/assets/home/partniers_bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0, 0.3);
      z-index: 0;
    }

    &-wrapper {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      z-index: 1;

      .partniers-content {
        max-width: 440px;
        margin-bottom: -100px;
        opacity: 0;
        transition: 1.2s;
        @media(max-width: 1139px) {
          max-width: 100%;
          flex: 0 0 100%;
        }

        h1 {
          font-size: 72px;
          font-weight: 900;
          color: $primary;

          @media(max-width: 1139px) {
            font-size: 36px;
          }
        }

        p {
          font-size: 22px;
          font-weight: 700;
          color: $primary;
          margin-top: 20px;

          @media(max-width: 1139px) {
            font-size: 18px;
          }
          
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="about" id="about">

    <div class="about__content" v-for="i in content" :key="i.id">
      <div class="container">

        <div class="about__content-wrapper">
          <div class="about__content-text" v-animate-onscroll="{down : 'toTop'}">
            <h2>Partners & solutions</h2>
            <p>{{ i.text }}</p>
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="about__team">
        <h1>{{$t('pages.aboutPage.team.title')}}</h1>

        <div class="about__team-content">

          <div class="about__team-card" v-for="person in team" :key="person.id" v-animate-onscroll="{down : 'fromLeft'}">
            <div class="about__team-card_image">
              <img :src="person.img">
            </div>
            <h2 class="about__team-card_name">{{ person.name }}</h2>
            <p class="about__team-card_post">{{ person.post }}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-page',
  data() {
    return {
      content: [
        {
          id: 0,
          text: this.$t('pages.aboutPage.content.txt1')
        },
        {
          id: 1,
          text: this.$t('pages.aboutPage.content.txt2')
        },
        {
          id: 2,
          text: this.$t('pages.aboutPage.content.txt3')
        },
      ],
      team: [
        {
          id: 0,
          name: this.$t('pages.aboutPage.team.name'),
          post: this.$t('pages.aboutPage.team.post'),
          img: require('@/assets/About/team/team.jpg')
        },
        {
          id: 1,
          name: this.$t('pages.aboutPage.team.name'),
          post: this.$t('pages.aboutPage.team.post'),
          img: require('@/assets/About/team/team.jpg')
        },
        {
          id: 2,
          name: this.$t('pages.aboutPage.team.name'),
          post: this.$t('pages.aboutPage.team.post'),
          img: require('@/assets/About/team/team.jpg')
        },
        {
          id: 3,
          name: this.$t('pages.aboutPage.team.name'),
          post: this.$t('pages.aboutPage.team.post'),
          img: require('@/assets/About/team/team.jpg')
        },
        {
          id: 4,
          name: this.$t('pages.aboutPage.team.name'),
          post: this.$t('pages.aboutPage.team.post'),
          img: require('@/assets/About/team/team.jpg')
        },
        {
          id: 5,
          name: this.$t('pages.aboutPage.team.name'),
          post: this.$t('pages.aboutPage.team.post'),
          img: require('@/assets/About/team/team.jpg')
        },
        {
          id: 6,
          name: this.$t('pages.aboutPage.team.name'),
          post: this.$t('pages.aboutPage.team.post'),
          img: require('@/assets/About/team/team.jpg')
        },
        {
          id: 7,
          name: this.$t('pages.aboutPage.team.name'),
          post: this.$t('pages.aboutPage.team.post'),
          img: require('@/assets/About/team/team.jpg')
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@keyframes toTop {
  0%{}
  100%{
    margin-bottom: 0;
    opacity: 1;
  }
}
.toTop {
  margin-bottom: 0 !important;
  opacity: 1 !important;
  transition: .8s;
}
.fromLeft{
  margin-left: 0!important;
  opacity: 1!important;
  transition: .8s;
}

.about {
  padding-bottom: 100px;
  @media(max-width: 719px) {
    padding-bottom: 50px;
  }

  &__content {
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;


    &:nth-child(1) {
      background-image: url('@/assets/About/about_bg1.jpg');

      .about__content-text {
        animation: toTop 1s forwards;
      }
    }

    &:nth-child(2) {
      background-image: url('@/assets/About/about_bg2.jpg');
      position: relative;
      &::before{
        content: '';
        position: absolute;
        top: 0;left: 0;right: 0;bottom: 0;
        background-color: rgba(#000000, .3);
        display: block;
        z-index: 1;
      }

      .about__content-wrapper {
        justify-content: flex-end;
        position: relative;
        z-index: 2;
      }
    }

    &:nth-child(3) {
      background-image: url('@/assets/About/about_bg3.jpg');
      position: relative;
      &::before{
        content: '';
        position: absolute;
        top: 0;left: 0;right: 0;bottom: 0;
        background-color: rgba(#000000, .4);
        display: block;
        z-index: 1;
      }

      .about__content-wrapper {
        position: relative;
        z-index: 2;
      }
    }

    &-wrapper {
      height: 100vh;
      display: flex;
      align-items: center;
    }

    &-text {
      flex: 0 0 440px;
      opacity: 0;
      margin-bottom: -100px;
      animation-fill-mode: forwards;
      animation-duration: .6s;

      @media(max-width: 1139px) {
        max-width: 100%;
        flex: 0 0 100%;
      }

      h2 {
        font-size: 72px;
        font-weight: 900;
        color: $primary;
        @media(max-width: 539px) {
          font-size: 48px;
        }
      }
      p{
        font-size: 22px;
        font-weight: 700;
        color: $primary;
        margin-top: 20px;
        @media(max-width: 539px) {
          font-size: 16px;
        }
      }
    }
  }

  &__team {
    padding-top: 100px;
    @media(max-width: 719px) {
      padding-top: 50px;
    }

    h1 {
      font-size: 72px;
      text-align: center;
      color: $secondary;
      font-weight: 900;
      @media(max-width: 539px) {
        font-size: 32px;
      }
    }

    &-content {
      padding-top: 50px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .about__team-card {
        flex: 0 0 24%;
        border: solid 2px $link-color;
        border-radius: 16px;
        overflow: hidden;
        padding-bottom: 30px;
        margin-bottom: 20px;
        transition: .2s;
        cursor: pointer;
        margin-left: -50px;
        opacity: 0;

        @media(max-width: 1139px) {
          flex: 0 0 49%;
        }
        @media(max-width: 539px) {
          flex: 0 0 100%;
        }

        &:hover {
          box-shadow:  0 15px 20px rgba(0, 0, 0, .2);
        }

        img {
          width: 100%;
        }

        h2 {
          font-size: 32px;
          color: $secondary;
          font-weight: 600;
          text-align: center;
          margin-top: 15px;
        }
        p {
          font-size: 18px;
          font-weight: 400;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="partniers">
    <div class="container">

      <h1 class="title">{{ $t('pages.partniersPage.title') }}</h1>
    
      <div class="partniers__content">

        <div class="partniers__content-card" v-for="i in card" :key="i.id">
          <div class="image">
            <span>{{ i.country }}</span>
            <img :src="i.img" alt="">
          </div>
          <div class="text">
            <h2>{{ i.city }}</h2>
            <p>{{ i.text }}</p>
          </div>
        </div>

      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'partniers-page',
  data() {
    return {
      card: [
        {
          id: 0,
          img: require('@/assets/partniers/moscow.jpg'),
          country: this.$t('pages.partniersPage.content.country1'),
          city: this.$t('pages.partniersPage.content.city1'),
          text: this.$t('pages.partniersPage.content.txt')
        },
        {
          id: 1,
          img: require('@/assets/partniers/dubai.jpg'),
          country: this.$t('pages.partniersPage.content.country2'),
          city:this.$t('pages.partniersPage.content.city2'),
          text: this.$t('pages.partniersPage.content.txt')
        },
        {
          id: 2,
          img: require('@/assets/partniers/pekin.jpg'),
          country: this.$t('pages.partniersPage.content.country3'),
          city:this.$t('pages.partniersPage.content.city3'),
          text: this.$t('pages.partniersPage.content.txt')
        },
        {
          id: 3,
          img: require('@/assets/partniers/moscow.jpg'),
          country: this.$t('pages.partniersPage.content.country1'),
          city: this.$t('pages.partniersPage.content.city1'),
          text: this.$t('pages.partniersPage.content.txt')
        },
        {
          id: 4,
          img: require('@/assets/partniers/dubai.jpg'),
          country: this.$t('pages.partniersPage.content.country2'),
          city:this.$t('pages.partniersPage.content.city2'),
          text: this.$t('pages.partniersPage.content.txt')
        },
        {
          id: 5,
          img: require('@/assets/partniers/pekin.jpg'),
          country: this.$t('pages.partniersPage.content.country3'),
          city:this.$t('pages.partniersPage.content.city3'),
          text: this.$t('pages.partniersPage.content.txt')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@keyframes fromLeft {
  0%{}
  100%{
    left: 0;
    opacity: 1;
  }
}

.partniers {
  min-height: 100vh;
  padding-top: 140px;
  padding-bottom: 50px;

  .title {
    text-align: center;
    font-size: 64px;
    font-weight: 900;
    color: $secondary;
    position: relative;
    left: -100px;
    opacity: 0;
    animation: fromLeft .8s forwards;
    @media(max-width: 959px) {
      font-size: 48px;
    }
    @media(max-width: 539px) {
      font-size: 32px;
    }
  }

  .subtitle {
    font-size: 18px;
    line-height: 150%;
    font-weight: 300;
    text-align: center;
    margin-top: 20px;
    position: relative;
    left: -100px;
    opacity: 0;
    animation: fromLeft .8s forwards;
    animation-delay: .3s;

    @media(max-width: 959px) {
      margin-top: 10px;
      font-size: 18px;
    }
    @media(max-width: 539px) {
      font-size: 16px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &-card {
      flex: 0 0 32%;
      border: solid 1px $link-color;
      border-radius: 16px;
      overflow: hidden;
      transition: .2s;
      cursor: pointer;
      margin-top: 20px;
      position: relative;
      left: -100px;
      opacity: 0;
      animation: fromLeft .7s forwards;
      &:nth-child(1) {
        animation-delay: .5s;
      }
      &:nth-child(2) {
        animation-delay: .55s;
      }
      &:nth-child(3) {
        animation-delay: .6s;
      }
      &:nth-child(4) {
        animation-delay: .65s;
      }
      &:nth-child(5) {
        animation-delay: .7s;
      }
      &:nth-child(6) {
        animation-delay: .75s;
      }

      @media(max-width: 1319px) {
        flex: 0 0 49%;
      }
      @media(max-width: 719px) {
        flex: 0 0 100%;
      }

      &:hover {
        box-shadow:  0 15px 20px rgba(0, 0, 0, .2);
      }
      .image {
        position: relative;

        span {
          position: absolute; 
          display: block;
          top: 15px;
          left: 15px;
          background: $link-color;
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
          padding: 5px 10px;
          border-radius: 12px;
        }

        img {
          width: 100%;
          height: 200px;
        }
      }

      .text {
        padding: 30px;
        text-align-last: left;
        @media(max-width: 719px) {
          padding: 15px;
        }

        h2 {
          color: $secondary;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          font-weight: 300;
          line-height: 130%;
        }
      }
    }
  }
}
</style>
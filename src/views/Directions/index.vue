<template>
  <div class="directions">
    <div class="container">
      <h1>{{$t('pages.directionPage.title')}}</h1>
      <ul>
        <li v-for="i in list" :key="i.id" @click="i.isActive=!i.isActive">
          <img src="@/assets/icons/arrow.svg" :class="{active: i.isActive}">
          <h2>{{ i.title }}</h2>
          <p :class="{active: i.isActive}">{{ i.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'directions-page',
  data() {
    return {
      list: [
        {
          isActive: false,
          id: 0,
          title: this.$t('pages.directionPage.content.title1'),
          text: this.$t('pages.directionPage.content.txt1')
        },
        {
          isActive: false,
          id: 1,
          title: this.$t('pages.directionPage.content.title2'),
          text: this.$t('pages.directionPage.content.txt2')
        },
        {
          isActive: false,
          id: 2,
          title: this.$t('pages.directionPage.content.title3'),
          text: this.$t('pages.directionPage.content.txt3')
        },
        {
          isActive: false,
          id: 3,
          title: this.$t('pages.directionPage.content.title4'),
          text: this.$t('pages.directionPage.content.txt4')
        },
        {
          isActive: false,
          id: 4,
          title: this.$t('pages.directionPage.content.title5'),
          text: this.$t('pages.directionPage.content.txt5')
        },
        {
          isActive: false,
          id: 5,
          title: this.$t('pages.directionPage.content.title6'),
          text: this.$t('pages.directionPage.content.txt6')
        },
        {
          isActive: false,
          id: 6,
          title: this.$t('pages.directionPage.content.title7'),
          text: this.$t('pages.directionPage.content.txt7')
        },
        {
          isActive: false,
          id: 7,
          title: this.$t('pages.directionPage.content.title8'),
          text: this.$t('pages.directionPage.content.txt8')
        },
        {
          isActive: false,
          id: 8,
          title: this.$t('pages.directionPage.content.title9'),
          text: this.$t('pages.directionPage.content.txt9')
        },
        {
          isActive: false,
          id: 9,
          title: this.$t('pages.directionPage.content.title10'),
          text: this.$t('pages.directionPage.content.txt10')
        },
        {
          isActive: false,
          id: 10,
          title: this.$t('pages.directionPage.content.title1'),
          text: this.$t('pages.directionPage.content.txt')
        },
      ],
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
@keyframes fromLeft {
  0%{}
  100%{
    margin-left: 0;
    opacity: 1;
  }
}

.directions {
  min-height: 100vh;
  padding-top: 140px;
  padding-bottom: 20px;
  .container {
    max-width: 920px;
  }

  h1 {
    font-size: 64px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    color: $secondary;
    opacity: 0;
    margin-left: -100px;
    animation: fromLeft 1s forwards;
    @media(max-width: 539px) {
      font-size: 32px;
    }
  }
  ul{
    border-top: 1px solid $secondary;
    margin-top: 20px;
    opacity: 0;
    animation-name: toTop;
    animation-delay: 1s;
    animation-fill-mode: forwards;

    li {
      border-bottom: 1px solid rgba(#000000, .3);
      transition: .3s;
      cursor: pointer;
      padding: 15px 0 0px 40px;
      position: relative;
      opacity: 0;
      margin-left: -100px;
      &:nth-child(1) {
        animation: fromLeft 1s forwards;
        animation-delay: 1.1s;
      }
      &:nth-child(2) {
        animation: fromLeft 1s forwards;
        animation-delay: 1.2s;
      }
      &:nth-child(3) {
        animation: fromLeft 1s forwards;
        animation-delay: 1.3s;
      }
      &:nth-child(4) {
        animation: fromLeft 1s forwards;
        animation-delay: 1.4s;
      }
      &:nth-child(5) {
        animation: fromLeft 1s forwards;
        animation-delay: 1.5s;
      }
      &:nth-child(6) {
        animation: fromLeft 1s forwards;
        animation-delay: 1.6s;
      }
      &:nth-child(7) {
        animation: fromLeft 1s forwards;
        animation-delay: 1.7s;
      }
      &:nth-child(8) {
        animation: fromLeft 1s forwards;
        animation-delay: 1.8s;
      }
      &:nth-child(9) {
        animation: fromLeft 1s forwards;
        animation-delay: 1.9s;
      }
      &:nth-child(10) {
        animation: fromLeft 1s forwards;
        animation-delay: 2s;
      }
      &:nth-child(9) {
        animation: fromLeft 1s forwards;
        animation-delay: 2.1s;
      }


      img {
        position: absolute;
        width: 30px;
        left: 0;
        top: 10px;
        transform:rotate(-90deg);
        transition: .3s;

        &.active {
          transform: rotate(90deg);
        }
      }

      h2 {
        font-size: 22px;
        color: $secondary;
        font-weight: 700;


      }

      p {
        margin-top: 20px;
        font-size: 18px;
        line-height: 150%;
        font-weight: 300;
        font-size: 0;
        transition: .1s;
        

        &.active {
          font-size: 18px;
          padding-bottom: 15px;
        }
      }
    }
  }
}
</style>
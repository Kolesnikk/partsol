<template>
  <div class="partniers">
    <div class="container">

      <h1 class="title">Наши партнеры</h1>
      <p class="subtitle">We are delighted to present some of the achievements and collaborations of COBOD. </p>
    
      <div class="partniers__content">

        <div class="partniers__content-card" v-for="i in card" :key="i.id">
          <div class="image">
            <img :src="i.img" alt="">
          </div>
          <div class="text">
            <h2>{{ i.title }}</h2>
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
          img: require('@/assets/partniers/spacex.jpg'),
          title: 'GENERAL ELECTRIC',
          text: 'GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost.'
        },
        {
          id: 1,
          img: require('@/assets/partniers/spacex.jpg'),
          title: 'GENERAL ELECTRIC',
          text: 'GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost.'
        },
        {
          id: 2,
          img: require('@/assets/partniers/spacex.jpg'),
          title: 'GENERAL ELECTRIC',
          text: 'GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost.'
        },
        {
          id: 0,
          img: require('@/assets/partniers/spacex.jpg'),
          title: 'GENERAL ELECTRIC',
          text: 'GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost.'
        },
        {
          id: 1,
          img: require('@/assets/partniers/spacex.jpg'),
          title: 'GENERAL ELECTRIC',
          text: 'GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost.'
        },
        {
          id: 2,
          img: require('@/assets/partniers/spacex.jpg'),
          title: 'GENERAL ELECTRIC',
          text: 'GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost.'
        }
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
  padding-top: 100px;
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
        img {
          max-width: 100%;
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
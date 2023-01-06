<template>
  <div class="directions">
    <div class="container">
      <h1>Направления компании</h1>
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
          title: 'Образование',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
        },
        {
          isActive: false,
          id: 1,
          title: 'Строительство',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
        },
        {
          isActive: false,
          id: 2,
          title: 'Сельское хозяйство',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
        },
        {
          isActive: false,
          id: 3,
          title: 'Автодорожное хозяйство',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
        },
        {
          isActive: false,
          id: 4,
          title: 'Пищевые добавки',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
        },
        {
          isActive: false,
          id: 5,
          title: 'Логистика',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
        },
        {
          isActive: false,
          id: 6,
          title: 'Ритэил',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
        },
        {
          isActive: false,
          id: 7,
          title: 'Телекоммуникация',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
        },
        {
          isActive: false,
          id: 8,
          title: 'Медицинская клиника',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
        },
        {
          isActive: false,
          id: 9,
          title: 'IT решения',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
        },
        {
          isActive: false,
          id: 10,
          title: 'Благотворительность',
          text: 'The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology.'
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
  padding-top: 100px;
  padding-bottom: 20px;

  .container {
    max-width: 920px;
  }

  h1 {
    font-size: 38px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    color: $secondary;
    opacity: 0;
    margin-left: -100px;
    animation: fromLeft 1s forwards;
    @media(max-width: 959px) {
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
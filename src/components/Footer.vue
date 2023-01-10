<template>
  <footer class="footer">
    <div class="container">

      <div class="footer__content">

        <div class="footer__content-logo">
          <router-link :to="{name: 'home'}">
            <img src="@/assets/icons/footer_logo.svg" alt="logo">
          </router-link>
        </div>

        <div class="footer__content-info">
          <h2>Информация</h2>
          <ul>
            <li v-for="i in info" :key="i.id">
              <router-link :to="{name: i.link}">{{ i.name }}</router-link>
            </li>
          </ul>
        </div>

        <div class="footer__content-contact">
          <h2>Контакты</h2>
          <a href="tel:+998998012666">+998998012666</a>
          <router-link :to="{name: 'contact'}">ОСТАВИТЬ ЗАЯВКУ</router-link>
        </div>

      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-component',
  data() {
    return {
      info: [
        {
          id: 0,
          name: 'О НАС',
          link: 'about'
        },
        {
          id: 1,
          name: 'НАПРАВЛЕНИЯ',
          link: 'directions'
        },
        {
          id: 2,
          name: 'ПАРТНЕРЫ',
          link: 'partniers'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.footer {
  padding: 70px 0;
  background: $secondary;
  

  @media(max-width: 1319px) {
    padding: 50px 0;
  }

  .container {
    max-width: 90%;
    @media(max-width: 959px) {
      max-width: 100%;
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;

    &-logo {
      a{
        color: $primary;
        font-size: 32px;
        font-weight: 900;

        @media(max-width: 1319px) {
          font-size: 28px;
        }

        img {
          width: 150px;
        }
      }

      @media(max-width: 959px) {
        flex: 0 0 100%;
        margin-bottom: 35px;
      }
    }

    &-info {
      margin-left: 150px;
      position: relative;
      padding-left: 40px;

      @media(max-width: 1319px) {
        margin-left: 70px;
      }
      @media(max-width: 959px) {
        flex: 0 0 50%;
        margin-left: 0;
        padding-left: 20px;
      }
      @media(max-width: 719px){
        padding-left: 10px;
      }

      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 1px;
        height: 120%;
        background: #ffffff;
        left: 0;
        top: 0;
      }

      h2 {
        font-size: 24px;
        font-weight: 600;
        color: $primary;
        margin-bottom: 40px;

        @media(max-width: 1319px) {
          font-size: 20px;
        }
        @media(max-width: 719px){
          font-size: 16px;
        }
      }

      ul {
        li {
          a {
            font-size: 20px;
            color: $primary;
            font-weight: 300;
            @media(max-width: 1319px) {
              font-size: 16px;
            }
            @media(max-width: 719px){
              font-size: 14px;
            }

            &:hover {
              color: rgba(#ffff, .5);
            }
          }

          &:not(:last-child) {
            margin-bottom: 20px;
          }
        }
      }
    }

    &-contact {
      margin-left: 150px;
      padding-left: 40px;
      position: relative;
      @media(max-width: 1319px) {
        margin-left: 70px;
      }
      @media(max-width: 959px) {
        flex: 0 0 50%;
        margin-left: 0;
        padding-left: 20px;
      }
      @media(max-width: 719px){
        padding-left: 10px;
      }

      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 1px;
        height: 120%;
        background: #ffffff;
        left: 0;
        top: 0;
      }

      h2 {
        font-size: 24px;
        font-weight: 600;
        color: $primary;
        margin-bottom: 40px;
        @media(max-width: 1319px) {
          font-size: 20px;
        }
        @media(max-width: 719px){
          font-size: 16px;
        }
      }

      a {
        display: block;
        font-size: 20px;
        color: $primary;
        font-weight: 300;
        @media(max-width: 1319px) {
          font-size: 16px;
        }
        @media(max-width: 719px){
          font-size: 14px;
        }

        &:nth-child(1) {
          @media(max-width: 719px){
            font-size: 12px;
          }
        }

        &:not(:last-child) {
          margin-bottom: 20px;
        }

        &:hover {
          color: rgba(#ffff, .5);
        }
      }
    }
  }
}
</style>
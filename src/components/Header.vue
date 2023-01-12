<template>
  <header class="header">
    <div class="container header-container">
      <div class="header__content">
        <div class="header__content-logo">
          <router-link :to="{name: 'home'}">
            <img src="@/assets/icons/header_logo.svg" alt="logo">
          </router-link>
        </div>
        
        <div class="header__right">

        <div class="header__content-nav">
          <ul class="nav__menu" :class="{active: isActive}">
            <li v-for="i in menu" :key="i.id" @click="isActive=false">
              <router-link :to="{name: i.path}" active-class="active-link" @click="isActive=false">{{i.name}}</router-link>
            </li>
          </ul>
        </div>

        <div class="language">
          <button @click="changeLanguage('ru')" :class="{activeLang : activeRu}">Ru</button>
          <button @click="changeLanguage('en')" :class="{activeLang : activeEn}">En</button>
        </div>

        <button class="hamburger" @click="isActive=!isActive">
          <span></span>
        </button>

        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-component',
  data() {
    return {
      menu: [
        {
          name: this.$t('component.header.nav.about'),
          path: 'about',
          id: 0
        },
        {
          name: this.$t('component.header.nav.directions'),
          path: 'directions',
          id: 1
        },
        {
          name: this.$t('component.header.nav.representative'),
          path: 'partniers',
          id: 2
        },
        {
          name: this.$t('component.header.nav.contact'),
          path: 'contact',
          id: 3
        }
      ],
      isActive: false,
      activeRu: this.$i18n.locale == 'ru' ? true : false,
      activeEn: this.$i18n.locale == 'en' ? true : false
    }
  },
  methods: {
    changeLanguage(language) {
      localStorage.setItem("lang", language)
      window.location.reload()
      this.$forceUpdate()
    }
  },
  created() {
    if(localStorage.getItem('lang') == null) {
      localStorage.setItem('lang', 'en')
    }
    this.language = localStorage.getItem('lang')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@keyframes Header {
  0%{}
  100% {
    top: 0;
  }
}
.active-link {
  color: $link-color !important;
}

.header {
  position: fixed;
  z-index: 10;
  top: -100%;
  left: 0;
  right: 0;
  background: #ffffff;
  padding: 20px 0;
  border-bottom: solid 1px rgba(#000, .3);
  animation-name: Header;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  &__right {
    display: flex;
    align-items: center;
    
    .language {
      margin-left: 50px;
      display: flex;
      align-items: center;
      @media(max-width: 860px) {
        margin-right: 20px;
      }
      position: relative;
      z-index: 16;
      .activeLang {
        color: white;
        background: $link-color;
      }
      button {
        background: transparent;
        font-size: 14px;
        font-weight: 400;
        height: 30px;
        width: 40px;
        background: rgb(228, 228, 228);
        color: rgb(148, 148, 148);
        transition: .2s;
        
        &:hover {
          background: $link-color;
          color: white;
        }
      }
      
    }
  }
  @media(max-width: 719px) {
    padding: 10px 0;
  }

  .header-container {
    max-width: 90%;
    @media(max-width: 959px) {
      max-width: 100%;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    &-logo {

      a {
        color: $secondary;
        font-size: 32px;
        font-weight: 900;
        transition: .2s;
        z-index: 2;
        position: relative;

        &:hover {
          color: $link-color;
        } 

        img {
          width: 60px;
        }
      }
    }

    .hamburger {
      display: none;
      position: relative;
      width: 20px;
      height: 16px;
      background: transparent;
      position: relative;
      z-index: 2;

      &::before,&::after{
        content:'';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background: $secondary;
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
      span {
        position: absolute;
        height: 2px;
        width: 100%;
        display: block;
        background: $secondary;
        top: 50%;
        transform: translateY(-50%);
      }

      @media(max-width: 860px) {
        display: block;
      }
    }
  
    &-nav {
      transition: .2s;
      .nav__menu {
        display: flex;
        transition: .2s;

        @media(max-width: 860px){
          background: #ffffff;
          position: fixed;
          left: 0;
          right: 0;
          height: 100vh; 
          top: -100%;
          display: block;
          overflow: hidden;
          z-index: 1;
          padding-top: 100px;
          padding-left: 20px;
        }

        &.active {
          top: 0;
        }

        li {

          &:not(:last-child) {
            margin-right: 50px;

            @media(max-width: 1139px) {
              margin-right: 30px;
            }
            @media(max-width: 860px) {
              margin-right: 0;
              margin-bottom: 20px;
            }
          }

          a {
            font-size: 20px;
            text-transform: uppercase;
            font-weight: 600;
            color: $secondary;
            transition: .2s;

            @media(max-width: 1139px) {
              font-size: 16px;
            }
            @media(max-width: 719px) {
              font-size: 16px;
              color: $secondary;
              text-transform: none;
            }

            &:hover {
              color: $link-color;
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="contact">
    <div class="container">
      <h1 class="title">Связаться с нами</h1>

      <div class="contact__content">

        <div class="contact__content-left">

          <div class="contact__content-left-wrapper">
            <div class="phone">
              <h2 class="subtitle">Контактные номера</h2>
              <p class="text">Наш колл центр</p>
              <a class="link" href="tel:+998998012666">+998998012666</a>
            </div>

            <div class="socials">
              <h2 class="subtitle">Наши соц сети</h2>
              <a class="link" href="https://t.me/D_ramir" target="_blunk">Telegram: @D_ramir</a>
              <a class="link" href="https://t.me/D_ramir" target="_blunk">Telegram: @Success</a>
            </div>
          </div>

          <div class="location">
            <h2 class="subtitle">Наше местоположение</h2>
            <iframe class="loc" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.8721134273706!2d69.24585928156722!3d41.336174854713924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7c31d8bde5%3A0xab8867170443354b!2zNiBTaGltb2xpeSBPbG1hem9yIFN0ci4sIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1672775310572!5m2!1sru!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <form action="" class="form">
          <label for="name">
            <span>Имя</span>
            <input type="text" id="name" placeholder="Рамир">
          </label>

          <label for="email">
            <span>Email</span>
            <input type="email" id="email" placeholder="example@gmail.com">
          </label>
          

          <label for="phone">
            <span>Номер телефона</span> 
            <input type="text" id="phone" placeholder="+998998012666">
          </label>
          

          <label for="country">
            <span>Страна</span> 
            <input type="text" id="country" placeholder="Узбекистан">
          </label>
          

          <label for="city">
            <span>Город</span> 
            <input type="text" id="city" placeholder="Ташкент">
          </label>
          

          <label for="company-name">
            <span>Название компании</span> 
            <input type="text" id="company-name" placeholder="spaceX">
          </label>

          <button type="submit" class="submit">Оставить заявку</button>
          
        </form>
      
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'contact-page'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.contact {
  min-height: 100vh;
  padding-top: 100px;

  .container {
    max-width: 920px;
  }

  .title{
    font-size: 64px;
    font-weight: 900;
    text-align: center;
    color: $secondary;
    @media(max-width: 820px) {
      font-size: 32px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    flex-wrap: wrap-reverse;

    .form {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 40%;
      @media(max-width: 820px) {
        flex: 0 0 100%;
      }

      .submit {
        width: 100%;
        font-size: 18px;
        background: $link-color;
        color: $primary;
        font-weight: 600;
        @media(max-width: 820px) {
          margin-top: 20px;
          padding: 15px 0;
        }
      }

      label {
        width: 100%;
        @media(max-width: 820px) {
          margin-top: 20px;
        }
        
        span {
          display: block;
          font-size: 18px;
          margin-bottom: 5px;
          font-weight: 600;
          color: $secondary;
        }
      }
    

      input {
        background: rgb(238, 238, 238);
        height: 40px;
        flex: 0 0 100%;
        font-size: 16px;
        padding: 0 15px;
        color: $link-color;
        border-top: solid 1px rgb(238, 238, 238);
        width: 100%;

        &:focus {
          border-top: solid 1px $link-color;
        }
      }
    }

    &-left {
      flex: 0 0 45%;
      
      @media(max-width: 820px) {
        flex: 0 0 100%;
        margin-top: 50px;
      }

      &-wrapper {
        @media(max-width: 820px) {
          display: flex;
          justify-content: space-between;
        }
        div {
          @media(max-width: 820px) {
            margin-bottom: 50px;
            flex: 0 0 50%;
          }

        }
      }
      .subtitle {
        font-size: 22px;
        font-weight: 600;
        color: $secondary;
        margin-bottom: 10px;
      }
      .text {
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 10px;
      }

      .link {
        font-size: 16px;
        font-weight: 300;
        color: $link-color;
        display: block;
        margin-bottom: 10px;

        &:hover {
          text-decoration: underline;
        }
      }

      .location {
        margin-bottom: 20px;
        
        h2 {
          @media(max-width: 820px) {
            text-align: center;
          }
        }

        .loc {
          @media(max-width: 820px) {
            width: 100%;
            height: 400px;
          }
          
        }
      }
    }
  }
}
</style>
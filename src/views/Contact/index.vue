<template>
  <div class="contact">
    <div class="container">
      <h1 class="title">{{$t('pages.contactPage.title')}}</h1>

      <div class="contact__content">

        <div class="contact__content-left">

          <div class="contact__content-left-wrapper">
            <div class="phone">
              <h2 class="subtitle">{{ $t('pages.contactPage.info.title1') }}</h2>
              <a class="link" href="tel:+998994766272">+998 (99) 476-62-72</a>
              <a class="link" href="tel:+998909190605">+998 (90) 919-06-05</a>
            </div>

            <div class="socials">
              <h2 class="subtitle">{{ $t('pages.contactPage.info.title2') }}</h2>
              <a class="link" href="https://t.me/D_ramir" target="_blunk">Telegram: @D_ramir</a>
              <a class="link" href="https://t.me/D_ramir" target="_blunk">Telegram: @Success</a>
            </div>
          </div>

          <div class="location">
            <h2 class="subtitle">{{ $t('pages.contactPage.info.title3') }}</h2>
            <iframe class="loc" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.8721134273706!2d69.24585928156722!3d41.336174854713924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7c31d8bde5%3A0xab8867170443354b!2zNiBTaGltb2xpeSBPbG1hem9yIFN0ci4sIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1672775310572!5m2!1sru!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <form action="" class="form">
          <label for="name">
            <span>{{ $t('pages.contactPage.form.name.label') }}</span>
            <input type="text" id="name" :placeholder="$t('pages.contactPage.form.name.label')">
          </label>

          <label for="email">
            <span>{{ $t('pages.contactPage.form.email.label') }}</span>
            <input type="email" id="email" :placeholder="$t('pages.contactPage.form.email.label')">
          </label>
          

          <label for="phone">
            <span>{{ $t('pages.contactPage.form.number.label') }}</span> 
            <input type="text" id="phone" :placeholder="$t('pages.contactPage.form.number.label')">
          </label>
          

          <label for="country">
            <span>{{ $t('pages.contactPage.form.country.label') }}</span> 
            <input type="text" id="country" :placeholder="$t('pages.contactPage.form.country.label')">
          </label>
          

          <label for="city">
            <span>{{ $t('pages.contactPage.form.city.label') }}</span> 
            <input type="text" id="city" :placeholder="$t('pages.contactPage.form.city.label')">
          </label>
          

          <label for="company-name">
            <span>{{ $t('pages.contactPage.form.company.label') }}</span> 
            <input type="text" id="company-name" :placeholder="$t('pages.contactPage.form.company.label')">
          </label>

          <button type="submit" class="submit">{{$t('button.confirm')}}</button>
          
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
  padding-top: 140px;

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
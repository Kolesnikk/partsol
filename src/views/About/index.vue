<template>
  <div class="about" id="about">
    <div class="container">

      <h1>MISSION & VISION</h1>

      <div class="about__mission">
        <h2 class="title">OUR MISSION</h2>
        <p class="text"><b>Our mission is to build smarter through multifunctional construction robots based on 3D printing technology.</b> We constantly improve printing speed, efficiency, labor need, and material cost to challenge conventional construction.</p>
      </div>

      <div class="about__vision">
        <h2 class="title">OUR VISION</h2>
        <p class="text"><b>Our vision is to automate minimum 50% of construction processes on building sites around the world</b>With our future printer systems, the printers can hardly be called just printers anymore – they will be multifunctional construction robots. Right now, we are working with the first movers. We are ahead of tomorrow’s norms and the big volume market. However, we will democratize 3D construction, making it accessible to all. Maturing technology and lowering risk – selling 3D robotics & automation solutions beyond first-movers and entrepreneurs.</p>
      </div>

      <div class="about__position">
        <h2 class="title">BRAND POSITION</h2>
        <p class="text"><b>The world leader in 3D construction printing solutions.</b></p>

        <ul class="list">
          <li v-for="i in list" :key="i">
            {{ i }}
          </li>
        </ul>
      </div>

      <div class="image">
        <img src="@/assets/home/partniers_bg.jpg" alt="">
      </div>

      <div class="about__strategy">
        <h2 class="title">STRATEGY</h2>
        <p class="text"><b>First! And continuously improving.</b></p>
        <p class="text">We conduct extensive research, development, and collaboration with the globally leading academic institutions, material suppliers, and the most demanding customers in the industry. We constantly push the limits of applications, size, speed, and automation by taking on new challenges in construction. We expand our architecture, design, engineering, and construction competencies to support our clients in executing state-of-the-art automated and printed construction projects.</p>
        <p class="text">We work based on open-source both for software and materials, and we welcome any chance we can to cooperate on making better solutions.</p>
        <p class="text">We deliver a high-quality modular system, which is future-proof for retrofit, expansion, innovation, and robotics.</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'about-page',
  data() {
    return {
      list: [
        'Leading in VOLUME with most printers sold globally. The total of COBOD printers will reach 100 next year.',
        'Leading in APPLICATIONS from residential and commercial buildings to wind turbine towers.',
        'Leading in TECHNOLOGY with unsurpassed hard- and software solutions facilitating the fastest and tallest construction of multi-story buildings.',
        'Leading in COST based on the game-changing D.fab solution, reducing the cost of 3D printable materials with 90% vs. industry standards.'
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@keyframes fromLeft {
  0%{}
  100%{
    margin-left: 0;
    opacity: 1;
  }
}
@keyframes fromRight {
  0%{}
  100%{
    left: 0px;
    opacity: 1;
  }
}
.about {
  padding: 100px 0 50px 0;
  min-height: 100vh;

  .container {
    max-width: 920px;
  }


  .title {
    font-size: 48px;
    font-weight: 700;
    color: $secondary;
    padding-top: 40px;
    opacity: 0;
    margin-left: -100px;
    animation: fromLeft 1s forwards;
    animation-delay: .3s;
    
    @media(max-width: 1139px) {
      font-size: 36px;
    }
    @media(max-width: 719px) {
      font-size: 32px;
    }
  }
  .text {
    position: relative;
    font-size: 20px;
    margin-top: 20px;
    font-weight: 300;
    line-height: 150%;
    opacity: 0;
    left: 100px;
    animation: fromRight 1s forwards;
    animation-delay: .5s;

    @media(max-width: 1139px) {
      font-size: 18px;
      margin-top: 10px;
    }
  }

  h1 {
    font-size: 72px;
    color: $secondary;
    font-weight: 900;
    opacity: 0;
    margin-left: -100px;
    animation: fromLeft 1s forwards;
    @media(max-width: 1139px) {
      font-size: 64px;
    }
    @media(max-width: 719px) {
      font-size: 36px;
    }
  }

  .list {
    margin-top: 20px;
    opacity: 0;
    margin-left: -100px;
    animation: fromLeft 1s forwards;
    animation-delay: .3s;

    li {
      padding-left: 15px;
      position: relative;
      font-size: 20px;
      font-weight: 300;
      line-height: 150%;
      

      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        background: $link-color;
        border-radius: 50%;
      }
    }
  }

  .image {
    margin-top: 20px;
    text-align: center;

    img {
      width: 100%;
    }
  }
}
</style>
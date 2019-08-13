<template>
    <div id=mainCarousel>
        <carousel-3d autoplay="true" width="700" height="350" controls-visible="true">
            <slide class="carouselSlide" :index="0">
                <!-- Slide 1 Content -->
            </slide>
            <slide class="carouselSlide" :index="1">
                <!-- Slide 2 Content -->
            </slide>
            <slide class="carouselSlide" :index="2">
                <!-- Slide 3 Content -->
            </slide>
        </carousel-3d>
    </div>
</template>

<style>
#mainCarousel{
    margin-top: 100px;
    text-align: center;
    justify-content: center;
    padding: 10px;
}

.carouselSlide{
    box-shadow: 0 8px 12px 0 rgba(0,0,0,.2);
    background-image: linear-gradient(120deg, #9f2fb6, #159957);
}

</style>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d';

export default {
  name: 'postPreview',
  props: {
  },

  components: {
    Carousel3d,
    Slide
  },

  data: function () {
    return {
    }
  },

  methods : {
  }

}
</script>
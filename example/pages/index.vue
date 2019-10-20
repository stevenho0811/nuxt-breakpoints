<template>
  <div class="container">
    <div class="demo-info">
      <div v-for="info in Object.keys($breakpoints)" :key="info">
        <span>{{ info }}:</span>
        <span>{{ $breakpoints[info] }}</span>
      </div>
    </div>
    <div class="demo-box" :style="bgStyle">
      <div class="demo-content">
        <h1>{{ $breakpoints.current }}</h1>
        <h2>{{ $breakpoints.width }}px</h2>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @todo todo example.
 */

export default {
  computed: {
    bgStyle () {
      let backgroundColor = '#fff'
      switch (this.$breakpoints.current) {
        case 'xs':
          backgroundColor = '#B0B1B0'
          break
        case 'sm':
          backgroundColor = '#FF8754'
          break
        case 'md':
          backgroundColor = '#FFD338'
          break
        case 'lg':
          backgroundColor = '#5CD8FF'
          break
        case 'xl':
          backgroundColor = '#FF406E'
          break
        default:
          backgroundColor = '#fff'
          break
      }
      return { backgroundColor }
    }
  },
  async mounted () {
    // document.querySelector('#__nuxt').style.margin = '0 auto'
    const anime = await import('animejs')

    // Create a timeline with default parameters
    anime.default({
      targets: 'body',
      easing: 'easeInOutCubic',
      loop: true,
      direction: 'alternate',
      duration: 10000,
      width: '100%'
    })
  }
}
</script>

<style lang="scss">
body {
  width: 200px;
  margin: 0 auto;
  overflow: hidden;
  color: white;
  background: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.container {
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
}

.demo-box {
  transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0 1px 2px rgba(255, 255, 255, 0.07),
    0 2px 4px rgba(255, 255, 255, 0.07), 0 4px 8px rgba(255, 255, 255, 0.07),
    0 8px 16px rgba(255, 255, 255, 0.07), 0 16px 32px rgba(255, 255, 255, 0.07),
    0 32px 64px rgba(255, 255, 255, 0.07);
  width: 100%;
  height: 100%;
  text-align: center;
}

.demo-content {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  text-align: center;
  > h1 {
    font-weight: 700;
  }
}

.demo-info {
  position: fixed;
  top: 0;
  right: 0;
  font-family: monospace;
  background: rgba(200, 200, 200, 0.07);
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}
</style>

<template>
  <CFooter :fixed="false">
    <div>
      <!-- <a href="https://coreui.io" target="_blank">CoreUI</a> -->
      <!-- <span class="ml-1">&copy; {{new Date().getFullYear()}} Watt Solar Evaluaciones.</span> -->
      <span class="ml-1">&copy; {{new Date().getFullYear()}} Mayoristas Solar Evaluaciones.</span>

    </div>
    <div class="ml-auto">
      <span class="mr-1">Pag. </span>
      <!-- <a href="https://www.grupowattsolar.com/" target="_blank">Watt Solar</a> -->
      <a href="https://mayoristapanelessolares.com/" target="_blank">Mayorista Paneles Solares</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

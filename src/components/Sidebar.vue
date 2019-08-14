<template>
  <div id='mainSidebar'>
  <!-- <div>
    {{this.thoughtsList[0].data.title}}
  </div> -->
  <b-message class='sidebarItem' title="Danger" type="is-danger" aria-close-label="Close message">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
  </b-message>
  
  <div class="sidebarItem">
  <img src='https://via.placeholder.com/500' />
  </div>

  <b-message class='sidebarItem' size="is-medium">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
  </b-message>

  </div>
</template>

<script>

export default {
  name: 'mainSidebar',
  // components: {
  // },
  // props: {thoughtsList : Array},

}

</script>

<style>
#mainSidebar{
  padding: 10px;
}

.message {
  border-radius: 0 0 0 0px !important;
}

.message-body{
  border-radius: 0 0 0 0px !important;
  border-top-left-radius: 0px !important;
}

.sidebarItem{
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.2);
  margin: 10px;
}

.message-header{
  border-radius: 0px 0px 0px 0px !important;
  /* border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important; */
}
</style>
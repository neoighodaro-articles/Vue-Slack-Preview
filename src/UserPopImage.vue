<template>
	<div class="inline" v-if="user">
	    <a href="#" class="user-pop" v-on:mouseover="hover" v-on:mouseout="hoverOut">
       <div class="col-md-12" :class="[this.className]" :style="{backgroundImage:'url('+user.profile.profile_image+')'}"></div>
      </a>
	    <div class="user-popover" v-if="showPopup" transition="fade" v-on:mouseover="hoverInfo" v-on:mouseout="hoverOutInfo">
	    	<div class="user-popover--img" v-bind:style="{ backgroundImage: 'url('+user.profile.profile_image+')' }">
	    		<h3 class="img-inner">{{ user.name }}</h3>
	    	</div>
	    	<div class="col-md-12">
	    		<p>{{ user.username }}</p>
	    	</div>
	    	<div class="col-md-12" v-if="user.email">
	    		<p>{{ user.email }}</p>
	    	</div>
	    </div>
	  </div>
</template>
<script>
export default {
  props: ['user','className'],
  data: function () {
    return {
			showPopup: false,
			timer: '',
			isInInfo: false
    }
  },
  
  methods: {
	hover: function()
    {
      let vm = this;
      this.timer = setTimeout(function() {
        vm.showPopover();
      }, 600);
    },

    hoverOut: function()
    {
      let vm = this;
      clearTimeout(vm.timer);
      this.timer = setTimeout(function() {
        if(!vm.isInInfo)
        {
          vm.closePopover();
        }
      }, 200);
    },

    hoverInfo: function()
    {
      this.isInInfo = true;
    },
    
    hoverOutInfo: function()
    {
      this.isInInfo = false;
      this.hoverOut();
    },

    showPopover: function()
    {
      this.showPopup = true;
    },

    closePopover: function()
    {
      this.showPopup = false;
    }
   }
}
</script>
<style>
</style>
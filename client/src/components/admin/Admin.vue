<template>
  <div class="admin">
    <div>
      <Navbar></Navbar>
    </div>
    <h1>ADMIN SITE</h1>
    <!-- <v-container>
         <v-btn
          color="blue-grey"
          class="mr-4"
        >
          Campaign
        </v-btn>
        <v-btn
          color="success"
          class="mr-4"
        >
          บอร์ดหลักธรรม
        </v-btn>
        <v-btn
          color="success"
          class="mr-4"
        >
          บอร์ดประชาสัมพันธ์
        </v-btn>
        <v-btn
          color="success"
          class="mr-4"
        >
          Logout
        </v-btn>
    </v-container> -->
    <!-- <v-container >
                <div id="grid-container">
                    <v-btn style="margin:3%; background-color:#4895ef ;" color="success" to = "/admin/listcampaign">Campaign</v-btn>
                    <v-btn style="margin:3%; background-color:#4895ef ;" color="success" to = "/admin/listdoctrine">บอร์ดหลักธรรม</v-btn>
                    <v-btn style="margin:3%; background-color:#4895ef ;" color="primary" to = "/admin/listnews">บอร์ดประชาสัมพันธ์</v-btn>
                </div>

           >
        </v-container>    -->

    <v-container >
      <v-row>
        <!-- <v-col cols="12" sm="2"  >
            
        </v-col> -->
      
        <v-col cols="12"   sm="12" md="6">
          <v-btn block style="margin:3%; float:right;" color="primary" to = "/admin/listcampaign">Campaign</v-btn>    
        </v-col>
      
        <v-col cols="12" sm="12" md="6">
          <v-btn block style="margin:3%; " color="primary" to = "/admin/listnews">บอร์ดข่าวประชาสัมพันธ์</v-btn>
        </v-col>
      
        <v-col cols="12"   sm="12" md="6">
          <v-btn block style="margin:3%; float:right;" color="primary" to = "/admin/listdoctrine">บอร์ดหลักธรรม</v-btn>
        </v-col>

        <v-col cols="12"   sm="12" md="6">
          <v-btn block v-on:click="sign_out()" style="margin:3%; " color="error">Logout</v-btn>
        </v-col>

        
            
        

      </v-row>
      
    </v-container> 


    
  </div>
</template>

<script>
const Navbar = () => import('@/components/navbar/navbar')
export default {
  name: 'Admin',
  components:{
    Navbar
  },
  methods: {
    async sign_out () {
      localStorage.removeItem('admin_token')
      this.$store.dispatch('AdminLoggedOut')
			await this.$router.push('/home')
		}
    }
}
</script>

<template>
  <div class='ListCampaign'>
    <div>
      <Navbar></Navbar>
    </div>
    <h1>This is add campaign page.</h1>
    <div id ='headaddnews'>
        <div class="text-center">
          
            <v-btn rounded color="primary" dark to = "/admin/addCampaign">Add CAMPAIGN</v-btn>
  
            <!-- <v-btn rounded color="primary"  to = "/addnews" >Add NEWS</v-btn> -->
        </div>
    </div>
    <v-container>
      <v-simple-table >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Editor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="item in desserts"  :key="item.name">
                <td>{{ item.name }}</td>
                <td>
                  
                    <v-btn style="margin-left:5%; margin-top:3%; margin-bottom:3%;" class="ma-2"  color="purple" to = "/admin/editCampaign"  dark><v-icon dark>mdi-wrench</v-icon></v-btn>
                    <v-btn style="margin-left:5%; margin-top:3%; margin-bottom:3%;"><v-icon>{{ icons.mdiDelete }}</v-icon></v-btn>
                  
                </td>
                <!-- <td>{{ item.calories }}</td> -->
              </tr>
            </tbody>
          </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
const Navbar = () => import('@/components/navbar/navbar')
import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'

  export default {
    data: () => ({
      desserts: [
        {
          name: 'Frozen Yogurt',
          
        
        },
         {
           name: 'Ice cream sandwich',
       
         },
        
      ],
      headers: [
        {
          text: 'Name',
          
          align: 'start',
          sortable: false,
          value: 'name',
        },
        
      ],
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete,
      },
    }),
    components:{
      Navbar
    }
  }
</script>

<style>
    #table{
        text-align: left;
        
    }
    #headaddnews{
        margin: 3%;
    }
    
</style>

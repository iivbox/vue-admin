<template>
  <div>
    <BasicTable/>
    <OperateTable/>
    <DataDisplay/>
    <SimpleFooter/>
    <BasicSteps/>
    <SimpleLogin/>
    <BasicNotFound/>
    <StackedLineChart/>
    <Doughnut/>
    <SimpleForm/>
  </div>
</template>

<script>
  import BasicTable from './components/BasicTable'
  import OperateTable from './components/OperateTable'
  import DataDisplay from './components/DataDisplay'
  import SimpleFooter from './components/SimpleFooter'
  import BasicSteps from './components/BasicSteps'
  import SimpleLogin from './components/SimpleLogin'
  import BasicNotFound from './components/BasicNotFound'
  import StackedLineChart from './components/StackedLineChart'
  import Doughnut from './components/Doughnut'
  import SimpleForm from './components/SimpleForm'
  
  export default {
    data() {
      return {

      }
    },
    components: { BasicTable, OperateTable, DataDisplay, SimpleFooter, BasicSteps, SimpleLogin, BasicNotFound, StackedLineChart, Doughnut, SimpleForm }
  }
</script>

<style>

</style>


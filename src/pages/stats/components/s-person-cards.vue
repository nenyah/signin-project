<template>
    <sign-list v-if="activeIndex===0" :sign-records="signRecords"/>
    <no-sign-list v-else-if="activeIndex===1" :not-sign-records="notSignRecords"/>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import SignList from '@/pages/stats/components/SignList.vue'
import NoSignList from './no-sign-list.vue'

@Component({
    components: {NoSignList, SignList}
})
export default class SPersonCards extends Vue {
    @Prop() private activeIndex!: number
}
</script>


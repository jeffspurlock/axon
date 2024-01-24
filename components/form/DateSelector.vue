<script setup lang="ts">
import type { ModelRef } from 'vue';
</script>

<script lang="ts">
class FullDate {
    month: number | undefined
    day: number | undefined
    year: number | undefined
    hours: number | undefined
    minutes: number | undefined
    seconds: number | undefined
    milliseconds: number | undefined

    constructor() {
        let date = new Date(Date.now())
        this.month = date.getMonth()
        this.day = date.getDate()
        this.year = date.getFullYear()
        this.hours = date.getHours()
        this.minutes = date.getMinutes()
        this.seconds = 0
        this.milliseconds = 0
    }
}
const date = new FullDate()
const model: ModelRef<FullDate | undefined> = defineModel()
model.value = date
</script>

<template>
    <div>
        <p>test</p>
        <FormValueChanger>
            <FormMonthSelector v-model="model?.month" :month="date.month" />
        </FormValueChanger>
        <FormValueChanger>
            <FormDaySelector v-model="model?.day" :day="date.day" />
        </FormValueChanger>
        <FormValueChanger>
            <FormHourSelector v-model="model?.hours" :hours="date.hours" />
        </FormValueChanger>
        <FormValueChanger>
            <FormMinutesSelector v-model="model?.minutes" :minutes="date.minutes" />
        </FormValueChanger>
    </div>
</template>
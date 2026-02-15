<script setup>
import { reactive } from 'vue'

const camel = defineModel('camel')
const capitalize = defineModel('capitalize')
const flat = defineModel('flat')
const kebab = defineModel('kebab')
const lower = defineModel('lower')
const pad = defineModel('pad')
const pascal = defineModel('pascal')
const repeat = defineModel('repeat')
const replace = defineModel('replace')
const snake = defineModel('snake')
const title = defineModel('title')
const train = defineModel('train')
const truncate = defineModel('truncate')
const upper = defineModel('upper')
const modifiers = reactive({
  camel: {
    numbers: false,
    lower: false
  },
  capitalize: {
    lower: false
  },
  flat: {
    numbers: false
  },
  kebab: {
    numbers: false
  },
  lower: {
    first: false
  },
  pad: {
    count: 10,
    chars: '_',
    start: false,
    end: false
  },
  pascal: {
    numbers: false,
    lower: false
  },
  repeat: {
    count: 5,
    string: '-'
  },
  replace: {
    regexp: '[0-9]',
    flags: 'g',
    string: '-'
  },
  snake: {
    numbers: false
  },
  title: {
    lower: false
  },
  train: {
    numbers: false,
    lower: false
  },
  truncate: {
    count: 3,
    omission: '...'
  },
  upper: {
    first: false,
    every: false
  }
})
</script>

<template lang="pug">
  main(role="main")
    article.container-xxl(role="article")
      form.mt-5(@submit.prevent="")
        h2.mb-3 Word case
        .row.mb-3
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Camel case]
              input.form-control(
                type="text"
                v-model="camel"
                v-camel="modifiers.camel"
              )
            .mb-3
              .form-check.form-check-inline
                input.form-check-input#camel-numbers(
                  type="checkbox"
                  v-model="modifiers.camel.numbers"
                )
                label.form-check-label(for="camel-numbers") Numbers
              .form-check.form-check-inline
                input.form-check-input#camel-lower(
                  type="checkbox"
                  v-model="modifiers.camel.lower"
                )
                label.form-check-label(for="camel-lower") Lower
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Flat case]
              input.form-control(
                type="text"
                v-model="flat"
                v-flat="modifiers.flat"
              )
            .mb-3.form-check.form-check-inline
              input.form-check-input#flat-numbers(
                type="checkbox"
                v-model="modifiers.flat.numbers"
              )
              label.form-check-label(for="flat-numbers") Numbers
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Kebab case]
              input.form-control(
                type="text"
                v-model="kebab"
                v-kebab="modifiers.kebab"
              )
            .mb-3.form-check.form-check-inline
              input.form-check-input#kebab-numbers(
                type="checkbox"
                v-model="modifiers.kebab.numbers"
              )
              label.form-check-label(for="kebab-numbers") Numbers
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Pascal case]
              input.form-control(
                type="text"
                v-model="pascal"
                v-pascal="modifiers.pascal"
              )
            .mb-3
              .form-check.form-check-inline
                input.form-check-input#pascal-numbers(
                  type="checkbox"
                  v-model="modifiers.pascal.numbers"
                )
                label.form-check-label(for="pascal-numbers") Numbers
              .form-check.form-check-inline
                input.form-check-input#pascal-lower(
                  type="checkbox"
                  v-model="modifiers.pascal.lower"
                )
                label.form-check-label(for="pascal-lower") Lower
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Title case]
              input.form-control(
                type="text"
                v-model="title"
                v-title="modifiers.title"
              )
            .mb-3.form-check.form-check-inline
              input.form-check-input#title-lower(
                type="checkbox"
                v-model="modifiers.title.lower"
              )
              label.form-check-label(for="title-lower") Lower
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Train case]
              input.form-control(
                type="text"
                v-model="train"
                v-train="modifiers.train"
              )
            .mb-3
              .form-check.form-check-inline
                input.form-check-input#train-numbers(
                  type="checkbox"
                  v-model="modifiers.train.numbers"
                )
                label.form-check-label(for="train-numbers") Numbers
              .form-check.form-check-inline
                input.form-check-input#train-lower(
                  type="checkbox"
                  v-model="modifiers.train.lower"
                )
                label.form-check-label(for="train-lower") Lower
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Snake case]
              input.form-control(
                type="text"
                v-model="snake"
                v-snake="modifiers.snake"
              )
            .mb-3.form-check.form-check-inline
              input.form-check-input#snake-numbers(
                type="checkbox"
                v-model="modifiers.snake.numbers"
              )
              label.form-check-label(for="snake-numbers") Numbers
        h2.mb-3 Letter case
        .row.mb-3
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Capitalize]
              input.form-control(
                type="text"
                v-model="capitalize"
                v-capitalize="modifiers.capitalize"
              )
            .mb-3.form-check.form-check-inline
              input.form-check-input#capitalize-lower(
                type="checkbox"
                v-model="modifiers.capitalize.lower"
              )
              label.form-check-label(for="capitalize-lower") Lower
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Lower case]
              input.form-control(
                type="text"
                v-model="lower"
                v-lower="modifiers.lower"
              )
            .mb-3.form-check.form-check-inline
              input.form-check-input#lower-first(
                type="checkbox"
                v-model="modifiers.lower.first"
              )
              label.form-check-label(for="lower-first") First
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Upper case]
              input.form-control(
                type="text"
                v-model="upper"
                v-upper="modifiers.upper"
              )
            .mb-3
              .form-check.form-check-inline
                input.form-check-input#upper-first(
                  type="checkbox"
                  v-model="modifiers.upper.first"
                )
                label.form-check-label(for="upper-first") First
              .form-check.form-check-inline
                input.form-check-input#upper-every(
                  type="checkbox"
                  v-model="modifiers.upper.every"
                )
                label.form-check-label(for="upper-every") Every
        h2.mb-3 Replacing
        .row.mb-3
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Pad]
              .input-group
                input.form-control(
                  type="text"
                  v-model="pad"
                  v-pad="modifiers.pad"
                  placeholder="Text"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.pad.chars"
                  placeholder="Chars"
                )
                input.form-control(
                  type="number"
                  v-model="modifiers.pad.count"
                  placeholder="Length"
                )
            .mb-3
              .form-check.form-check-inline
                input.form-check-input#pad-start(
                  type="checkbox"
                  v-model="modifiers.pad.start"
                )
                label.form-check-label(for="pad-start") Start
              .form-check.form-check-inline
                input.form-check-input#pad-end(
                  type="checkbox"
                  v-model="modifiers.pad.end"
                )
                label.form-check-label(for="pad-end") End
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Repeat]
              .input-group
                input.form-control(
                  type="text"
                  v-model="repeat"
                  v-repeat="modifiers.repeat"
                  placeholder="Text"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.repeat.string"
                  placeholder="String"
                )
                input.form-control(
                  type="number"
                  v-model="modifiers.repeat.count"
                  placeholder="Count"
                )
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Replace]
              .input-group
                input.form-control(
                  type="text"
                  v-model="replace"
                  v-replace="modifiers.replace"
                  placeholder="Text"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.replace.regexp"
                  placeholder="Regexp"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.replace.flags"
                  placeholder="Flags"
                )
                input.form-control(
                  type="text"
                  v-model="modifiers.replace.string"
                  placeholder="String"
                )
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Truncate]
              .input-group
                input.form-control(
                  type="text"
                  v-model="truncate"
                  v-truncate="modifiers.truncate"
                  placeholder="Text"
                )
                
                input.form-control(
                  type="text"
                  v-model="modifiers.truncate.omission"
                  placeholder="Omission"
                )
                input.form-control(
                  type="number"
                  v-model="modifiers.truncate.count"
                  placeholder="Max"
                )
</template>
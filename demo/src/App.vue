<script setup>
import { reactive } from 'vue'

const camel = defineModel('camel')
const kebab = defineModel('kebab')
const snake = defineModel('snake')
const upper = defineModel('upper')
const lower = defineModel('lower')
const capitalize = defineModel('capitalize')
const pad = defineModel('pad')
const repeat = defineModel('repeat')
const replace = defineModel('replace')
const truncate = defineModel('truncate')
const modifiers = reactive({
  camel: {
    first: false,
    numbers: false
  },
  kebab: {
    numbers: false
  },
  snake: {
    numbers: false
  },
  upper: {
    first: false,
    capitalize: false,
    every: false
  },
  lower: {
    first: false
  },
  pad: {
    count: 0,
    chars: ' ',
    start: false,
    end: false
  },
  repeat: {
    count: 0,
    string: ''
  },
  replace: {
    regexp: '',
    flags: 'g',
    string: ''
  },
  truncate: {
    count: '',
    omission: '...'
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
              label.form-label #[b Camelcase]
              input.form-control(
                type="text"
                v-model="camel"
                v-camel="modifiers.camel"
              )
            .mb-3
              .form-check.form-check-inline
                input.form-check-input#camel-first(
                  type="checkbox"
                  v-model="modifiers.camel.first"
                )
                label.form-check-label(for="camel-first") First
              .form-check.form-check-inline
                input.form-check-input#camel-numbers(
                  type="checkbox"
                  v-model="modifiers.camel.numbers"
                )
                label.form-check-label(for="camel-numbers") Numbers
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Kebabcase]
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
              label.form-label #[b Snakecase]
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
              label.form-label #[b Uppercase]
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
                input.form-check-input#upper-capitalize(
                  type="checkbox"
                  v-model="modifiers.upper.capitalize"
                  :disabled="!modifiers.upper.first"
                )
                label.form-check-label(for="upper-capitalize") Capitalize
              .form-check.form-check-inline
                input.form-check-input#upper-every(
                  type="checkbox"
                  v-model="modifiers.upper.every"
                  :disabled="!modifiers.upper.first"
                )
                label.form-check-label(for="upper-every") Every 
          .col-12.col-md-6.col-lg-4
            .mb-3
              label.form-label #[b Lowercase]
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
              label.form-label #[b Capitalize]
              input.form-control(
                type="text"
                v-model="capitalize"
                v-capitalize
              )
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
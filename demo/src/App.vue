<template lang="pug">
  div
    page-header
    main(role="main")
      article(role="article")
        b-container(fluid="xl")
          form(@submit.prevent="")
            h2.mb-3 Word case
            b-row
              b-col(lg="4" md="6" cols="12")
                .form-group
                  label #[b Camelcase]
                  input.form-control(
                    type="text"
                    v-model="camel.value"
                    v-camel="camel.modifiers"
                  )
                .form-group.mb-gutter
                  b-form-checkbox.custom-control-inline(
                    v-model="camel.modifiers.first"
                  ) First
                  b-form-checkbox.custom-control-inline(
                    v-model="camel.modifiers.numbers"
                  ) Numbers
              b-col(lg="4" md="6" cols="12")
                .form-group
                  label #[b Kebabcase]
                  input.form-control(
                    type="text"
                    v-model="kebab.value"
                    v-kebab="kebab.modifiers"
                  )
                .form-group.mb-gutter
                  b-form-checkbox.custom-control-inline(
                    v-model="kebab.modifiers.numbers"
                  ) Numbers
              b-col(lg="4" md="6" cols="12")
                .form-group
                  label #[b Snakecase]
                  input.form-control(
                    type="text"
                    v-model="snake.value"
                    v-snake="snake.modifiers"
                  )
                .form-group.mb-gutter
                  b-form-checkbox.custom-control-inline(
                    v-model="snake.modifiers.numbers"
                  ) Numbers
            h2.mb-3 Letter case
            b-row
              b-col(lg="4" md="6" cols="12")
                .form-group
                  label #[b Uppercase]
                  input.form-control(
                    type="text"
                    v-model="upper.value"
                    v-upper="upper.modifiers"
                  )
                .form-group.mb-gutter
                  b-form-checkbox.custom-control-inline(
                    v-model="upper.modifiers.first"
                  ) First
                  b-form-checkbox.custom-control-inline(
                    v-model="upper.modifiers.capitalize"
                    :disabled="!upper.modifiers.first"
                  ) Capitalize
                  b-form-checkbox.custom-control-inline(
                    v-model="upper.modifiers.every"
                    :disabled="!upper.modifiers.first"
                  ) Every 
              b-col(lg="4" md="6" cols="12")
                .form-group
                  label #[b Lowercase]
                  input.form-control(
                    type="text"
                    v-model="lower.value"
                    v-lower="lower.modifiers"
                  )
                .form-group.mb-gutter
                  b-form-checkbox.custom-control-inline(
                    v-model="lower.modifiers.first"
                  ) First
              b-col(lg="4" md="6" cols="12")
                .form-group.mb-gutter
                  label #[b Capitalize]
                  input.form-control(
                    type="text"
                    v-model="capitalize.value"
                    v-capitalize
                  )
            h2.mb-3 Replace
            b-row
              b-col(lg="4" md="6" cols="12")
                .form-group
                  label #[b Pad]
                  b-input-group
                    input.form-control(
                      type="text"
                      v-model="pad.value"
                      v-pad="pad.modifiers"
                      placeholder="Text"
                    )
                    input.form-control(
                      type="text"
                      v-model="pad.modifiers.chars"
                      placeholder="Chars"
                    )
                    input.form-control(
                      type="number"
                      v-model="pad.modifiers.count"
                      placeholder="Length"
                    )
                .form-group.mb-gutter
                  b-form-checkbox.custom-control-inline(
                    v-model="pad.modifiers.start"
                  ) Start
                  b-form-checkbox.custom-control-inline(
                    v-model="pad.modifiers.end"
                  ) End
              b-col(lg="4" md="6" cols="12")
                .form-group.mb-gutter
                  label #[b Repeat]
                  b-input-group
                    input.form-control(
                      type="text"
                      v-model="repeat.value"
                      v-repeat="repeat.modifiers"
                      placeholder="Text"
                    )
                    input.form-control(
                      type="text"
                      v-model="repeat.modifiers.string"
                      placeholder="String"
                    )
                    input.form-control(
                      type="number"
                      v-model="repeat.modifiers.count"
                      placeholder="Count"
                    )
              b-col(lg="4" md="6" cols="12")
                .form-group.mb-gutter
                  label #[b Replace]
                  b-input-group
                    input.form-control(
                      type="text"
                      v-model="replace.value"
                      v-replace="replace.modifiers"
                      placeholder="Text"
                    )
                    input.form-control(
                      type="text"
                      v-model="replace.modifiers.regexp"
                      placeholder="Regexp"
                    )
                    input.form-control(
                      type="text"
                      v-model="replace.modifiers.flags"
                      placeholder="Flags"
                    )
                    input.form-control(
                      type="text"
                      v-model="replace.modifiers.string"
                      placeholder="String"
                    )
              b-col(lg="4" md="6" cols="12")
                .form-group.mb-gutter
                  label #[b Truncate]
                  b-input-group
                    input.form-control(
                      type="text"
                      v-model="truncate.value"
                      v-truncate="truncate.modifiers"
                      placeholder="Text"
                    )
                    input.form-control(
                      type="text"
                      v-model="truncate.modifiers.omission"
                      placeholder="Omission"
                    )
                    input.form-control(
                      type="number"
                      v-model="truncate.modifiers.count"
                      placeholder="Max"
                    )
</template>

<script>
import PageHeader from './components/layout/PageHeader.vue'
import {
  BContainer,
  BRow,
  BCol,
  BFormCheckbox,
	BInputGroup
} from 'bootstrap-vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    BContainer,
    BRow,
    BCol,
    BFormCheckbox,
    BInputGroup
  },
  data () {
    return {
      camel: {
        value: '',
        modifiers: {
          first: false,
          numbers: false
        }
      },
      kebab: {
        value: '',
        modifiers: {
          numbers: false
        }
      },
      snake: {
        value: '',
        modifiers: {
          numbers: false
        }
      },
      upper: {
        value: '',
        modifiers: {
          first: false,
          capitalize: false,
          every: false
        }
      },
      lower: {
        value: '',
        modifiers: {
          first: false
        }
      },
      capitalize: {
        value: ''
      },
      pad: {
        value: '',
        modifiers: {
          count: 0,
          chars: ' ',
          start: false,
          end: false
        }
      },
      repeat: {
        value: '',
        modifiers: {
          count: 0,
          string: ''
        }
      },
      replace: {
        value: '',
        modifiers: {
          regexp: '',
          flags: 'g',
          string: ''
        }
      },
      truncate: {
        value: '',
        modifiers: {
          count: '',
          omission: '...'
        }
      }
    }
  }
}
</script>

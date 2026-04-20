/*! 
 * Vue String Directives v1.2.3
 * Homepage (https://tarkhov.github.io/vue-string-directives/)
 * Copyright 2020-2026 Tarkhov
 * License: MIT
 */
import { camelCase as z, capitalize as v, flatCase as S, kebabCase as $, pad as D, pascalCase as E, snakeCase as L, titleCase as s, trainCase as y, truncate as A } from "string-filters";
const o = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.value || a.modifiers, t = z(e.value, u);
      t !== null && (e.value = t);
    }
  }
}, c = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.modifiers?.lower || a.value?.lower;
      e.value = v(e.value, u);
    }
  }
}, r = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.modifiers?.numbers || a.value?.numbers, t = S(e.value, u);
      t !== null && (e.value = t);
    }
  }
}, i = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.modifiers?.numbers || a.value?.numbers, t = $(e.value, u);
      t !== null && (e.value = t);
    }
  }
}, n = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.value || a.modifiers;
      e.value = u?.first ? e.value.charAt(0).toLowerCase() + e.value.slice(1) : e.value.toLowerCase();
    }
  }
}, f = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.value?.count || a.arg, t = a.value?.chars || a.value;
      a.modifiers?.start || a.value?.start ? e.value = e.value.padStart(u, t) : a.modifiers?.end || a.value?.end ? e.value = e.value.padEnd(u, t) : e.value = D(e.value, u, t);
    }
  }
}, d = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.value || a.modifiers, t = E(e.value, u);
      t !== null && (e.value = t);
    }
  }
}, m = {
  updated: function(e, a) {
    e.value.length && a.value && (a.value?.string && a.value?.count ? e.value = e.value + a.value.string.repeat(a.value.count) : a.arg && (e.value = e.value + a.value.repeat(a.arg)));
  }
}, p = {
  updated: function(e, a) {
    e.value.length && (e.value = e.value.replace(new RegExp(a.value.regexp, a.value.flags), a.value.string || ""));
  }
}, h = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.modifiers?.numbers || a.value?.numbers, t = L(e.value, u);
      t !== null && (e.value = t);
    }
  }
}, w = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.modifiers?.lower || a.value?.lower, t = s(e.value, u);
      t !== null && (e.value = t);
    }
  }
}, C = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.value || a.modifiers, t = y(e.value, u);
      t !== null && (e.value = t);
    }
  }
}, k = {
  updated: function(e, a) {
    let u = e.value.length;
    if (u) {
      let t = a.value?.omission || a.value, l = a.value?.count || a.arg;
      u > l && (e.value = A(e.value, l, t));
    }
  }
}, x = {
  updated: function(e, a) {
    if (e.value.length) {
      const u = a.value || a.modifiers;
      if (u?.first)
        if (u?.every) {
          const t = s(e.value);
          t !== null && (e.value = t);
        } else
          e.value = v(e.value);
      else
        e.value = e.value.toUpperCase();
    }
  }
}, R = {
  directives: {
    camel: o,
    capitalize: c,
    flat: r,
    kebab: i,
    lower: n,
    pad: f,
    pascal: d,
    repeat: m,
    replace: p,
    snake: h,
    title: w,
    train: C,
    truncate: k,
    upper: x
  }
}, U = {
  install(e) {
    e.directive("camel", o), e.directive("capitalize", c), e.directive("flat", r), e.directive("kebab", i), e.directive("lower", n), e.directive("pad", f), e.directive("pascal", d), e.directive("repeat", m), e.directive("replace", p), e.directive("snake", h), e.directive("title", w), e.directive("train", C), e.directive("truncate", k), e.directive("upper", x);
  }
};
export {
  R as StringDirectivesMixin,
  U as VueStringDirectives,
  o as camel,
  c as capitalize,
  r as flat,
  i as kebab,
  n as lower,
  f as pad,
  d as pascal,
  m as repeat,
  p as replace,
  h as snake,
  w as title,
  C as train,
  k as truncate,
  x as upper
};

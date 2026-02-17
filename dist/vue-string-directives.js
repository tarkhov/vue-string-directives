/*! 
 * Vue String Directives v1.2.1
 * Homepage (https://tarkhov.github.io/vue-string-directives/)
 * Copyright 2020-2026 Tarkhov
 * License: MIT
 */
function o(e, t = !1) {
  let a = e.charAt(0).toUpperCase(), u = e.slice(1);
  return t && (u = u.toLowerCase()), `${a}${u}`;
}
function j(e, t = { numbers: !1, lower: !1 }) {
  const a = t?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let u = e.match(a);
  if (u.length <= 1) return null;
  let l = u.shift();
  const n = t?.lower;
  return n && (l = l.toLowerCase()), u = u.map((E) => o(E, n)), u.unshift(l), u.join("");
}
function N(e, t = !1) {
  let a = t ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu"), u = e.match(a);
  return u.length <= 1 ? null : u.map((l) => l.toLowerCase()).join("");
}
function R(e, t = !1) {
  let a = t ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, u = e.match(a);
  return u.length <= 1 ? null : u.map((l) => l.toLowerCase()).join("-");
}
function k(e, t, a = " ") {
  const u = Math.floor((t - e.length) / 2) + e.length;
  return e.padStart(u, a).padEnd(t, a);
}
function S(e, t = { numbers: !1, lower: !1 }) {
  const a = t?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let u = e.match(a);
  return u.length <= 1 ? null : u.map((l) => o(l, t?.lower)).join("");
}
function _(e, t = !1) {
  let a = t ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, u = e.match(a);
  return u.length <= 1 ? null : u.map((l) => l.toLowerCase()).join("_");
}
function r(e, t = !1) {
  return e.replace(new RegExp("\\p{L}+", "gu"), (a) => o(a, t));
}
function z(e, t = { numbers: !1, lower: !1 }) {
  const a = t?.numbers ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu;
  let u = e.match(a);
  return u.length <= 1 ? null : u.map((l) => o(l, t?.lower)).join("-");
}
function A(e, t = 32, a = "...") {
  return e.substring(0, t) + a;
}
const s = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.value || t.modifiers, u = j(e.value, a);
      u !== null && (e.value = u);
    }
  }
}, c = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.modifiers?.lower || t.value?.lower;
      e.value = o(e.value, a);
    }
  }
}, v = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.modifiers?.numbers || t.value?.numbers, u = N(e.value, a);
      u !== null && (e.value = u);
    }
  }
}, i = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.modifiers?.numbers || t.value?.numbers, u = R(e.value, a);
      u !== null && (e.value = u);
    }
  }
}, f = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.value || t.modifiers;
      e.value = a?.first ? e.value.charAt(0).toLowerCase() + e.value.slice(1) : e.value.toLowerCase();
    }
  }
}, p = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.value?.count || t.arg, u = t.value?.chars || t.value;
      t.modifiers?.start || t.value?.start ? e.value = e.value.padStart(a, u) : t.modifiers?.end || t.value?.end ? e.value = e.value.padEnd(a, u) : e.value = k(e.value, a, u);
    }
  }
}, m = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.value || t.modifiers, u = S(e.value, a);
      u !== null && (e.value = u);
    }
  }
}, d = {
  updated: function(e, t) {
    e.value.length && t.value && (t.value?.string && t.value?.count ? e.value = e.value + t.value.string.repeat(t.value.count) : t.arg && (e.value = e.value + t.value.repeat(t.arg)));
  }
}, h = {
  updated: function(e, t) {
    e.value.length && (e.value = e.value.replace(new RegExp(t.value.regexp, t.value.flags), t.value.string || ""));
  }
}, w = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.modifiers?.numbers || t.value?.numbers, u = _(e.value, a);
      u !== null && (e.value = u);
    }
  }
}, g = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.modifiers?.lower || t.value?.lower, u = r(e.value, a);
      u !== null && (e.value = u);
    }
  }
}, L = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.value || t.modifiers, u = z(e.value, a);
      u !== null && (e.value = u);
    }
  }
}, C = {
  updated: function(e, t) {
    let a = e.value.length;
    if (a) {
      let u = t.value?.omission || t.value, l = t.value?.count || t.arg;
      a > l && (e.value = A(e.value, l, u));
    }
  }
}, x = {
  updated: function(e, t) {
    if (e.value.length) {
      const a = t.value || t.modifiers;
      if (a?.first)
        if (a?.every) {
          const u = r(e.value);
          u !== null && (e.value = u);
        } else
          e.value = o(e.value);
      else
        e.value = e.value.toUpperCase();
    }
  }
}, D = {
  directives: {
    camel: s,
    capitalize: c,
    flat: v,
    kebab: i,
    lower: f,
    pad: p,
    pascal: m,
    repeat: d,
    replace: h,
    snake: w,
    title: g,
    train: L,
    truncate: C,
    upper: x
  }
}, M = {
  install(e) {
    e.directive("camel", s), e.directive("capitalize", c), e.directive("flat", v), e.directive("kebab", i), e.directive("lower", f), e.directive("pad", p), e.directive("pascal", m), e.directive("repeat", d), e.directive("replace", h), e.directive("snake", w), e.directive("title", g), e.directive("train", L), e.directive("truncate", C), e.directive("upper", x);
  }
};
export {
  D as StringDirectivesMixin,
  M as VueStringDirectives,
  s as camel,
  c as capitalize,
  v as flat,
  i as kebab,
  f as lower,
  p as pad,
  m as pascal,
  d as repeat,
  h as replace,
  w as snake,
  g as title,
  L as train,
  C as truncate,
  x as upper
};

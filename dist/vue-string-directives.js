/*! 
 * Vue String Directives v1.2.2
 * Homepage (https://tarkhov.github.io/vue-string-directives/)
 * Copyright 2020-2026 Tarkhov
 * License: MIT
 */
function n(e, u = !1) {
  if (!e) return null;
  let l = e.charAt(0).toUpperCase(), t = e.slice(1);
  return u && (t = t.toLowerCase()), `${l}${t}`;
}
function j(e, u = { numbers: !1, lower: !1 }) {
  if (!e) return null;
  const l = u?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let t = e.match(l);
  if (!t || t.length <= 1) return null;
  let a = t.shift();
  const r = u?.lower;
  return r && (a = a.toLowerCase()), t = t.map((E) => n(E, r)), t.unshift(a), t.join("");
}
function N(e, u = !1) {
  if (!e) return null;
  let l = u ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu"), t = e.match(l);
  return !t || t.length <= 1 ? null : t.map((a) => a.toLowerCase()).join("");
}
function R(e, u = !1) {
  if (!e) return null;
  let l = u ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, t = e.match(l);
  return !t || t.length <= 1 ? null : t.map((a) => a.toLowerCase()).join("-");
}
function k(e, u, l = " ") {
  if (!e) return null;
  const t = Math.floor((u - e.length) / 2) + e.length;
  return e.padStart(t, l).padEnd(u, l);
}
function S(e, u = { numbers: !1, lower: !1 }) {
  if (!e) return null;
  const l = u?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let t = e.match(l);
  return !t || t.length <= 1 ? null : t.map((a) => n(a, u?.lower)).join("");
}
function _(e, u = !1) {
  if (!e) return null;
  let l = u ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, t = e.match(l);
  return !t || t.length <= 1 ? null : t.map((a) => a.toLowerCase()).join("_");
}
function o(e, u = !1) {
  return e ? e.replace(new RegExp("\\p{L}+", "gu"), (l) => n(l, u)) : null;
}
function z(e, u = { numbers: !1, lower: !1 }) {
  if (!e) return null;
  const l = u?.numbers ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu;
  let t = e.match(l);
  return !t || t.length <= 1 ? null : t.map((a) => n(a, u?.lower)).join("-");
}
function A(e, u = 32, l = "...") {
  return e ? e.substring(0, u) + l : null;
}
const s = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.value || u.modifiers, t = j(e.value, l);
      t !== null && (e.value = t);
    }
  }
}, c = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.modifiers?.lower || u.value?.lower;
      e.value = n(e.value, l);
    }
  }
}, v = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.modifiers?.numbers || u.value?.numbers, t = N(e.value, l);
      t !== null && (e.value = t);
    }
  }
}, i = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.modifiers?.numbers || u.value?.numbers, t = R(e.value, l);
      t !== null && (e.value = t);
    }
  }
}, f = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.value || u.modifiers;
      e.value = l?.first ? e.value.charAt(0).toLowerCase() + e.value.slice(1) : e.value.toLowerCase();
    }
  }
}, p = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.value?.count || u.arg, t = u.value?.chars || u.value;
      u.modifiers?.start || u.value?.start ? e.value = e.value.padStart(l, t) : u.modifiers?.end || u.value?.end ? e.value = e.value.padEnd(l, t) : e.value = k(e.value, l, t);
    }
  }
}, m = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.value || u.modifiers, t = S(e.value, l);
      t !== null && (e.value = t);
    }
  }
}, h = {
  updated: function(e, u) {
    e.value.length && u.value && (u.value?.string && u.value?.count ? e.value = e.value + u.value.string.repeat(u.value.count) : u.arg && (e.value = e.value + u.value.repeat(u.arg)));
  }
}, d = {
  updated: function(e, u) {
    e.value.length && (e.value = e.value.replace(new RegExp(u.value.regexp, u.value.flags), u.value.string || ""));
  }
}, w = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.modifiers?.numbers || u.value?.numbers, t = _(e.value, l);
      t !== null && (e.value = t);
    }
  }
}, g = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.modifiers?.lower || u.value?.lower, t = o(e.value, l);
      t !== null && (e.value = t);
    }
  }
}, L = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.value || u.modifiers, t = z(e.value, l);
      t !== null && (e.value = t);
    }
  }
}, C = {
  updated: function(e, u) {
    let l = e.value.length;
    if (l) {
      let t = u.value?.omission || u.value, a = u.value?.count || u.arg;
      l > a && (e.value = A(e.value, a, t));
    }
  }
}, x = {
  updated: function(e, u) {
    if (e.value.length) {
      const l = u.value || u.modifiers;
      if (l?.first)
        if (l?.every) {
          const t = o(e.value);
          t !== null && (e.value = t);
        } else
          e.value = n(e.value);
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
    repeat: h,
    replace: d,
    snake: w,
    title: g,
    train: L,
    truncate: C,
    upper: x
  }
}, M = {
  install(e) {
    e.directive("camel", s), e.directive("capitalize", c), e.directive("flat", v), e.directive("kebab", i), e.directive("lower", f), e.directive("pad", p), e.directive("pascal", m), e.directive("repeat", h), e.directive("replace", d), e.directive("snake", w), e.directive("title", g), e.directive("train", L), e.directive("truncate", C), e.directive("upper", x);
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
  h as repeat,
  d as replace,
  w as snake,
  g as title,
  L as train,
  C as truncate,
  x as upper
};

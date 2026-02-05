function r(t, e = !1) {
  let u = t.charAt(0).toUpperCase(), a = t.slice(1);
  return e && (a = a.toLowerCase()), `${u}${a}`;
}
function d(t, e = !1) {
  return e ? t.match(/[\p{L}\p{N}]+/gu) : t.match(/[\p{L}]+/gu);
}
const v = {
  updated: function(t, e) {
    if (t.value.length && (typeof e.value > "u" || e.value)) {
      let u = d(t.value, e.modifiers?.numbers || e.value?.numbers);
      if (u.length > 1) {
        if (e.modifiers?.first || e.value?.first)
          u = u.map(function(a) {
            return r(a);
          });
        else {
          let a = u.shift();
          u = u.map(function(l) {
            return r(l);
          }), u.unshift(a);
        }
        t.value = u.join("");
      }
    }
  }
}, f = {
  updated: function(t, e) {
    t.value.length && (typeof e.value > "u" || e.value) && (t.value = r(t.value, !0));
  }
};
function L(t, e = !1) {
  return e ? t.match(/[\p{L}\p{N}-]+/gu) : t.match(/[\p{L}-]+/gu);
}
const o = {
  updated: function(t, e) {
    if (t.value.length && (typeof e.value > "u" || e.value)) {
      let u = L(t.value, e.modifiers?.numbers || e.value?.numbers);
      u.length > 1 && (u = u.map(function(a) {
        return a.toLowerCase();
      }), t.value = u.join("-"));
    }
  }
}, s = {
  updated: function(t, e) {
    t.value.length && (typeof e.value > "u" || e.value) && (e.modifiers?.first || e.value?.first ? t.value = t.value.charAt(0).toLowerCase() + t.value.slice(1) : t.value = t.value.toLowerCase());
  }
};
function y(t, e, u = " ") {
  const a = Math.floor((e - t.length) / 2) + t.length;
  return t.padStart(a, u).padEnd(e, u);
}
const c = {
  updated: function(t, e) {
    if (t.value.length) {
      let u = 0, a = " ";
      e.value && (typeof e.value == "object" ? e.value.chars && e.value.count && (u = e.value.count, a = e.value.chars) : (u = e.arg, a = e.value)), e.modifiers?.start || e.value?.start ? t.value = t.value.padStart(u, a) : e.modifiers?.end || e.value?.end ? t.value = t.value.padEnd(u, a) : t.value = y(t.value, u, a);
    }
  }
}, p = {
  updated: function(t, e) {
    t.value.length && e.value && (typeof e.value == "object" ? e.value.string && e.value.count && (t.value = t.value + e.value.string.repeat(e.value.count)) : e.arg && (t.value = t.value + e.value.repeat(e.arg)));
  }
}, i = {
  updated: function(t, e) {
    t.value.length && e.value && e.value.regexp && (t.value = t.value.replace(new RegExp(e.value.regexp, e.value.flags), e.value.string || ""));
  }
};
function w(t, e = !1) {
  return e ? t.match(/[\p{L}\p{N}_]+/gu) : t.match(/[\p{L}_]+/gu);
}
const m = {
  updated: function(t, e) {
    if (t.value.length && (typeof e.value > "u" || e.value)) {
      let u = w(t.value, e.modifiers?.numbers || e.value?.numbers);
      u.length > 1 && (u = u.map(function(a) {
        return a.toLowerCase();
      }), t.value = u.join("_"));
    }
  }
};
function C(t, e = 32, u = "...") {
  return t.substring(0, e) + u;
}
const n = {
  updated: function(t, e) {
    let u = t.value.length;
    if (u) {
      let a = "...", l = e.arg;
      e.value && (typeof e.value == "object" ? e.value.count && e.value.omission && (l = e.value.count, a = e.value.omission) : a = e.value), u > l && (t.value = C(t.value, l, a));
    }
  }
};
function j(t, e = !1) {
  return t.replace(new RegExp("\\p{L}+", "gu"), function(u) {
    return r(u, e);
  });
}
const h = {
  updated: function(t, e) {
    if (t.value.length && (typeof e.value > "u" || e.value))
      if (e.modifiers?.first || e.value?.first) {
        const u = e.modifiers?.capitalize || e.value?.capitalize;
        e.modifiers?.every || e.value?.every ? t.value = j(t.value, u) : t.value = r(t.value, u);
      } else
        t.value = t.value.toUpperCase();
  }
}, k = {
  directives: {
    camel: v,
    capitalize: f,
    kebab: o,
    lower: s,
    pad: c,
    repeat: p,
    replace: i,
    snake: m,
    truncate: n,
    upper: h
  }
}, x = {
  install(t) {
    t.directive("camel", v), t.directive("capitalize", f), t.directive("kebab", o), t.directive("lower", s), t.directive("pad", c), t.directive("repeat", p), t.directive("replace", i), t.directive("snake", m), t.directive("truncate", n), t.directive("upper", h);
  }
};
export {
  k as StringDirectivesMixin,
  x as VueStringDirectives,
  v as camel,
  f as capitalize,
  o as kebab,
  s as lower,
  c as pad,
  p as repeat,
  i as replace,
  m as snake,
  n as truncate,
  h as upper
};

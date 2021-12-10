!(function (e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : (("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).Tinode = e());
})(function () {
  var e = { exports: {} };
  const t = function (e) {
    e &&
      ((this.given = "number" == typeof e.given ? e.given : t.decode(e.given)),
      (this.want = "number" == typeof e.want ? e.want : t.decode(e.want)),
      (this.mode = e.mode
        ? "number" == typeof e.mode
          ? e.mode
          : t.decode(e.mode)
        : this.given & this.want));
  };
  (t._NONE = 0),
    (t._JOIN = 1),
    (t._READ = 2),
    (t._WRITE = 4),
    (t._PRES = 8),
    (t._APPROVE = 16),
    (t._SHARE = 32),
    (t._DELETE = 64),
    (t._OWNER = 128),
    (t._BITMASK =
      t._JOIN |
      t._READ |
      t._WRITE |
      t._PRES |
      t._APPROVE |
      t._SHARE |
      t._DELETE |
      t._OWNER),
    (t._INVALID = 1048576),
    (t._checkFlag = function (e, t, n) {
      if (["given", "want", "mode"].includes((t = t || "mode")))
        return 0 != (e[t] & n);
      throw new Error(`Invalid AccessMode component '${t}'`);
    }),
    (t.decode = function (e) {
      if (!e) return null;
      if ("number" == typeof e) return e & t._BITMASK;
      if ("N" === e || "n" === e) return t._NONE;
      const n = {
        J: t._JOIN,
        R: t._READ,
        W: t._WRITE,
        P: t._PRES,
        A: t._APPROVE,
        S: t._SHARE,
        D: t._DELETE,
        O: t._OWNER,
      };
      let s = t._NONE;
      for (let t = 0; t < e.length; t++) {
        const i = n[e.charAt(t).toUpperCase()];
        i && (s |= i);
      }
      return s;
    }),
    (t.encode = function (e) {
      if (null === e || e === t._INVALID) return null;
      if (e === t._NONE) return "N";
      const n = ["J", "R", "W", "P", "A", "S", "D", "O"];
      let s = "";
      for (let t = 0; t < n.length; t++) 0 != (e & (1 << t)) && (s += n[t]);
      return s;
    }),
    (t.update = function (e, n) {
      if (!n || "string" != typeof n) return e;
      let s = n.charAt(0);
      if ("+" == s || "-" == s) {
        let i = e;
        const r = n.split(/([-+])/);
        for (let n = 1; n < r.length - 1; n += 2) {
          s = r[n];
          const o = t.decode(r[n + 1]);
          if (o == t._INVALID) return e;
          null != o && ("+" === s ? (i |= o) : "-" === s && (i &= ~o));
        }
        e = i;
      } else {
        const s = t.decode(n);
        s != t._INVALID && (e = s);
      }
      return e;
    }),
    (t.diff = function (e, n) {
      return (
        (e = t.decode(e)),
        (n = t.decode(n)),
        e == t._INVALID || n == t._INVALID ? t._INVALID : e & ~n
      );
    }),
    (t.prototype = {
      toString: function () {
        return (
          '{"mode": "' +
          t.encode(this.mode) +
          '", "given": "' +
          t.encode(this.given) +
          '", "want": "' +
          t.encode(this.want) +
          '"}'
        );
      },
      jsonHelper: function () {
        return {
          mode: t.encode(this.mode),
          given: t.encode(this.given),
          want: t.encode(this.want),
        };
      },
      setMode: function (e) {
        return (this.mode = t.decode(e)), this;
      },
      updateMode: function (e) {
        return (this.mode = t.update(this.mode, e)), this;
      },
      getMode: function () {
        return t.encode(this.mode);
      },
      setGiven: function (e) {
        return (this.given = t.decode(e)), this;
      },
      updateGiven: function (e) {
        return (this.given = t.update(this.given, e)), this;
      },
      getGiven: function () {
        return t.encode(this.given);
      },
      setWant: function (e) {
        return (this.want = t.decode(e)), this;
      },
      updateWant: function (e) {
        return (this.want = t.update(this.want, e)), this;
      },
      getWant: function () {
        return t.encode(this.want);
      },
      getMissing: function () {
        return t.encode(this.want & ~this.given);
      },
      getExcessive: function () {
        return t.encode(this.given & ~this.want);
      },
      updateAll: function (e) {
        return (
          e &&
            (this.updateGiven(e.given),
            this.updateWant(e.want),
            (this.mode = this.given & this.want)),
          this
        );
      },
      isOwner: function (e) {
        return t._checkFlag(this, e, t._OWNER);
      },
      isPresencer: function (e) {
        return t._checkFlag(this, e, t._PRES);
      },
      isMuted: function (e) {
        return !this.isPresencer(e);
      },
      isJoiner: function (e) {
        return t._checkFlag(this, e, t._JOIN);
      },
      isReader: function (e) {
        return t._checkFlag(this, e, t._READ);
      },
      isWriter: function (e) {
        return t._checkFlag(this, e, t._WRITE);
      },
      isApprover: function (e) {
        return t._checkFlag(this, e, t._APPROVE);
      },
      isAdmin: function (e) {
        return this.isOwner(e) || this.isApprover(e);
      },
      isSharer: function (e) {
        return this.isAdmin(e) || t._checkFlag(this, e, t._SHARE);
      },
      isDeleter: function (e) {
        return t._checkFlag(this, e, t._DELETE);
      },
    }),
    (e.exports = t),
    (e = e.exports);
  var n = {
    exports:
      ({},
      function (e, t) {
        let n = [];
        function s(t, n, s) {
          let i = 0,
            r = n.length - 1,
            o = 0,
            a = 0,
            c = !1;
          for (; i <= r; )
            if ((a = e(n[(o = ((i + r) / 2) | 0)], t)) < 0) i = o + 1;
            else {
              if (!(a > 0)) {
                c = !0;
                break;
              }
              r = o - 1;
            }
          return c
            ? { idx: o, exact: !0 }
            : s
            ? { idx: -1 }
            : { idx: a < 0 ? o + 1 : o };
        }
        function i(e, n) {
          const i = s(e, n, !1),
            r = i.exact && t ? 1 : 0;
          return n.splice(i.idx, r, e), n;
        }
        return (
          (e =
            e ||
            function (e, t) {
              return e === t ? 0 : e < t ? -1 : 1;
            }),
          {
            getAt: function (e) {
              return n[e];
            },
            getLast: function (e) {
              return (e |= 0), n.length > e ? n[n.length - 1 - e] : void 0;
            },
            put: function () {
              let e;
              e =
                1 == arguments.length && Array.isArray(arguments[0])
                  ? arguments[0]
                  : arguments;
              for (let t in e) i(e[t], n);
            },
            delAt: function (e) {
              e |= 0;
              let t = n.splice(e, 1);
              if (t && t.length > 0) return t[0];
            },
            delRange: function (e, t) {
              return n.splice(e, t - e);
            },
            length: function () {
              return n.length;
            },
            reset: function () {
              n = [];
            },
            forEach: function (e, t, s, i) {
              (t |= 0), (s = s || n.length);
              for (let r = t; r < s; r++)
                e.call(
                  i,
                  n[r],
                  r > t ? n[r - 1] : void 0,
                  r < s - 1 ? n[r + 1] : void 0,
                  r
                );
            },
            find: function (e, t) {
              const { idx: i } = s(e, n, !t);
              return i;
            },
            filter: function (e, t) {
              let s = 0;
              for (let i = 0; i < n.length; i++)
                e.call(t, n[i], i) && ((n[s] = n[i]), s++);
              n.splice(s);
            },
          }
        );
      }),
  };
  n = n.exports;
  var s = { exports: {} };
  (s.exports.jsonParseHelper = function (t, n) {
    if (
      ("ts" === t || "when" === t) &&
      "string" == typeof n &&
      n.length >= 20 &&
      n.length <= 24
    ) {
      const e = new Date(n);
      if (!isNaN(e)) return e;
    } else if ("acs" === t && "object" == typeof n) return new e(n);
    return n;
  }),
    (s = s.exports);
  var i = { exports: {} };
  const { jsonParseHelper: r } = s;
  let o, a;
  function c(e, t, n, s) {
    let i = null;
    return (
      ["http", "https", "wss"].includes(t) &&
        ("/" !== (i = `${t}://${e}`).charAt(i.length - 1) && (i += "/"),
        (i += "v" + n + "/channels"),
        ["http", "https", "wss"].includes(t) && (i += "/lp"),
        (i += "?apikey=" + s)),
      i
    );
  }
  const u = function (e, t, n) {
    let s = e.host;
    const i = e.secure,
      h = e.apiKey,
      l = t,
      d = n;
    let f = null,
      p = 0,
      g = !1;
    const m = (e, ...t) => {
      u.logger && u.logger(e, ...t);
    };
    function _() {
      clearTimeout(f);
      const e = Math.pow(2, p) * (1 + 0.3 * Math.random()) * 2e3;
      (p = p >= 10 ? p : p + 1),
        this.onAutoreconnectIteration && this.onAutoreconnectIteration(e),
        (f = setTimeout(() => {
          if ((m(`Reconnecting, iter=${p}, timeout=${e}`), g))
            this.onAutoreconnectIteration && this.onAutoreconnectIteration(-1);
          else {
            const e = this.connect();
            this.onAutoreconnectIteration
              ? this.onAutoreconnectIteration(0, e)
              : e.catch(() => {});
          }
        }, e));
    }
    function b() {
      clearTimeout(f), (f = null);
    }
    let w = !1;
    if (
      ("lp" === e.transport
        ? ((function (e) {
            let t = null,
              n = null,
              o = null;
            (e.connect = function (o, u) {
              if (((g = !1), n)) {
                if (!u) return Promise.resolve();
                (n.onreadystatechange = void 0), n.abort(), (n = null);
              }
              return (
                o && (s = o),
                new Promise(function (o, u) {
                  const f = c(s, "https", l, h);
                  m("Connecting to:", f),
                    (n = (function n(s, i, o) {
                      let c = new a(),
                        u = !1;
                      return (
                        (c.onreadystatechange = function (a) {
                          if (4 == c.readyState)
                            if (201 == c.status) {
                              let o = JSON.parse(c.responseText, r);
                              (t = s + "&sid=" + o.ctrl.params.sid),
                                (c = n(t)).send(null),
                                e.onOpen && e.onOpen(),
                                i && ((u = !0), i()),
                                d && b();
                            } else if (c.status < 400)
                              e.onMessage && e.onMessage(c.responseText),
                                (c = n(t)).send(null);
                            else {
                              if (
                                (o && !u && ((u = !0), o(c.responseText)),
                                e.onMessage &&
                                  c.responseText &&
                                  e.onMessage(c.responseText),
                                e.onDisconnect)
                              ) {
                                const t = c.status || (g ? 418 : 503),
                                  n =
                                    c.responseText ||
                                    (g
                                      ? "Disconnected by client"
                                      : "Connection failed");
                                e.onDisconnect(
                                  new Error(n + " (" + t + ")"),
                                  t
                                );
                              }
                              (c = null), !g && d && _.call(e);
                            }
                        }),
                        c.open("GET", s, !0),
                        c
                      );
                    })(f, o, u)).send(null);
                }).catch((e) => {
                  m("LP connection failed:", e);
                })
              );
            }),
              (e.reconnect = function (t) {
                b(), e.connect(null, t);
              }),
              (e.disconnect = function () {
                (g = !0),
                  b(),
                  o && ((o.onreadystatechange = void 0), o.abort(), (o = null)),
                  n && ((n.onreadystatechange = void 0), n.abort(), (n = null)),
                  e.onDisconnect &&
                    e.onDisconnect(
                      new Error("Disconnected by client (418)"),
                      418
                    ),
                  (t = null);
              }),
              (e.sendText = function (e) {
                if (
                  !(o = (function (e) {
                    const t = new a();
                    return (
                      (t.onreadystatechange = function (e) {
                        if (4 == t.readyState && t.status >= 400)
                          throw new Error("LP sender failed, " + t.status);
                      }),
                      t.open("POST", e, !0),
                      t
                    );
                  })(t)) ||
                  1 != o.readyState
                )
                  throw new Error("Long poller failed to connect");
                o.send(e);
              }),
              (e.isConnected = function () {
                return n && !0;
              }),
              (e.transport = function () {
                return "lp";
              }),
              (e.probe = function () {
                e.sendText("1");
              });
          })(this),
          (w = !0))
        : "ws" === e.transport &&
          ((function (e) {
            let t = null;
            (e.connect = function (n, r) {
              if (((g = !1), t)) {
                if (!r && t.readyState == t.OPEN) return Promise.resolve();
                t.close(), (t = null);
              }
              return (
                n && (s = n),
                new Promise(function (n, r) {
                  const a = c(s, "wss", l, h);
                  m("Connecting to: ", a);
                  const u = new o(a);
                  (u.onerror = function (e) {
                    r(e);
                  }),
                    (u.onopen = function (t) {
                      d && b(), e.onOpen && e.onOpen(), n();
                    }),
                    (u.onclose = function (n) {
                      if (((t = null), e.onDisconnect)) {
                        const t = g ? 418 : 503;
                        e.onDisconnect(
                          new Error(
                            g
                              ? "Disconnected by client"
                              : "Connection failed (" + t + ")"
                          ),
                          t
                        );
                      }
                      !g && d && _.call(e);
                    }),
                    (u.onmessage = function (t) {
                      e.onMessage && e.onMessage(t.data);
                    }),
                    (t = u);
                })
              );
            }),
              (e.reconnect = function (t) {
                b(), e.connect(null, t);
              }),
              (e.disconnect = function () {
                (g = !0), b(), t && (t.close(), (t = null));
              }),
              (e.sendText = function (e) {
                if (!t || t.readyState != t.OPEN)
                  throw new Error("Websocket is not connected");
                t.send(e);
              }),
              (e.isConnected = function () {
                return t && t.readyState == t.OPEN;
              }),
              (e.transport = function () {
                return "ws";
              }),
              (e.probe = function () {
                e.sendText("1");
              });
          })(this),
          (w = !0)),
      !w)
    )
      throw (
        (m(
          "Unknown or invalid network transport. Running under Node? Call 'Tinode.setNetworkProviders()'."
        ),
        new Error(
          "Unknown or invalid network transport. Running under Node? Call 'Tinode.setNetworkProviders()'."
        ))
      );
    (this.backoffReset = function () {
      p = 0;
    }),
      (this.onMessage = void 0),
      (this.onDisconnect = void 0),
      (this.onOpen = void 0),
      (this.onAutoreconnectIteration = void 0),
      (this.logger = void 0);
  };
  (u.setNetworkProviders = function (e, t) {
    (o = e), (a = t);
  }),
    (u.NETWORK_ERROR = 503),
    (u.NETWORK_ERROR_TEXT = "Connection failed"),
    (u.NETWORK_USER = 418),
    (u.NETWORK_USER_TEXT = "Disconnected by client"),
    (i.exports = u),
    (i = i.exports);
  var h = { exports: {} };
  let l;
  const d = function (e, t) {
    (e = e || function () {}), (t = t || function () {});
    let n = null,
      s = !1;
    const i = [
      "created",
      "updated",
      "deleted",
      "read",
      "recv",
      "seq",
      "clear",
      "defacs",
      "creds",
      "public",
      "private",
      "touched",
    ];
    function r(e, t) {
      const n = e || {};
      return (
        ["topic", "seq", "ts", "_status", "from", "head", "content"].forEach(
          (e) => {
            t.hasOwnProperty(e) && (n[e] = t[e]);
          }
        ),
        n
      );
    }
    function o(e, i, r) {
      return n
        ? new Promise((s, o) => {
            const a = n.transaction([e]);
            (a.onerror = (n) => {
              t("PCache", "mapObjects", e, n.target.error), o(n.target.error);
            }),
              (a.objectStore(e).getAll().onsuccess = (e) => {
                i &&
                  e.target.result.forEach((e) => {
                    i.call(r, e);
                  }),
                  s(e.target.result);
              });
          })
        : s
        ? Promise.resolve([])
        : Promise.reject(new Error("not initialized"));
    }
    return {
      initDatabase: function () {
        return new Promise((i, r) => {
          const o = l.open("tinode-web", 1);
          (o.onsuccess = (e) => {
            (n = e.target.result), (s = !1), i(n);
          }),
            (o.onerror = (n) => {
              t("PCache", "failed to initialize", n),
                r(n.target.error),
                e(n.target.error);
            }),
            (o.onupgradeneeded = function (s) {
              ((n = s.target.result).onerror = function (n) {
                t("PCache", "failed to create storage", n), e(n.target.error);
              }),
                n.createObjectStore("topic", { keyPath: "name" }),
                n.createObjectStore("user", { keyPath: "uid" }),
                n.createObjectStore("subscription", {
                  keyPath: ["topic", "uid"],
                }),
                n.createObjectStore("message", { keyPath: ["topic", "seq"] });
            });
        });
      },
      deleteDatabase: function () {
        return new Promise((e, i) => {
          const r = l.deleteDatabase("tinode-web");
          (r.onblocked = function (e) {
            n && n.close();
          }),
            (r.onsuccess = (t) => {
              (n = null), (s = !0), e(!0);
            }),
            (r.onerror = (e) => {
              t("PCache", "deleteDatabase", e.target.error), i(e.target.error);
            });
        });
      },
      isReady: function () {
        return !!n;
      },
      updTopic: function (e) {
        return this.isReady()
          ? new Promise((s, r) => {
              const o = n.transaction(["topic"], "readwrite");
              (o.oncomplete = (e) => {
                s(e.target.result);
              }),
                (o.onerror = (e) => {
                  t("PCache", "updTopic", e.target.error), r(e.target.error);
                });
              const a = o.objectStore("topic").get(e.name);
              a.onsuccess = (t) => {
                o.objectStore("topic").put(
                  (function (e, t) {
                    const n = e || { name: t.name };
                    return (
                      i.forEach((e) => {
                        t.hasOwnProperty(e) && (n[e] = t[e]);
                      }),
                      Array.isArray(t._tags) && (n.tags = t._tags),
                      t.acs && (n.acs = t.getAccessMode().jsonHelper()),
                      n
                    );
                  })(a.result, e)
                ),
                  o.commit();
              };
            })
          : s
          ? Promise.resolve()
          : Promise.reject(new Error("not initialized"));
      },
      remTopic: function (e) {
        return this.isReady()
          ? new Promise((s, i) => {
              const r = n.transaction(
                ["topic", "subscription", "message"],
                "readwrite"
              );
              (r.oncomplete = (e) => {
                s(e.target.result);
              }),
                (r.onerror = (e) => {
                  t("PCache", "remTopic", e.target.error), i(e.target.error);
                }),
                r.objectStore("topic").delete(IDBKeyRange.only(e)),
                r
                  .objectStore("subscription")
                  .delete(IDBKeyRange.bound([e, "-"], [e, "~"])),
                r
                  .objectStore("message")
                  .delete(
                    IDBKeyRange.bound([e, 0], [e, Number.MAX_SAFE_INTEGER])
                  ),
                r.commit();
            })
          : s
          ? Promise.resolve()
          : Promise.reject(new Error("not initialized"));
      },
      mapTopics: function (e, t) {
        return o("topic", e, t);
      },
      deserializeTopic: function (e, t) {
        !(function (e, t) {
          i.forEach((n) => {
            t.hasOwnProperty(n) && (e[n] = t[n]);
          }),
            Array.isArray(t.tags) && (e._tags = t.tags),
            t.acs && e.setAccessMode(t.acs),
            (e.seq |= 0),
            (e.read |= 0),
            (e.unread = Math.max(0, e.seq - e.read));
        })(e, t);
      },
      updUser: function (e, i) {
        if (!(arguments.length < 2 || void 0 === i))
          return this.isReady()
            ? new Promise((s, r) => {
                const o = n.transaction(["user"], "readwrite");
                (o.oncomplete = (e) => {
                  s(e.target.result);
                }),
                  (o.onerror = (e) => {
                    t("PCache", "updUser", e.target.error), r(e.target.error);
                  }),
                  o.objectStore("user").put({ uid: e, public: i }),
                  o.commit();
              })
            : s
            ? Promise.resolve()
            : Promise.reject(new Error("not initialized"));
      },
      remUser: function (e) {
        return this.isReady()
          ? new Promise((s, i) => {
              const r = n.transaction(["user"], "readwrite");
              (r.oncomplete = (e) => {
                s(e.target.result);
              }),
                (r.onerror = (e) => {
                  t("PCache", "remUser", e.target.error), i(e.target.error);
                }),
                r.objectStore("user").delete(IDBKeyRange.only(e)),
                r.commit();
            })
          : s
          ? Promise.resolve()
          : Promise.reject(new Error("not initialized"));
      },
      mapUsers: function (e, t) {
        return o("user", e, t);
      },
      getUser: function (e) {
        return this.isReady()
          ? new Promise((s, i) => {
              const r = n.transaction(["user"]);
              (r.oncomplete = (e) => {
                const t = e.target.result;
                s({ user: t.uid, public: t.public });
              }),
                (r.onerror = (e) => {
                  t("PCache", "getUser", e.target.error), i(e.target.error);
                }),
                r.objectStore("user").get(e);
            })
          : s
          ? Promise.resolve()
          : Promise.reject(new Error("not initialized"));
      },
      updSubscription: function (e, i, r) {
        return this.isReady()
          ? new Promise((s, o) => {
              const a = n.transaction(["subscription"], "readwrite");
              (a.oncomplete = (e) => {
                s(e.target.result);
              }),
                (a.onerror = (e) => {
                  t("PCache", "updSubscription", e.target.error),
                    o(e.target.error);
                }),
                (a.objectStore("subscription").get([e, i]).onsuccess = (t) => {
                  a.objectStore("subscription").put(
                    (function (e, t, n, s) {
                      const i = e || { topic: t, uid: n };
                      return (
                        [
                          "updated",
                          "mode",
                          "read",
                          "recv",
                          "clear",
                          "lastSeen",
                          "userAgent",
                        ].forEach((e) => {
                          s.hasOwnProperty(e) && (i[e] = s[e]);
                        }),
                        i
                      );
                    })(t.target.result, e, i, r)
                  ),
                    a.commit();
                });
            })
          : s
          ? Promise.resolve()
          : Promise.reject(new Error("not initialized"));
      },
      mapSubscriptions: function (e, i, r) {
        return this.isReady()
          ? new Promise((s, o) => {
              const a = n.transaction(["subscription"]);
              (a.onerror = (e) => {
                t("PCache", "mapSubscriptions", e.target.error),
                  o(e.target.error);
              }),
                (a
                  .objectStore("subscription")
                  .getAll(IDBKeyRange.bound([e, "-"], [e, "~"])).onsuccess = (
                  e
                ) => {
                  i &&
                    e.target.result.forEach((e) => {
                      i.call(r, e);
                    }),
                    s(e.target.result);
                });
            })
          : s
          ? Promise.resolve([])
          : Promise.reject(new Error("not initialized"));
      },
      addMessage: function (e) {
        return this.isReady()
          ? new Promise((s, i) => {
              const o = n.transaction(["message"], "readwrite");
              (o.onsuccess = (e) => {
                s(e.target.result);
              }),
                (o.onerror = (e) => {
                  t("PCache", "addMessage", e.target.error), i(e.target.error);
                }),
                o.objectStore("message").add(r(null, e)),
                o.commit();
            })
          : s
          ? Promise.resolve()
          : Promise.reject(new Error("not initialized"));
      },
      updMessageStatus: function (e, i, o) {
        return this.isReady()
          ? new Promise((s, a) => {
              const c = n.transaction(["message"], "readwrite");
              (c.onsuccess = (e) => {
                s(e.target.result);
              }),
                (c.onerror = (e) => {
                  t("PCache", "updMessageStatus", e.target.error),
                    a(e.target.error);
                });
              const u = c.objectStore("message").get(IDBKeyRange.only([e, i]));
              u.onsuccess = (t) => {
                const n = u.result || t.target.result;
                n && n._status != o
                  ? (c
                      .objectStore("message")
                      .put(r(n, { topic: e, seq: i, _status: o })),
                    c.commit())
                  : c.commit();
              };
            })
          : s
          ? Promise.resolve()
          : Promise.reject(new Error("not initialized"));
      },
      remMessages: function (e, i, r) {
        return this.isReady()
          ? new Promise((s, o) => {
              i || r || ((i = 0), (r = Number.MAX_SAFE_INTEGER));
              const a =
                  r > 0
                    ? IDBKeyRange.bound([e, i], [e, r], !1, !0)
                    : IDBKeyRange.only([e, i]),
                c = n.transaction(["message"], "readwrite");
              (c.onsuccess = (e) => {
                s(e.target.result);
              }),
                (c.onerror = (e) => {
                  t("PCache", "remMessages", e.target.error), o(e.target.error);
                }),
                c.objectStore("message").delete(a),
                c.commit();
            })
          : s
          ? Promise.resolve()
          : Promise.reject(new Error("not initialized"));
      },
      readMessages: function (e, i, r, o) {
        return this.isReady()
          ? new Promise((s, a) => {
              const c = (i = i || {}).since > 0 ? i.since : 0,
                u = i.before > 0 ? i.before : Number.MAX_SAFE_INTEGER,
                h = 0 | i.limit,
                l = [],
                d = IDBKeyRange.bound([e, c], [e, u], !1, !0),
                f = n.transaction(["message"]);
              (f.onerror = (e) => {
                t("PCache", "readMessages", e.target.error), a(e.target.error);
              }),
                (f.objectStore("message").openCursor(d, "prev").onsuccess = (
                  e
                ) => {
                  const t = e.target.result;
                  t
                    ? (r && r.call(o, t.value),
                      l.push(t.value),
                      h <= 0 || l.length < h ? t.continue() : s(l))
                    : s(l);
                });
            })
          : s
          ? Promise.resolve([])
          : Promise.reject(new Error("not initialized"));
      },
    };
  };
  (d.setDatabaseProvider = function (e) {
    l = e;
  }),
    (h.exports = d),
    (h = h.exports);
  var f = { exports: {} };
  const p = [
      {
        name: "ST",
        start: /(?:^|[\W_])(\*)[^\s*]/,
        end: /[^\s*](\*)(?=$|[\W_])/,
      },
      { name: "EM", start: /(?:^|\W)(_)[^\s_]/, end: /[^\s_](_)(?=$|\W)/ },
      {
        name: "DL",
        start: /(?:^|[\W_])(~)[^\s~]/,
        end: /[^\s~](~)(?=$|[\W_])/,
      },
      { name: "CO", start: /(?:^|\W)(`)[^`]/, end: /[^`](`)(?=$|\W)/ },
    ],
    g = [
      {
        name: "LN",
        dataName: "url",
        pack: function (e) {
          return /^[a-z]+:\/\//i.test(e) || (e = "https://" + e), { url: e };
        },
        re: /(?:(?:https?|ftp):\/\/|www\.|ftp\.)[-A-Z0-9+&@#\/%=~_|$?!:,.]*[A-Z0-9+&@#\/%=~_|$]/gi,
      },
      {
        name: "MN",
        dataName: "val",
        pack: function (e) {
          return { val: e.slice(1) };
        },
        re: /\B@(\w\w+)/g,
      },
      {
        name: "HT",
        dataName: "val",
        pack: function (e) {
          return { val: e.slice(1) };
        },
        re: /\B#(\w\w+)/g,
      },
    ],
    m = {
      ST: { name: "b", isVoid: !1 },
      EM: { name: "i", isVoid: !1 },
      DL: { name: "del", isVoid: !1 },
      CO: { name: "tt", isVoid: !1 },
      BR: { name: "br", isVoid: !0 },
      LN: { name: "a", isVoid: !1 },
      MN: { name: "a", isVoid: !1 },
      HT: { name: "a", isVoid: !1 },
      IM: { name: "img", isVoid: !0 },
      FM: { name: "div", isVoid: !1 },
      RW: { name: "div", isVoid: !1 },
      BN: { name: "button", isVoid: !1 },
      HD: { name: "", isVoid: !1 },
      HL: { name: "span", isVoid: !1 },
    };
  function _(e, t, n) {
    if (!e) return null;
    try {
      const n = atob(e),
        s = n.length,
        i = new ArrayBuffer(s),
        r = new Uint8Array(i);
      for (let e = 0; e < s; e++) r[e] = n.charCodeAt(e);
      return URL.createObjectURL(new Blob([i], { type: t }));
    } catch (e) {
      n && n("Drafty: failed to convert object.", e.message);
    }
    return null;
  }
  function b(e, t) {
    return e ? "data:" + (t = t || "image/jpeg") + ";base64," + e : null;
  }
  const w = {
      ST: {
        open: function () {
          return "<b>";
        },
        close: function () {
          return "</b>";
        },
      },
      EM: {
        open: function () {
          return "<i>";
        },
        close: function () {
          return "</i>";
        },
      },
      DL: {
        open: function () {
          return "<del>";
        },
        close: function () {
          return "</del>";
        },
      },
      CO: {
        open: function () {
          return "<tt>";
        },
        close: function () {
          return "</tt>";
        },
      },
      BR: {
        open: function () {
          return "<br/>";
        },
        close: function () {
          return "";
        },
      },
      HD: {
        open: function () {
          return "";
        },
        close: function () {
          return "";
        },
      },
      HL: {
        open: function () {
          return '<span style="color:teal">';
        },
        close: function () {
          return "</span>";
        },
      },
      LN: {
        open: function (e) {
          return '<a href="' + e.url + '">';
        },
        close: function (e) {
          return "</a>";
        },
        props: function (e) {
          return e ? { href: e.url, target: "_blank" } : null;
        },
      },
      MN: {
        open: function (e) {
          return '<a href="#' + e.val + '">';
        },
        close: function (e) {
          return "</a>";
        },
        props: function (e) {
          return e ? { name: e.val } : null;
        },
      },
      HT: {
        open: function (e) {
          return '<a href="#' + e.val + '">';
        },
        close: function (e) {
          return "</a>";
        },
        props: function (e) {
          return e ? { name: e.val } : null;
        },
      },
      BN: {
        open: function (e) {
          return "<button>";
        },
        close: function (e) {
          return "</button>";
        },
        props: function (e) {
          return e
            ? {
                "data-act": e.act,
                "data-val": e.val,
                "data-name": e.name,
                "data-ref": e.ref,
              }
            : null;
        },
      },
      IM: {
        open: function (e) {
          const t = b(e._tempPreview, e.mime),
            n = _(e.val, e.mime, v.logger),
            s = e.ref || n;
          return (
            (e.name ? '<a href="' + s + '" download="' + e.name + '">' : "") +
            '<img src="' +
            (t || n) +
            '"' +
            (e.width ? ' width="' + e.width + '"' : "") +
            (e.height ? ' height="' + e.height + '"' : "") +
            ' border="0" />'
          );
        },
        close: function (e) {
          return e.name ? "</a>" : "";
        },
        props: function (e) {
          return e
            ? {
                src:
                  b(e._tempPreview, e.mime) ||
                  e.ref ||
                  _(e.val, e.mime, v.logger),
                title: e.name,
                "data-width": e.width,
                "data-height": e.height,
                "data-name": e.name,
                "data-size": e.val ? (0.75 * e.val.length) | 0 : 0 | e.size,
                "data-mime": e.mime,
              }
            : null;
        },
      },
      FM: {
        open: function (e) {
          return "<div>";
        },
        close: function (e) {
          return "</div>";
        },
      },
      RW: {
        open: function (e) {
          return "<div>";
        },
        close: function (e) {
          return "</div>";
        },
      },
    },
    v = function () {};
  (v.parse = function (e) {
    if ("string" != typeof e) return null;
    const t = e.split(/\r?\n/),
      n = [],
      s = {},
      i = [];
    t.map(function (e) {
      let t,
        r,
        o = [];
      if (
        (p.map(function (t) {
          o = o.concat(
            (function (e, t, n, s) {
              const i = [];
              let r = 0,
                o = e.slice(0);
              for (; o.length > 0; ) {
                const a = t.exec(o);
                if (null == a) break;
                let c = a.index + a[0].lastIndexOf(a[1]);
                (o = o.slice(c + 1)), (r = (c += r) + 1);
                const u = n ? n.exec(o) : null;
                if (null == u) break;
                let h = u.index + u[0].indexOf(u[1]);
                (o = o.slice(h + 1)),
                  (r = (h += r) + 1),
                  i.push({
                    text: e.slice(c + 1, h),
                    children: [],
                    start: c,
                    end: h,
                    type: s,
                  });
              }
              return i;
            })(e, t.start, t.end, t.name)
          );
        }),
        0 == o.length)
      )
        r = { txt: e };
      else {
        o.sort(function (e, t) {
          return e.start - t.start;
        }),
          (o = (function e(t) {
            if (0 == t.length) return [];
            const n = [t[0]];
            let s = t[0];
            for (let e = 1; e < t.length; e++)
              t[e].start > s.end
                ? (n.push(t[e]), (s = t[e]))
                : t[e].end < s.end && s.children.push(t[e]);
            for (let t in n) n[t].children = e(n[t].children);
            return n;
          })(o));
        const t = (function e(t, n) {
          let s = "",
            i = [];
          for (let r in t) {
            const o = t[r];
            if (!o.text) {
              const t = e(o.children, s.length + n);
              (o.text = t.txt), (i = i.concat(t.fmt));
            }
            o.type &&
              i.push({ at: s.length + n, len: o.text.length, tp: o.type }),
              (s += o.text);
          }
          return { txt: s, fmt: i };
        })(
          (function e(t, n, s, i) {
            const r = [];
            if (0 == i.length) return [];
            for (let s in i) {
              const o = i[s];
              o.start > n && r.push({ text: t.slice(n, o.start) });
              const a = { type: o.type },
                c = e(t, o.start + 1, o.end, o.children);
              c.length > 0 ? (a.children = c) : (a.text = o.text),
                r.push(a),
                (n = o.end + 1);
            }
            return n < s && r.push({ text: t.slice(n, s) }), r;
          })(e, 0, e.length, o),
          0
        );
        r = { txt: t.txt, fmt: t.fmt };
      }
      if (
        (t = (function (e) {
          let t,
            n = [];
          if (
            (g.map(function (s) {
              for (; null !== (t = s.re.exec(e)); )
                n.push({
                  offset: t.index,
                  len: t[0].length,
                  unique: t[0],
                  data: s.pack(t[0]),
                  type: s.name,
                });
            }),
            0 == n.length)
          )
            return n;
          n.sort(function (e, t) {
            return e.offset - t.offset;
          });
          let s = -1;
          return (n = n.filter(function (e) {
            const t = e.offset > s;
            return (s = e.offset + e.len), t;
          }));
        })(r.txt)).length > 0
      ) {
        const e = [];
        for (let i in t) {
          const r = t[i];
          let o = s[r.unique];
          o ||
            ((o = n.length),
            (s[r.unique] = o),
            n.push({ tp: r.type, data: r.data })),
            e.push({ at: r.offset, len: r.len, key: o });
        }
        r.ent = e;
      }
      i.push(r);
    });
    const r = { txt: "" };
    if (i.length > 0) {
      (r.txt = i[0].txt), (r.fmt = (i[0].fmt || []).concat(i[0].ent || []));
      for (let e = 1; e < i.length; e++) {
        const t = i[e],
          n = r.txt.length + 1;
        r.fmt.push({ tp: "BR", len: 1, at: n - 1 }),
          (r.txt += " " + t.txt),
          t.fmt &&
            (r.fmt = r.fmt.concat(
              t.fmt.map(function (e) {
                return (e.at += n), e;
              })
            )),
          t.ent &&
            (r.fmt = r.fmt.concat(
              t.ent.map(function (e) {
                return (e.at += n), e;
              })
            ));
      }
      0 == r.fmt.length && delete r.fmt, n.length > 0 && (r.ent = n);
    }
    return r;
  }),
    (v.init = function (e) {
      return "string" != typeof e ? null : { txt: e };
    }),
    (v.append = function (e, t) {
      if (null == e) return t;
      if (null == t) return e;
      (e.txt = e.txt || ""), (t.txt = t.txt || "");
      const n = e.txt.length;
      return (
        (e.txt += t.txt),
        Array.isArray(t.fmt) &&
          ((e.fmt = e.fmt || []),
          Array.isArray(t.ent) && (e.ent = e.ent || []),
          t.fmt.forEach((s) => {
            const i = { at: s.at + n, len: s.len };
            s.tp
              ? (i.tp = s.tp)
              : ((i.key = e.ent.length), e.ent.push(t.ent[s.key || 0])),
              e.fmt.push(i);
          })),
        e
      );
    }),
    (v.insertImage = function (e, t, n) {
      ((e = e || { txt: " " }).ent = e.ent || []),
        (e.fmt = e.fmt || []),
        e.fmt.push({ at: t, len: 1, key: e.ent.length });
      const s = {
        tp: "IM",
        data: {
          mime: n.mime,
          val: n.preview,
          width: n.width,
          height: n.height,
          name: n.filename,
          size: 0 | n.size,
          ref: n.refurl,
        },
      };
      return (
        n.urlPromise &&
          ((s.data._tempPreview = n._tempPreview),
          (s.data._processing = !0),
          n.urlPromise.then(
            (e) => {
              (s.data.ref = e),
                (s.data._tempPreview = void 0),
                (s.data._processing = void 0);
            },
            (e) => {
              s.data._processing = void 0;
            }
          )),
        e.ent.push(s),
        e
      );
    }),
    (v.appendImage = function (e, t) {
      return (
        ((e = e || { txt: "" }).txt += " "),
        v.insertImage(e, e.txt.length - 1, t)
      );
    }),
    (v.attachFile = function (e, t) {
      ((e = e || { txt: "" }).ent = e.ent || []),
        (e.fmt = e.fmt || []),
        e.fmt.push({ at: -1, len: 0, key: e.ent.length });
      const n = {
        tp: "EX",
        data: {
          mime: t.mime,
          val: t.data,
          name: t.filename,
          ref: t.refurl,
          size: 0 | t.size,
        },
      };
      return (
        t.urlPromise &&
          ((n.data._processing = !0),
          t.urlPromise.then(
            (e) => {
              (n.data.ref = e), (n.data._processing = void 0);
            },
            (e) => {
              n.data._processing = void 0;
            }
          )),
        e.ent.push(n),
        e
      );
    }),
    (v.wrapAsForm = function (e, t, n) {
      return (
        "string" == typeof e && (e = { txt: e }),
        (e.fmt = e.fmt || []),
        e.fmt.push({ at: t, len: n, tp: "FM" }),
        e
      );
    }),
    (v.insertButton = function (e, t, n, s, i, r, o) {
      return (
        "string" == typeof e && (e = { txt: e }),
        !e ||
        !e.txt ||
        e.txt.length < t + n ||
        n <= 0 ||
        -1 == ["url", "pub"].indexOf(i)
          ? null
          : "url" != i || o
          ? ((o = "" + o),
            (e.ent = e.ent || []),
            (e.fmt = e.fmt || []),
            e.fmt.push({ at: t, len: n, key: e.ent.length }),
            e.ent.push({ tp: "BN", data: { act: i, val: r, ref: o, name: s } }),
            e)
          : null
      );
    }),
    (v.appendButton = function (e, t, n, s, i, r) {
      const o = (e = e || { txt: "" }).txt.length;
      return (e.txt += t), v.insertButton(e, o, t.length, n, s, i, r);
    }),
    (v.attachJSON = function (e, t) {
      return (
        ((e = e || { txt: "" }).ent = e.ent || []),
        (e.fmt = e.fmt || []),
        e.fmt.push({ at: -1, len: 0, key: e.ent.length }),
        e.ent.push({ tp: "EX", data: { mime: "application/json", val: t } }),
        e
      );
    }),
    (v.appendLineBreak = function (e) {
      return (
        ((e = e || { txt: "" }).fmt = e.fmt || []),
        e.fmt.push({ at: e.txt.length, len: 1, tp: "BR" }),
        (e.txt += " "),
        e
      );
    }),
    (v.UNSAFE_toHTML = function (e) {
      let { txt: t, fmt: n, ent: s } = e;
      const i = [];
      if (n)
        for (let e in n) {
          const t = n[e],
            r = 0 | t.at;
          let o,
            a = t.tp;
          if (!a) {
            const e = s[0 | t.key];
            e && ((a = e.tp), (o = e.data));
          }
          w[a] &&
            (i.push({ idx: r + t.len, len: -t.len, what: w[a].close(o) }),
            i.push({ idx: r, len: t.len, what: w[a].open(o) }));
        }
      i.sort(function (e, t) {
        return t.idx == e.idx ? t.len - e.len : t.idx - e.idx;
      });
      for (let e in i)
        i[e].what &&
          ((r = t),
          (o = i[e].idx),
          (a = i[e].what),
          (t = r.slice(0, o) + a + r.slice(o)));
      var r, o, a;
      return t;
    }),
    (v.format = function (e, t, n) {
      let { txt: s, fmt: i, ent: r } = e;
      if (((s = s || ""), Array.isArray(r) || (r = []), !Array.isArray(i))) {
        if (1 != r.length) return [s];
        i = [{ at: 0, len: 0, key: 0 }];
      }
      let o = [].concat(i);
      return (
        o.map(function (e) {
          (e.at = e.at || 0),
            (e.len = e.len || 0),
            e.len < 0 && (e.len = 0),
            e.at < -1 && (e.at = -1);
        }),
        o.sort(function (e, t) {
          return e.at - t.at == 0 ? t.len - e.len : e.at - t.at;
        }),
        (o = o.map((e) => {
          let t,
            n = e.tp;
          return (
            n ||
              ((e.key = e.key || 0),
              r[e.key] && ((t = r[e.key].data), (n = r[e.key].tp))),
            { tp: (n = n || "HD"), data: t, at: e.at, len: e.len }
          );
        })),
        (function e(t, n, s, i, r, o) {
          const a = [];
          for (let s = 0; s < i.length; s++) {
            const c = i[s];
            if (c.at < 0) {
              const e = r.call(o, c.tp, c.data, void 0, a.length);
              e && a.push(e);
              continue;
            }
            n < c.at &&
              (a.push(r.call(o, null, void 0, t.slice(n, c.at), a.length)),
              (n = c.at));
            const u = [];
            for (let e = s + 1; e < i.length && i[e].at < c.at + c.len; e++)
              u.push(i[e]), (s = e);
            const h = m[c.tp] || {};
            a.push(
              r.call(
                o,
                c.tp,
                c.data,
                h.isVoid ? null : e(t, n, c.at + c.len, u, r, o),
                a.length
              )
            ),
              (n = c.at + c.len);
          }
          return (
            n < s && a.push(r.call(o, null, void 0, t.slice(n, s), a.length)), a
          );
        })(s, 0, s.length, o, t, n)
      );
    }),
    (v.toPlainText = function (e) {
      return "string" == typeof e ? e : e.txt;
    }),
    (v.isPlainText = function (e) {
      return "string" == typeof e || !(e.fmt || e.ent);
    }),
    (v.isValid = function (e) {
      if (!e) return !1;
      const { txt: t, fmt: n, ent: s } = e;
      if (!t && "" !== t && !n && !s) return !1;
      const i = typeof t;
      return !(
        ("string" != i && "undefined" != i && null !== t) ||
        (void 0 !== n && !Array.isArray(n) && null !== n) ||
        (void 0 !== s && !Array.isArray(s) && null !== s)
      );
    }),
    (v.hasAttachments = function (e) {
      if (e.ent && e.ent.length > 0)
        for (let t in e.ent)
          if (e.ent[t] && e.ent[t].data && "EX" == e.ent[t].tp) return !0;
      return !1;
    }),
    (v.attachments = function (e, t, n) {
      if (e.ent && e.ent.length > 0)
        for (let s in e.ent)
          e.ent[s] &&
            "EX" == e.ent[s].tp &&
            e.ent[s].data &&
            t.call(n, e.ent[s].data, s, "EX");
    }),
    (v.hasEntities = function (e) {
      return e.ent && e.ent.length > 0;
    }),
    (v.entities = function (e, t, n) {
      if (e.ent && e.ent.length > 0)
        for (let s in e.ent)
          e.ent[s] && t.call(n, e.ent[s].data, s, e.ent[s].tp);
    }),
    (v.getDownloadUrl = function (e) {
      let t = null;
      return (
        "application/json" != e.mime && e.val
          ? (t = _(e.val, e.mime, v.logger))
          : "string" == typeof e.ref && (t = e.ref),
        t
      );
    }),
    (v.isProcessing = function (e) {
      return !!e._processing;
    }),
    (v.getPreviewUrl = function (e) {
      return e.val ? _(e.val, e.mime, v.logger) : null;
    }),
    (v.getEntitySize = function (e) {
      return e.size ? e.size : e.val ? (0.75 * e.val.length) | 0 : 0;
    }),
    (v.getEntityMimeType = function (e) {
      return e.mime || "text/plain";
    }),
    (v.tagName = function (e) {
      return e ? (m[e] ? m[e].name : "_UNKN") : void 0;
    }),
    (v.attrValue = function (e, t) {
      if (t && w[e]) return w[e].props(t);
    }),
    (v.getContentType = function () {
      return "text/x-drafty";
    }),
    (v.preview = function (e, t) {
      if (!e || t <= 0 || "object" != typeof e) return null;
      const { txt: n, fmt: s, ent: i } = e,
        r = { txt: "" };
      "string" == typeof n && (r.txt = n.substr(0, t));
      let o = r.txt.length;
      if (Array.isArray(s) && s.length > 0) {
        const e = [];
        let t = 0,
          n = 0;
        if (
          (s.forEach((s) => {
            (s.at |= 0),
              s.at < o &&
                (t++,
                s.tp || ((s.key |= 0), e[s.key] || ((e[s.key] = n), n++)));
          }),
          0 == t)
        )
          return r;
        (r.fmt = []), Array.isArray(i) && e.length > 0 && (r.ent = []);
        let a = 0;
        s.forEach((t) => {
          if (t.at < o) {
            const n = { at: t.at, len: 0 | t.len };
            if (t.tp) n.tp = "" + t.tp;
            else {
              if (
                !(
                  Array.isArray(i) &&
                  i.length > t.key &&
                  "number" == typeof e[t.key]
                )
              )
                return;
              (n.key = e[t.key]),
                (r.ent[n.key] = (function (e) {
                  let t = { tp: e.tp };
                  if (e.data && 0 != Object.entries(e.data).length) {
                    const n = {};
                    ["mime", "name", "width", "height", "size"].forEach((t) => {
                      const s = e.data[t];
                      s && (n[t] = s);
                    }),
                      0 != Object.entries(n).length && (t.data = n);
                  }
                  return t;
                })(i[t.key]));
            }
            r.fmt[a++] = n;
          }
        });
      }
      return r;
    }),
    (f.exports = v),
    (f = f.exports);
  var M = { exports: {} };
  const { jsonParseHelper: S } = s;
  let y;
  const T = function (e, t) {
    (this._tinode = e),
      (this._version = t),
      (this._apiKey = e._apiKey),
      (this._authToken = e.getAuthToken()),
      (this._reqId = e.getNextUniqueId()),
      (this.xhr = new y()),
      (this.toResolve = null),
      (this.toReject = null),
      (this.onProgress = null),
      (this.onSuccess = null),
      (this.onFailure = null);
  };
  (T.prototype = {
    uploadWithBaseUrl: function (e, t, n, s, i, r) {
      if (!this._authToken) throw new Error("Must authenticate first");
      const o = this;
      let a = `/v${this._version}/file/u/`;
      if (e) {
        let t = e;
        if (
          (t.endsWith("/") && (t = t.slice(0, -1)),
          !t.startsWith("http://") && !t.startsWith("https://"))
        )
          throw new Error(`Invalid base URL '${e}'`);
        a = t + a;
      }
      this.xhr.open("POST", a, !0),
        this.xhr.setRequestHeader("X-Tinode-APIKey", this._apiKey),
        this.xhr.setRequestHeader(
          "X-Tinode-Auth",
          "Token " + this._authToken.token
        );
      const c = new Promise((e, t) => {
        (this.toResolve = e), (this.toReject = t);
      });
      (this.onProgress = s),
        (this.onSuccess = i),
        (this.onFailure = r),
        (this.xhr.upload.onprogress = (e) => {
          e.lengthComputable &&
            o.onProgress &&
            o.onProgress(e.loaded / e.total);
        }),
        (this.xhr.onload = function () {
          let e;
          try {
            e = JSON.parse(this.response, S);
          } catch (t) {
            o._tinode.logger(
              "ERROR: Invalid server response in LargeFileHelper",
              this.response
            ),
              (e = { ctrl: { code: this.status, text: this.statusText } });
          }
          this.status >= 200 && this.status < 300
            ? (o.toResolve && o.toResolve(e.ctrl.params.url),
              o.onSuccess && o.onSuccess(e.ctrl))
            : this.status >= 400
            ? (o.toReject &&
                o.toReject(new Error(`${e.ctrl.text} (${e.ctrl.code})`)),
              o.onFailure && o.onFailure(e.ctrl))
            : o._tinode.logger(
                "ERROR: Unexpected server response status",
                this.status,
                this.response
              );
        }),
        (this.xhr.onerror = function (e) {
          o.toReject && o.toReject(new Error("failed")),
            o.onFailure && o.onFailure(null);
        }),
        (this.xhr.onabort = function (e) {
          o.toReject && o.toReject(new Error("upload cancelled by user")),
            o.onFailure && o.onFailure(null);
        });
      try {
        const e = new FormData();
        e.append("file", t),
          e.set("id", this._reqId),
          n && e.set("topic", n),
          this.xhr.send(e);
      } catch (e) {
        this.toReject && this.toReject(e),
          this.onFailure && this.onFailure(null);
      }
      return c;
    },
    upload: function (e, t, n, s, i) {
      const r = "https://" + this._tinode._host;
      return this.uploadWithBaseUrl(r, e, t, n, s, i);
    },
    download: function (e, t, n, s, i) {
      if (!Tinode.isRelativeURL(e))
        return void (i && i(`The URL '${e}' must be relative, not absolute`));
      if (!this._authToken) return void (i && i("Must authenticate first"));
      const r = this;
      this.xhr.open("GET", e, !0),
        this.xhr.setRequestHeader("X-Tinode-APIKey", this._apiKey),
        this.xhr.setRequestHeader(
          "X-Tinode-Auth",
          "Token " + this._authToken.token
        ),
        (this.xhr.responseType = "blob"),
        (this.onProgress = s),
        (this.xhr.onprogress = function (e) {
          r.onProgress && r.onProgress(e.loaded);
        });
      const o = new Promise((e, t) => {
        (this.toResolve = e), (this.toReject = t);
      });
      (this.xhr.onload = function () {
        if (200 == this.status) {
          const e = document.createElement("a");
          (e.href = window.URL.createObjectURL(
            new Blob([this.response], { type: n })
          )),
            (e.style.display = "none"),
            e.setAttribute("download", t),
            document.body.appendChild(e),
            e.click(),
            document.body.removeChild(e),
            window.URL.revokeObjectURL(e.href),
            r.toResolve && r.toResolve();
        } else if (this.status >= 400 && r.toReject) {
          const e = new FileReader();
          (e.onload = function () {
            try {
              const e = JSON.parse(this.result, S);
              r.toReject(new Error(`${e.ctrl.text} (${e.ctrl.code})`));
            } catch (e) {
              r._tinode.logger(
                "ERROR: Invalid server response in LargeFileHelper",
                this.result
              ),
                r.toReject(e);
            }
          }),
            e.readAsText(this.response);
        }
      }),
        (this.xhr.onerror = function (e) {
          r.toReject && r.toReject(new Error("failed"));
        }),
        (this.xhr.onabort = function () {
          r.toReject && r.toReject(null);
        });
      try {
        this.xhr.send();
      } catch (e) {
        this.toReject && this.toReject(e);
      }
      return o;
    },
    cancel: function () {
      this.xhr && this.xhr.readyState < 4 && this.xhr.abort();
    },
    getId: function () {
      return this._reqId;
    },
  }),
    (T.setNetworkProvider = function (e) {
      y = e;
    }),
    (M.exports = T),
    (M = M.exports);
  var P = { exports: {} };
  const x = function (e) {
    (this.topic = e), (this.what = {});
  };
  (x.prototype = {
    _get_desc_ims: function () {
      return this.topic.updated;
    },
    _get_subs_ims: function () {
      return this.topic.isP2PType()
        ? this._get_desc_ims()
        : this.topic._lastSubsUpdate;
    },
    withData: function (e, t, n) {
      return (this.what.data = { since: e, before: t, limit: n }), this;
    },
    withLaterData: function (e) {
      return this.withData(
        this.topic._maxSeq > 0 ? this.topic._maxSeq + 1 : void 0,
        void 0,
        e
      );
    },
    withEarlierData: function (e) {
      return this.withData(
        void 0,
        this.topic._minSeq > 0 ? this.topic._minSeq : void 0,
        e
      );
    },
    withDesc: function (e) {
      return (this.what.desc = { ims: e }), this;
    },
    withLaterDesc: function () {
      return this.withDesc(this._get_desc_ims());
    },
    withSub: function (e, t, n) {
      const s = { ims: e, limit: t };
      return (
        "me" == this.topic.getType() ? (s.topic = n) : (s.user = n),
        (this.what.sub = s),
        this
      );
    },
    withOneSub: function (e, t) {
      return this.withSub(e, void 0, t);
    },
    withLaterOneSub: function (e) {
      return this.withOneSub(this.topic._lastSubsUpdate, e);
    },
    withLaterSub: function (e) {
      return this.withSub(this._get_subs_ims(), e);
    },
    withTags: function () {
      return (this.what.tags = !0), this;
    },
    withCred: function () {
      return (
        "me" == this.topic.getType()
          ? (this.what.cred = !0)
          : this.topic._tinode.logger(
              "ERROR: Invalid topic type for MetaGetBuilder:withCreds",
              this.topic.getType()
            ),
        this
      );
    },
    withDel: function (e, t) {
      return (e || t) && (this.what.del = { since: e, limit: t }), this;
    },
    withLaterDel: function (e) {
      return this.withDel(
        this.topic._maxSeq > 0 ? this.topic._maxDel + 1 : void 0,
        e
      );
    },
    extract: function (e) {
      return this.what[e];
    },
    build: function () {
      const e = [];
      let t = {};
      return (
        ["data", "sub", "desc", "tags", "cred", "del"].map((n) => {
          this.what.hasOwnProperty(n) &&
            (e.push(n),
            Object.getOwnPropertyNames(this.what[n]).length > 0 &&
              (t[n] = this.what[n]));
        }),
        e.length > 0 ? (t.what = e.join(" ")) : (t = void 0),
        t
      );
    },
  }),
    (P.exports = x),
    (P = P.exports);
  var D = { exports: {} };
  return (
    function (t) {
      (function () {
        "use strict";
        const { jsonParseHelper: r } = s;
        let o, a, c;
        "undefined" != typeof WebSocket && (o = WebSocket),
          "undefined" != typeof XMLHttpRequest && (a = XMLHttpRequest),
          "undefined" != typeof indexedDB && (c = indexedDB),
          (function () {
            const e =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            "undefined" == typeof btoa &&
              (t.btoa = function (t = "") {
                let n = t,
                  s = "";
                for (
                  let t, i = 0, r = 0, o = e;
                  n.charAt(0 | r) || ((o = "="), r % 1);
                  s += o.charAt(63 & (i >> (8 - (r % 1) * 8)))
                ) {
                  if ((t = n.charCodeAt((r += 0.75))) > 255)
                    throw new Error(
                      "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
                    );
                  i = (i << 8) | t;
                }
                return s;
              }),
              "undefined" == typeof atob &&
                (t.atob = function (t = "") {
                  let n = t.replace(/=+$/, ""),
                    s = "";
                  if (n.length % 4 == 1)
                    throw new Error(
                      "'atob' failed: The string to be decoded is not correctly encoded."
                    );
                  for (
                    let t, i = 0, r = 0, o = 0;
                    (t = n.charAt(o++));
                    ~t && ((r = i % 4 ? 64 * r + t : t), i++ % 4)
                      ? (s += String.fromCharCode(255 & (r >> ((-2 * i) & 6))))
                      : 0
                  )
                    t = e.indexOf(t);
                  return s;
                }),
              "undefined" == typeof window &&
                (t.window = {
                  WebSocket: o,
                  XMLHttpRequest: a,
                  indexedDB: c,
                  URL: {
                    createObjectURL: function () {
                      throw new Error(
                        "Unable to use URL.createObjectURL in a non-browser application"
                      );
                    },
                  },
                }),
              i.setNetworkProviders(o, a),
              M.setNetworkProvider(a),
              h.setDatabaseProvider(c);
          })();
        const u = "0.17.10",
          l = "tinodejs/" + u;
        function d(e) {
          return e instanceof Date && !isNaN(e) && 0 != e.getTime();
        }
        function p(e) {
          return btoa(
            encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
              return String.fromCharCode("0x" + t);
            })
          );
        }
        function g(t, n, s) {
          if ("object" != typeof n) {
            if (n === w.DEL_CHAR) return;
            return void 0 === n ? t : n;
          }
          if (null === n) return n;
          if (n instanceof Date && !isNaN(n))
            return !t || !(t instanceof Date) || isNaN(t) || t < n ? n : t;
          if (n instanceof e) return new e(n);
          if (n instanceof Array) return n;
          (t && t !== w.DEL_CHAR) || (t = n.constructor());
          for (let e in n)
            !n.hasOwnProperty(e) ||
              (s && s[e]) ||
              "_noForwarding" == e ||
              (t[e] = g(t[e], n[e]));
          return t;
        }
        function m(e, t, n, s) {
          return (e[t] = g(e[t], n, s)), e[t];
        }
        function _(e) {
          "string" == typeof e.created && (e.created = new Date(e.created)),
            "string" == typeof e.updated && (e.updated = new Date(e.updated)),
            "string" == typeof e.touched && (e.touched = new Date(e.touched));
        }
        function b(t, n) {
          return "string" == typeof n && n.length > 128
            ? "<" +
                n.length +
                ", bytes: " +
                n.substring(0, 12) +
                "..." +
                n.substring(n.length - 12) +
                ">"
            : (function (t, n) {
                if (n instanceof Date)
                  n = (function (e) {
                    if (!d(e)) return;
                    const t = function (e, t) {
                        return "0".repeat((t = t || 2) - ("" + e).length) + e;
                      },
                      n = e.getUTCMilliseconds();
                    return (
                      e.getUTCFullYear() +
                      "-" +
                      t(e.getUTCMonth() + 1) +
                      "-" +
                      t(e.getUTCDate()) +
                      "T" +
                      t(e.getUTCHours()) +
                      ":" +
                      t(e.getUTCMinutes()) +
                      ":" +
                      t(e.getUTCSeconds()) +
                      (n ? "." + t(n, 3) : "") +
                      "Z"
                    );
                  })(n);
                else if (n instanceof e) n = n.jsonHelper();
                else if (
                  null == n ||
                  !1 === n ||
                  (Array.isArray(n) && 0 == n.length) ||
                  ("object" == typeof n && 0 == Object.keys(n).length)
                )
                  return;
                return n;
              })(0, n);
        }
        var w = function (e, t) {
          (this._host = e.host),
            (this._secure = e.secure),
            (this._appName = e.appName || "Undefined"),
            (this._apiKey = e.apiKey),
            (this._browser = ""),
            (this._platform = e.platform || "web"),
            (this._hwos = "undefined"),
            (this._humanLanguage = "xx"),
            "undefined" != typeof navigator &&
              ((this._browser = (function (e, t) {
                e = e || "";
                let n,
                  s = "";
                /reactnative/i.test(t) && (s = "ReactNative; ");
                let i = (e = e.replace(" (KHTML, like Gecko)", "")).match(
                  /(AppleWebKit\/[.\d]+)/i
                );
                if (i) {
                  const t = ["edg", "chrome", "safari", "mobile", "version"];
                  let s,
                    r = e.substr(i.index + i[0].length).split(" "),
                    o = [];
                  for (let e = 0; e < r.length; e++) {
                    let n = /([\w.]+)[\/]([\.\d]+)/.exec(r[e]);
                    n &&
                      (o.push([
                        n[1],
                        n[2],
                        t.findIndex((e) => n[1].toLowerCase().startsWith(e)),
                      ]),
                      "Version" == n[1] && (s = n[2]));
                  }
                  o.sort((e, t) => e[2] - t[2]),
                    o.length > 0
                      ? (o[0][0].toLowerCase().startsWith("edg")
                          ? (o[0][0] = "Edge")
                          : "OPR" == o[0][0]
                          ? (o[0][0] = "Opera")
                          : "Safari" == o[0][0] && s && (o[0][1] = s),
                        (n = o[0][0] + "/" + o[0][1]))
                      : (n = i[1]);
                } else
                  n = /firefox/i.test(e)
                    ? (i = /Firefox\/([.\d]+)/g.exec(e))
                      ? "Firefox/" + i[1]
                      : "Firefox/?"
                    : (i = /([\w.]+)\/([.\d]+)/.exec(e))
                    ? i[1] + "/" + i[2]
                    : (i = e.split(" "))[0];
                if ((i = n.split("/")).length > 1) {
                  const e = i[1].split("."),
                    t = e[1] ? "." + e[1].substr(0, 2) : "";
                  n = `${i[0]}/${e[0]}${t}`;
                }
                return s + n;
              })(navigator.userAgent, navigator.product)),
              (this._hwos = navigator.platform),
              (this._humanLanguage = navigator.language || "en-US")),
            (this._loggingEnabled = !1),
            (this._trimLongStrings = !1),
            (this._myUID = null),
            (this._authenticated = !1),
            (this._login = null),
            (this._authToken = null),
            (this._inPacketCount = 0),
            (this._messageId = Math.floor(65535 * Math.random() + 65535)),
            (this._serverInfo = null),
            (this._deviceToken = null),
            (this._pendingPromises = {}),
            (this._expirePromises = null),
            (this.logger = (e, ...t) => {
              if (this._loggingEnabled) {
                const n = new Date(),
                  s =
                    ("0" + n.getUTCHours()).slice(-2) +
                    ":" +
                    ("0" + n.getUTCMinutes()).slice(-2) +
                    ":" +
                    ("0" + n.getUTCSeconds()).slice(-2) +
                    "." +
                    ("00" + n.getUTCMilliseconds()).slice(-3);
                console.log("[" + s + "]", e, t.join(" "));
              }
            }),
            (i.logger = this.logger),
            (f.logger = this.logger),
            "lp" != e.transport &&
              "ws" != e.transport &&
              (e.transport = (function () {
                if ("object" == typeof window) {
                  if (window.WebSocket) return "ws";
                  if (window.XMLHttpRequest) return "lp";
                }
                return null;
              })()),
            (this._connection = new i(e, "0", !0)),
            (this._cache = {});
          const n = (this.cachePut = (e, t, n) => {
              this._cache[e + ":" + t] = n;
            }),
            s = (this.cacheGet = (e, t) => this._cache[e + ":" + t]),
            o = (this.cacheDel = (e, t) => {
              delete this._cache[e + ":" + t];
            }),
            a = (this.cacheMap = (e, t, n) => {
              const s = e ? e + ":" : void 0;
              for (let e in this._cache)
                if ((!s || 0 == e.indexOf(s)) && t.call(n, this._cache[e], e))
                  break;
            });
          if (
            ((this.attachCacheToTopic = (e) => {
              (e._tinode = this),
                (e._cacheGetUser = (e) => {
                  const t = s("user", e);
                  if (t) return { user: e, public: g({}, t) };
                }),
                (e._cachePutUser = (e, t) => n("user", e, g({}, t.public))),
                (e._cacheDelUser = (e) => o("user", e)),
                (e._cachePutSelf = () => n("topic", e.name, e)),
                (e._cacheDelSelf = () => o("topic", e.name));
            }),
            (this._persist = e.persist),
            (this._db = h((e) => {
              this.logger("DB", e);
            }, this.logger)),
            this._persist)
          ) {
            const e = [];
            this._db
              .initDatabase()
              .then(() =>
                this._db.mapTopics((t) => {
                  let n = this.cacheGet("topic", t.name);
                  n ||
                    ((n =
                      "me" == t.name
                        ? new S()
                        : "fnd" == t.name
                        ? new y()
                        : new v(t.name)),
                    this._db.deserializeTopic(n, t),
                    this.attachCacheToTopic(n),
                    n._cachePutSelf(),
                    e.push(n._loadMessages(this._db)));
                })
              )
              .then(() =>
                this._db.mapUsers((e) => n("user", e.uid, g({}, e.public)))
              )
              .then(() => Promise.all(e))
              .then(() => {
                t && t(), this.logger("Persistent cache initialized.");
              });
          } else
            this._db.deleteDatabase().then(() => {
              t && t();
            });
          const c = (e, t, n, s) => {
              const i = this._pendingPromises[e];
              i &&
                (delete this._pendingPromises[e],
                t >= 200 && t < 400
                  ? i.resolve && i.resolve(n)
                  : i.reject && i.reject(new Error(`${s} (${t})`)));
            },
            p = (e) => {
              let t = null;
              return (
                e &&
                  (t = new Promise((t, n) => {
                    this._pendingPromises[e] = {
                      resolve: t,
                      reject: n,
                      ts: new Date(),
                    };
                  })),
                t
              );
            },
            m = (this.getNextUniqueId = () =>
              0 != this._messageId ? "" + this._messageId++ : void 0),
            _ = () =>
              this._appName +
              " (" +
              (this._browser ? this._browser + "; " : "") +
              this._hwos +
              "); " +
              l;
          (this.initPacket = (e, t) => {
            switch (e) {
              case "hi":
                return {
                  hi: {
                    id: m(),
                    ver: u,
                    ua: _(),
                    dev: this._deviceToken,
                    lang: this._humanLanguage,
                    platf: this._platform,
                  },
                };
              case "acc":
                return {
                  acc: {
                    id: m(),
                    user: null,
                    scheme: null,
                    secret: null,
                    login: !1,
                    tags: null,
                    desc: {},
                    cred: {},
                  },
                };
              case "login":
                return { login: { id: m(), scheme: null, secret: null } };
              case "sub":
                return { sub: { id: m(), topic: t, set: {}, get: {} } };
              case "leave":
                return { leave: { id: m(), topic: t, unsub: !1 } };
              case "pub":
                return {
                  pub: {
                    id: m(),
                    topic: t,
                    noecho: !1,
                    head: null,
                    content: {},
                  },
                };
              case "get":
                return {
                  get: {
                    id: m(),
                    topic: t,
                    what: null,
                    desc: {},
                    sub: {},
                    data: {},
                  },
                };
              case "set":
                return {
                  set: { id: m(), topic: t, desc: {}, sub: {}, tags: [] },
                };
              case "del":
                return {
                  del: {
                    id: m(),
                    topic: t,
                    what: null,
                    delseq: null,
                    user: null,
                    hard: !1,
                  },
                };
              case "note":
                return { note: { topic: t, what: null, seq: void 0 } };
              default:
                throw new Error("Unknown packet type requested: " + e);
            }
          }),
            (this.send = (e, t) => {
              let n;
              t && (n = p(t)),
                (e = (function e(t) {
                  return (
                    Object.keys(t).forEach((n) => {
                      "_" == n[0]
                        ? delete t[n]
                        : t[n]
                        ? Array.isArray(t[n]) && 0 == t[n].length
                          ? delete t[n]
                          : t[n]
                          ? t[n] instanceof Date
                            ? d(t[n]) || delete t[n]
                            : "object" == typeof t[n] &&
                              (e(t[n]),
                              0 == Object.getOwnPropertyNames(t[n]).length &&
                                delete t[n])
                          : delete t[n]
                        : delete t[n];
                    }),
                    t
                  );
                })(e));
              let s = JSON.stringify(e);
              this.logger(
                "out: " + (this._trimLongStrings ? JSON.stringify(e, b) : s)
              );
              try {
                this._connection.sendText(s);
              } catch (e) {
                if (!t) throw e;
                c(t, i.NETWORK_ERROR, null, e.message);
              }
              return n;
            }),
            (this.loginSuccessful = (e) =>
              e.params && e.params.user
                ? ((this._myUID = e.params.user),
                  (this._authenticated = e && e.code >= 200 && e.code < 300),
                  e.params && e.params.token
                    ? (this._authToken = {
                        token: e.params.token,
                      })
                    : (this._authToken = null),
                  this.onLogin && this.onLogin(e.code, e.text),
                  e)
                : e),
            (this._connection.onMessage = (e) => {
              if (!e) return;
              if (
                (this._inPacketCount++,
                this.onRawMessage && this.onRawMessage(e),
                "0" === e)
              )
                return void (this.onNetworkProbe && this.onNetworkProbe());
              let t = JSON.parse(e, r);
              t
                ? (this.logger(
                    "in: " + (this._trimLongStrings ? JSON.stringify(t, b) : e)
                  ),
                  this.onMessage && this.onMessage(t),
                  t.ctrl
                    ? (this.onCtrlMessage && this.onCtrlMessage(t.ctrl),
                      t.ctrl.id &&
                        c(t.ctrl.id, t.ctrl.code, t.ctrl, t.ctrl.text),
                      setTimeout(() => {
                        if (205 == t.ctrl.code && "evicted" == t.ctrl.text) {
                          const e = s("topic", t.ctrl.topic);
                          e &&
                            (e._resetSub(),
                            t.ctrl.params && t.ctrl.params.unsub && e._gone());
                        } else if (t.ctrl.code < 300 && t.ctrl.params)
                          if ("data" == t.ctrl.params.what) {
                            const e = s("topic", t.ctrl.topic);
                            e && e._allMessagesReceived(t.ctrl.params.count);
                          } else if ("sub" == t.ctrl.params.what) {
                            const e = s("topic", t.ctrl.topic);
                            e && e._processMetaSub([]);
                          }
                      }, 0))
                    : setTimeout(() => {
                        if (t.meta) {
                          const e = s("topic", t.meta.topic);
                          e && e._routeMeta(t.meta),
                            t.meta.id && c(t.meta.id, 200, t.meta, "META"),
                            this.onMetaMessage && this.onMetaMessage(t.meta);
                        } else if (t.data) {
                          const e = s("topic", t.data.topic);
                          e && e._routeData(t.data),
                            this.onDataMessage && this.onDataMessage(t.data);
                        } else if (t.pres) {
                          const e = s("topic", t.pres.topic);
                          e && e._routePres(t.pres),
                            this.onPresMessage && this.onPresMessage(t.pres);
                        } else if (t.info) {
                          const e = s("topic", t.info.topic);
                          e && e._routeInfo(t.info),
                            this.onInfoMessage && this.onInfoMessage(t.info);
                        } else this.logger("ERROR: Unknown packet received.");
                      }, 0))
                : (this.logger("in: " + e),
                  this.logger("ERROR: failed to parse data"));
            }),
            (this._connection.onOpen = () => {
              this._expirePromises ||
                (this._expirePromises = setInterval(() => {
                  const e = new Error("Timeout (504)"),
                    t = new Date(new Date().getTime() - 5e3);
                  for (let n in this._pendingPromises) {
                    let s = this._pendingPromises[n];
                    s &&
                      s.ts < t &&
                      (this.logger("Promise expired", n),
                      delete this._pendingPromises[n],
                      s.reject && s.reject(e));
                  }
                }, 1e3)),
                this.hello();
            }),
            (this._connection.onAutoreconnectIteration = (e, t) => {
              this.onAutoreconnectIteration &&
                this.onAutoreconnectIteration(e, t);
            }),
            (this._connection.onDisconnect = (e, t) => {
              (this._inPacketCount = 0),
                (this._serverInfo = null),
                (this._authenticated = !1),
                this._expirePromises &&
                  (clearInterval(this._expirePromises),
                  (this._expirePromises = null)),
                a("topic", (e, t) => {
                  e._resetSub();
                });
              for (let t in this._pendingPromises) {
                const n = this._pendingPromises[t];
                n && n.reject && n.reject(e);
              }
              (this._pendingPromises = {}),
                this.onDisconnect && this.onDisconnect(e);
            });
        };
        (w.credential = function (e, t, n, s) {
          return (
            "object" == typeof e &&
              ({ val: t, params: n, resp: s, meth: e } = e),
            e && (t || s) ? [{ meth: e, val: t, resp: s, params: n }] : null
          );
        }),
          (w.topicType = function (e) {
            return {
              me: "me",
              fnd: "fnd",
              grp: "grp",
              new: "grp",
              nch: "grp",
              chn: "grp",
              usr: "p2p",
              sys: "sys",
            }["string" == typeof e ? e.substring(0, 3) : "xxx"];
          }),
          (w.isMeTopicName = function (e) {
            return "me" == w.topicType(e);
          }),
          (w.isGroupTopicName = function (e) {
            return "grp" == w.topicType(e);
          }),
          (w.isP2PTopicName = function (e) {
            return "p2p" == w.topicType(e);
          }),
          (w.isCommTopicName = function (e) {
            return w.isP2PTopicName(e) || w.isGroupTopicName(e);
          }),
          (w.isNewGroupTopicName = function (e) {
            return (
              "string" == typeof e &&
              ("new" == e.substring(0, 3) || "nch" == e.substring(0, 3))
            );
          }),
          (w.isChannelTopicName = function (e) {
            return (
              "string" == typeof e &&
              ("chn" == e.substring(0, 3) || "nch" == e.substring(0, 3))
            );
          }),
          (w.getVersion = function () {
            return u;
          }),
          (w.setNetworkProviders = function (e, t) {
            (o = e), (a = t);
          }),
          (w.setDatabaseProvider = function (e) {
            c = e;
          }),
          (w.getLibrary = function () {
            return l;
          }),
          (w.MESSAGE_STATUS_NONE = 0),
          (w.MESSAGE_STATUS_QUEUED = 1),
          (w.MESSAGE_STATUS_SENDING = 2),
          (w.MESSAGE_STATUS_FAILED = 3),
          (w.MESSAGE_STATUS_SENT = 4),
          (w.MESSAGE_STATUS_RECEIVED = 5),
          (w.MESSAGE_STATUS_READ = 6),
          (w.MESSAGE_STATUS_TO_ME = 7),
          (w.MESSAGE_STATUS_DEL_RANGE = 8),
          (w.DEL_CHAR = "␡"),
          (w.isNullValue = function (e) {
            return e === w.DEL_CHAR;
          }),
          (w.isRelativeURL = function (e) {
            return !/^\s*([a-z][a-z0-9+.-]*:|\/\/)/im.test(e);
          }),
          (w.MAX_MESSAGE_SIZE = "maxMessageSize"),
          (w.MAX_SUBSCRIBER_COUNT = "maxSubscriberCount"),
          (w.MAX_TAG_COUNT = "maxTagCount"),
          (w.MAX_FILE_UPLOAD_SIZE = "maxFileUploadSize"),
          (w.prototype = {
            connect: function (e) {
              return this._connection.connect(e);
            },
            reconnect: function (e) {
              this._connection.reconnect(e);
            },
            disconnect: function () {
              this._connection.disconnect();
            },
            clearStorage: function () {
              return this._db.isReady()
                ? this._db.deleteDatabase()
                : Promise.resolve();
            },
            initStorage: function () {
              return this._db.isReady()
                ? Promise.resolve()
                : this._db.initDatabase();
            },
            networkProbe: function () {
              this._connection.probe();
            },
            isConnected: function () {
              return this._connection.isConnected();
            },
            isAuthenticated: function () {
              return this._authenticated;
            },
            authorizeURL: function (e) {
              if (!e) return e;
              if (w.isRelativeURL(e)) {
                const t = "scheme://host/",
                  n = new URL(e, t);
                this._apiKey && n.searchParams.append("apikey", this._apiKey),
                  this._authToken.token &&
                    (n.searchParams.append("auth", "token"),
                    n.searchParams.append("secret", this._authToken.token)),
                  (e = n.toString().substring(t.length - 1));
              }
              return e;
            },
            account: function (e, t, n, s, i) {
              const r = this.initPacket("acc");
              return (
                (r.acc.user = e),
                (r.acc.scheme = t),
                (r.acc.secret = n),
                (r.acc.login = s),
                i &&
                  ((r.acc.desc.defacs = i.defacs),
                  (r.acc.desc.public = i.public),
                  (r.acc.desc.private = i.private),
                  (r.acc.tags = i.tags),
                  (r.acc.cred = i.cred),
                  (r.acc.token = i.token)),
                this.send(r, r.acc.id)
              );
            },
            createAccount: function (e, t, n, s) {
              let i = this.account("new", e, t, n, s);
              return n && (i = i.then((e) => this.loginSuccessful(e))), i;
            },
            createAccountBasic: function (e, t, n) {
              return (
                (e = e || ""),
                (t = t || ""),
                this.createAccount("basic", p(e + ":" + t), !0, n)
              );
            },
            updateAccountBasic: function (e, t, n, s) {
              return (
                (t = t || ""),
                (n = n || ""),
                this.account(e, "basic", p(t + ":" + n), !1, s)
              );
            },
            hello: function () {
              const e = this.initPacket("hi");
              return this.send(e, e.hi.id)
                .then(
                  (e) => (
                    this._connection.backoffReset(),
                    e.params && (this._serverInfo = e.params),
                    this.onConnect && this.onConnect(),
                    e
                  )
                )
                .catch((e) => {
                  this._connection.reconnect(!0),
                    this.onDisconnect && this.onDisconnect(e);
                });
            },
            setDeviceToken: function (e) {
              let t = !1;
              return (
                (e = e || null) != this._deviceToken &&
                  ((this._deviceToken = e),
                  this.isConnected() &&
                    this.isAuthenticated() &&
                    (this.send({ hi: { dev: e || w.DEL_CHAR } }), (t = !0))),
                t
              );
            },
            login: function (e, t, n) {
              const s = this.initPacket("login");
              return (
                (s.login.scheme = e),
                (s.login.secret = t),
                (s.login.cred = n),
                this.send(s, s.login.id).then((e) => this.loginSuccessful(e))
              );
            },
            loginBasic: function (e, t, n) {
              return this.login("basic", p(e + ":" + t), n).then(
                (t) => ((this._login = e), t)
              );
            },
            loginToken: function (e, t) {
              return this.login("token", e, t);
            },
            requestResetAuthSecret: function (e, t, n) {
              return this.login("reset", p(e + ":" + t + ":" + n));
            },
            // getAuthToken: function () {
            //   return this._authToken &&
            //     this._authToken.expires.getTime() > Date.now()
            //     ? this._authToken
            //     : ((this._authToken = null), null);
            // },
            getAuthToken: function () {
              return localStorage.getItem("access_token") &&
                localStorage.getItem("access_token") != "" &&
                localStorage.getItem("access_token") != null
                ? (this._authToken = localStorage.getItem("access_token"))
                : ((this._authToken = null), null);
            },
            setAuthToken: function (e) {
              this._authToken = e;
            },
            subscribe: function (e, t, n) {
              const s = this.initPacket("sub", e);
              return (
                e || (e = "new"),
                (s.sub.get = t),
                n &&
                  (n.sub && (s.sub.set.sub = n.sub),
                  n.desc &&
                    (w.isNewGroupTopicName(e)
                      ? (s.sub.set.desc = n.desc)
                      : w.isP2PTopicName(e) &&
                        n.desc.defacs &&
                        (s.sub.set.desc = { defacs: n.desc.defacs })),
                  n.tags && (s.sub.set.tags = n.tags)),
                this.send(s, s.sub.id)
              );
            },
            leave: function (e, t) {
              const n = this.initPacket("leave", e);
              return (n.leave.unsub = t), this.send(n, n.leave.id);
            },
            createMessage: function (e, t, n) {
              const s = this.initPacket("pub", e);
              let i = "string" == typeof t ? f.parse(t) : t;
              return (
                i &&
                  !f.isPlainText(i) &&
                  ((s.pub.head = { mime: f.getContentType() }), (t = i)),
                (s.pub.noecho = n),
                (s.pub.content = t),
                s.pub
              );
            },
            publish: function (e, t, n) {
              return this.publishMessage(this.createMessage(e, t, n));
            },
            publishMessage: function (e) {
              return (
                ((e = Object.assign({}, e)).seq = void 0),
                (e.from = void 0),
                (e.ts = void 0),
                this.send({ pub: e }, e.id)
              );
            },
            oobNotification: function (e, t, n) {
              const s = this.cacheGet("topic", e);
              s &&
                (s._updateReceived(t, n),
                this.getMeTopic()._refreshContact("msg", s));
            },
            getMeta: function (e, t) {
              const n = this.initPacket("get", e);
              return (n.get = g(n.get, t)), this.send(n, n.get.id);
            },
            setMeta: function (e, t) {
              const n = this.initPacket("set", e),
                s = [];
              return (
                t &&
                  ["desc", "sub", "tags", "cred"].map(function (e) {
                    t.hasOwnProperty(e) && (s.push(e), (n.set[e] = t[e]));
                  }),
                0 == s.length
                  ? Promise.reject(new Error("Invalid {set} parameters"))
                  : this.send(n, n.set.id)
              );
            },
            delMessages: function (e, t, n) {
              const s = this.initPacket("del", e);
              return (
                (s.del.what = "msg"),
                (s.del.delseq = t),
                (s.del.hard = n),
                this.send(s, s.del.id)
              );
            },
            delTopic: function (e, t) {
              const n = this.initPacket("del", e);
              return (
                (n.del.what = "topic"), (n.del.hard = t), this.send(n, n.del.id)
              );
            },
            delSubscription: function (e, t) {
              const n = this.initPacket("del", e);
              return (
                (n.del.what = "sub"), (n.del.user = t), this.send(n, n.del.id)
              );
            },
            delCredential: function (e, t) {
              const n = this.initPacket("del", "me");
              return (
                (n.del.what = "cred"),
                (n.del.cred = { meth: e, val: t }),
                this.send(n, n.del.id)
              );
            },
            delCurrentUser: function (e) {
              const t = this.initPacket("del", null);
              return (
                (t.del.what = "user"),
                (t.del.hard = e),
                this.send(t, t.del.id).then((e) => {
                  this._myUID = null;
                })
              );
            },
            note: function (e, t, n) {
              if (n <= 0 || n >= 268435455)
                throw new Error("Invalid message id " + n);
              const s = this.initPacket("note", e);
              (s.note.what = t), (s.note.seq = n), this.send(s);
            },
            noteKeyPress: function (e) {
              const t = this.initPacket("note", e);
              (t.note.what = "kp"), this.send(t);
            },
            getTopic: function (e) {
              let t = this.cacheGet("topic", e);
              return (
                !t &&
                  e &&
                  ((t = "me" == e ? new S() : "fnd" == e ? new y() : new v(e)),
                  this.attachCacheToTopic(t),
                  t._cachePutSelf()),
                t
              );
            },
            isTopicCached: function (e) {
              return !!this.cacheGet("topic", e);
            },
            newGroupTopicName: function (e) {
              return (e ? "nch" : "new") + this.getNextUniqueId();
            },
            getMeTopic: function () {
              return this.getTopic("me");
            },
            getFndTopic: function () {
              return this.getTopic("fnd");
            },
            getLargeFileHelper: function () {
              return new M(this, "0");
            },
            getCurrentUserID: function () {
              return this._myUID;
            },
            isMe: function (e) {
              return this._myUID === e;
            },
            getCurrentLogin: function () {
              return this._login;
            },
            getServerInfo: function () {
              return this._serverInfo;
            },
            getServerLimit: function (e, t) {
              return (this._serverInfo ? this._serverInfo[e] : null) || t;
            },
            enableLogging: function (e, t) {
              (this._loggingEnabled = e), (this._trimLongStrings = e && t);
            },
            setHumanLanguage: function (e) {
              e && (this._humanLanguage = e);
            },
            isTopicOnline: function (e) {
              const t = this.cacheGet("topic", e);
              return t && t.online;
            },
            getTopicAccessMode: function (e) {
              const t = this.cacheGet("topic", e);
              return t ? t.acs : null;
            },
            wantAkn: function (e) {
              this._messageId = e
                ? Math.floor(16777215 * Math.random() + 16777215)
                : 0;
            },
            onWebsocketOpen: void 0,
            onConnect: void 0,
            onDisconnect: void 0,
            onLogin: void 0,
            onCtrlMessage: void 0,
            onDataMessage: void 0,
            onPresMessage: void 0,
            onMessage: void 0,
            onRawMessage: void 0,
            onNetworkProbe: void 0,
            onAutoreconnectIteration: void 0,
          });
        const v = function (t, s) {
          (this._tinode = null),
            (this.name = t),
            (this.created = null),
            (this.updated = null),
            (this.touched = new Date(0)),
            (this.acs = new e(null)),
            (this.private = null),
            (this.public = null),
            (this._users = {}),
            (this._queuedSeqId = 268435455),
            (this._maxSeq = 0),
            (this._minSeq = 0),
            (this._noEarlierMsgs = !1),
            (this._maxDel = 0),
            (this._tags = []),
            (this._credentials = []),
            (this._messages = n(function (e, t) {
              return e.seq - t.seq;
            }, !0)),
            (this._subscribed = !1),
            (this._lastSubsUpdate = new Date(0)),
            (this._new = !0),
            s &&
              ((this.onData = s.onData),
              (this.onMeta = s.onMeta),
              (this.onPres = s.onPres),
              (this.onInfo = s.onInfo),
              (this.onMetaDesc = s.onMetaDesc),
              (this.onMetaSub = s.onMetaSub),
              (this.onSubsUpdated = s.onSubsUpdated),
              (this.onTagsUpdated = s.onTagsUpdated),
              (this.onCredsUpdated = s.onCredsUpdated),
              (this.onDeleteTopic = s.onDeleteTopic),
              (this.onAllMessagesReceived = s.onAllMessagesReceived));
        };
        v.prototype = {
          isSubscribed: function () {
            return this._subscribed;
          },
          subscribe: function (e, t) {
            return this._subscribed
              ? Promise.resolve(this)
              : this._tinode.subscribe(this.name || "new", e, t).then((e) => {
                  if (e.code >= 300) return e;
                  if (
                    ((this._subscribed = !0),
                    (this.acs =
                      e.params && e.params.acs ? e.params.acs : this.acs),
                    this._new)
                  ) {
                    if (
                      ((this._new = !1),
                      this.name != e.topic &&
                        (this._cacheDelSelf(), (this.name = e.topic)),
                      this._cachePutSelf(),
                      (this.created = e.ts),
                      (this.updated = e.ts),
                      "me" != this.name && "fnd" != this.name)
                    ) {
                      const e = this._tinode.getMeTopic();
                      e.onMetaSub && e.onMetaSub(this),
                        e.onSubsUpdated && e.onSubsUpdated([this.name], 1);
                    }
                    t &&
                      t.desc &&
                      ((t.desc._noForwarding = !0),
                      this._processMetaDesc(t.desc));
                  }
                  return e;
                });
          },
          createMessage: function (e, t) {
            return this._tinode.createMessage(this.name, e, t);
          },
          publish: function (e, t) {
            return this.publishMessage(this.createMessage(e, t));
          },
          publishMessage: function (e) {
            if (!this._subscribed)
              return Promise.reject(
                new Error("Cannot publish on inactive topic")
              );
            if (f.hasEntities(e.content) && !e.head.attachments) {
              const t = [];
              f.entities(e.content, (e) => {
                e && e.ref && t.push(e.ref);
              }),
                t.length > 0 && (e.head.attachments = t);
            }
            return (
              (e._sending = !0),
              (e._failed = !1),
              this._tinode
                .publishMessage(e)
                .then(
                  (t) => (
                    (e._sending = !1),
                    (e.ts = t.ts),
                    this.swapMessageId(e, t.params.seq),
                    this._routeData(e),
                    t
                  )
                )
                .catch((t) => {
                  this._tinode.logger(
                    "WARNING: Message rejected by the server",
                    t
                  ),
                    (e._sending = !1),
                    (e._failed = !0),
                    this.onData && this.onData();
                })
            );
          },
          publishDraft: function (e, t) {
            if (!t && !this._subscribed)
              return Promise.reject(
                new Error("Cannot publish on inactive topic")
              );
            const n = e.seq || this._getQueuedSeqId();
            return (
              e._noForwarding ||
                ((e._noForwarding = !0),
                (e.seq = n),
                (e.ts = new Date()),
                (e.from = this._tinode.getCurrentUserID()),
                (e.noecho = !0),
                this._messages.put(e),
                this._tinode._db.addMessage(e),
                this.onData && this.onData(e)),
              (t || Promise.resolve()).then(
                () =>
                  e._cancelled
                    ? { code: 300, text: "cancelled" }
                    : this.publishMessage(e),
                (t) => {
                  this._tinode.logger("WARNING: Message draft rejected", t),
                    (e._sending = !1),
                    (e._failed = !0),
                    this._messages.delAt(this._messages.find(e)),
                    this._tinode._db.remMessages(this.name, e.seq),
                    this.onData && this.onData();
                }
              )
            );
          },
          leave: function (e) {
            return this._subscribed || e
              ? this._tinode
                  .leave(this.name, e)
                  .then((t) => (this._resetSub(), e && this._gone(), t))
              : Promise.reject(new Error("Cannot leave inactive topic"));
          },
          getMeta: function (e) {
            return this._tinode.getMeta(this.name, e);
          },
          getMessagesPage: function (e, t) {
            let n = t
              ? this.startMetaQuery().withLaterData(e)
              : this.startMetaQuery().withEarlierData(e);
            return this._loadMessages(this._tinode._db, n.extract("data")).then(
              (s) => {
                if (s == e)
                  return Promise.resolve({
                    topic: this.name,
                    code: 200,
                    params: { count: s },
                  });
                (e -= s),
                  (n = t
                    ? this.startMetaQuery().withLaterData(e)
                    : this.startMetaQuery().withEarlierData(e));
                let i = this.getMeta(n.build());
                return (
                  t ||
                    (i = i.then((e) => {
                      e &&
                        e.params &&
                        !e.params.count &&
                        (this._noEarlierMsgs = !0);
                    })),
                  i
                );
              }
            );
          },
          setMeta: function (e) {
            return (
              e.tags &&
                (e.tags = (function (e) {
                  let t = [];
                  if (Array.isArray(e)) {
                    for (let n = 0, s = e.length; n < s; n++) {
                      let s = e[n];
                      s && (s = s.trim().toLowerCase()).length > 1 && t.push(s);
                    }
                    t.sort().filter(function (e, t, n) {
                      return !t || e != n[t - 1];
                    });
                  }
                  return 0 == t.length && t.push(w.DEL_CHAR), t;
                })(e.tags)),
              this._tinode
                .setMeta(this.name, e)
                .then(
                  (t) => (
                    (t && t.code >= 300) ||
                      (e.sub &&
                        ((e.sub.topic = this.name),
                        t.params &&
                          t.params.acs &&
                          ((e.sub.acs = t.params.acs), (e.sub.updated = t.ts)),
                        e.sub.user ||
                          ((e.sub.user = this._tinode.getCurrentUserID()),
                          e.desc || (e.desc = {})),
                        (e.sub._noForwarding = !0),
                        this._processMetaSub([e.sub])),
                      e.desc &&
                        (t.params &&
                          t.params.acs &&
                          ((e.desc.acs = t.params.acs),
                          (e.desc.updated = t.ts)),
                        this._processMetaDesc(e.desc)),
                      e.tags && this._processMetaTags(e.tags),
                      e.cred && this._processMetaCreds([e.cred], !0)),
                    t
                  )
                )
            );
          },
          updateMode: function (e, t) {
            const n = e ? this.subscriber(e) : null,
              s = n
                ? n.acs.updateGiven(t).getGiven()
                : this.getAccessMode().updateWant(t).getWant();
            return this.setMeta({ sub: { user: e, mode: s } });
          },
          invite: function (e, t) {
            return this.setMeta({ sub: { user: e, mode: t } });
          },
          archive: function (e) {
            return this.private && !this.private.arch == !e
              ? Promise.resolve(e)
              : this.setMeta({
                  desc: { private: { arch: !!e || w.DEL_CHAR } },
                });
          },
          delMessages: function (e, t) {
            if (!this._subscribed)
              return Promise.reject(
                new Error("Cannot delete messages in inactive topic")
              );
            e.sort(
              (e, t) =>
                e.low < t.low || (e.low == t.low && (!t.hi || e.hi >= t.hi))
            );
            let n,
              s = e.reduce(
                (e, t) => (
                  t.low < 268435455 &&
                    (!t.hi || t.hi < 268435455
                      ? e.push(t)
                      : e.push({ low: t.low, hi: this._maxSeq + 1 })),
                  e
                ),
                []
              );
            return (n =
              s.length > 0
                ? this._tinode.delMessages(this.name, s, t)
                : Promise.resolve({ params: { del: 0 } })).then(
              (t) => (
                t.params.del > this._maxDel && (this._maxDel = t.params.del),
                e.map((e) => {
                  e.hi
                    ? this.flushMessageRange(e.low, e.hi)
                    : this.flushMessage(e.low);
                }),
                this._updateDeletedRanges(),
                this.onData && this.onData(),
                t
              )
            );
          },
          delMessagesAll: function (e) {
            return !this._maxSeq || this._maxSeq <= 0
              ? Promise.resolve()
              : this.delMessages(
                  [{ low: 1, hi: this._maxSeq + 1, _all: !0 }],
                  e
                );
          },
          delMessagesList: function (e, t) {
            e.sort((e, t) => e - t);
            let n = e.reduce((e, t) => {
              if (0 == e.length) e.push({ low: t });
              else {
                let n = e[e.length - 1];
                (!n.hi && t != n.low + 1) || t > n.hi
                  ? e.push({ low: t })
                  : (n.hi = n.hi ? Math.max(n.hi, t + 1) : t + 1);
              }
              return e;
            }, []);
            return this.delMessages(n, t);
          },
          delTopic: function (e) {
            return this._tinode
              .delTopic(this.name, e)
              .then((e) => (this._resetSub(), this._gone(), e));
          },
          delSubscription: function (e) {
            return this._subscribed
              ? this._tinode
                  .delSubscription(this.name, e)
                  .then(
                    (t) => (
                      delete this._users[e],
                      this.onSubsUpdated &&
                        this.onSubsUpdated(Object.keys(this._users)),
                      t
                    )
                  )
              : Promise.reject(
                  new Error("Cannot delete subscription in inactive topic")
                );
          },
          note: function (e, t) {
            if (!this._subscribed) return;
            const n = this._users[this._tinode.getCurrentUserID()];
            let s = !1;
            n
              ? (!n[e] || n[e] < t) && ((n[e] = t), (s = !0))
              : (s = (0 | this[e]) < t),
              s &&
                (this._tinode.note(this.name, e, t),
                this._updateReadRecv(e, t),
                null != this.acs && !this.acs.isMuted()) &&
                this._tinode.getMeTopic()._refreshContact(e, this);
          },
          noteRecv: function (e) {
            this.note("recv", e);
          },
          noteRead: function (e) {
            (e = e || this._maxSeq) > 0 && this.note("read", e);
          },
          noteKeyPress: function () {
            this._subscribed
              ? this._tinode.noteKeyPress(this.name)
              : this._tinode.logger(
                  "INFO: Cannot send notification in inactive topic"
                );
          },
          _updateReadRecv: function (e, t, n) {
            let s,
              i = !1;
            switch (
              ((t |= 0),
              (this.seq = 0 | this.seq),
              (this.read = 0 | this.read),
              (this.recv = 0 | this.recv),
              e)
            ) {
              case "recv":
                (s = this.recv),
                  (this.recv = Math.max(this.recv, t)),
                  (i = s != this.recv);
                break;
              case "read":
                (s = this.read),
                  (this.read = Math.max(this.read, t)),
                  (i = s != this.read);
                break;
              case "msg":
                (s = this.seq),
                  (this.seq = Math.max(this.seq, t)),
                  (!this.touched || this.touched < n) && (this.touched = n),
                  (i = s != this.seq);
            }
            return (
              this.recv < this.read && ((this.recv = this.read), (i = !0)),
              this.seq < this.recv &&
                ((this.seq = this.recv),
                (!this.touched || this.touched < n) && (this.touched = n),
                (i = !0)),
              (this.unread = this.seq - this.read),
              i
            );
          },
          userDesc: function (e) {
            const t = this._cacheGetUser(e);
            if (t) return t;
          },
          p2pPeerDesc: function () {
            if (this.isP2PType()) return this._users[this.name];
          },
          subscribers: function (e, t) {
            const n = e || this.onMetaSub;
            if (n)
              for (let e in this._users)
                n.call(t, this._users[e], e, this._users);
          },
          tags: function () {
            return this._tags.slice(0);
          },
          subscriber: function (e) {
            return this._users[e];
          },
          messages: function (e, t, n, s) {
            const i = e || this.onData;
            if (i) {
              const e =
                  "number" == typeof t
                    ? this._messages.find({ seq: t }, !0)
                    : void 0,
                r =
                  "number" == typeof n
                    ? this._messages.find({ seq: n }, !0)
                    : void 0;
              -1 != e && -1 != r && this._messages.forEach(i, e, r, s);
            }
          },
          findMessage: function (e) {
            const t = this._messages.find({ seq: e });
            if (t >= 0) return this._messages.getAt(t);
          },
          latestMessage: function (e) {
            const t = this._messages.getLast();
            return e && t && 8 == t._status ? this._messages.getLast(1) : t;
          },
          maxMsgSeq: function () {
            return this._maxSeq;
          },
          maxClearId: function () {
            return this._maxDel;
          },
          messageCount: function () {
            return this._messages.length();
          },
          queuedMessages: function (e, t) {
            if (!e) throw new Error("Callback must be provided");
            this.messages(e, 268435455, void 0, t);
          },
          msgReceiptCount: function (e, t) {
            let n = 0;
            if (t > 0) {
              const s = this._tinode.getCurrentUserID();
              for (let i in this._users) {
                const r = this._users[i];
                r.user !== s && r[e] >= t && n++;
              }
            }
            return n;
          },
          msgReadCount: function (e) {
            return this.msgReceiptCount("read", e);
          },
          msgRecvCount: function (e) {
            return this.msgReceiptCount("recv", e);
          },
          msgHasMoreMessages: function (e) {
            return e
              ? this.seq > this._maxSeq
              : this._minSeq > 1 && !this._noEarlierMsgs;
          },
          isNewMessage: function (e) {
            return this._maxSeq <= e;
          },
          flushMessage: function (e) {
            const t = this._messages.find({ seq: e });
            if (t >= 0)
              return (
                this._tinode._db.remMessages(this.name, e),
                this._messages.delAt(t)
              );
          },
          swapMessageId: function (e, t) {
            const n = this._messages.find(e),
              s = this._messages.length();
            0 <= n &&
              n < s &&
              (this._messages.delAt(n),
              this._tinode._db.remMessages(this.name, e.seq),
              (e.seq = t),
              this._messages.put(e),
              this._tinode._db.addMessage(e));
          },
          flushMessageRange: function (e, t) {
            this._tinode._db.remMessages(this.name, e, t);
            const n = this._messages.find({ seq: e }, !0);
            return n >= 0
              ? this._messages.delRange(n, this._messages.find({ seq: t }, !0))
              : [];
          },
          cancelSend: function (e) {
            const t = this._messages.find({ seq: e });
            if (t >= 0) {
              const n = this._messages.getAt(t),
                s = this.msgStatus(n);
              if (1 == s || 3 == s)
                return (
                  this._tinode._db.remMessages(this.name, e),
                  (n._cancelled = !0),
                  this._messages.delAt(t),
                  this.onData && this.onData(),
                  !0
                );
            }
            return !1;
          },
          getType: function () {
            return w.topicType(this.name);
          },
          getAccessMode: function () {
            return this.acs;
          },
          setAccessMode: function (t) {
            return (this.acs = new e(t));
          },
          getDefaultAccess: function () {
            return this.defacs;
          },
          startMetaQuery: function () {
            return new P(this);
          },
          isArchived: function () {
            return this.private && !!this.private.arch;
          },
          isMeType: function () {
            return w.isMeTopicName(this.name);
          },
          isChannelType: function () {
            return w.isChannelTopicName(this.name);
          },
          isGroupType: function () {
            return w.isGroupTopicName(this.name);
          },
          isP2PType: function () {
            return w.isP2PTopicName(this.name);
          },
          isCommType: function () {
            return w.isCommTopicName(this.name);
          },
          msgStatus: function (e, t) {
            let n = 0;
            return (
              this._tinode.isMe(e.from)
                ? e._sending
                  ? (n = 2)
                  : e._failed || e._cancelled
                  ? (n = 3)
                  : e.seq >= 268435455
                  ? (n = 1)
                  : this.msgReadCount(e.seq) > 0
                  ? (n = 6)
                  : this.msgRecvCount(e.seq) > 0
                  ? (n = 5)
                  : e.seq > 0 && (n = 4)
                : 8 == e._status || (n = 7),
              t &&
                e._status != n &&
                ((e._status = n),
                this._tinode._db.updMessageStatus(this.name, e.seq, n)),
              n
            );
          },
          _routeData: function (e) {
            e.content &&
              (!this.touched || this.touched < e.ts) &&
              ((this.touched = e.ts), this._tinode._db.updTopic(this)),
              e.seq > this._maxSeq && (this._maxSeq = e.seq),
              (e.seq < this._minSeq || 0 == this._minSeq) &&
                (this._minSeq = e.seq),
              e._noForwarding ||
                (this._messages.put(e),
                this._tinode._db.addMessage(e),
                this._updateDeletedRanges()),
              this.onData && this.onData(e);
            const t =
              (!this.isChannelType() && !e.from) || this._tinode.isMe(e.from)
                ? "read"
                : "msg";
            this._updateReadRecv(t, e.seq, e.ts),
              this._tinode.getMeTopic()._refreshContact(t, this);
          },
          _routeMeta: function (e) {
            e.desc && this._processMetaDesc(e.desc),
              e.sub && e.sub.length > 0 && this._processMetaSub(e.sub),
              e.del && this._processDelMessages(e.del.clear, e.del.delseq),
              e.tags && this._processMetaTags(e.tags),
              e.cred && this._processMetaCreds(e.cred),
              this.onMeta && this.onMeta(e);
          },
          _routePres: function (t) {
            let n;
            switch (t.what) {
              case "del":
                this._processDelMessages(t.clear, t.delseq);
                break;
              case "on":
              case "off":
                (n = this._users[t.src])
                  ? (n.online = "on" == t.what)
                  : this._tinode.logger(
                      "WARNING: Presence update for an unknown user",
                      this.name,
                      t.src
                    );
                break;
              case "term":
                this._resetSub();
                break;
              case "acs":
                const s = t.src || this._tinode.getCurrentUserID();
                if ((n = this._users[s]))
                  n.acs.updateAll(t.dacs),
                    this._processMetaSub([
                      { user: s, updated: new Date(), acs: n.acs },
                    ]);
                else {
                  const i = new e().updateAll(t.dacs);
                  i &&
                    i.mode != e._NONE &&
                    ((n = this._cacheGetUser(s))
                      ? (n.acs = i)
                      : ((n = { user: s, acs: i }),
                        this.getMeta(
                          this.startMetaQuery()
                            .withOneSub(void 0, s)
                            .build()
                        )),
                    (n.updated = new Date()),
                    this._processMetaSub([n]));
                }
                break;
              default:
                this._tinode.logger("INFO: Ignored presence update", t.what);
            }
            this.onPres && this.onPres(t);
          },
          _routeInfo: function (e) {
            if ("kp" !== e.what) {
              const t = this._users[e.from];
              t && ((t[e.what] = e.seq), t.recv < t.read && (t.recv = t.read));
              const n = this.latestMessage();
              n && this.msgStatus(n, !0),
                this._tinode.isMe(e.from) &&
                  this._updateReadRecv(e.what, e.seq),
                this._tinode.getMeTopic()._refreshContact(e.what, this);
            }
            this.onInfo && this.onInfo(e);
          },
          _processMetaDesc: function (e) {
            if (
              (this.isP2PType() &&
                (delete e.defacs,
                this._tinode._db.updUser(this.name, e.public)),
              g(this, e),
              _(this),
              this._tinode._db.updTopic(this),
              "me" !== this.name && !e._noForwarding)
            ) {
              const e = this._tinode.getMeTopic();
              e.onMetaSub && e.onMetaSub(this),
                e.onSubsUpdated && e.onSubsUpdated([this.name], 1);
            }
            this.onMetaDesc && this.onMetaDesc(this);
          },
          _processMetaSub: function (e) {
            for (let t in e) {
              const n = e[t];
              (n.updated = new Date(n.updated)),
                (n.deleted = n.deleted ? new Date(n.deleted) : null),
                (n.online = !!n.online),
                (this._lastSubsUpdate = new Date(
                  Math.max(this._lastSubsUpdate, n.updated)
                ));
              let s = null;
              n.deleted
                ? (delete this._users[n.user], (s = n))
                : (this._tinode.isMe(n.user) &&
                    n.acs &&
                    this._processMetaDesc({
                      updated: n.updated,
                      touched: n.updated,
                      acs: n.acs,
                    }),
                  (s = this._updateCachedUser(n.user, n))),
                this.onMetaSub && this.onMetaSub(s);
            }
            this.onSubsUpdated && this.onSubsUpdated(Object.keys(this._users));
          },
          _processMetaTags: function (e) {
            1 == e.length && e[0] == w.DEL_CHAR && (e = []),
              (this._tags = e),
              this.onTagsUpdated && this.onTagsUpdated(e);
          },
          _processMetaCreds: function (e) {},
          _processDelMessages: function (e, t) {
            (this._maxDel = Math.max(e, this._maxDel)),
              (this.clear = Math.max(e, this.clear));
            const n = this;
            let s = 0;
            Array.isArray(t) &&
              t.map(function (e) {
                if (e.hi)
                  for (let t = e.low; t < e.hi; t++) s++, n.flushMessage(t);
                else s++, n.flushMessage(e.low);
              }),
              s > 0 &&
                (this._updateDeletedRanges(), this.onData && this.onData());
          },
          _allMessagesReceived: function (e) {
            this._updateDeletedRanges(),
              this.onAllMessagesReceived && this.onAllMessagesReceived(e);
          },
          _resetSub: function () {
            this._subscribed = !1;
          },
          _gone: function () {
            this._messages.reset(),
              this._tinode._db.remMessages(this.name),
              (this._users = {}),
              (this.acs = new e(null)),
              (this.private = null),
              (this.public = null),
              (this._maxSeq = 0),
              (this._minSeq = 0),
              (this._subscribed = !1);
            const t = this._tinode.getMeTopic();
            t &&
              t._routePres({
                _noForwarding: !0,
                what: "gone",
                topic: "me",
                src: this.name,
              }),
              this.onDeleteTopic && this.onDeleteTopic();
          },
          _updateCachedUser: function (e, t) {
            let n = this._cacheGetUser(e);
            return (
              (n = g(n || {}, t)),
              this._cachePutUser(e, n),
              m(this._users, e, n)
            );
          },
          _getQueuedSeqId: function () {
            return this._queuedSeqId++;
          },
          _updateDeletedRanges: function () {
            const e = [];
            let t = null;
            const n = this._messages.getAt(0);
            n && this._minSeq > 1 && !this._noEarlierMsgs
              ? n.hi
                ? (n.seq > 1 && (n.seq = 1),
                  n.hi < this._minSeq - 1 && (n.hi = this._minSeq - 1),
                  (t = n))
                : ((t = { seq: 1, hi: this._minSeq - 1 }), e.push(t))
              : (t = { seq: 0, hi: 0 }),
              this._messages.filter(
                (n) =>
                  n.seq >= 268435455 ||
                  (n.seq == (t.hi || t.seq) + 1
                    ? n.hi && t.hi
                      ? ((t.hi = n.hi), !1)
                      : ((t = n), !0)
                    : (t.hi
                        ? (t.hi = n.hi || n.seq)
                        : ((t = { seq: t.seq + 1, hi: n.hi || n.seq }),
                          e.push(t)),
                      !n.hi && ((t = n), !0)))
              );
            const s = this._messages.getLast(),
              i = Math.max(this.seq, this._maxSeq) || 0;
            ((i > 0 && !s) || (s && (s.hi || s.seq) < i)) &&
              (s && s.hi
                ? (s.hi = i)
                : e.push({ seq: s ? s.seq + 1 : 1, hi: i })),
              e.map((e) => {
                (e._status = 8), this._messages.put(e);
              });
          },
          _loadMessages: function (e, t) {
            const { since: n, before: s, limit: i } = t || {};
            return e
              .readMessages(this.name, { since: n, before: s, limit: i || 24 })
              .then(
                (e) => (
                  e.forEach((e) => {
                    e.seq > this._maxSeq && (this._maxSeq = e.seq),
                      (e.seq < this._minSeq || 0 == this._minSeq) &&
                        (this._minSeq = e.seq),
                      this._messages.put(e);
                  }),
                  e.length > 0 && this._updateDeletedRanges(),
                  e.length
                )
              );
          },
          _updateReceived: function (e, t) {
            (this.touched = new Date()),
              (this.seq = 0 | e),
              (t && !this._tinode.isMe(t)) ||
                ((this.read = this.read
                  ? Math.max(this.read, this.seq)
                  : this.seq),
                (this.recv = this.recv
                  ? Math.max(this.read, this.recv)
                  : this.read)),
              (this.unread = this.seq - (0 | this.read)),
              this._tinode._db.updTopic(this);
          },
        };
        var S = function (e) {
          v.call(this, "me", e),
            e && (this.onContactUpdate = e.onContactUpdate);
        };
        (S.prototype = Object.create(v.prototype, {
          _processMetaDesc: {
            value: function (e) {
              const t =
                e.acs &&
                !e.acs.isPresencer() &&
                this.acs &&
                this.acs.isPresencer();
              g(this, e),
                this._tinode._db.updTopic(this),
                _(this),
                t &&
                  this._tinode.cacheMap("topic", (e) => {
                    e.online &&
                      ((e.online = !1),
                      e.seen
                        ? (e.seen.when = new Date())
                        : (e.seen = { when: new Date() }),
                      this._refreshContact("off", e));
                  }),
                this.onMetaDesc && this.onMetaDesc(this);
            },
            enumerable: !0,
            configurable: !0,
          },
          _processMetaSub: {
            value: function (e) {
              let t = 0;
              if (
                (e.forEach((e) => {
                  const n = e.topic;
                  if ("fnd" == n || "me" == n) return;
                  (e.updated = new Date(e.updated)),
                    (e.touched = e.touched ? new Date(e.touched) : void 0),
                    (e.deleted = e.deleted ? new Date(e.deleted) : null),
                    (e.online = !!e.online);
                  let s = null;
                  if (e.deleted)
                    (s = e),
                      this._tinode.cacheDel("topic", n),
                      this._tinode._db.remTopic(n);
                  else if (
                    (void 0 !== e.seq &&
                      ((e.seq = 0 | e.seq),
                      (e.recv = 0 | e.recv),
                      (e.read = 0 | e.read),
                      (e.unread = e.seq - e.read)),
                    e.seen &&
                      e.seen.when &&
                      (e.seen.when = new Date(e.seen.when)),
                    (s = g(this._tinode.getTopic(n), e)),
                    this._tinode._db.updTopic(s),
                    w.isP2PTopicName(n) &&
                      (this._cachePutUser(n, s),
                      this._tinode._db.updUser(n, s.public)),
                    !e._noForwarding)
                  ) {
                    const t = this._tinode.getTopic(n);
                    t && ((e._noForwarding = !0), t._processMetaDesc(e));
                  }
                  t++, this.onMetaSub && this.onMetaSub(s);
                }),
                this.onSubsUpdated && t > 0)
              ) {
                const n = [];
                e.forEach((e) => {
                  n.push(e.topic);
                }),
                  this.onSubsUpdated(n, t);
              }
            },
            enumerable: !0,
            configurable: !0,
          },
          _processMetaCreds: {
            value: function (e, t) {
              1 == e.length && e[0] == w.DEL_CHAR && (e = []),
                t
                  ? e.map((e) => {
                      if (e.val) {
                        let t = this._credentials.findIndex(
                          (t) => t.meth == e.meth && t.val == e.val
                        );
                        t < 0
                          ? (e.done ||
                              ((t = this._credentials.findIndex(
                                (t) => t.meth == e.meth && !t.done
                              )) >= 0 &&
                                this._credentials.splice(t, 1)),
                            this._credentials.push(e))
                          : (this._credentials[t].done = e.done);
                      } else if (e.resp) {
                        const t = this._credentials.findIndex(
                          (t) => t.meth == e.meth && !t.done
                        );
                        t >= 0 && (this._credentials[t].done = !0);
                      }
                    })
                  : (this._credentials = e),
                this.onCredsUpdated && this.onCredsUpdated(this._credentials);
            },
            enumerable: !0,
            configurable: !0,
          },
          _routePres: {
            value: function (t) {
              if ("term" == t.what) return void this._resetSub();
              if ("upd" == t.what && "me" == t.src)
                return void this.getMeta(
                  this.startMetaQuery().withDesc().build()
                );
              const n = this._tinode.cacheGet("topic", t.src);
              if (n) {
                switch (t.what) {
                  case "on":
                    n.online = !0;
                    break;
                  case "off":
                    n.online &&
                      ((n.online = !1),
                      n.seen
                        ? (n.seen.when = new Date())
                        : (n.seen = { when: new Date() }));
                    break;
                  case "msg":
                    n._updateReceived(t.seq, t.act);
                    break;
                  case "upd":
                    this.getMeta(
                      this.startMetaQuery().withLaterOneSub(t.src).build()
                    );
                    break;
                  case "acs":
                    n.acs
                      ? n.acs.updateAll(t.dacs)
                      : (n.acs = new e().updateAll(t.dacs)),
                      (n.touched = new Date());
                    break;
                  case "ua":
                    n.seen = { when: new Date(), ua: t.ua };
                    break;
                  case "recv":
                    (t.seq = 0 | t.seq),
                      (n.recv = n.recv ? Math.max(n.recv, t.seq) : t.seq);
                    break;
                  case "read":
                    (t.seq = 0 | t.seq),
                      (n.read = n.read ? Math.max(n.read, t.seq) : t.seq),
                      (n.recv = n.recv ? Math.max(n.read, n.recv) : n.recv),
                      (n.unread = n.seq - n.read);
                    break;
                  case "gone":
                    this._tinode.cacheDel("topic", t.src),
                      this._tinode._db.remTopic(t.src);
                    break;
                  case "del":
                    break;
                  default:
                    this._tinode.logger(
                      "INFO: Unsupported presence update in 'me'",
                      t.what
                    );
                }
                this._refreshContact(t.what, n);
              } else if ("acs" == t.what) {
                const n = new e(t.dacs);
                if (!n || n.mode == e._INVALID)
                  return void this._tinode.logger(
                    "ERROR: Invalid access mode update",
                    t.src,
                    t.dacs
                  );
                if (n.mode == e._NONE)
                  return void this._tinode.logger(
                    "WARNING: Removing non-existent subscription",
                    t.src,
                    t.dacs
                  );
                {
                  this.getMeta(
                    this.startMetaQuery()
                      .withOneSub(void 0, t.src)
                      .build()
                  );
                  const e = this._tinode.getTopic(t.src);
                  (e.topic = t.src),
                    (e.online = !1),
                    (e.acs = n),
                    this._tinode.attachCacheToTopic(e),
                    e._cachePutSelf(),
                    this._db.updTopic(e);
                }
              } else
                "tags" == t.what &&
                  this.getMeta(this.startMetaQuery().withTags().build());
              this.onPres && this.onPres(t);
            },
            enumerable: !0,
            configurable: !0,
          },
          _refreshContact: {
            value: function (e, t) {
              this.onContactUpdate && this.onContactUpdate(e, t);
            },
            enumerable: !0,
            configurable: !0,
          },
          publish: {
            value: function () {
              return Promise.reject(
                new Error("Publishing to 'me' is not supported")
              );
            },
            enumerable: !0,
            configurable: !0,
          },
          delCredential: {
            value: function (e, t) {
              return this._subscribed
                ? this._tinode.delCredential(e, t).then((n) => {
                    const s = this._credentials.findIndex(
                      (n) => n.meth == e && n.val == t
                    );
                    return (
                      s > -1 && this._credentials.splice(s, 1),
                      this.onCredsUpdated &&
                        this.onCredsUpdated(this._credentials),
                      n
                    );
                  })
                : Promise.reject(
                    new Error("Cannot delete credential in inactive 'me' topic")
                  );
            },
            enumerable: !0,
            configurable: !0,
          },
          contacts: {
            value: function (e, t, n) {
              this._tinode.cacheMap("topic", (s, i) => {
                !s.isCommType() || (t && !t(s)) || e.call(n, s, i);
              });
            },
            enumerable: !0,
            configurable: !0,
          },
          getContact: {
            value: function (e) {
              return this._tinode.cacheGet("topic", e);
            },
            enumerable: !0,
            configurable: !0,
          },
          getAccessMode: {
            value: function (e) {
              if (e) {
                const t = this._tinode.cacheGet("topic", e);
                return t ? t.acs : null;
              }
              return this.acs;
            },
            enumerable: !0,
            configurable: !0,
          },
          isArchived: {
            value: function (e) {
              const t = this._tinode.cacheGet("topic", e);
              return t && t.private && !!t.private.arch;
            },
            enumerable: !0,
            configurable: !0,
          },
          getCredentials: {
            value: function () {
              return this._credentials;
            },
            enumerable: !0,
            configurable: !0,
          },
        })),
          (S.prototype.constructor = S);
        var y = function (e) {
          v.call(this, "fnd", e), (this._contacts = {});
        };
        (y.prototype = Object.create(v.prototype, {
          _processMetaSub: {
            value: function (e) {
              let t = Object.getOwnPropertyNames(this._contacts).length;
              this._contacts = {};
              for (let n in e) {
                let s = e[n];
                const i = s.topic ? s.topic : s.user;
                (s.updated = new Date(s.updated)),
                  s.seen &&
                    s.seen.when &&
                    (s.seen.when = new Date(s.seen.when)),
                  (s = m(this._contacts, i, s)),
                  t++,
                  this.onMetaSub && this.onMetaSub(s);
              }
              t > 0 &&
                this.onSubsUpdated &&
                this.onSubsUpdated(Object.keys(this._contacts));
            },
            enumerable: !0,
            configurable: !0,
          },
          publish: {
            value: function () {
              return Promise.reject(
                new Error("Publishing to 'fnd' is not supported")
              );
            },
            enumerable: !0,
            configurable: !0,
          },
          setMeta: {
            value: function (e) {
              const t = this;
              return Object.getPrototypeOf(y.prototype)
                .setMeta.call(this, e)
                .then(function () {
                  Object.keys(t._contacts).length > 0 &&
                    ((t._contacts = {}),
                    t.onSubsUpdated && t.onSubsUpdated([]));
                });
            },
            enumerable: !0,
            configurable: !0,
          },
          contacts: {
            value: function (e, t) {
              const n = e || this.onMetaSub;
              if (n)
                for (let e in this._contacts)
                  n.call(t, this._contacts[e], e, this._contacts);
            },
            enumerable: !0,
            configurable: !0,
          },
        })),
          (y.prototype.constructor = y);
        var T = function (e, t) {
          (this.status = T.STATUS_NONE), (this.topic = e), (this.content = t);
        };
        (T.STATUS_NONE = 0),
          (T.STATUS_QUEUED = 1),
          (T.STATUS_SENDING = 2),
          (T.STATUS_FAILED = 3),
          (T.STATUS_SENT = 4),
          (T.STATUS_RECEIVED = 5),
          (T.STATUS_READ = 6),
          (T.STATUS_TO_ME = 7),
          (T.prototype = { toJSON: function () {}, fromJSON: function (e) {} }),
          (T.prototype.constructor = T),
          (D.exports = w),
          (D.exports.Drafty = f),
          (D.exports.AccessMode = e);
      }.call(this));
    }.call(
      this,
      "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : {}
    ),
    (D = D.exports)
  );
});

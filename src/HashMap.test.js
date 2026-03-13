import Entry from "./Entry.js";
import HashMap from "./HashMap.js";


let map

beforeAll(() => {
  map = new HashMap()
})

beforeEach(() => {
  map.clear()
})

describe("HashMap", () => {

  it("creates new instance when called", () => {
    expect(map).toBeInstanceOf(HashMap)
  })

})

describe("HashMap.hash(key)", () => {

  it("returns integer with string as input", () => {
    let hash = map.hash("foo")
    let hash2 = map.hash("foo bar@buz_qux")
    expect(Number.isInteger(hash)).toBe(true)
    expect(Number.isInteger(hash2)).toBe(true)
  })

  it("returns integer within maps capacity", () => {
    let hash = map.hash("foo")
    expect(hash).toBeGreaterThanOrEqual(0)
    expect(hash).toBeLessThan(map.capacity)
  })

  it("returns integer within maps capacity with extreme long string given", () => {
    let hash = map.hash(";Nk2(&%Z9+?[w8aqa,bX(Q11)RXxh*+.H+UEB*xBED#DKp.h$K#_}!YaK.}/-K]W6$Eg]}WVLnm?b&E#Q+-49Q[FYcC)i_P,i$e1FHW43+E57T&.1N/v[PYara_yUgG0-jN_Wb;@)k-A;X&SrxummqV)Jx{r#K_0+.PeY5hr1XN+uCayhqh+p]jN]kvbH*+Qyrd;/Fuh!H3Y]$*-HaE=M#8dGS4UQ922*{K*dSrtcFqXSB-XtnQ:hRmMT#/74g6(+-4B04eBLQAZaf=(aMU){Pngb2GH:G4QA-n.W+XQQLj5*=*eR@D13];/u!zWS80HPZC%{tCxx?{6}u:WTZjqxn[{4:%CUu:r[c{JwH}.jAQwpB6j;}f)7.ZKf(@rXSzV_ur}F+Y9ixa{mC;r:N@iFQ2qJ?im+D-b,8h&[8hw6ZzZbrTn05fnepvj@_2qg7!0PaSx[).9;[xP?6NDwuwV9izES/g$8cbd6r$d=}=E2vDFWv775vv0$:p,Fk2;)%Qt#v8a4qeBS_2$Mnw;x.r_Xxvex568M2xi#-;nK#P/pFAk-xF#FB?]{Sz$?C-8+W.[n.zi)Q!5X]*,0KCpxzzz09gn[,2+{uXr)Y0LZ4$+?0Z9vz?7?ggGkZb=Nm6tnji5TDSTeVJ9z.Q:69PJKHwCgtq=()k{=eK7_Lm*;;_eu4kk}YK)b=4[HK:tc2r1}R)q1Vvtqak)ZwLmkjQbT+An5$qb/@Nrh@MLX[*zfB5x7(?&H7y25;j9C0N2/+nuUR)kcn;dRi8F@3v:n,2K36Tb;b/B8c,Dt%.Q4$baCiVb)jRj]TZz14R5)t{n.*05S:m5UAR?t!R59kYNyUUeu2$2E6PE@L}ChSdG2J9X!GVPYCfzqkq.%}nN*w4H&DUEVKMpw-:]=8fPkF@Ez4tp,,==$Qvb=P{-EuR8}PTNNG{iB,Mw8zYwtt_{d41,a8J9SVA?Cw4GrxpFe@2JB_eF_t7@6Bx@Y#4nh$WKhD!mJW6!n8hqk@cz2$(G8jq_mm)Zac949dM@?getr07gU0d2_$[S0eW!G%Y%A}iFu1t33/JAkxGPRh,t-uYSW:!1?$3N:X6zEBWRzTVBt*MM:@vCBV$Dcc8H.-iSM1xc=Fw?4R6+Wa5wk;k16(#JG1Du,NpLk:WDanrM%[bhvwcD+Ax3d5RkLGqh),mi16,8r%*T9(/cQfX/Ze,Q7LdCWx[nPzKrg,mTq8w-!;(KH3!DZERx;r2Zm@dXg/z3Lq@R3.B;XnN!r3rDiwa.qmW:k*i6Q2[-0AL:#eE-.T@R++GS{xh15r}TFm*KZv!BK}.zE;e-Y*ZCS=Sxu*KiPS)-CR)AjN;8Cr3N+ZbmK%Bu4W=Bc$/WB0k,#eMmDk#SgQ?Yn_J*VLAT=e%dm(q$[GW-xDxGxER(ey=XTL7},Yvtf%-3FR7yKyrX?&C7Am]/05*/_Sd5?h%x#Pum#u!dZ=]DZ%6WKh61btYz+*]T98&U-F5YivKCJmx+0R;!g0H6euGqv!9@-f0/hX&]:Rzp#Gf.PNe#c}ng)-S:,urW09_k#n50wCQyWSkKg}HMZFbwgrdzNr1qkBZ?ukL_i!7*YFY=[PcTL6PVD1BV8U/RZ;X05[ChgTLfN2vYq+X6zf),8v7uJ[h2eBkxrikU2VLf]dd)F;UERhe.g3;Q0hde2x8d6,9qS5pp3{:0d1T}W;2H[,2cNYm/:7L53G]E},M;F-jM4(%+xP)m)((E/)x[GA.{+S#Av!0CD{tj?#%.nq=KNid01WW=Y9.ch%18d2.,Yy]K:gQ]TWctG5BJUjrJ.zGSAdaHp+SVa=hrh/A2!+Rfy.p8M-b&.Zj,8{F5(*Ew29+xfYa,qkY@yy(wN;p0=YLJue_Ti1gSSME{HtmrM6Ed07?&B9GpDc:cx;Yh{FB(/J-FBD/+mMUUAC-7B/v;wm:1$SjRb4{LKc_*6q1Qi6*ZUUYHc%N]D#L4)a-j]h??r,QuX7vG;7Q+GGiK{xEDY([!=cPzc6(P5a0nSGUpg$_r[[f?m]9KG)dyCaRayz/aDvtPZC5afac[26h0Q8?QG/(pb/Bq!i#[71xG{myaQ(*4-htqRU3+:9kEU6M4x)qn8g1(Nq!m$NeM7$i#Y[Qz71GbHqeBgf?@c%wmD$]7ES:S6HpPTXh*iPZR/ZuaA#2;AJ8/R(77:L8:fy{T;c{*]W&5*[X$#n&Aav6BGmxc")
    expect(hash).toBeGreaterThanOrEqual(0)
    expect(hash).toBeLessThan(map.capacity)
  })

  it("returns always same hash-value with the same given input", () => {
    let hash1 = map.hash("foo bar baz qux quux")
    let hash2 = map.hash("foo bar baz qux quux")
    let hash3 = map.hash("foo bar baz qux quux")
    expect(hash1).toBe(hash2)
    expect(hash2).toBe(hash3)
  })

  it("throws error when given key is not a string", () => {
    expect(() => map.hash(["foo", "bar"])).toThrow()
    expect(() => map.hash({ name: "foo" })).toThrow()
    expect(() => map.hash(123)).toThrow()
    expect(() => map.hash("bar")).not.toThrow()
  })
})

describe("HashMap.set(key, value)", () => {

  it("stores the given value in the correct bucket", () => {
    const key = "foo"
    const value = "bar"
    const entry = new Entry(key, value)
    const hash = map.hash(key)
    map.set(key, value)
    expect(map.buckets[hash]).toEqual(entry)
  })

  it("updates value when same key is used twice", () => {
    map.set("foo", 1)
    map.set("foo", 2)
    const hash = map.hash("foo")
    expect(map.buckets[hash].value).toBe(2)
  })

  it("takes every type as value", () => {

    const types = ["string", 123, { some: "object" }, ["array", 123], null, undefined, NaN, false]

    for (let type of types) {
      expect(() => map.set("foo", type)).not.toThrow()
    }
  })

  it("does not change entry, when another key with the same hash is in bucket", () => {

    // test, if hash is equal despite different keys
    const hash1 = map.hash("Rama") // 3
    const hash2 = map.hash("Sita") // 3
    expect(hash1).toBe(hash2)

    map.set("Rama", 1)
    map.set("Sita", 2)
    expect(map.buckets[hash1].value).toBe(1)
  })

  it("if bucket is taken, use a collision-handling-method", () => {
    // test, if hash is equal despite different keys
    const hash1 = map.hash("Rama") // 3
    const hash2 = map.hash("Sita") // 3
    expect(hash1).toBe(hash2)

    // error handling: jump three buckets
    map.set("Rama", 1)
    map.set("Sita", 2)
    expect(map.buckets[3].value).toBe(1)
    expect(map.buckets[6].value).toBe(2)
  })

  // how to test a failure, which shouldn't appear?
  it.todo("throws Error when collision handling method is not able to find empty bucket.")


  it("does not grow capacity within load-factors limit", () => {
    const originalCapacity = map.capacity
    const maxKeysBeforeGrowth = originalCapacity * map.loadFactor - 1

    for (let i = 1; i <= maxKeysBeforeGrowth; i++) {
      map.set(toString(i), i)
    }

    expect(originalCapacity === map.capacity).toBe(true)
  })

  it("grows when load-factor is reached", () => {
    const originalCapacity = map.capacity

    const firstKeyAmountToGrow = map.capacity * map.loadFactor
    for (let i = 1; i <= firstKeyAmountToGrow; i++) {
      map.set(`${i}`, i)
    }

    expect(originalCapacity).toBeLessThan(map.capacity)
  })



  it.todo("spreads keys according new capacity after load-factor is reached")

})

describe("HashMap.clear()", () => {

  it("removes every item from buckets", () => {
    map.set("foo")
    map.set("bar")
    map.clear()
    expect(map.buckets.length).toBe(0)
  })

  it.todo("default capacity resets to 16.")
})

describe("HashMap.get()", () => {

  it("gets value of given key inside otherwise empty map", () => {
    // test if hash-value of "foo" & "bar" is different
    const hash1 = map.hash("foo")
    const hash2 = map.hash("bar")
    expect(hash1 === hash2).toBe(false)

    map.set("foo", 1)
    map.set("bar", 2)
    expect(map.get("foo")).toBe(1)
    expect(map.get("bar")).toBe(2)
  })

  it("return null if key is not found", () => {
    expect(map.get("buzz")).toBeNull
  })

  it("gets value of given key in simple collision-scenario", () => {
    // test, if hash is equal despite different keys
    const hash1 = map.hash("Rama") // 3
    const hash2 = map.hash("Sita") // 3
    const hash3 = map.hash("s") // 3
    expect(hash1).toBe(hash2)
    expect(hash2).toBe(hash3)

    map.set("Rama", 1)
    map.set("Sita", 2)
    expect(map.get("Sita")).toBe(2)

    map.set("s", 3)
    expect(map.get("s")).toBe(3)

  })

  it("gets value of given key in collision scenario, after one skipped bucket was removed afterwards", () => {
    // test, if hash is equal despite different keys
    const hash1 = map.hash("Rama") // 3
    const hash2 = map.hash("Sita") // 3
    const hash3 = map.hash("s") // 3
    expect(hash1).toBe(hash2)
    expect(hash2).toBe(hash3)

    map.set("Rama", 1)
    map.set("Sita", 2)
    map.set("s", 3)
    map.remove("Sita")
    expect(map.get("s")).toBe(3)
  })

})

describe("HashMap.keys()", () => {

  it("returns an array containing all the keys inside the hash map.", () => {
    map.set("foo", null)
    map.set("bar", null)
    map.set("baz", null)

    expect(map.keys()).toContain("foo")
    expect(map.keys()).toContain("bar")
    expect(map.keys()).toContain("baz")
  })

  it("doesn't return anything which is not a key of a valid entry", () => {
    map.buckets[1] = "foo"
    map.buckets[3] = { "foo": 1 }
    map.buckets[5] = 123
    expect(map.keys().length).toBe(0)
  })
})

describe("HashMap.values()", () => {

  it("returns an array containing all the values inside the hash map.", () => {

  })

})


describe("HashMap.remove(key)", () => {

  it("does not return former value when deleted key is called", () => {
    map.set("foo", 1)
    map.remove("foo")
    expect(map.get("foo")).not.toBe(1)
  })



})





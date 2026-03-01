import HashMap from "./HashMap.js";

let map

beforeAll(() => {
  map = new HashMap()
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
  it("stores the given value in the correct bucket of hashed key", () => {
    const key = "foo"
    const value = "bar"
    const bucketNumber = map.hash(key)
    map.set(key, value)
    expect(map.buckets[bucketNumber]).toBe(value)

  })
})







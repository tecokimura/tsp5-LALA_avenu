import { Scene } from "~/src/scripts/classes/scene"

test("constructor", () => {
    const s = new Scene()
    expect(true).toEqual(s.isNone())
})

test("check number", () => {
    // 逆のが綺麗だけど見やすいからこうする
    expect(0).toBe(Scene.NONE)
    expect(10).toBe(Scene.LOADING)
    expect(20).toBe(Scene.TITLE)
    expect(30).toBe(Scene.OPENING)
    expect(40).toBe(Scene.PLAYING)
    expect(50).toBe(Scene.BOMBED)
    expect(60).toBe(Scene.GAMEOVER)
})

test("flow isXxx()", () => {
    const s = new Scene()
    expect(true).toEqual(s.isNone())
    s.changeLoading()
    expect(true).toEqual(s.isNone())
    s.updateScene()
    expect(true).toEqual(s.isLoading())
    s.changeTitle()
    expect(true).toEqual(s.isLoading())
    s.updateScene()
    expect(true).toEqual(s.isInitTitle())
    s.changeOpening()
    expect(true).toEqual(s.isInitTitle())
    s.updateScene()
    expect(true).toEqual(s.isOpening())
    s.changeBombed()
    expect(true).toEqual(s.isOpening())
    s.updateScene()
    expect(true).toEqual(s.isBombed())
    s.changeGameover()
    expect(true).toEqual(s.isBombed())
    s.updateScene()
    expect(true).toEqual(s.isGameover())
})

test("check scene count", () => {
    const s = new Scene()

    // シーンが変わらないいのでカウントが進む
    expect(true).toEqual(s.isNone())
    for (let i = 0; i < 10; i++) {
        s.updateScene()
    }
    expect(s.count()).toEqual(10)

    // シーンをアップデートしてもまだ変わらない
    s.changeLoading()
    expect(true).toEqual(s.isNone())
    expect(s.count()).toEqual(10)

    // updateで更新される
    s.updateScene()
    expect(true).toEqual(s.isLoading())
    expect(s.count()).toEqual(1)
})

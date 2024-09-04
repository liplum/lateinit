import test from 'ava'
import lateinit from "./dist/index.js"

test("instantiate only once", t => {
  let counter = 0
  const a = lateinit(() => ++counter)
  t.assert(a() === 1)
  t.assert(a() === 1)
})
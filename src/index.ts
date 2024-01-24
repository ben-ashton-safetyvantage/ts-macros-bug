import { $$raw, RawContext } from 'ts-macros';

function $myMacro() {
  return $$raw!((ctx: RawContext) => {
    return ctx.factory.createStringLiteral('test');
  });
}

const x = $myMacro!();

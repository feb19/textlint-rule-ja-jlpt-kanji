# textlint-rule-ja-jlpt-kanji

JLPT 漢字であることをチェックする textlint ルールです。

- [日本語能力試験](https://ja.wikipedia.org/wiki/日本語能力試験)

```
1:1  error    JPLT ではない漢字「兎」が含まれています。  ja-jlpt-kanji
```

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-ja-jlpt-kanji

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "ja-jlpt-kanji": true
    }
}
```

with [TextlintRuleJaKyoikuKanjiOptions](https://github.com/feb19/textlint-rule-ja-jlpt-kanji/blob/master/src/index.ts)

```json
{
    "rules": {
        "ja-jlpt-kanji": {
            "allowN5Kanjis": true,
            "allowN4Kanjis": true,
            "allowN3Kanjis": true,
            "allowN2Kanjis": false,
            "allowN1Kanjis": false
        }
    }
}
```

Via CLI

```
textlint --rule ja-jlpt-kanji README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © Nobuhiro Takahashi
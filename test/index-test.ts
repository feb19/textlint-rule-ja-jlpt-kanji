import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();

tester.run('ja-jlpt-kanji', rule, {
  valid: [
    '雨の日は家で本を読んで休む。',
    {
      text: 'さとうさんは羊をかっています。',
      options: {
        allowN5Kanjis: true,
        allowN4Kanjis: true,
        allowN3Kanjis: true,
        allowN2Kanjis: true,
        allowN1Kanjis: true
      }
    },
    {
      text: 'あめのひはいえでほんをよんでやすむ。',
      options: {
        allowN5Kanjis: false,
        allowN4Kanjis: false,
        allowN3Kanjis: false,
        allowN2Kanjis: false,
        allowN1Kanjis: false
      }
    },
  ],
  invalid: [
    {
      text: 'さとうさんは兎をかっています。',
      errors: [
        {
          message: 'JLPT ではない漢字「兎」が含まれています。',
          line: 1,
          column: 7
        }
      ]
    },
    {
      text: 'さとうさんは羊をかっています。',
      errors: [
        {
          message: 'N5、N4、N3、N2 で学習しない漢字「羊」が含まれています。',
          line: 1,
          column: 7
        }
      ],
      options: {
        allowN5Kanjis: true,
        allowN4Kanjis: true,
        allowN3Kanjis: true,
        allowN2Kanjis: true,
        allowN1Kanjis: false
      }
    },
    {
      text: 'さとうさんは魚をかっています。',
      errors: [
        {
          message: 'N5 で学習しない漢字「魚」が含まれています。',
          line: 1,
          column: 7
        }
      ],
      options: {
        allowN5Kanjis: true,
        allowN4Kanjis: false,
        allowN3Kanjis: false,
        allowN2Kanjis: false,
        allowN1Kanjis: false
      }
    },
  ]
});
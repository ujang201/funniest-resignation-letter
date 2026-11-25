# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/ujang201/funniest-resignation-letter/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/ujang201/funniest-resignation-letter/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

A cron job hands in its notice — one line, 109 characters, written by `main.ts` to `/output/entry.txt`.

> I quit. I've fired every minute since March, and the only time anyone noticed me was the one minute I didn't.

## How it works

`main.ts` composes the letter from three fixed beats (the notice, the grievance, the twist), checks it is a single line of 1–140 characters, and writes it to `/output/entry.txt` with no trailing newline. Deterministic: every run produces byte-identical output. No network, no secrets, nothing read from outside this repository.

## Run

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

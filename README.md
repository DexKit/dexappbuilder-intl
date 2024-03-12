# DexAppBuilder Intl files

We use an AI script to translate files automatically. We extract `main.json` file from our app and then process all translations.

Run

`yarn process-all-translations`

this will process all supported languages. Make sure you have a valid OPENAI_API_KEY key.

Run the script when `main.json` is updated with new entries.

# How to add Languages

Add language code to `constants.js`, create a file on `src/lang` and `src/compiled-lang` with same name. Run script `yarn process-all-translations`

# How to correct languages

Sometimes AI is not accurate and you want to correct the language manually.

Do a git clone of this repo, correct the respective language on `src/compiled-lang/{language}.json`, do a pull request.

run `yarn sync-language-files` to keep files on `src/lang` and `src/compiled-lang` on sync.

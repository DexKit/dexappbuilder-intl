// We are using AI to translate compiled files we should sync the files
const fs = require("fs");
const { SUPPORTED_LANGUAGES } = require("./constants");
const languages = SUPPORTED_LANGUAGES;

for (let index = 0; index < languages.length; index++) {
  to = languages[index];
  const fromFile = JSON.parse(fs.readFileSync(`compiled-lang/${to}.json`));
  const toFile = JSON.parse(fs.readFileSync(`lang/${to}.json`));

  const allKeys = Object.keys(fromFile);

  for (let index = 0; index < allKeys.length; index++) {
    const key = allKeys[index];
    toFile[key].defaultMessage = fromFile[key];
  }

  fs.writeFileSync(`lang/${to}.json`, JSON.stringify(toFile, null, 2), "utf-8");
}

import assert      from "assert";
import { extract } from "../../../src/core/scrapers.js";

describe("Scraper: Melty", function () {
    it("should ignore page without video", async function () {
        const url = new URL("https://www.melty.fr/la-coupe-des-quatre-maisons" +
                                    "-est-a-toi-si-tu-reussis-ce-quiz-sur-les" +
                             "-repliques-de-la-saga-harry-potter-a727393.html");
        const options = { depth: false, incognito: false };

        const file = await extract(url, options);
        assert.strictEqual(file, url.href);
    });

    it("should return URL from hosted video", async function () {
        const url = new URL("https://www.melty.fr/le-joker-la-fin-alternative" +
                                      "-bien-plus-sombre-revelee-a703715.html");
        const options = { depth: false, incognito: false };

        const file = await extract(url, options);
        assert.strictEqual(file,
            "https://media.melty.fr/article-4052018-desktop/video.mp4");
    });

    it("should return URL from YouTube video [iframe-youtube]",
                                                             async function () {
        const url = new URL("https://www.melty.fr/les-films-d-action-qui-ont" +
                                 "-change-le-game-de-la-decennie-a702835.html");
        const options = { depth: false, incognito: false };

        const file = await extract(url, options);
        assert.strictEqual(file,
            "plugin://plugin.video.youtube/play/?video_id=mtolAJbj44s" +
                                                            "&incognito=false");
    });
});
